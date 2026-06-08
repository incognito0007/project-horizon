import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EntryCard } from "@/components/EntryCard";
import type { JournalEntry } from "@/types/journal";

// Realistic mock entries
const mockEntries: Record<string, JournalEntry> = {
  great: {
    id: "1",
    date: new Date("2026-06-01").toISOString(),
    title: "Learned JSX and Components",
    summary:
      "Understood how JSX compiles to React.createElement and built my first functional component with props.",
    stack: ["React", "TypeScript"],
    mood: "great",
    timeSpentMins: 60,
  },
  okay: {
    id: "2",
    date: new Date("2026-06-02").toISOString(),
    title: "TypeScript Generics",
    summary:
      "Explored generic functions and interfaces. Still getting used to the syntax.",
    stack: ["TypeScript"],
    mood: "okay",
    timeSpentMins: 45,
  },
  struggling: {
    id: "3",
    date: new Date("2026-06-03").toISOString(),
    title: "Next.js App Router",
    summary:
      "Layouts and nested routing are confusing. Need to revisit tomorrow.",
    stack: ["Next.js", "React"],
    mood: "struggling",
    timeSpentMins: 90,
  },
  multiStack: {
    id: "4",
    date: new Date("2026-06-04").toISOString(),
    title: "Full Stack Day",
    summary:
      "Connected Next.js frontend to a C# API. Spent time on CORS and JSON serialisation.",
    stack: ["React", "Next.js", "TypeScript", "C#"],
    mood: "great",
    timeSpentMins: 120,
  },
};

const meta: Meta<typeof EntryCard> = {
  title: "Components/EntryCard",
  component: EntryCard,
  tags: ["autodocs"],
  // Decorator — wraps card in a realistic max-width container
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EntryCard>;

export const Default: Story = {
  args: {
    entry: mockEntries.great,
  },
};

export const MoodOkay: Story = {
  args: {
    entry: mockEntries.okay,
  },
};

export const MoodStruggling: Story = {
  args: {
    entry: mockEntries.struggling,
  },
};

export const MultipleStacks: Story = {
  args: {
    entry: mockEntries.multiStack,
  },
};
