import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps) => ({
  viewBox: "0 0 24 24",
  width: 18,
  height: 18,
  fill: "currentColor",
  ...p,
});

export const OpenAIIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22.28 9.82a5.95 5.95 0 0 0-.51-4.91 6.04 6.04 0 0 0-6.5-2.9A6.06 6.06 0 0 0 4.99 4.18a5.99 5.99 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.97 5.97 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.99 5.99 0 0 0 4.51 2.01 6.06 6.06 0 0 0 5.78-4.19 5.99 5.99 0 0 0 3.99-2.9 6.06 6.06 0 0 0-.76-7.09zM13.27 21.4a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.51 4.51 0 0 1-4.49 4.5zM3.6 17.27a4.48 4.48 0 0 1-.54-3.03l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.14-1.63zM2.34 7.9a4.48 4.48 0 0 1 2.36-1.97v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.07.07 0 0 1-.07 0L4.04 14.03A4.5 4.5 0 0 1 2.34 7.9zm16.62 3.86L13.13 8.4l2.02-1.16a.07.07 0 0 1 .07 0l4.83 2.78a4.5 4.5 0 0 1-.68 8.1v-5.68a.78.78 0 0 0-.41-.68zm2.01-3.04-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.43 9.22V6.89a.07.07 0 0 1 .03-.06l4.83-2.78a4.5 4.5 0 0 1 6.68 4.66zM8.33 13.4 6.31 12.23a.07.07 0 0 1-.03-.06V6.6a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.74 5.99a.78.78 0 0 0-.39.68zm1.1-2.36L12.03 9.5l2.6 1.5v3l-2.6 1.5-2.6-1.5z"/>
  </svg>
);

export const AnthropicIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.4 4h3.2l4.6 16h-3l-1-3.6H6.5L5.5 20h-3L7.4 4zm-.2 9.6h3.2L8.8 7.8 7.2 13.6zM16 4h3.1l4.5 16h-3l-1-3.6h-4.7L13.9 20h-3L16 4z"/>
  </svg>
);

export const MistralIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="3.5" height="18"/>
    <rect x="17.5" y="3" width="3.5" height="18"/>
    <rect x="3" y="3" width="6.5" height="3.5"/>
    <rect x="14.5" y="3" width="6.5" height="3.5"/>
    <rect x="6.5" y="9" width="11" height="3.5"/>
    <rect x="3" y="14.5" width="6.5" height="3.5"/>
    <rect x="14.5" y="14.5" width="6.5" height="3.5"/>
  </svg>
);

export const MetaLlamaIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 12c0-3 2-5 4.5-5 2 0 3.4 1.3 5 4 1.3 2.2 2.2 3 3 3 .9 0 1.5-.7 1.5-2 0-1.4-.7-2.5-1.6-2.5-.5 0-.9.2-1.4.6l-1.3-1.6C12.6 7.6 13.7 7 15 7c2.3 0 4 2 4 5 0 2.7-1.5 4.5-3.7 4.5-1.7 0-2.9-1-4.5-3.7C9.3 10.4 8.4 9.5 7.4 9.5c-1 0-1.7 1-1.7 2.5 0 1.5.7 2.5 1.7 2.5.4 0 .8-.1 1.2-.4l1.3 1.6c-.7.5-1.6.8-2.5.8C4 16.5 2 14.7 2 12z"/>
  </svg>
);

export const GoogleGeminiIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2c.4 5.6 4.4 9.6 10 10-5.6.4-9.6 4.4-10 10-.4-5.6-4.4-9.6-10-10 5.6-.4 9.6-4.4 10-10z"/>
  </svg>
);

export const CohereIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" fillOpacity="0.15"/>
    <circle cx="12" cy="6.5" r="2"/>
    <circle cx="12" cy="17.5" r="2"/>
    <circle cx="6.5" cy="12" r="2"/>
    <circle cx="17.5" cy="12" r="2"/>
  </svg>
);

export const GroqIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>
  </svg>
);

export const PerplexityIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const DeepSeekIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12c4 0 7-3 7-7 0 4 3 7 7 7-4 0-7 3-7 7 0-4-3-7-7-7z"/>
    <circle cx="18" cy="6" r="2"/>
  </svg>
);

export const XAIIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 3h4l4.5 6.2L16 3h4l-7 9.4L21 21h-4l-5-6.8L7 21H3l8-10.6L3 3z"/>
  </svg>
);

export const TogetherIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="8" r="3"/>
    <circle cx="16" cy="8" r="3"/>
    <circle cx="8" cy="16" r="3"/>
    <circle cx="16" cy="16" r="3"/>
  </svg>
);

export const LocalIcon = (p: IconProps) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2"/>
    <path d="M8 20h8M12 16v4"/>
  </svg>
);