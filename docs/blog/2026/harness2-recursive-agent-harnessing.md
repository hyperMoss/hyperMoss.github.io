---
title: "Harness² 论文精读：让 AI Agent 进化自己的执行系统"
date: 2026-10-26
description: "解读 Harness² 的双层递归自我改进、Propose–Probe–Compose、八类 Harness 组件与实验结果，并讨论在 OMP/Skills 工作流中的工程落地。"
---

# Harness² 论文精读：让 AI Agent 进化自己的执行系统

> 论文：[Harness²: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224)（arXiv:2610.14224v1，2026-10-09）  
> 作者：Ruiyao Xu 等人 ｜ [项目源码](https://github.com/google-research/harness2) ｜ [论文 HTML](https://arxiv.org/html/2610.14224)  
> 说明：本文是基于论文与开源说明的独立技术解读。实验数据来自论文，OMP 架构与代码示意是延伸的工程设计，并非论文官方实现。

## 先说结论：模型不变，Agent 也能进化

如果让一个 Agent 连续处理真实工作任务，它常常不是“不会推理”，而是**执行系统不可靠**：

- 工具明明可用，却把工具调用写成了普通文本；
- 读取了多份表格，却没有统一字段、单位和关联键；
- 生成了文档，却没有重新打开检查；
- 发现过某个错误，下次换个任务又从头犯一遍。

传统做法是人手修改 System Prompt、增加一个 `SKILL.md`，或者给 Agent 多几次重试机会。问题在于：**谁来判断该改哪里、改动是否真的有用、哪些经验值得保留？**

Harness² 给出了一套机制：不更新模型权重，而是让 Agent **改进自己的运行外壳（Harness）**，并积累“如何改进 Harness”的经验。论文把它分为两层：

1. **Task-Level Recursion（任务级递归）**：针对当前任务，提出、试运行、组合 Harness 改动。
2. **Harnessing-Level Recursion（改进过程级递归）**：从本次改进中提炼可复用的配置和经验，用于未来新任务。

我认为这篇论文最值得关注的不是“让模型多想一会”，而是把 Agent 的优化对象从一次回答扩展到了**可版本化、可执行、可验证的运行系统**。

## 1. Harness 是什么：Agent = Model + Harness

论文把模型记为参数固定的 `M`，把 Harness 记为一组可编辑组件 `H = (c1, ..., cK)`。Agent 是两者的组合，任务执行中的改进针对 `H`，不改变 `M` 的权重（论文第 2.1 节）。

在 Harness² 中，`K = 8`：

| 组件 | 执行时机 | 负责什么 |
| --- | --- | --- |
| C1 System Prompt | 每次模型调用 | 总体身份、行为规范和执行步骤 |
| C2 Guardrails | 每次模型调用 | 不因任务变化而失效的硬约束 |
| C3 Memory | 每次模型调用 | 持久领域知识及上下文 |
| C4 Tool Guidance | 每次模型调用 | 现有工具应如何调用 |
| C5 Subagents | 按需调用 | 把工作委派到独立上下文 |
| C6 Skills | 触发时加载 | 针对特定场景的专业流程 |
| C7 Scripts | Shell 执行 | 确定性计算、校验、转换 |
| C8 Plugins | 工具调用循环中 | 模型不能随意绕过的中间件行为 |

来源：论文 Appendix D.3，Table 5。

这里有一个重要的工程分界：

- **Prompt / Guardrail / Tool Guidance**：主要通过文字影响模型决策；
- **Skill**：在需要时加载专业知识和操作步骤，避免所有内容常驻上下文；
- **Script**：把可确定性完成的事情变为程序，减少模型逐 token 推理；
- **Plugin**：在工具调用和回合边界拦截、检查或执行操作，不仅仅是“提醒模型”。

例如“交付前必须验证文件”可以写成自然语言约束；但如果执行轨迹反复表明模型会忽略它，那么在允许的权限内用脚本检查文件存在、可打开，再通过 Plugin 阻止无效交付，比不断追加 Prompt 更可靠。

**Harness 的粒度是文件。** 一次改进可以体现为一个清晰的 Git Diff，而不只是模糊地宣称“Agent 学会了”。

## 2. 第一层递归：Propose–Probe–Compose

开放世界任务没有标准答案，尤其是写报告、处理文件、调查资料、执行办公工作时，无法像刷算法题那样总用单元测试判定“正确”。Harness² 因而引入了一个**对比式改进步骤**。

```text
收到任务 q
    │
    ▼
基线 Harness H 执行任务，保存轨迹和交付物
    │
    ├── Invariant Editor：改进通用 Agent 行为
    │       例如规划、工具调用、文件校验
    │
    └── Domain Editor：改进领域专属行为
            例如行业规则、字段映射、数据核对
    │
    ▼
分别在相同任务、模型与环境下 Probe
    │
    ▼
比较轨迹、输出和配置 Diff
    │
    ▼
Composer：保留、修订、组合或放弃改动
    │
    ▼
使用新 Harness 再次执行，留下可追溯记录
```

### Propose：不是一个编辑器包办所有问题

先运行基础 Agent，保存参考执行 `e0 = (trajectory, deliverable)`。然后两个编辑器从不同范围提出候选 Harness：

- **Invariant Editor** 解决跨领域问题：错误工具参数、上下文管理不当、没有检查产物、低效重复操作；
- **Domain Editor** 解决领域问题：业务定义、数据格式、文件之间的关联关系、专业流程。

把“通用执行能力”和“领域专业能力”分开，是为了让候选方案既有互补性，又不至于无边界地重写整个 Agent。

### Probe：比较行为，不假装拥有标准答案

两个候选 Harness 在相同任务、相同模型和环境配置下分别运行。框架对比：

- 先前的工具错误是否还出现；
- 本来遗漏的步骤是否真正执行；
- 交付物是否被创建并重新验证；
- 是否因为修改引入新的回归。

但这里必须强调论文自己的限制：**这种对比只能提供行为证据，不能证明任务答案正确。** 执行具有随机性，编辑器和执行器也可能共享错误假设。

### Compose：用证据合并，而不是盲目选最高分

Composer 读取原始配置、两个候选配置的 Diff、所有执行轨迹及交付物，可以：

1. 合并两个候选中有效且不冲突的部分；
2. 修改有价值但不完善的配置；
3. 只接受某一个候选；
4. 在证据不足时保留原 Harness。

然后使用组合后的 Harness 重新执行，并把决策理由写入记录。

这和简单的 Best-of-N 不同：Best-of-N 从多份答案里挑一个，而 Harness² 试图**改变产生答案的机器**。

## 3. 更大的递归预算：并行宽度与串行深度

论文提供两种扩展方法（第 2.2.2 节）：

| 模式 | `k` 的含义 | 特征 |
| --- | --- | --- |
| Parallel | 并行探索 `k` 组通用候选和 `k` 组领域候选，并进行 `k` 次组合 | 更宽的方案覆盖；可利用并发 |
| Sequential | 连续执行 `k` 次 Propose–Probe–Compose | 后一步能修正前一步的不足 |

`k = 1` 时，两种方式都退化成一次基本的对比改进。`k > 1` 时，最终选择器比较匿名交付物并选出已有结果；**它不重新合成答案，也没有真实评分可以偷看**。

因此更大的 `k` 不等于免费提高准确率：需要更多模型调用和实际工具执行。把 `k` 当作受成本、时延和风险约束的**探索预算**，更符合工程现实。

## 4. 第二层递归：学到的不是答案，而是“怎么改进”

真正让 Harness² 与普通 Reflection 拉开距离的是它的**持续改进 Harness**。

任务结束后，系统审查整个改进过程：最初观察到什么缺陷？两个候选改了什么？实际运行有什么变化？Composer 为什么这样选？然后把有执行证据支持的经验连同**可执行 Harness** 保留下来。

论文使用一个 indexed library，条目可包含：

```text
improvement-library/
  job-001/
    EXPERIENCE.md      # 场景、缺陷、证据与适用条件
    harness/            # 本次采用的完整可执行组件树
  job-002/
    EXPERIENCE.md
    harness/
  index                 # 可按需查找的条目索引
```

这不是把上一任务的配置全部强塞给下一个任务。论文明确规定：**新任务从公共基础 Harness H0 开始**，但可以读取此前的库，选择性复用或改造 Skill、Script、规则和经验。

其收益在于降低“上一个任务特别管用的私人配置，污染下一个完全不同任务”的风险。`EXPERIENCE.md` 则负责解释“为什么某个改动在什么条件下有效”，避免只保存一堆无法理解的 Prompt 版本。

同时也要区分“第二层递归”的实际边界：论文更新的是经验库及其中的执行配置，并**没有持续自动重写固定的阶段提示词、模型权重或决策算法**。它是一种有意义的过程级学习，而不是无限制的元学习。

## 5. 实验：提升究竟有多大？

作者在三个基准上评估：

- **WorkBuddy-Bench**：Code、Web、Office 三类工作任务；
- **JobBench**：模拟真实专业工作交付；
- **LAB（Legal Agent Benchmark）**：法律专业任务，表格使用的是 criterion partial pass rate。

执行模型包括 **Gemini 3.5 Flash** 和 **GLM-5**，分别置于 **OpenCode** 和 **Codex** 两种初始 Harness 下；默认编辑器为 Claude Opus 4.8。下表选取 OpenCode 配置，来自论文 Table 1、Table 2：

| 模型 / 基准 | 基础 Harness | 一次改进（k=1） | 并行递归（k=5） |
| --- | ---: | ---: | ---: |
| Gemini 3.5 Flash / WorkBuddy 平均分 | 72.4 | 77.5 | **80.8** |
| GLM-5 / WorkBuddy 平均分 | 64.2 | 75.7 | **79.6** |
| Gemini 3.5 Flash / JobBench 得分 | 31.5 | 36.0 | **39.0** |
| Gemini 3.5 Flash / LAB Partial | 79.9% | 81.9% | **84.5%** |

**如何读这张表：** 每种基准的评分含义不同，不能跨行直接比较；论文汇报的是三次独立运行流的平均值。`k=5` 一列按论文“+ Recursion”的增量计算，并非另行复现实验。

还有一组对工程实现更有指导意义的消融实验（Gemini 3.5 Flash + OpenCode，`k=1`，Table 3）：

| 方法 | WorkBuddy | JobBench |
| --- | ---: | ---: |
| 完整 Harness² | **77.5** | **36.0** |
| 不使用经验库 | 74.4 | 34.2 |
| 不区分通用/领域编辑器 | 74.6 | 32.3 |
| 不进行组合（Compose） | 75.9 | 34.1 |

这至少说明，效果不完全来自“多试几次”：**保留经验、明确编辑范围、对比之后进行组合**都有作用。

更值得重视的是附录 E.1 的组件消融。在 Gemini + OpenCode、`k=5` 的 WorkBuddy 设置里，完整 Harness 平均分是 80.8；去掉 Skills 降到 75.5，去掉 Scripts 降到 77.1，去掉 Prompt 相关组件降到 79.3。

这不表示 Skills 在任何场景一定比 Prompt 重要，却提醒我们：**单纯优化提示词，可能错过更大的可执行能力增量。**

还有一个易被忽视的事实：工具使用更可靠，并不必然意味着调用次数更少。附录 Table 7 的 JobBench 中，工具错误率从 14.4% 降至 9.1%，但平均工具调用次数从 27.4 增加至 32.8。真正的效率评估应同时看**交付质量、错误率、总 token、时延、执行成本**。

## 6. 案例：失败的不是知识，而是交付流程

论文 Figure 9 的一个 JobBench 案例很有代表性。

初始 Agent 需要综合日程、场地、人力和预算等材料完成备忘录，却没有跨文件对齐关键数据，也没有重新打开验证输出，得分 **43.1**。

两个编辑器分别加入：

- 通用层面的输入清单、来源追踪、完成后验证脚本；
- 领域层面的交叉核对 Skill 和数字格式工具指导。

Composer 保留有证据支持的改动，再执行的得分提升到 **77.8**。

这种例子比“给 Agent 加一句请仔细思考”更有说服力。模型原本可能会写备忘录，却缺少**稳定执行核对步骤的系统机制**。

## 7. 如果把它用于 OMP / Skills，怎么落地？

以下是我的工程推演，**不是 Harness² 官方 OMP 集成方案**。目标是让现有的 `orchestrate`、`swarm`、`reflect`、`correct`、Skills 和脚本不只是被调用，还能在可控边界内持续被优化。

### 7.1 建议的职责划分

| 模块 | 在递归改进中的职责 |
| --- | --- |
| `orchestrate` | 协调整个 Propose–Probe–Compose 流程和执行预算 |
| `swarm` | 并行探索通用和领域改进候选 |
| `reflect` | 从轨迹中识别失败原因并形成经验 |
| `correct` | 针对已经观察到的缺陷生成具体补丁 |
| Skills Registry | 保存经过验证的领域流程与触发条件 |
| Script / Plugin Registry | 保存确定性校验器、工具中间件 |
| Experience Bank | 保存适用范围、Diff、证据、结果与版本 |
| Sandbox + Evaluator | 隔离执行、独立检查结果和回归 |

可采用一份显式的 Harness Manifest 来管理组件，而不是让 Agent 任意遍历修改全部仓库文件：

```yaml
# 示例设计：不是论文原始配置格式
harness:
  version: "0.1.0"
  base: "omp-default"
  components:
    prompt: prompts/system.md
    guardrails: prompts/guardrails.md
    tools: tools/guidance.md
    skills:
      - skills/data-reconciliation/SKILL.md
    scripts:
      - scripts/verify-artifacts.ts
  policy:
    editable:
      - "skills/**"
      - "scripts/**"
      - "prompts/**"
    require_approval_for:
      - "plugins/**"
      - "permissions/**"
```

### 7.2 一次改进的最小执行协议

对于候选 Harness，至少记录：

```ts
// 设计示意：不是可直接导入的 SDK
interface ImprovementRecord {
  taskId: string;
  baselineCommit: string;
  candidateCommit: string;
  editorScope: "invariant" | "domain";
  changedFiles: string[];
  probe: {
    artifactExists: boolean;
    validationPassed: boolean | null;
    toolErrorRate: number;
    totalTokens: number;
    elapsedMs: number;
    observations: string[];
  };
  decision: "adopt" | "revise" | "reject";
  evidencePaths: string[];
}
```

其中 `validationPassed: null` 很重要：当任务没有客观验证器时，不能把“模型觉得好”伪装成 `true`。

建议每次修改遵循下面的门禁：

1. **最小变更**：优先修复第一个有证据支持的执行缺陷，而不是重写全部配置。
2. **隔离试运行**：候选运行在临时工作树或沙箱中，不允许修改生产凭据和核心权限。
3. **可执行性验证**：检查 Skill 触发条件、脚本编译、依赖是否齐全、测试是否通过。
4. **对照检查**：不仅看输出，还看工具错误、遗漏步骤、成本与回归。
5. **有条件提升**：高风险 Plugin、权限和安全策略需要人工审批，不能让模型自行升级权限。
6. **版本化回滚**：每次采纳均关联 Commit SHA、运行日志和适用范围。

### 7.3 从小范围验证开始，而不是直接开放自我修改

一个比较务实的渐进路线：

**阶段 A：Observation。** 不允许 Agent 写公共 Skills。先采集执行轨迹，给失败打标签，例如“漏跑测试”“产物未生成”“工具参数无效”。

**阶段 B：Controlled Improvement。** 每次只允许提出一个 Skill 或 Script 的小补丁，在沙箱中比较基线与候选，满足门禁后以 PR 形式提交。

**阶段 C：Experience-driven Reuse。** 增加按任务类型检索的经验库，记录哪些补丁在什么环境有效；当同类失败重复出现，再考虑将经验提升为共享组件。

最终目的不是让 Agent 永远自动重试，而是把重复出现的失败转化为**下次无需重新思考的执行能力**。

## 8. 必须正视的限制

这篇论文的方向令人兴奋，但并不意味着可以把“自我改进”无条件接入生产。

**首先是成本。** 基础对比步骤就包括基线执行、两种候选试运行与组合后执行，还要调用编辑器和 Composer。`k` 更大带来额外 token、工具费用和时间。论文给出了有限预算内的性能—计算权衡，但没有证明适用于所有应用的最优预算。

**其次是证据局限。** 没有标准答案时，对比轨迹不等于验证业务结论。多个候选可能共享同一个错误前提。论文还展示过选择器偏好较弱候选、导致分数下降的反例（Appendix E.6）。

**再次是安全边界。** 自我改写 Plugin 或工具指导，可能引入额外副作用。论文代码仓库也说明，其部分基准执行器的网络访问没有限制，Codex 沙箱被关闭；这不应成为生产系统直接照搬的默认设置。

**最后是经验治理。** 如果所有经验都无限积累，重复、过时和互相冲突的内容会影响检索。论文把经验库压缩、清理和自适应探索预算列为后续方向，尚未彻底解决。

因此更准确的判断是：论文在给定专业基准和预算下证明了**递归改进 Harness 可以带来显著收益**，还不能证明它在任意开放世界任务上都可靠、安全或划算。

## 9. 我的总结

过去构建 Agent，主要围绕三个问题：选哪个模型、给什么 Prompt、接哪些工具。Harness² 让我们开始认真考虑第四个问题：

> **如何让 Agent 根据自己的执行失败，持续改进 Prompt、Skills、Scripts、Subagents 和 Plugins，并将可复用的改进沉淀成系统资产？**

我最认可的三个原则是：

- **先观察实际轨迹，再决定改什么**，避免凭想象堆叠 Prompt；
- **改进要能被 Probe 和 Diff 检查**，优先把确定性工作做成脚本；
- **保存改进过程中的证据与适用条件**，而不是粗暴继承上一次的全部配置。

如果将它用于 OMP 一类 Agent 编排框架，我会优先实现**可比较的执行轨迹、受限的候选修改、独立验证器和版本化经验库**。有了这些基础设施，再谈多 Agent 并行进化才有实际意义。

---

### 参考资料

1. Ruiyao Xu et al. **Harness²: Recursive Agent Harnessing for an Open World**. arXiv:2610.14224v1，2026-10-09. [论文](https://arxiv.org/abs/2610.14224) / [HTML 全文](https://arxiv.org/html/2610.14224)。
2. Google Research. **Harness² 开源实现**. [GitHub](https://github.com/google-research/harness2)（项目许可证以仓库为准）。
3. 论文第 2 节（方法）、第 3 节（实验）、第 4 节（分析）、Appendix D（组件定义）、Appendix E（消融与失败分析）、Appendix F–G（限制与未来工作）。本文表格均标明对应原始表格，工程建议为个人延伸设计。
