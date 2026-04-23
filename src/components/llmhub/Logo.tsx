export const Logo = ({ className = "" }: { className?: string }) => (
  <a
    href="#top"
    className={`group inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground ${className}`}
    aria-label="LLMHub home"
  >
    <svg
      viewBox="0 0 28 28"
      aria-hidden
      className="h-6 w-6 text-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Three orbiting nodes routed into a central hub — unique, non-square mark */}
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="4" cy="7" r="1.6" />
      <circle cx="24" cy="9" r="1.6" />
      <circle cx="14" cy="25" r="1.6" />
      <path d="M5.3 7.7 L11.2 12.4" />
      <path d="M22.7 9.7 L16.7 12.7" />
      <path d="M14 22 L14 17" />
      <path
        d="M14 1.5 a12.5 12.5 0 0 1 10.8 6.2"
        className="opacity-30 transition-opacity group-hover:opacity-70"
      />
    </svg>
    <span className="leading-none">LLMHub</span>
  </a>
);