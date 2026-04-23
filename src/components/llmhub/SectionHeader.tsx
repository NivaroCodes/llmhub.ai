import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12 max-w-2xl"
  >
    <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {eyebrow}
    </div>
    <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
    )}
  </motion.div>
);