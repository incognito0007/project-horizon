import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StackBadge } from "@/components/StackBadge";

const meta: Meta<typeof StackBadge> = {
  title: "Components/StackBadge",
  component: StackBadge,
  tags: ["autodocs"],
  // Decorator — wraps every story in padding
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StackBadge>;

export const React: Story = {
  args: { stack: "React" },
};

export const NextJs: Story = {
  args: { stack: "Next.js" },
};

export const TypeScript: Story = {
  args: { stack: "TypeScript" },
};

export const Storybook: Story = {
  args: { stack: "Storybook" },
};

export const CSharp: Story = {
  args: { stack: "C#" },
};

export const Java: Story = {
  args: { stack: "Java" },
};
