// src/stories/Checkbox.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface CheckboxArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
  variant: "default" | "success" | "warning" | "danger";
}

const meta: Meta<CheckboxArgs> = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Checkbox label",
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
      args.variant !== "default" ? `dpc-checkbox--${args.variant}` : "";
    const checkedAttr = args.checked ? "checked" : "";
    const disabledAttr = args.disabled ? "disabled" : "";

    return `<label class="dpc-checkbox ${variantClass}">
      <input type="checkbox" class="dpc-checkbox__input" ${checkedAttr} ${disabledAttr}>
      <span class="dpc-checkbox__box"></span>
      <span class="dpc-checkbox__label">${args.label}</span>
    </label>`;
  },
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  args: {
    label: "Remember me",
    checked: false,
    disabled: false,
    variant: "default",
  },
};

export const Checked: Story = {
  args: {
    label: "I agree to terms",
    checked: true,
    disabled: false,
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    checked: false,
    disabled: true,
    variant: "default",
  },
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <label class="dpc-checkbox">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Default (Primary)</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--success">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Success</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--warning">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Warning</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--danger">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Danger</span>
      </label>
      <label class="dpc-checkbox">
        <input type="checkbox" class="dpc-checkbox__input" disabled>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Disabled unchecked</span>
      </label>
      <label class="dpc-checkbox">
        <input type="checkbox" class="dpc-checkbox__input" checked disabled>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Disabled checked</span>
      </label>
    </div>
  `,
};
