import { Instagram, Send, Mail, ArrowUpRight } from "lucide-react";
import { LegalLayout } from "./legal/LegalLayout";

const channels = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@nivaro_codes",
    href: "https://instagram.com/nivaro_codes",
    desc: "Behind-the-scenes, product updates, and short demos.",
  },
  {
    icon: Send,
    label: "Telegram",
    handle: "@software_scientict",
    href: "https://t.me/software_scientict",
    desc: "Fastest channel for direct questions and integrations.",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@llmhub.dev",
    href: "mailto:hello@llmhub.dev",
    desc: "For partnerships, press, and procurement.",
  },
];

const Contact = () => (
  <LegalLayout eyebrow="Get in touch" title="Talk to the team behind LLMHub">
    <p>
      We answer every message. The fastest way to reach us is Telegram —
      Instagram and email work too.
    </p>
    <ul className="not-prose grid gap-4 pt-4 sm:grid-cols-2">
      {channels.map((c) => {
        const Icon = c.icon;
        return (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="group flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </p>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-1 text-[17px] font-[600] tracking-tight text-foreground">
                  {c.handle}
                </p>
                <p className="mt-1 text-[14px] text-muted-foreground">{c.desc}</p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  </LegalLayout>
);

export default Contact;