// Mermaid configuration is global. Serialize renders so different components
// cannot change its theme while another diagram is being rendered.
let queue: Promise<unknown> = Promise.resolve();
let sequence = 0;

export function renderDiagram(code: string, dark: boolean): Promise<string> {
  const result = queue.then(async () => {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      suppressErrorRendering: true,
      theme: dark ? 'dark' : 'default',
      flowchart: { htmlLabels: false },
    });
    const { svg } = await mermaid.render(`blog-mermaid-${++sequence}`, code);
    return svg;
  });
  // A malformed diagram must not prevent later diagrams from rendering.
  queue = result.catch(() => undefined);
  return result;
}
