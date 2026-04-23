import {
  OpenAIIcon,
  AnthropicIcon,
  MistralIcon,
  MetaLlamaIcon,
  GoogleGeminiIcon,
  CohereIcon,
  GroqIcon,
  PerplexityIcon,
  DeepSeekIcon,
  XAIIcon,
  TogetherIcon,
  LocalIcon,
} from "./ProviderIcons";

const items = [
  { label: "OpenAI", Icon: OpenAIIcon },
  { label: "Anthropic", Icon: AnthropicIcon },
  { label: "Mistral", Icon: MistralIcon },
  { label: "Llama", Icon: MetaLlamaIcon },
  { label: "Google Gemini", Icon: GoogleGeminiIcon },
  { label: "Cohere", Icon: CohereIcon },
  { label: "Groq", Icon: GroqIcon },
  { label: "Perplexity", Icon: PerplexityIcon },
  { label: "DeepSeek", Icon: DeepSeekIcon },
  { label: "xAI", Icon: XAIIcon },
  { label: "Together", Icon: TogetherIcon },
  { label: "Local models", Icon: LocalIcon },
];

export const WorksWithCarousel = () => {
  const row = [...items, ...items];
  return (
    <div
      className="relative mx-auto max-w-[920px] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-3 py-2">
        {row.map(({ label, Icon }, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 backdrop-blur transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Icon className="h-[16px] w-[16px] text-foreground/85" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};