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
    <p className="eyebrow">✦ {eyebrow}</p>
    <h2 className="mt-4 text-balance text-[34px] font-[650] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-[17px] leading-[1.55] text-muted-foreground sm:text-[18px]">
        {description}
      </p>
    )}
  </motion.div>
);
