// src/stories/Select.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface SelectArgs {
  size: 'sm' | 'md' | 'lg';
  state: 'default' | 'success' | 'error';
  disabled: boolean;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size',
    },
    state: {
      control: 'select',
      options: ['default', 'success', 'error'],
      description: 'Validation state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  render: (args) => {
    const sizeClass = args.size !== 'md' ? `dpc-select--${args.size}` : '';
    const stateClass = args.state !== 'default' ? `dpc-select--${args.state}` : '';
    const disabledAttr = args.disabled ? 'disabled' : '';

    return `<div class="dpc-select ${sizeClass} ${stateClass}" style="width: 250px;">
      <select class="dpc-select__input" ${disabledAttr}>
        <option value="">Choose an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <span class="dpc-select__icon"></span>
    </div>`;
  },
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const Default: Story = {
  args: {
    size: 'md',
    state: 'default',
    disabled: false,
  },
};

export const AllSizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Small:</p>
        <div class="dpc-select dpc-select--sm" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="">Choose...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default:</p>
        <div class="dpc-select" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="">Choose...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Large:</p>
        <div class="dpc-select dpc-select--lg" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="">Choose...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
    </div>
  `,
};

export const ValidationStates: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default:</p>
        <div class="dpc-select" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="">Choose...</option>
            <option value="1">Option 1</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Success:</p>
        <div class="dpc-select dpc-select--success" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="1">Valid selection</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Error:</p>
        <div class="dpc-select dpc-select--error" style="width: 200px;">
          <select class="dpc-select__input">
            <option value="">Please select...</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Disabled:</p>
        <div class="dpc-select" style="width: 200px;">
          <select class="dpc-select__input" disabled>
            <option value="">Disabled</option>
          </select>
          <span class="dpc-select__icon"></span>
        </div>
      </div>
    </div>
  `,
};
