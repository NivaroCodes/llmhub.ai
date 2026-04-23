import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#what", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#docs", label: "Docs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#business", label: "Business" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile sheet open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop links — full inline list, no hamburger */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="text-[14px] text-foreground/70 transition-colors hover:text-foreground"
          >
            Log in
          </a>
          <Button variant="acid" size="sm" asChild>
            <a href="#start">Start free</a>
          </Button>
        </div>

        {/* Mobile / tablet — show inline CTA + tiny "Menu" word, NO hamburger icon */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="acid" size="sm" asChild className="h-9 px-3">
            <a href="#start">Start free</a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="relative inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-[13px] font-medium text-foreground"
          >
            <span className="relative inline-block h-3 w-3.5">
              <span
                className={`absolute left-0 right-0 top-[3px] h-px bg-foreground transition-transform ${
                  open ? "translate-y-[2px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-[3px] left-0 right-0 h-px bg-foreground transition-transform ${
                  open ? "-translate-y-[2px] -rotate-45" : ""
                }`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Full-bleed sheet — Claude / OpenAI style */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 origin-top overflow-y-auto bg-background transition-[opacity,transform] duration-200 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-editorial flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border py-4 text-[22px] font-[600] tracking-tight text-foreground"
            >
              {l.label}
              <ArrowUpRight className="h-5 w-5 text-foreground/40" />
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="acid" size="lg" asChild>
              <a href="#start" onClick={() => setOpen(false)}>
                Start free
              </a>
            </Button>
            <Button variant="wire" size="lg" asChild>
              <a href="#login" onClick={() => setOpen(false)}>
                Log in
              </a>
            </Button>
          </div>
          <p className="mt-8 text-[12px] text-foreground/50">
            © {new Date().getFullYear()} LLMHub, Inc.
          </p>
        </div>
      </div>
    </header>
  );
};
