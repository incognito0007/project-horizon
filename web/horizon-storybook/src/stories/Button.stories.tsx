import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/Button";

// Meta — tells Storybook about this component
const meta: Meta<typeof Button> = {
  title: "Components/Button", // how it appears in the sidebar
  component: Button,
  tags: ["autodocs"], // auto-generates a docs page
  args: {
    label: "Click me", // default args shared across all stories
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Delete Account",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Cannot Click",
  },
};
