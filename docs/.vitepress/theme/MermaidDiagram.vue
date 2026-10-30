<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useData } from 'vitepress';
import { renderDiagram } from './mermaid';

const props = defineProps<{ code: string }>();
const { isDark } = useData();
const svg = ref('');
const error = ref('');
let mounted = false;
let generation = 0;

async function render() {
  if (!mounted) return;
  const current = ++generation;
  error.value = '';
  try {
    const rendered = await renderDiagram(props.code, isDark.value);
    if (mounted && current === generation) svg.value = rendered;
  } catch {
    if (mounted && current === generation) {
      svg.value = '';
      error.value = '图表渲染失败，请检查下方 Mermaid 源码。';
    }
  }
}

onMounted(() => {
  mounted = true;
  void render();
});
watch([() => props.code, isDark], render);
onBeforeUnmount(() => {
  mounted = false;
  generation++;
});
</script>

<template>
  <figure class="mermaid-diagram" aria-label="Mermaid 图表">
    <div v-if="svg" class="mermaid-diagram__canvas" v-html="svg" />
    <p v-if="error" role="alert">{{ error }}</p>
    <details :open="!svg">
      <summary>查看 Mermaid 源码</summary>
      <pre><code>{{ code }}</code></pre>
    </details>
  </figure>
</template>

<style scoped>
.mermaid-diagram {
  margin: 24px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.mermaid-diagram__canvas {
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
.mermaid-diagram__canvas :deep(svg) {
  max-width: 100%;
  height: auto;
}
summary {
  margin-top: 12px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 13px;
}
pre {
  overflow-x: auto;
  white-space: pre;
  font-size: 13px;
}
</style>
