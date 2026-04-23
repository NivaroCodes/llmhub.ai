import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => (
  <section id="top" className="pt-40 sm:pt-48">
    <div className="container-editorial text-center">
      <motion.p {...fade(0)} className="eyebrow">
        ✦ LLM Orchestration
      </motion.p>
      <motion.h1
        {...fade(0.05)}
        className="mx-auto mt-6 max-w-[14ch] text-balance text-[44px] font-[650] leading-[1.05] tracking-[-0.02em] sm:text-[56px]"
      >
        One API for every model
      </motion.h1>
      <motion.p
        {...fade(0.12)}
        className="mx-auto mt-6 max-w-[36rem] text-pretty text-[18px] leading-[1.55] text-muted-foreground sm:text-[20px]"
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
        className="mt-12 text-[13px] text-muted-foreground"
      >
        Works with{" "}
        <span className="text-foreground/80">OpenAI</span> ·{" "}
        <span className="text-foreground/80">Anthropic</span> ·{" "}
        <span className="text-foreground/80">Mistral</span> ·{" "}
        <span className="text-foreground/80">Llama</span> ·{" "}
        <span className="text-foreground/80">Your local models</span>
      </motion.p>
    </div>
  </section>
);
