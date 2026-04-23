import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  format?: (n: number) => string;
  drift?: number; // fraction +/- to randomly nudge after settle, for "live" feel
};

const stats: Stat[] = [
  {
    label: "Requests Routed Daily",
    value: 2.4,
    decimals: 1,
    suffix: "M+",
    drift: 0.002,
  },
  {
    label: "Average Cost Reduction",
    value: 67,
    suffix: "%",
  },
  {
    label: "Median Routing Latency",
    value: 42,
    prefix: "<",
    suffix: "ms",
  },
  {
    label: "Uptime",
    value: 99.97,
    decimals: 2,
    suffix: "%",
  },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setN(stat.value * easeOut(p));
      if (p < 1) raf = requestAnimationFrame(tick);
      else if (stat.drift) {
        // gentle live wobble for "growing" feel
        const wobble = window.setInterval(() => {
          setN((cur) => {
            const delta = (Math.random() - 0.3) * stat.value * (stat.drift ?? 0);
            return Math.max(0, cur + delta);
          });
        }, 1800);
        return () => window.clearInterval(wobble);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value, stat.drift]);

  const decimals = stat.decimals ?? 0;
  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {n.toFixed(decimals)}
      {stat.suffix}
    </span>
  );
};

export const LiveStats = () => (
  <div className="mx-auto grid max-w-[960px] grid-cols-2 overflow-hidden rounded-xl border border-border bg-background/70 backdrop-blur md:grid-cols-4">
    {stats.map((s, i) => (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: i * 0.06 }}
        className={`flex flex-col items-start px-5 py-6 text-left sm:px-7 sm:py-8 ${
          i % 2 === 1 ? "border-l border-border" : ""
        } ${i >= 2 ? "border-t border-border md:border-t-0 md:border-l" : ""} ${
          i === 2 ? "md:border-l" : ""
        }`}
      >
        <span className="text-[28px] font-[650] tracking-tight text-foreground sm:text-[34px]">
          <Counter stat={s} />
        </span>
        <span className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[12.5px]">
          {s.label}
        </span>
      </motion.div>
    ))}
  </div>
);