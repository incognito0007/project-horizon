import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MoodIndicator } from "@/components/MoodIndicator";

const meta: Meta<typeof MoodIndicator> = {
  title: "Components/MoodIndicator",
  component: MoodIndicator,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MoodIndicator>;

export const Great: Story = {
  args: { mood: "great" },
};

export const Okay: Story = {
  args: { mood: "okay" },
};

export const Struggling: Story = {
  args: { mood: "struggling" },
};
