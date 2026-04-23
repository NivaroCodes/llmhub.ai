import { motion } from "framer-motion";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="LLMHub home">
    <motion.span
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 90 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="grid h-7 w-7 place-items-center border border-primary/60 bg-primary/10"
    >
      <span className="block h-2 w-2 bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
    </motion.span>
    <span className="font-mono text-sm font-semibold tracking-tight">
      LLM<span className="text-primary">Hub</span>
    </span>
  </a>
);