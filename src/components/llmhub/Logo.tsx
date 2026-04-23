export const Logo = ({ className = "" }: { className?: string }) => (
  <a
    href="#top"
    className={`inline-flex items-center gap-1.5 text-[15px] font-semibold tracking-tight text-foreground ${className}`}
    aria-label="LLMHub home"
  >
    <span aria-hidden className="text-foreground">✦</span>
    LLMHub
  </a>
);