import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import {
  OpenAIIcon,
  AnthropicIcon,
  GoogleGeminiIcon,
  MistralIcon,
  MetaLlamaIcon,
  GroqIcon,
} from "./ProviderIcons";

/**
 * Live Architecture
 * - Left: animated diagram. A glowing central hub with particles flowing
 *   along curved paths to provider nodes around it.
 * - Right: a "live" chat / code panel that types itself out.
 */

const providers = [
  { label: "OpenAI", Icon: OpenAIIcon, angle: -150 },
  { label: "Anthropic", Icon: AnthropicIcon, angle: -90 },
  { label: "Gemini", Icon: GoogleGeminiIcon, angle: -30 },
  { label: "Mistral", Icon: MistralIcon, angle: 30 },
  { label: "Llama", Icon: MetaLlamaIcon, angle: 90 },
  { label: "Groq", Icon: GroqIcon, angle: 150 },
];

const W = 520;
const H = 420;
const CX = W / 2;
const CY = H / 2;
const R = 165;

const polar = (angleDeg: number, radius: number) => {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(a) * radius, y: CY + Math.sin(a) * radius };
};

const curvePath = (toX: number, toY: number) => {
  // gentle quadratic curve from hub to target
  const mx = (CX + toX) / 2;
  const my = (CY + toY) / 2;
  const dx = toX - CX;
  const dy = toY - CY;
  // perpendicular offset for curvature
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const bend = 26;
  const cx = mx + nx * bend;
  const cy = my + ny * bend;
  return `M ${CX} ${CY} Q ${cx} ${cy} ${toX} ${toY}`;
};

const Diagram = () => {
  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="LLMHub routes one request to many providers"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0 0% 0%)" stopOpacity="0.18" />
            <stop offset="60%" stopColor="hsl(0 0% 0%)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0 0% 0%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft hub halo */}
        <circle cx={CX} cy={CY} r={120} fill="url(#hubGlow)" />

        {/* connection paths + flowing particles */}
        {providers.map((p, i) => {
          const pt = polar(p.angle, R);
          const d = curvePath(pt.x, pt.y);
          const id = `path-${i}`;
          return (
            <g key={p.label}>
              <path
                id={id}
                d={d}
                fill="none"
                stroke="hsl(0 0% 0% / 0.14)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              {/* particle 1 */}
              <circle r={2.4} fill="hsl(0 0% 4%)">
                <animateMotion
                  dur={`${3.2 + (i % 3) * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.25}s`}
                  path={d}
                />
                <animate attributeName="opacity" values="0;1;1;0" dur={`${3.2 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.25}s`} />
              </circle>
              {/* particle 2 — staggered */}
              <circle r={1.8} fill="hsl(0 0% 4% / 0.55)">
                <animateMotion
                  dur={`${3.6 + (i % 2) * 0.4}s`}
                  repeatCount="indefinite"
                  begin={`${1 + i * 0.18}s`}
                  path={d}
                />
                <animate attributeName="opacity" values="0;1;1;0" dur={`${3.6 + (i % 2) * 0.4}s`} repeatCount="indefinite" begin={`${1 + i * 0.18}s`} />
              </circle>
            </g>
          );
        })}

        {/* central hub */}
        <g>
          <circle cx={CX} cy={CY} r={44} fill="hsl(0 0% 100%)" stroke="hsl(0 0% 0% / 0.12)" />
          <circle cx={CX} cy={CY} r={28} fill="hsl(0 0% 4%)" />
          {/* pulsing ring */}
          <circle cx={CX} cy={CY} r={44} fill="none" stroke="hsl(0 0% 4%)" strokeOpacity="0.25">
            <animate attributeName="r" values="44;58;44" dur="3.4s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.25;0;0.25" dur="3.4s" repeatCount="indefinite" />
          </circle>
          <text
            x={CX}
            y={CY + 4}
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="11"
            fontWeight={600}
            fill="hsl(0 0% 100%)"
            letterSpacing="1.5"
          >
            HUB
          </text>
        </g>
      </svg>

      {/* provider nodes (HTML for crisp icons + text) */}
      {providers.map((p) => {
        const pt = polar(p.angle, R);
        const left = (pt.x / W) * 100;
        const top = (pt.y / H) * 100;
        return (
          <div
            key={p.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[12px] font-medium text-foreground shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <p.Icon className="h-3.5 w-3.5 text-foreground/85" />
            {p.label}
          </div>
        );
      })}
    </div>
  );
};

/* ------------------------------ Live panel ------------------------------ */

type Step = { who: "user" | "hub"; text: string; code?: string };

const conversation: Step[] = [
  {
    who: "user",
    text: "Route this request to the cheapest model that can summarise legal text.",
  },
  {
    who: "hub",
    text: "Scoring 12 candidates… selecting Claude Haiku (cost $0.0008, p50 38ms).",
    code: `await hub.chat({
  model: "auto",
  policy: { task: "summarize", optimize: "cost" },
  messages,
})`,
  },
  {
    who: "user",
    text: "Now stream the answer with a fallback if it times out.",
  },
  {
    who: "hub",
    text: "Streaming via Groq · fallback → OpenAI gpt-4o-mini after 800ms.",
    code: `hub.stream(messages, {
  primary: "groq/llama-3.1-70b",
  fallback: ["openai/gpt-4o-mini"],
  timeoutMs: 800,
})`,
  },
];

const useTypewriter = (text: string, speed = 18, start = true) => {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!start) return;
    setOut("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, start]);
  return out;
};

const LivePanel = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // start when scrolled into view
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const step = conversation[index];
  const typed = useTypewriter(step.text, step.who === "hub" ? 14 : 22, visible);
  const done = typed.length === step.text.length;

  // advance to next step after current finishes
  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => {
      setIndex((i) => (i + 1) % conversation.length);
    }, step.code ? 2600 : 1400);
    return () => window.clearTimeout(t);
  }, [done, step.code, index]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-xl border border-border bg-background"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">live · llmhub.run</span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        {conversation.slice(0, index).map((s, i) => (
          <Bubble key={i} step={s} />
        ))}
        <Bubble step={{ ...step, text: typed }} typing={!done} />
      </div>
    </div>
  );
};

const Bubble = ({ step, typing = false }: { step: Step; typing?: boolean }) => {
  const isHub = step.who === "hub";
  return (
    <div className={`flex ${isHub ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[88%] rounded-lg px-3.5 py-2.5 text-[13.5px] leading-[1.55] ${
          isHub
            ? "bg-surface text-foreground"
            : "bg-foreground text-background"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
          {isHub ? "LLMHub" : "You"}
        </p>
        <p className="mt-1 whitespace-pre-wrap">
          {step.text}
          {typing && <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] bg-current opacity-80" style={{ animation: "blink 1s steps(1) infinite" }} />}
        </p>
        {isHub && step.code && step.text.length > 0 && (
          <pre className="mt-2.5 overflow-x-auto rounded-md border border-border bg-background p-3 font-mono text-[12px] leading-[1.6] text-foreground/85">
            <code>{step.code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

/* ------------------------------ Section ------------------------------ */

export const LiveArchitecture = () => (
  <section id="architecture" className="bg-surface py-[120px]">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Live architecture"
        title="One request, many providers — routed in real time"
        description="Watch a single call flow through LLMHub: scored against every connected model, sent to the best one, with automatic streaming and fallbacks."
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center"
      >
        <div className="relative rounded-xl border border-border bg-background p-4 sm:p-6">
          <Diagram />
        </div>
        <LivePanel />
      </motion.div>
    </div>
  </section>
);