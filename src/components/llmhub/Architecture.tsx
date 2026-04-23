import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const code = `import { LLMHub } from '@llmhub/sdk'

const hub = new LLMHub({ route: 'cost' })

const res = await hub.chat({
  messages,
  fallback: ['gpt-4o', 'mistral', 'local'],
})
`;

const layers = [
  { k: "Client", v: "SDK · REST · Streaming" },
  { k: "Control", v: "Router · Policies · Budgets" },
  { k: "Cache", v: "Semantic · Exact · TTL" },
  { k: "Resilience", v: "Retries · Fallbacks · Timeouts" },
  { k: "Providers", v: "OpenAI · Anthropic · Mistral · Local" },
];

export const Architecture = () => (
  <section id="docs" className="relative border-t border-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Architecture"
        title="A thin, fast layer between your app and every model."
        description="Drop the SDK in. Configure routing as a policy. Ship."
      />
      <div className="grid gap-4 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-card/40 p-2 lg:col-span-7"
        >
          <div className="flex items-center justify-between border-b border-border bg-background px-3 py-2 font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary" /> example.ts
            </span>
            <span>typescript</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-foreground">
            <code>{colorize(code)}</code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-border bg-card/40 p-4 lg:col-span-5"
        >
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Stack
          </h3>
          <ol className="space-y-2">
            {layers.map((l, i) => (
              <li
                key={l.k}
                className="flex items-center justify-between border border-border bg-background px-3 py-2"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{l.k}</span>
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{l.v}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  </section>
);

// Tiny syntax highlight, semantic tokens via classes.
function colorize(src: string) {
  const lines = src.split("\n");
  return lines.map((line, idx) => (
    <span key={idx} className="block">
      <span className="mr-4 inline-block w-6 select-none text-right text-muted-foreground/60">
        {idx + 1}
      </span>
      {tokenize(line)}
      {"\n"}
    </span>
  ));
}

function tokenize(line: string) {
  const parts: { t: string; c?: string }[] = [];
  const regex =
    /(\/\/.*$)|('[^']*'|"[^"]*"|`[^`]*`)|\b(import|from|const|await|new|return|export)\b|\b(LLMHub|chat|fallback|route|messages)\b/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(line))) {
    if (m.index > last) parts.push({ t: line.slice(last, m.index) });
    if (m[1]) parts.push({ t: m[1], c: "text-muted-foreground/70" });
    else if (m[2]) parts.push({ t: m[2], c: "text-primary" });
    else if (m[3]) parts.push({ t: m[3], c: "text-accent" });
    else if (m[4]) parts.push({ t: m[4], c: "text-foreground" });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ t: line.slice(last) });
  return parts.map((p, i) =>
    p.c ? (
      <span key={i} className={p.c}>
        {p.t}
      </span>
    ) : (
      <span key={i} className="text-muted-foreground">
        {p.t}
      </span>
    ),
  );
}