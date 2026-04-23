import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const code = `import { LLMHub } from '@llmhub/sdk'

const hub = new LLMHub()

await hub.chat({ model: 'auto', messages })`;

const TOKEN =
  /(\/\/.*$)|('[^']*'|"[^"]*"|`[^`]*`)|\b(import|from|const|await|new)\b|\b(LLMHub|chat)\b/g;

const tokenize = (line: string) => {
  const out: { t: string; c?: string }[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(TOKEN.source, "g");
  while ((m = re.exec(line))) {
    if (m.index > last) out.push({ t: line.slice(last, m.index) });
    if (m[1]) out.push({ t: m[1], c: "text-muted-foreground" });
    else if (m[2]) out.push({ t: m[2], c: "text-emerald-700" });
    else if (m[3]) out.push({ t: m[3], c: "text-violet-700" });
    else if (m[4]) out.push({ t: m[4], c: "text-foreground font-medium" });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ t: line.slice(last) });
  return out.map((p, i) =>
    p.c ? (
      <span key={i} className={p.c}>
        {p.t}
      </span>
    ) : (
      <span key={i} className="text-foreground/80">
        {p.t}
      </span>
    ),
  );
};

export const CodeBlock = () => (
  <section className="py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Developer experience"
        title="Production ready TypeScript SDK"
        description="Drop the SDK in. Point your existing requests at LLMHub and route, cache, and observe in minutes."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-lg border border-border bg-surface"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">example.ts</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-[14px] leading-[1.7]">
          <code>
            {code.split("\n").map((line, i) => (
              <span key={i} className="block">
                <span className="mr-5 inline-block w-4 select-none text-right text-muted-foreground/60">
                  {i + 1}
                </span>
                {tokenize(line)}
                {"\n"}
              </span>
            ))}
          </code>
        </pre>
      </motion.div>
      <p className="mt-4 text-center text-[13px] text-muted-foreground">
        Production ready TypeScript SDK · Available on npm
      </p>
    </div>
  </section>
);
