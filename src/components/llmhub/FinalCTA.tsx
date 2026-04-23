import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <section id="start" className="relative border-t border-border py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade opacity-50" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
    <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
      >
        Ship AI features, <span className="text-primary text-glow-acid">not infrastructure.</span>
      </motion.h2>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
        Install the SDK, point your existing requests at LLMHub, and route, cache, and observe in minutes.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="acid" size="lg" asChild>
          <a href="#start">
            Start building <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="wire" size="lg" asChild>
          <a href="#docs">Read the docs</a>
        </Button>
      </div>
      <pre className="mx-auto mt-10 max-w-md border border-border bg-card/40 px-4 py-3 text-left font-mono text-[12px] text-muted-foreground">
        <span className="text-primary">$</span> npm i @llmhub/sdk
      </pre>
    </div>
  </section>
);