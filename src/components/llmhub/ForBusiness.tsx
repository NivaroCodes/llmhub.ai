import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Headphones, Megaphone, HelpCircle, UserCheck } from "lucide-react";

const items = [
  { i: Headphones, h: "AI Support Agent", p: "Trained on your docs. Hands off cleanly to humans on edge cases." },
  { i: Megaphone, h: "SMM Autopilot", p: "Draft, schedule, and reply across social channels." },
  { i: HelpCircle, h: "FAQ Automation", p: "Deflect repetitive questions with confident, sourced answers." },
  { i: UserCheck, h: "Lead Qualification", p: "Score, enrich, and route inbound leads in seconds." },
];

export const ForBusiness = () => (
  <section className="bg-surface py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="For business"
        title="Ship the workflows your team already needs"
        description="Pre-built routes for common automations — ready out of the box, fully customizable."
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {items.map((it, i) => {
          const Icon = it.i;
          return (
            <motion.li
              key={it.h}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-lg border border-border bg-background p-6"
            >
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[16px] font-[600]">{it.h}</h3>
                <p className="mt-1 text-[14px] leading-[1.55] text-muted-foreground">{it.p}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  </section>
);
