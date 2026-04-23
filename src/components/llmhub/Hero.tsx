import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-mountains.jpg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
  >
    {/* Background photo */}
    <img
      src={heroBg}
      alt=""
      aria-hidden
      width={1920}
      height={1080}
      className="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    {/* Animated drifting fog layers + bottom fade into white page */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute -inset-x-[20%] top-[40%] h-[60%]"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 50%, rgba(255,255,255,0.18), transparent 70%), radial-gradient(50% 40% at 75% 60%, rgba(255,200,160,0.14), transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: ["-2%", "2%", "-2%"], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-x-[20%] top-[55%] h-[45%]"
        style={{
          background:
            "radial-gradient(50% 40% at 60% 40%, rgba(255,255,255,0.12), transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ x: ["3%", "-3%", "3%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top vignette + bottom fade to background for seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
    </div>

    {/* Floating glow particles */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {[
        { l: "14%", t: "32%", d: 0, s: 2 },
        { l: "82%", t: "26%", d: 1.2, s: 3 },
        { l: "22%", t: "62%", d: 2.4, s: 2 },
        { l: "73%", t: "58%", d: 0.6, s: 2 },
        { l: "48%", t: "22%", d: 1.8, s: 3 },
        { l: "60%", t: "70%", d: 3.2, s: 2 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            boxShadow: "0 0 12px rgba(255,255,255,0.7)",
          }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 6 + i, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>

    <div className="container-editorial relative pt-32 pb-24 text-center text-white sm:pt-40">
      <motion.p
        {...fade(0)}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur"
      >
        <span aria-hidden className="text-white">✦</span>
        LLM Orchestration
      </motion.p>
      <motion.h1
        {...fade(0.05)}
        className="mx-auto mt-7 max-w-[14ch] text-balance text-[46px] font-[650] leading-[1.02] tracking-[-0.025em] text-white sm:text-[68px]"
      >
        One API for{" "}
        <span className="bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
          every model
        </span>
      </motion.h1>
      <motion.p
        {...fade(0.12)}
        className="mx-auto mt-6 max-w-[38rem] text-pretty text-[17px] leading-[1.6] text-white/75 sm:text-[19px]"
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
          className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Start building <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#docs"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
        >
          View docs
        </a>
      </motion.div>
      <motion.p {...fade(0.28)} className="mt-12 text-[12px] uppercase tracking-[0.22em] text-white/55">
        Works with
      </motion.p>
      <motion.p {...fade(0.32)} className="mt-3 text-[14px] text-white/85">
        OpenAI · Anthropic · Mistral · Llama · Your local models
      </motion.p>
    </div>
  </section>
);
