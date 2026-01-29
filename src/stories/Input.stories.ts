// src/stories/Input.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface InputArgs {
  state: "default" | "error" | "success";
  placeholder: string;
  value: string;
  disabled: boolean;
}

const meta: Meta<InputArgs> = {
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Input validation state",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  render: (args) => {
    const stateClass =
      args.state !== "default" ? `dpc-input--${args.state}` : "";
    const disabledAttr = args.disabled ? "disabled" : "";

    return `<input
      type="text"
      class="dpc-input ${stateClass}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      ${disabledAttr}
    />`;
  },
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {
  args: {
    state: "default",
    placeholder: "Enter text...",
    value: "",
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    state: "default",
    placeholder: "Enter text...",
    value: "Hello World",
    disabled: false,
  },
};

export const ErrorState: Story = {
  args: {
    state: "error",
    placeholder: "Invalid input",
    value: "invalid@",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    state: "success",
    placeholder: "Valid input",
    value: "valid@example.com",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    state: "default",
    placeholder: "Disabled input",
    value: "",
    disabled: true,
  },
};
