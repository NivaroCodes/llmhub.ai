import { useEffect, useRef } from "react";

/**
 * Live, animated mesh backdrop on white.
 * - Soft drifting blobs (Perlin-ish via summed sines) on canvas
 * - Faint grid mask overlay
 * - Sparse floating dots
 * Performance: 1 rAF, throttled to ~40fps, pauses when tab hidden.
 */
export const AnimatedBackdrop = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let last = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const blobs = [
      { hue: 230, sx: 0.18, sy: 0.32, r: 320, ax: 0.35, ay: 0.22, fx: 0.00012, fy: 0.00017, a: 0.22 },
      { hue: 28,  sx: 0.78, sy: 0.28, r: 360, ax: 0.30, ay: 0.18, fx: 0.00009, fy: 0.00021, a: 0.18 },
      { hue: 280, sx: 0.55, sy: 0.78, r: 380, ax: 0.28, ay: 0.20, fx: 0.00014, fy: 0.00011, a: 0.18 },
      { hue: 170, sx: 0.30, sy: 0.70, r: 300, ax: 0.20, ay: 0.18, fx: 0.00018, fy: 0.00013, a: 0.16 },
    ];

    const draw = (t: number) => {
      if (!running) return;
      if (t - last < 25) {
        raf = requestAnimationFrame(draw);
        return;
      }
      last = t;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      for (const b of blobs) {
        const cx = w * (b.sx + Math.sin(t * b.fx) * b.ax * 0.3);
        const cy = h * (b.sy + Math.cos(t * b.fy) * b.ay * 0.3);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        grad.addColorStop(0, `hsla(${b.hue}, 90%, 70%, ${b.a})`);
        grad.addColorStop(1, `hsla(${b.hue}, 90%, 70%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas
        ref={ref}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "blur(40px) saturate(1.05)" }}
      />
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(0 0% 0% / 0.045) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 0% / 0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, #000 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, #000 35%, transparent 80%)",
        }}
      />
      {/* Bottom fade into white */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
};