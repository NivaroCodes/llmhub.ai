import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container-editorial flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} LLMHub, Inc.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
        <nav className="flex flex-wrap gap-6 text-[13px] text-muted-foreground">
          <a href="#docs" className="hover:text-foreground">Docs</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/nivaro_codes"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram @nivaro_codes"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/software_scientict"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram @software_scientict"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
