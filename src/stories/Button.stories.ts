// src/stories/Button.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface ButtonArgs {
  variant:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "outline-primary"
    | "outline-success"
    | "outline-warning"
    | "outline-danger";
  size: "sm" | "md" | "lg";
  label: string;
  disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "warning",
        "danger",
        "outline-primary",
        "outline-success",
        "outline-warning",
        "outline-danger",
      ],
      description: "Button color variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    label: {
      control: "text",
      description: "Button text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  render: (args) => {
    const variantClass = `dpc-button--${args.variant}`;
    const sizeClass = args.size !== "md" ? `dpc-button--${args.size}` : "";
    const disabledAttr = args.disabled ? "disabled" : "";

    return `<button class="dpc-button ${variantClass} ${sizeClass}" ${disabledAttr}>
      ${args.label}
    </button>`;
  },
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Primary Button",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
    label: "Success Button",
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "md",
    label: "Warning Button",
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    label: "Danger Button",
    disabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    variant: "outline-primary",
    size: "md",
    label: "Outline Primary",
    disabled: false,
  },
};

export const OutlineSuccess: Story = {
  args: {
    variant: "outline-success",
    size: "md",
    label: "Outline Success",
    disabled: false,
  },
};

export const OutlineWarning: Story = {
  args: {
    variant: "outline-warning",
    size: "md",
    label: "Outline Warning",
    disabled: false,
  },
};

export const OutlineDanger: Story = {
  args: {
    variant: "outline-danger",
    size: "md",
    label: "Outline Danger",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Button",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Disabled Button",
    disabled: true,
  },
};
