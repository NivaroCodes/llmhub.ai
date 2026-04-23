import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Play } from "lucide-react";

const items = [
  {
    label: "Orchestrate",
    desc: "Route every request to the right model based on cost, latency, or capability.",
    code: "route: 'cost' → gpt-4o-mini",
  },
  {
    label: "Automate",
    desc: "Compose agents, fallbacks, and tool calls without glue code.",
    code: "fallback: ['gpt-4o', 'mistral']",
  },
  {
    label: "Scale",
    desc: "Cache, retry, and observe. Burst from 10 to 10M requests without rewrites.",
    code: "cache: 'semantic' · retries: 3",
  },
];

export const WhatItDoes = () => (
  <section id="product" className="relative border-t border-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="What LLMHub does"
        title="Three primitives. Every LLM workload."
        description="Stop stitching SDKs. Get a single, typed surface for every model and every concern around it."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.article
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative border border-border bg-card/40 p-4 transition-colors hover:border-foreground/30"
          >
            <div className="relative mb-4 aspect-video overflow-hidden border border-border bg-background">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <button
                  aria-label={`Play ${it.label} demo`}
                  className="grid h-12 w-12 place-items-center border border-primary/60 bg-background/80 text-primary transition-transform group-hover:scale-110"
                >
                  <Play className="h-4 w-4 fill-current" />
                </button>
              </div>
              <span className="absolute left-2 top-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-primary">
                {it.code}
              </span>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{it.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);