import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { AlertTriangle, Check } from "lucide-react";

const fragmented = [
  "openai-node",
  "anthropic-sdk",
  "@mistralai/client",
  "ollama",
  "custom-router.ts",
  "redis-cache.ts",
  "retry-wrapper.ts",
  "billing-tracker.ts",
  "logger.ts",
];

const unified = [
  "Single typed SDK",
  "Smart router",
  "Semantic cache",
  "Auto-retries + fallbacks",
  "Per-key budgets",
  "Traces + analytics",
];

export const ProblemSolution = () => (
  <section className="relative border-t border-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Before / After"
        title="From a fragmented stack to a single layer."
      />
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {/* Fragmented */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background p-6 sm:p-8"
        >
          <header className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Fragmented stack
              </h3>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">today</span>
          </header>
          <div className="relative h-72">
            {fragmented.map((f, i) => (
              <span
                key={f}
                className="absolute border border-border bg-secondary/40 px-2 py-1 font-mono text-xs text-muted-foreground"
                style={{
                  left: `${(i * 37) % 70}%`,
                  top: `${(i * 53) % 75}%`,
                  transform: `rotate(${((i % 5) - 2) * 3}deg)`,
                }}
              >
                {f}
              </span>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,hsl(var(--background)))]" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Five SDKs, three caches, one fragile router, no observability.
          </p>
        </motion.div>

        {/* Unified */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-card/40 p-6 sm:p-8"
        >
          <header className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-4 w-4 place-items-center border border-primary/60 bg-primary/10">
                <span className="h-1.5 w-1.5 bg-primary" />
              </span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                LLMHub layer
              </h3>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">with LLMHub</span>
          </header>
          <ul className="grid gap-2">
            {unified.map((u, i) => (
              <motion.li
                key={u}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="flex items-center justify-between border border-border bg-background px-3 py-2"
              >
                <span className="flex items-center gap-2 text-sm">
                  <Check className="h-3.5 w-3.5 text-primary" /> {u}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">native</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);