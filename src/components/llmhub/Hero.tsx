import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden pt-40 pb-24 sm:pt-48">
    {/* Live background layers */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-aurora" />
    </div>
    {/* Floating orbiting dots */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {[
        { l: "12%", t: "28%", d: 0 },
        { l: "82%", t: "22%", d: 1.2 },
        { l: "20%", t: "70%", d: 2.4 },
        { l: "75%", t: "65%", d: 0.8 },
        { l: "50%", t: "18%", d: 1.8 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-foreground/40"
          style={{ left: p.l, top: p.t }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5 + i, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>

    <div className="container-editorial relative text-center">
      <motion.p {...fade(0)} className="eyebrow inline-flex items-center justify-center gap-2.5">
        <span aria-hidden className="inline-block h-px w-6 bg-foreground/40" />
        LLM Orchestration
      </motion.p>
      <motion.h1
        {...fade(0.05)}
        className="mx-auto mt-6 max-w-[14ch] text-balance text-[44px] font-[650] leading-[1.02] tracking-[-0.025em] text-foreground sm:text-[64px]"
      >
        One API for every model
      </motion.h1>
      <motion.p
        {...fade(0.12)}
        className="mx-auto mt-6 max-w-[36rem] text-pretty text-[18px] leading-[1.6] text-foreground/75 sm:text-[20px]"
      >
        LLMHub routes, caches, and monitors OpenAI, local, and open models behind a single
        endpoint — so your team ships AI features, not infrastructure.
      </motion.p>
      <motion.div
        {...fade(0.18)}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button variant="acid" size="lg" asChild>
          <a href="#start">
            Start building <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <a
          href="#docs"
          className="group inline-flex items-center gap-1.5 text-[15px] text-foreground underline-offset-4 hover:underline"
        >
          View docs
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
      <motion.p
        {...fade(0.28)}
        className="mt-12 text-[13px] text-foreground/60"
      >
        Works with{" "}
        <span className="text-foreground">OpenAI</span> ·{" "}
        <span className="text-foreground">Anthropic</span> ·{" "}
        <span className="text-foreground">Mistral</span> ·{" "}
        <span className="text-foreground">Llama</span> ·{" "}
        <span className="text-foreground">Your local models</span>
      </motion.p>
    </div>
  </section>
);
