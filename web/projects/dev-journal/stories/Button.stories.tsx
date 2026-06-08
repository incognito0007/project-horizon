import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click me",
    variant: "primary",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Save Entry",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Cancel",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Cannot Submit",
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    label: "Unavailable",
  },
};
