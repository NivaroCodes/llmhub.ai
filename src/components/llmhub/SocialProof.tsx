export const SocialProof = () => {
  const labels = ["NORTHWIND", "STRATA", "PARALLAX", "OBSCURA", "HELIOGRAPH", "RUNWAY"];
  return (
    <section className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by early teams
        </p>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-6">
          {labels.map((l) => (
            <div
              key={l}
              className="flex h-20 items-center justify-center bg-background font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};