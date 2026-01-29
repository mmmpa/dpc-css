// src/stories/Alert.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface AlertArgs {
  variant: "info" | "success" | "warning" | "danger";
  message: string;
  showIcon: boolean;
}

const meta: Meta<AlertArgs> = {
  title: "Components/Alert",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
      description: "Alert type",
    },
    message: {
      control: "text",
      description: "Alert message",
    },
    showIcon: {
      control: "boolean",
      description: "Show icon",
    },
  },
  render: (args) => {
    const icons: Record<string, string> = {
      info: "ℹ",
      success: "✓",
      warning: "⚠",
      danger: "✕",
    };

    const iconHtml = args.showIcon
      ? `<span class="dpc-alert__icon">${icons[args.variant]}</span>`
      : "";

    return `<div class="dpc-alert dpc-alert--${args.variant}">
      ${iconHtml}
      <span class="dpc-alert__content">${args.message}</span>
    </div>`;
  },
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const Info: Story = {
  args: {
    variant: "info",
    message: "This is an informational message.",
    showIcon: true,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Operation completed successfully!",
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Please review before continuing.",
    showIcon: true,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    message: "An error has occurred.",
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "info",
    message: "Alert without an icon.",
    showIcon: false,
  },
};
