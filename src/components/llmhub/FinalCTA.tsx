import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <section id="start" className="py-[120px]">
    <div className="container-editorial">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative isolate overflow-hidden rounded-lg border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-70" />
        <p className="eyebrow inline-flex items-center justify-center gap-2.5">
          <span aria-hidden className="inline-block h-px w-6 bg-foreground/40" />
          Get started
        </p>
        <h2 className="mx-auto mt-5 max-w-[18ch] text-balance text-[36px] font-[650] leading-[1.1] tracking-[-0.02em] sm:text-[48px]">
          Stop rewriting integrations for every model
        </h2>
        <p className="mx-auto mt-5 max-w-[36rem] text-[16px] leading-[1.55] text-muted-foreground sm:text-[17px]">
          Install the SDK, point your existing requests at LLMHub, and ship in an afternoon.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="acid" size="lg" asChild>
            <a href="#start">
              Start free <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <a
            href="#docs"
            className="inline-flex items-center gap-1.5 text-[15px] text-foreground underline-offset-4 hover:underline"
          >
            View docs
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
