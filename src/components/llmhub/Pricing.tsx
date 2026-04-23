import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Free",
    price: 0,
    tagline: "Test routing on a real workload.",
    features: ["10,000 requests / mo", "1 project", "Community support", "Basic analytics"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: 10,
    tagline: "Ship a production feature.",
    features: [
      "100,000 requests / mo",
      "5 projects",
      "Caching (exact + semantic)",
      "Full analytics",
      "Email support",
    ],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Scale",
    price: 25,
    tagline: "Run AI features at scale.",
    features: [
      "1,000,000 requests / mo",
      "Unlimited projects",
      "Priority routing",
      "SSO + audit logs",
      "Priority support",
    ],
    cta: "Start Scale",
    highlight: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="relative border-t border-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple pricing. Pay for the volume you actually run."
        description="No seat fees. No per-model surcharges. Bring your own provider keys or use ours."
      />
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative bg-background p-6 sm:p-8 ${
              t.highlight ? "ring-1 ring-inset ring-primary/40" : ""
            }`}
          >
            {t.highlight && (
              <span className="absolute right-4 top-4 border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                Popular
              </span>
            )}
            <header>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">${t.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
            </header>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                variant={t.highlight ? "acid" : "wire"}
                className="w-full"
                asChild
              >
                <a href="#start">{t.cta}</a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center font-mono text-[11px] text-muted-foreground">
        Overage billed at $0.50 per 1k requests · Cancel anytime
      </p>
    </div>
  </section>
);