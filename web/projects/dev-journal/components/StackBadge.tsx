import type { Stack } from "@/types/journal";

export interface StackBadgeProps {
  stack: Stack;
}

const colourMap: Record<Stack, { bg: string; text: string }> = {
  React: { bg: "#E6F1FB", text: "#0C447C" },
  "Next.js": { bg: "#EEEDFE", text: "#3C3489" },
  TypeScript: { bg: "#E1F5EE", text: "#085041" },
  Storybook: { bg: "#FBEAF0", text: "#72243E" },
  "C#": { bg: "#FAEEDA", text: "#633806" },
  Java: { bg: "#FAECE7", text: "#712B13" },
};

export function StackBadge({ stack }: StackBadgeProps) {
  const { bg, text } = colourMap[stack];
  return (
    <span
      style={{
        background: bg,
        color: text,
        fontSize: "11px",
        fontWeight: 500,
        padding: "2px 8px",
        borderRadius: "4px",
        display: "inline-block",
      }}
    >
      {stack}
    </span>
  );
}
