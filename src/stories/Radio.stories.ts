// src/stories/Radio.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface RadioArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
  variant: "default" | "success" | "warning" | "danger";
}

const meta: Meta<RadioArgs> = {
  title: "Components/Radio",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Radio label",
    },
    checked: {
      control: "boolean",
      description: "Checked state",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger"],
      description: "Color variant",
    },
  },
  render: (args) => {
    const variantClass =
      args.variant !== "default" ? `dpc-radio--${args.variant}` : "";
    const checkedAttr = args.checked ? "checked" : "";
    const disabledAttr = args.disabled ? "disabled" : "";

    return `<label class="dpc-radio ${variantClass}">
      <input type="radio" class="dpc-radio__input" name="single" ${checkedAttr} ${disabledAttr}>
      <span class="dpc-radio__circle"></span>
      <span class="dpc-radio__label">${args.label}</span>
    </label>`;
  },
};

export default meta;
type Story = StoryObj<RadioArgs>;

export const Default: Story = {
  args: {
    label: "Option A",
    checked: false,
    disabled: false,
    variant: "default",
  },
};

export const Checked: Story = {
  args: {
    label: "Selected option",
    checked: true,
    disabled: false,
    variant: "default",
  },
};

export const RadioGroup: Story = {
  render: () => `
    <div class="dpc-radio-group">
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="plan" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Basic Plan</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="plan">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Pro Plan</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="plan">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Enterprise Plan</span>
      </label>
    </div>
  `,
};

export const InlineGroup: Story = {
  render: () => `
    <div class="dpc-radio-group dpc-radio-group--inline">
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="size" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Small</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="size">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Medium</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="size">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Large</span>
      </label>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="v1" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Default (Primary)</span>
      </label>
      <label class="dpc-radio dpc-radio--success">
        <input type="radio" class="dpc-radio__input" name="v2" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Success</span>
      </label>
      <label class="dpc-radio dpc-radio--warning">
        <input type="radio" class="dpc-radio__input" name="v3" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Warning</span>
      </label>
      <label class="dpc-radio dpc-radio--danger">
        <input type="radio" class="dpc-radio__input" name="v4" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Danger</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" class="dpc-radio__input" name="v5" disabled>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Disabled</span>
      </label>
    </div>
  `,
};
