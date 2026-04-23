import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  Cable,
  Compass,
  Database,
  RefreshCcw,
  LineChart,
  Headphones,
  Megaphone,
  HelpCircle,
  UserCheck,
} from "lucide-react";

const dev = [
  { i: Cable, k: "Unified API", v: "One typed surface for every provider — chat, embeddings, tools." },
  { i: Compass, k: "Smart Routing", v: "Pick by cost, latency, capability, or custom policy." },
  { i: Database, k: "Built-in Cache", v: "Exact and semantic caching with TTL and invalidation." },
  { i: RefreshCcw, k: "Retries & Fallbacks", v: "Automatic failover across providers and models." },
  { i: LineChart, k: "Observability", v: "Traces, spend, latency, and quality per request." },
];

const biz = [
  { i: Headphones, k: "AI Support Agent", v: "Trained on your docs. Hands off to humans on edge cases." },
  { i: Megaphone, k: "SMM Autopilot", v: "Draft, schedule, and reply across social channels." },
  { i: HelpCircle, k: "FAQ Automation", v: "Deflect repetitive questions with confident answers." },
  { i: UserCheck, k: "Lead Qualification", v: "Score, enrich, and route inbound leads in seconds." },
];

export const Features = () => (
  <section id="features" className="relative border-t border-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Features"
        title="For developers and the teams shipping with them."
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <FeatureColumn label="For developers" items={dev} />
        <FeatureColumn label="For business" items={biz} accent />
      </div>
    </div>
  </section>
);

const FeatureColumn = ({
  label,
  items,
  accent,
}: {
  label: string;
  items: { i: any; k: string; v: string }[];
  accent?: boolean;
}) => (
  <div>
    <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
      <span className={`h-px w-6 ${accent ? "bg-accent" : "bg-primary"}`} />
      <span className={accent ? "text-accent" : "text-primary"}>{label}</span>
    </h3>
    <ul className="grid gap-px overflow-hidden border border-border bg-border">
      {items.map((it, i) => {
        const Icon = it.i;
        return (
          <motion.li
            key={it.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 * i }}
            className="group flex items-start gap-4 bg-background p-5 transition-colors hover:bg-card/60"
          >
            <span
              className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center border ${
                accent ? "border-accent/40 text-accent" : "border-primary/40 text-primary"
              } bg-background`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-sm font-semibold">{it.k}</h4>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{it.v}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  </div>
);