import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { HeroGraph } from "./HeroGraph";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 animate-pulse-acid bg-primary" />
              v1.0 — public beta
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The unified <span className="text-primary text-glow-acid">control layer</span> for LLMs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              One API for OpenAI, local, and open models. Routing, caching, retries, and monitoring built in.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button variant="acid" size="lg" asChild>
                <a href="#start">
                  Start building <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="wire" size="lg" asChild>
                <a href="#docs">
                  <BookOpen className="h-4 w-4" /> View docs
                </a>
              </Button>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border"
            >
              {[
                { v: "12+", k: "providers" },
                { v: "184ms", k: "p50 latency" },
                { v: "99.99%", k: "uptime" },
              ].map((s) => (
                <div key={s.k} className="px-4 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-1 font-mono text-lg text-foreground">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
};