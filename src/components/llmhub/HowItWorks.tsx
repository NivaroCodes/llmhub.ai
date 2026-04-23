import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    h: "Connect once",
    p: "Add any model via one SDK. No vendor lock-in, no rewrites when providers change.",
  },
  {
    n: "02",
    h: "Route intelligently",
    p: "Cost, latency, or quality based routing with automatic retries across providers.",
  },
  {
    n: "03",
    h: "Observe everything",
    p: "Built-in caching, structured logs, and graceful fallbacks for every request.",
  },
];

export const HowItWorks = () => (
  <section className="bg-surface py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="How it works"
        title="A calmer loop than juggling providers"
      />
      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="bg-background p-8"
          >
            <span className="font-mono text-[12px] tracking-widest text-muted-foreground">
              {s.n}
            </span>
            <h3 className="mt-6 text-[20px] font-[600] tracking-tight">{s.h}</h3>
            <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">{s.p}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);
