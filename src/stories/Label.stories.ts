// src/stories/Label.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface LabelArgs {
  variant: "default" | "primary" | "success" | "warning" | "danger" | "info";
  text: string;
}

const meta: Meta<LabelArgs> = {
  title: "Components/Label",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
      description: "Label color variant",
    },
    text: {
      control: "text",
      description: "Label text",
    },
  },
  render: (args) => {
    const variantClass =
      args.variant !== "default" ? `dpc-label--${args.variant}` : "";
    return `<span class="dpc-label ${variantClass}">${args.text}</span>`;
  },
};

export default meta;
type Story = StoryObj<LabelArgs>;

export const Default: Story = {
  args: {
    variant: "default",
    text: "Default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Primary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    text: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Danger",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    text: "Info",
  },
};

export const WithHeadings: Story = {
  render: () => `
    <div>
      <h1>Heading 1 <span class="dpc-label dpc-label--primary">New</span></h1>
      <h2>Heading 2 <span class="dpc-label dpc-label--success">Updated</span></h2>
      <h3>Heading 3 <span class="dpc-label dpc-label--warning">Beta</span></h3>
      <h4>Heading 4 <span class="dpc-label dpc-label--danger">Deprecated</span></h4>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; align-items: center;">
      <span class="dpc-label">Default</span>
      <span class="dpc-label dpc-label--primary">Primary</span>
      <span class="dpc-label dpc-label--success">Success</span>
      <span class="dpc-label dpc-label--warning">Warning</span>
      <span class="dpc-label dpc-label--danger">Danger</span>
      <span class="dpc-label dpc-label--info">Info</span>
    </div>
  `,
};
