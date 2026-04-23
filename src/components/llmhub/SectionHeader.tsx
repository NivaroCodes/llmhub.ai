import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <p className={`eyebrow flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
      <span aria-hidden className="inline-block h-px w-6 bg-foreground/40" />
      {eyebrow}
    </p>
    <h2 className="mt-5 text-balance text-[40px] font-[650] leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[56px]">
      {title}
    </h2>
    {description && (
      <p className="mt-6 text-[18px] leading-[1.6] text-foreground/70 sm:text-[20px]">
        {description}
      </p>
    )}
  </motion.div>
);
