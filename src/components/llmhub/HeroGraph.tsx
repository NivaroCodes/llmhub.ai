import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Provider = { id: string; label: string; x: number; y: number };

const providers: Provider[] = [
  { id: "openai", label: "OpenAI", x: 78, y: 12 },
  { id: "anthropic", label: "Anthropic", x: 88, y: 38 },
  { id: "mistral", label: "Mistral", x: 88, y: 64 },
  { id: "llama", label: "Llama", x: 78, y: 88 },
  { id: "local", label: "Local", x: 50, y: 96 },
];

const sources = [
  { id: "app", label: "App", x: 12, y: 22 },
  { id: "agent", label: "Agent", x: 6, y: 50 },
  { id: "edge", label: "Edge", x: 12, y: 78 },
];

const hub = { x: 50, y: 50 };

export const HeroGraph = () => {
  const reduce = useReducedMotion();

  const particles = useMemo(
    () =>
      providers.map((p, i) => ({
        ...p,
        delay: i * 0.4,
      })),
    [],
  );

  return (
    <div className="relative aspect-square w-full overflow-hidden border border-border bg-card/40">
      {/* corner ticks */}
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((c, i) => (
        <span key={i} className={`pointer-events-none absolute h-3 w-3 border-primary ${c}`} />
      ))}

      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle cx={hub.x} cy={hub.y} r="22" fill="url(#hubGlow)" />

        {[...sources, ...providers].map((n) => (
          <line
            key={`l-${n.id}`}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke="hsl(var(--border))"
            strokeWidth="0.2"
          />
        ))}

        {!reduce &&
          particles.map((p) => (
            <motion.circle
              key={`p-${p.id}`}
              r="0.7"
              fill="hsl(var(--primary))"
              initial={{ cx: hub.x, cy: hub.y, opacity: 0 }}
              animate={{ cx: [hub.x, p.x], cy: [hub.y, p.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
            />
          ))}
        {!reduce &&
          sources.map((s, i) => (
            <motion.circle
              key={`ps-${s.id}`}
              r="0.7"
              fill="hsl(var(--accent))"
              initial={{ cx: s.x, cy: s.y, opacity: 0 }}
              animate={{ cx: [s.x, hub.x], cy: [s.y, hub.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.5 + 0.2, ease: "easeIn" }}
            />
          ))}
      </svg>

      {/* nodes */}
      {sources.map((s) => (
        <NodeChip key={s.id} {...s} kind="source" />
      ))}
      {providers.map((p) => (
        <NodeChip key={p.id} {...p} kind="provider" />
      ))}

      {/* hub */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="relative grid h-16 w-16 place-items-center border border-primary/60 bg-background">
            <span className="absolute inset-0 animate-pulse-acid bg-primary/10" />
            <span className="font-mono text-[10px] font-semibold tracking-widest text-primary">LLMHUB</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            v1.0 · routing
          </span>
        </div>
      </div>

      {/* status line */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between border border-border bg-background/70 px-2 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-acid bg-primary" /> live
        </span>
        <span>p50 184ms · cache 72%</span>
      </div>
    </div>
  );
};

const NodeChip = ({
  x,
  y,
  label,
  kind,
}: {
  x: number;
  y: number;
  label: string;
  kind: "source" | "provider";
}) => (
  <div
    className="absolute -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className="flex flex-col items-center gap-1">
      <span
        className={`h-2 w-2 ${
          kind === "provider" ? "bg-primary" : "bg-accent"
        } shadow-[0_0_8px_currentColor]`}
      />
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  </div>
);