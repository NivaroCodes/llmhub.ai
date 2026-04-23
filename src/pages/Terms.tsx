import { LegalLayout, Section } from "./legal/LegalLayout";

const Terms = () => (
  <LegalLayout eyebrow="Legal" title="Terms of Service" updated="April 2026">
    <p>
      By accessing LLMHub you agree to these Terms. They cover acceptable use,
      billing, and the limited warranties we provide for the orchestration
      service.
    </p>
    <Section title="The service">
      <p>
        LLMHub is an API gateway that routes your requests to one or more
        third-party model providers. We do not generate model output ourselves;
        we route, cache, and observe.
      </p>
    </Section>
    <Section title="Acceptable use">
      <p>
        You may not use LLMHub to violate the law, infringe rights of others,
        generate CSAM, or build systems designed to defeat the safety policies
        of upstream providers.
      </p>
    </Section>
    <Section title="Billing">
      <p>
        Paid plans are billed monthly. Overages on the Free and Pro tiers fall
        back to your configured spend limit. You can cancel at any time; access
        continues until the end of the paid period.
      </p>
    </Section>
    <Section title="Service availability">
      <p>
        We target 99.97% monthly uptime. Scale customers receive credits for
        any breach of that target as documented in their order form.
      </p>
    </Section>
    <Section title="Liability">
      <p>
        To the maximum extent permitted by law, LLMHub's aggregate liability is
        limited to the fees you paid in the prior twelve months.
      </p>
    </Section>
    <Section title="Changes">
      <p>
        We may update these Terms. Material changes will be announced in the
        dashboard at least 30 days before they take effect.
      </p>
    </Section>
  </LegalLayout>
);

export default Terms;