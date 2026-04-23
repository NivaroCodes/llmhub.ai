import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container-editorial flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} LLMHub, Inc.
        </span>
      </div>
      <nav className="flex flex-wrap gap-6 text-[13px] text-muted-foreground">
        <a href="#docs" className="hover:text-foreground">Docs</a>
        <a href="#pricing" className="hover:text-foreground">Pricing</a>
        <a href="#" className="hover:text-foreground">Privacy</a>
        <a href="#" className="hover:text-foreground">Terms</a>
        <a href="#" className="hover:text-foreground">Contact</a>
      </nav>
    </div>
  </footer>
);
