import { Logo } from "./Logo";

const cols = [
  {
    h: "Product",
    items: ["Features", "Pricing", "Changelog", "Status"],
  },
  {
    h: "Developers",
    items: ["Docs", "SDKs", "API reference", "GitHub"],
  },
  {
    h: "Company",
    items: ["Blog", "Customers", "Careers", "Contact"],
  },
];

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The unified control layer for LLMs. Routing, caching, retries, observability.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            All systems operational
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 md:col-span-8">
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {c.h}
              </h4>
              <ul className="space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} LLMHub, Inc. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Security</a>
        </div>
      </div>
    </div>
  </footer>
);