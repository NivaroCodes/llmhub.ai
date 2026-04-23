import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/llmhub/Logo";
import { Footer } from "@/components/llmhub/Footer";

export const LegalLayout = ({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border">
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-[600] tracking-tight">LLMHub</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to home
        </Link>
      </div>
    </header>
    <main className="container-editorial py-20 sm:py-28">
      <p className="eyebrow flex items-center gap-2.5">
        <span aria-hidden className="inline-block h-px w-6 bg-foreground/40" />
        {eyebrow}
      </p>
      <h1 className="mt-5 text-balance text-[44px] font-[650] leading-[1.05] tracking-[-0.025em] sm:text-[60px]">
        {title}
      </h1>
      {updated && (
        <p className="mt-4 text-[13px] text-muted-foreground">Last updated · {updated}</p>
      )}
      <div className="prose-editorial mt-12 max-w-[68ch] space-y-8 text-[16px] leading-[1.7] text-foreground/80">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-[22px] font-[650] tracking-tight text-foreground sm:text-[26px]">
      {title}
    </h2>
    <div className="mt-3 space-y-3">{children}</div>
  </section>
);