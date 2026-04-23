import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedBackdrop } from "./AnimatedBackdrop";
import { WorksWithCarousel } from "./WorksWithCarousel";
import { LiveStats } from "./LiveStats";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const TYPED = "every model";

const useTyped = (text: string, startDelay = 600, speed = 90) => {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const start = window.setTimeout(function tick() {
      setOut(text.slice(0, i));
      i += 1;
      if (i <= text.length) window.setTimeout(tick, speed);
    }, startDelay);
    return () => window.clearTimeout(start);
  }, [text, startDelay, speed]);
  return out;
};

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-background"
  >
    <AnimatedBackdrop />

    <div className="container-editorial relative pt-32 pb-20 text-center text-foreground sm:pt-40">
      <motion.p
        {...fade(0)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/75 backdrop-blur"
      >
        <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
        LLM Orchestration
      </motion.p>
      <TypedHeadline />
      <motion.p
        {...fade(0.12)}
        className="mx-auto mt-7 max-w-[40rem] text-pretty text-[18px] leading-[1.6] text-foreground/70 sm:text-[21px]"
      >
        LLMHub routes, caches, and monitors OpenAI, local, and open models behind a single
        endpoint — so your team ships AI features, not infrastructure.
      </motion.p>
      <motion.div
        {...fade(0.18)}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#start"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          Start building <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#docs"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background/70 px-6 text-[15px] font-medium text-foreground backdrop-blur transition-colors hover:bg-surface"
        >
          View docs
        </a>
      </motion.div>

      <motion.div {...fade(0.26)} className="mt-16">
        <LiveStats />
      </motion.div>

      <motion.div {...fade(0.34)} className="mt-16">
        <p className="text-[12px] uppercase tracking-[0.22em] text-foreground/55">
          Works with
        </p>
        <div className="mt-5">
          <WorksWithCarousel />
        </div>
      </motion.div>
    </div>
  </section>
);

const TypedHeadline = () => {
  const typed = useTyped(TYPED, 500, 85);
  const done = typed.length === TYPED.length;
  return (
    <motion.h1
      {...fade(0.05)}
      className="mx-auto mt-8 max-w-[16ch] text-balance text-[52px] font-[650] leading-[1.02] tracking-[-0.025em] text-foreground sm:text-[80px]"
    >
      One API for{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-b from-foreground to-foreground/55 bg-clip-text text-transparent">
          {typed}
        </span>
        <span
          aria-hidden
          className={`ml-0.5 inline-block h-[0.85em] w-[3px] -translate-y-[-0.08em] bg-foreground align-middle ${
            done ? "animate-pulse" : ""
          }`}
          style={{ animation: done ? "blink 1s steps(1) infinite" : undefined }}
        />
      </span>
    </motion.h1>
  );
};
