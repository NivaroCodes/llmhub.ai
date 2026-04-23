import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Free",
    price: 0,
    tagline: "Test routing on a real workload.",
    features: ["10,000 requests / mo", "1 project", "Community support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: 10,
    tagline: "Ship a production feature.",
    features: ["100,000 requests / mo", "Caching (exact + semantic)", "Full analytics", "Email support"],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Scale",
    price: 25,
    tagline: "Run AI features at scale.",
    features: ["1,000,000 requests / mo", "Priority routing", "SSO + audit logs", "Priority support"],
    cta: "Start Scale",
    highlight: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, honest pricing"
        description="No seat fees. No per-model surcharges. Bring your own provider keys or use ours."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative flex flex-col rounded-lg border bg-background p-6 sm:p-8 ${
              t.highlight ? "border-foreground" : "border-border"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-2.5 left-6 rounded-full border border-foreground bg-foreground px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-background">
                Popular
              </span>
            )}
            <h3 className="text-[14px] font-[600] uppercase tracking-wider text-muted-foreground">
              {t.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[44px] font-[650] tracking-tight">${t.price}</span>
              <span className="text-[14px] text-muted-foreground">/ month</span>
            </div>
            <p className="mt-2 text-[14px] text-muted-foreground">{t.tagline}</p>
            <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]">
                  <Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-foreground" />
                  <span className="text-foreground/80">{f}</span>
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
    </div>
  </section>
);
