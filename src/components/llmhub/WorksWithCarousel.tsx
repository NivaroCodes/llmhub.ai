const items = [
  "OpenAI",
  "Anthropic",
  "Mistral",
  "Llama",
  "Google Gemini",
  "Cohere",
  "Groq",
  "Perplexity",
  "DeepSeek",
  "xAI",
  "Together",
  "Your local models",
];

export const WorksWithCarousel = () => {
  const row = [...items, ...items];
  return (
    <div
      className="relative mx-auto max-w-[920px] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap py-2">
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};