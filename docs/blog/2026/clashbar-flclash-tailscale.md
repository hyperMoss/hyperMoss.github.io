---
title: 用 ClashBar 和 FlClash 访问 Tailscale 内网：配置与排障记录
date: 2026-10-24
description: 在 macOS 和 Android 上把 Tailscale 接入 Mihomo，并排查测速超时、SSH 连接被拒绝、本机网页无法访问和 dsh 登录认证问题。
---

# 用 ClashBar 和 FlClash 访问 Tailscale 内网：配置与排障记录

这次想解决的需求很具体：电脑继续用 ClashBar 代理上网，安卓手机继续用 FlClash，同时让手机访问 Tailscale 网络里的 Mac，包括 SSH 和本地运行的网页。

参考[在 FlClash Android 中使用 Tailscale](https://seewhy.me/posts/flclash-android-tailscale)后，采用了 Mihomo 内置的 `type: tailscale` 出站。后面的排查发现，设备在线、DNS 能解析、服务端口开放、应用完成登录，分别需要验证。只看节点卡片上的“超时”很难判断问题在哪。

下面记录这次的配置方法和实际遇到的故障。所有设备名、Tailscale IP、用户名和密钥均使用示例值，复制时替换成自己的信息。

## 先分清要连接的设备

这套方案里有三个不同的角色：

| 角色 | 本文示例名称 | 用途 |
| --- | --- | --- |
| Mac 官方 Tailscale 客户端 | `home-mac` | 让 Mac 加入 Tailnet，提供访问 Mac 服务的地址 |
| ClashBar 内置 Tailscale 出站 | `clashbar-mac` | 让经过 ClashBar 的指定流量访问 Tailnet |
| 安卓 FlClash 内置 Tailscale 出站 | `flclash-android` | 让手机应用通过 FlClash 访问 Tailnet |

这里的 Tailnet 就是同一 Tailscale 网络中的设备集合。

官方客户端与代理内置节点各自保存身份，因此同一台电脑可能在管理后台显示为两个设备。访问 Mac 的系统 SSH 或网页服务时，本文使用官方客户端 `home-mac` 的地址。Mihomo 中增加一个出站节点，并不会自动为它注册的设备开启 Mac 上的 SSH 服务。

本文假设 Mac 的 Tailscale 地址为 `100.100.10.20`，完整设备域名为 `home-mac.tail-example.ts.net`。请以自己管理后台显示的信息为准。

## 把 Tailscale 加入现有代理配置

先确认客户端所带的 Mihomo 内核支持 `type: tailscale`。本次 Mac 上验证的内核版本为 `v1.19.33`；安卓使用自己客户端的内核，仍需单独验证。若导入时出现未知代理类型，先检查内核版本。

以下是需要合并进现有配置的片段，不是包含机场订阅的完整配置。保留原有节点、代理组和规则，把新增条目合并到对应位置，避免重复声明同名的顶层字段。

```yaml
proxies:
  - name: TAILSCALE
    type: tailscale
    hostname: flclash-android
    control-url: https://controlplane.tailscale.com
    state-dir: ./tailscale/flclash-android
    ephemeral: false
    udp: true
    accept-routes: true
    ip-version: ipv4-prefer
    # 使用密钥登录时，去掉下一行的注释并填写自己的密钥。
    # auth-key: "YOUR_TAILSCALE_AUTH_KEY"
  # 此处保留原有机场节点。

proxy-groups:
  - name: Tailscale内网
    type: select
    proxies:
      - TAILSCALE
      - DIRECT
  # 此处保留原有代理组。

rules:
  - IP-CIDR,100.64.0.0/10,Tailscale内网,no-resolve
  - IP-CIDR6,fd7a:115c:a1e0::/48,Tailscale内网,no-resolve
  - DOMAIN-SUFFIX,ts.net,Tailscale内网
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
  - IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
  - IP-CIDR,169.254.0.0/16,DIRECT,no-resolve
  # 此处继续放原有规则与最终兜底规则。
```

Mac 使用时，将 `hostname` 和 `state-dir` 改为 `clashbar-mac` 对应的值。安卓配置不要复制 Mac 的 `utun` 设备名、绝对文件路径或 Tailscale 状态文件。FlClash 的 VPN 接管方式由手机端设置管理。

`100.64.0.0/10` 覆盖 `100.64.0.0` 至 `100.127.255.255`，因此不同设备的第二段数字不必相同。把这条规则排在已有的私网直连规则之前，才能优先交给 Tailscale。

这里把普通私网地址继续设为直连，适合访问 Tailscale 设备自身的地址。如果还要通过远端 subnet router 访问它后面的 `192.168.x.x` 网段，就需要为那个具体子网增加更靠前的 Tailscale 规则，同时确认后台批准了该路由。`accept-routes: true` 本身不会替代 Mihomo 的分流规则。

这次用途是访问内网，因此没有配置 `exit-node`。需要通过 Tailnet 出口访问公网时，再按 [Mihomo 的 Tailscale 出站文档](https://wiki.metacubex.one/config/proxies/tailscale/)单独配置出口节点。

## 为设备域名配置 DNS

只写 IP 分流规则，还不足以解决 `*.ts.net` 的解析。现有 DNS 配置中加入以下字段，并保留其他 nameserver 和过滤条目：

```yaml
dns:
  enable: true
  nameserver-policy:
    "+.ts.net":
      - ts://TAILSCALE
  fake-ip-filter:
    - "+.ts.net"
```

`ts://TAILSCALE` 使用名为 `TAILSCALE` 的出站节点所提供的 DNS 配置。这个名字必须与 `proxies` 中一致。该写法见 [Mihomo DNS 类型文档](https://wiki.metacubex.one/config/dns/type/#tailscale)。

如果 IP 能访问而完整设备域名不能访问，优先检查 DNS。如果 IP 与域名都不能访问，再继续检查设备登录、分流和服务端口。

## 在安卓上完成独立登录

手机需要创建自己的 Tailscale 身份，不能沿用 Mac 日志里生成的登录链接。

### 使用交互式链接登录

1. 在 FlClash 导入配置，选中规则模式并启动 VPN。
2. 在 `Tailscale内网` 组中选中 `TAILSCALE`。
3. 访问一个 Tailscale 设备的 IP 或完整域名，触发节点初始化。
4. 在手机 FlClash 日志里找到 `login.tailscale.com` 登录链接。
5. 打开链接，登录目标设备所在的 Tailnet，并确认 `flclash-android`。

初始化是按需触发的，第一次连接可能超时。[Mihomo 文档](https://wiki.metacubex.one/config/proxies/tailscale/#auth-key)说明，未填写 `auth-key` 时会在日志中输出交互式登录 URL。

### 使用 auth-key 登录

在 [Tailscale 密钥管理](https://console.tailscale.com/admin/settings/keys)中生成 auth key，再在 `TAILSCALE` 节点里添加：

```yaml
auth-key: "YOUR_TAILSCALE_AUTH_KEY"
```

只供一台手机首次登录时，可以关闭 `Reusable`。长期使用的手机关闭 `Ephemeral`。保存后重启 FlClash，再访问一次内网地址。

登录身份保存在 `state-dir` 中。一次性密钥用过后不能再次注册新设备，但已有设备会使用保存的身份继续连接。清除应用数据或删除状态目录后，需要重新登录。密钥过期与设备自身的 node key 过期是两件事，详见 [Tailscale auth keys 文档](https://tailscale.com/docs/features/access-control/auth-keys)。

这里的 auth key 只负责设备加入 Tailnet。后面登录 Mac 的 SSH 或网页应用，还要通过对应服务自己的认证。

## 保留订阅更新能力

Mac 上这次采用了单独的本地配置，用 `file` 类型的 `proxy-provider` 读取原机场订阅文件中的节点。这样原订阅继续更新节点，本地配置保留 Tailscale 和内网规则。示例路径相对于 Mihomo 工作目录：

```yaml
proxy-providers:
  AirportSubscription:
    type: file
    path: ./config/airport.yaml
    interval: 300
```

使用这个 provider 的代理组还需保留或增加 `use: [AirportSubscription]`。文件必须位于内核允许读取的路径中，具体规则见 [Mihomo 代理集合文档](https://wiki.metacubex.one/config/proxy-providers/)。

导出给安卓时，为了能单文件导入，另做了一份内嵌机场节点的配置。它是当时的节点快照，不会自动跟随电脑上的订阅文件更新。后续更新节点时，需要重新生成配置或在手机端配置自己的订阅合并方式。

公开文章只展示配置结构，不附带包含节点密码的个人配置文件。

## 给 ClashBar 接上 MetaCubeXD 面板

MetaCubeXD 用来查看 Mihomo 的代理组、连接和日志，连接的是控制接口，不是访问 Mac 业务网页的入口。

这次控制接口位于 `127.0.0.1:9090`。在线 MetaCubeXD 页面曾出现无法读取本机接口的问题，之后把面板静态文件放到 Mihomo 工作目录，在配置中指定：

```yaml
external-controller: 127.0.0.1:9090
external-ui: ./ui/metacubexd
```

其中 `./ui/metacubexd` 内要实际存在面板的 `index.html` 和其他静态资源。保存配置并重启内核后，在 Mac 本机打开 `http://127.0.0.1:9090/ui/`，能看到内核版本、代理组和实时连接。

面板使用 [MetaCubeXD 官方仓库](https://github.com/MetaCubeX/metacubexd)的 `gh-pages` 静态资源。这次验证了本地入口可以正常读取节点，没有继续确认在线入口失败的具体浏览器原因。在线面板还涉及控制接口的 CORS 与浏览器本地网络访问限制，配置字段见 [Mihomo 全局配置](https://wiki.metacubex.one/config/general/#外部控制-api)。

这里控制接口保持回环监听。手机访问 Mac 上的业务网页，不需要把 Mihomo 控制接口同时开放给手机。

## 测速超时，先检查测试目标

FlClash 的延迟测试会通过选中的节点访问测试 URL。若测试 URL 是 Google 或 Gstatic 的公网地址，而 Tailscale 出站没有配置公网出口，测速失败并不能直接证明内网不可用。

正确的验证目标是 Tailnet 中实际开启的服务，例如：

```text
http://100.100.10.20:3080/
```

这里还要求目标设备确实在该端口提供 HTTP 服务。只在浏览器中输入一个设备 IP，没有对应的网页服务，也无法打开页面。

这次还遇到过以下初始化错误：

```text
tsnet: wgengine: magicsock: Rebind IPv4 failed:
failed to bind any ports (tried [0])
```

当时 Tailscale 出站配置了 `dialer-proxy`，指定现有机场组作为上游。移除这一字段、改为直连后，节点成功启动并生成登录链接，之后日志进入 `Running`。

这个结果只说明本次上游组合存在兼容问题，不能推断所有上游代理都不可用。如果直连控制面也失败，继续查看具体日志，再决定是否使用经过验证的其他上游。

## SSH 连不上，先确认 Mac 开启了服务

这次 SSH 的实际错误是：

```text
Connection refused
```

检查 Mac 本机的 `127.0.0.1:22` 也得到相同结果。22 端口没有监听，系统没有加载 `sshd`。因此首先需要开启 Mac 的远程登录。

在 **系统设置 → 通用 → 共享 → 远程登录** 中开启服务。选择 **仅这些用户**，加入准备使用的 Mac 账号。[Apple 的操作说明](https://support.apple.com/guide/mac-help/allow-a-remote-computer-to-access-your-mac-mchlp1066/mac)列出了完整步骤。

在 Mac 上检查监听状态：

```bash
lsof -nP -iTCP:22 -sTCP:LISTEN
nc -vz 127.0.0.1 22
```

手机 SSH 客户端填写 Mac 官方 Tailscale 客户端的 IP、端口 `22`、Mac 用户名，以及 Mac 密码或已配置的 SSH 私钥。例如在手机终端中运行：

```bash
ssh your-mac-user@100.100.10.20
```

普通 SSH 可以通过 Tailscale 网络传输。Tailscale 另外提供一个名为 **Tailscale SSH** 的认证功能，服务端支持范围和访问策略另有要求。macOS 使用它需要开源 `tailscale` 与 `tailscaled` 版本，不能把管理后台中设备在线等同于已经开启该功能。参见 [Tailscale SSH 文档](https://tailscale.com/docs/features/tailscale-ssh)。

开启服务后，如果手机仍超时，再检查手机 VPN、应用分流、Tailnet 访问策略和 Mac 防火墙。如果已经出现密码错误，就继续检查 SSH 用户名和认证方式。

## 网页访问失败，检查地址和监听范围

手机访问 `http://127.0.0.1:3080/` 时，连接的是手机自己。要访问 Mac，地址应改为 Mac 的 Tailscale IP 或完整域名。

但只改 URL 仍可能连接失败。这次在 Mac 上查到：

```text
TCP 127.0.0.1:3080 (LISTEN)
```

这个服务只接受发往 Mac 回环地址的连接。本机请求返回 `401`，说明服务在运行且要求认证；请求 Tailscale 地址则被拒绝，说明该地址没有对应的监听。

检查命令：

```bash
lsof -nP -iTCP:3080 -sTCP:LISTEN
curl --noproxy '*' -I http://127.0.0.1:3080/
curl --noproxy '*' -I http://100.100.10.20:3080/
```

`HEAD` 请求是否被应用支持需要单独判断，这里先观察能否建立连接和返回 HTTP 状态。`curl` 的 `--noproxy '*'` 用于排除终端代理环境变量的干扰。

这个端口运行的是 DeepSeek Harness。本次安装版本的 `dsh web` 接受具体网卡 IP，并拒绝通配监听地址。先停止原服务，再按以下方式启动，示例 IP 要替换成 Mac 的实际地址：

```bash
dsh web --host 100.100.10.20 --port 3080 --no-open
```

从源码仓库启动时，对应命令为 `pnpm dsh web --host 100.100.10.20 --port 3080 --no-open`。不同版本的参数以 `dsh web --help` 为准。

绑定该 IP 后，Mac 本机和手机都访问 `http://100.100.10.20:3080/`，同时保持 Mac 的 Tailscale 在线。原来的 `127.0.0.1:3080` 地址不再是这个监听器的入口。

如果需要保留本机回环入口，可以让服务继续监听回环地址，再通过 [Tailscale Serve](https://tailscale.com/docs/features/tailscale-serve)提供 Tailnet 入口。应用有 Host 校验、WebSocket 或登录 cookie 时，还要按应用要求配置代理。这次没有部署并验证 Serve 方案。

## 返回 401 后，处理网页应用认证

改好监听地址之后，这次访问网页得到了：

```text
dsh web authentication required; reopen the URL printed by dsh web.
```

这说明请求已经到达 dsh，需要继续完成应用登录。

本次 dsh 版本会在启动终端打印带令牌的链接，格式如下：

```text
http://100.100.10.20:3080/?token=YOUR_DSH_STARTUP_TOKEN
```

复制终端里真实的完整链接，在准备使用的浏览器中打开。令牌交换为登录 cookie 后，浏览器重定向到不含令牌的地址。Mac 浏览器和手机浏览器各自保存会话，需要分别登录。服务重启后，使用新进程打印的链接。

如果换成设备域名访问，还要检查 dsh 的 `--trusted-host` 设置。绑定 IP 与域名属于不同的访问地址，cookie 和 Host 校验也要与实际入口一致。

不要把带真实令牌的链接公开贴到文章或截图中。这些令牌与 Tailscale auth key 用途不同，但都需要按凭据保存。

## 用错误信息决定下一步

| 现象 | 下一步检查 |
| --- | --- |
| Tailscale 节点测速超时 | 测试 URL 是否为公网地址，节点是否刚开始初始化 |
| 后台没有手机节点上线 | auth key、手机端登录链接、节点启动日志 |
| IP 可以访问，设备域名不行 | `nameserver-policy`、`ts://TAILSCALE`、完整设备域名 |
| 本机 22 端口也连接被拒绝 | Mac 远程登录和 SSH 监听状态 |
| 本机网页可访问，Tailscale 地址被拒绝 | 网页服务监听的 IP 和端口 |
| 请求返回 401 | 应用的 token、cookie 或其他登录认证 |
| 请求返回 403 | 应用的 Host、Origin、账号权限或访问策略，结合响应正文判断 |
| 手机连接一直超时 | 手机 VPN 是否接管目标应用和地址、Tailnet 策略、目标设备状态及防火墙 |

本次已验证 Mac 上 Tailscale 登录并进入 `Running`、完整设备域名解析成功、ClashBar 重启后保留配置，以及网页监听地址改为 Tailscale IP 后能返回应用认证响应。SSH 曾确认服务未开启，手机 SSH 成功登录和手机网页完成认证仍需在设备上验证。

## 参考资料

- [在 FlClash Android 中使用 Tailscale](https://seewhy.me/posts/flclash-android-tailscale)，本次配置思路的起点。
- [Mihomo Tailscale 出站](https://wiki.metacubex.one/config/proxies/tailscale/)。
- [Mihomo Tailscale DNS 类型](https://wiki.metacubex.one/config/dns/type/#tailscale)。
- [Mihomo 代理集合](https://wiki.metacubex.one/config/proxy-providers/)。
- [Tailscale auth keys](https://tailscale.com/docs/features/access-control/auth-keys)。
- [Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)。
- [Tailscale Serve](https://tailscale.com/docs/features/tailscale-serve)。
- [Apple：允许远程电脑访问 Mac](https://support.apple.com/guide/mac-help/allow-a-remote-computer-to-access-your-mac-mchlp1066/mac)。
