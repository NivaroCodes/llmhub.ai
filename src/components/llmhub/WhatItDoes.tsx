import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { label: "Orchestrate", desc: "One typed SDK for every provider and model." },
  { label: "Automate", desc: "Compose agents, fallbacks, and tools without glue code." },
  { label: "Scale", desc: "Cache, retry, and observe from the first request." },
];

export const WhatItDoes = () => (
  <section id="what" className="py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="What LLMHub does"
        title="Infrastructure and automation in one layer"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.figure
            key={it.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface">
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-foreground shadow-sm transition-transform group-hover:scale-105">
                  <Play className="h-4 w-4 fill-current" />
                </span>
              </div>
            </div>
            <figcaption className="mt-4">
              <p className="text-[15px] font-medium text-foreground">{it.label}</p>
              <p className="mt-1 text-[14px] text-muted-foreground">{it.desc}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
