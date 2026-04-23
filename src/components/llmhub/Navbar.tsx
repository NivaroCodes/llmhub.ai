import { useEffect, useState } from "react";

const links = [
  { href: "#what", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      {/* Dynamic Island — single floating pill, centered, contains everything */}
      <nav
        aria-label="Primary"
        className={`pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-black/45 px-2 py-2 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 sm:gap-2 ${
          scrolled ? "scale-[0.98] bg-black/60" : ""
        }`}
      >
        {/* Brand mark */}
        <a
          href="#top"
          aria-label="LLMHub home"
          className="ml-1 mr-1 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15 sm:ml-2"
        >
          <svg
            viewBox="0 0 28 28"
            aria-hidden
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
            <circle cx="4" cy="7" r="1.6" />
            <circle cx="24" cy="9" r="1.6" />
            <circle cx="14" cy="25" r="1.6" />
            <path d="M5.3 7.7 L11.2 12.4" />
            <path d="M22.7 9.7 L16.7 12.7" />
            <path d="M14 22 L14 17" />
          </svg>
        </a>

        {/* Center links — visible from sm up; on phones we show only Pricing + Docs to keep island compact */}
        <ul className="flex items-center">
          {links.map((l, i) => (
            <li key={l.href} className={i > 1 ? "hidden sm:block" : ""}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[14px]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs inside the island */}
        <a
          href="#login"
          className="hidden rounded-full px-3 py-1.5 text-[13px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:inline-block sm:text-[14px]"
        >
          Log in
        </a>
        <a
          href="#start"
          className="ml-0.5 inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] font-semibold text-black transition-transform hover:scale-[1.03] sm:ml-1 sm:h-9 sm:px-4 sm:text-[14px]"
        >
          Start free
        </a>
      </nav>
    </header>
  );
};
