import { LegalLayout, Section } from "./legal/LegalLayout";

const Privacy = () => (
  <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="April 2026">
    <p>
      LLMHub ("we", "our") provides an LLM orchestration layer for developers and
      businesses. This policy explains what we collect, why we collect it, and how
      you stay in control of your data.
    </p>
    <Section title="What we collect">
      <p>
        Account data (email, organization), billing metadata, and operational
        telemetry strictly required to route, cache, and bill your requests.
      </p>
      <p>
        Request and response payloads are processed in memory to fulfill your
        call. We do not persist payload contents unless you explicitly enable
        request logging in your project settings.
      </p>
    </Section>
    <Section title="Caching">
      <p>
        When semantic or exact caching is enabled, hashed prompt fingerprints and
        the resulting completion are stored in your project's isolated cache.
        You can purge the cache at any time from the dashboard or via the API.
      </p>
    </Section>
    <Section title="Third-party providers">
      <p>
        Requests are forwarded to the model provider you select (OpenAI,
        Anthropic, Mistral, your local endpoint, etc.). Each provider's own
        privacy terms apply to the data forwarded to them.
      </p>
    </Section>
    <Section title="Your rights">
      <p>
        You can export or delete your account data at any time. Contact us at
        the email listed on the Contact page to exercise GDPR / CCPA rights.
      </p>
    </Section>
    <Section title="Contact">
      <p>
        Questions about this policy? Reach the team via the channels on the
        Contact page.
      </p>
    </Section>
  </LegalLayout>
);

export default Privacy;