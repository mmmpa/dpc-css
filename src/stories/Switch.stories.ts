// src/stories/Switch.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface SwitchArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'success' | 'warning' | 'danger';
}

const meta: Meta<SwitchArgs> = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
      description: 'Color variant when checked',
    },
  },
  render: (args) => {
    const sizeClass = args.size !== 'md' ? `dpc-switch--${args.size}` : '';
    const variantClass = args.variant !== 'default' ? `dpc-switch--${args.variant}` : '';
    const checkedAttr = args.checked ? 'checked' : '';
    const disabledAttr = args.disabled ? 'disabled' : '';

    return `<label class="dpc-switch ${sizeClass} ${variantClass}">
      <input type="checkbox" class="dpc-switch__input" ${checkedAttr} ${disabledAttr}>
      <span class="dpc-switch__track">
        <span class="dpc-switch__thumb"></span>
      </span>
      <span class="dpc-switch__label">${args.label}</span>
    </label>`;
  },
};

export default meta;
type Story = StoryObj<SwitchArgs>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
    size: 'md',
    variant: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    checked: true,
    disabled: false,
    size: 'md',
    variant: 'default',
  },
};

export const AllSizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <label class="dpc-switch dpc-switch--sm">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Small</span>
      </label>
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Default</span>
      </label>
      <label class="dpc-switch dpc-switch--lg">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Large</span>
      </label>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Default (Primary)</span>
      </label>
      <label class="dpc-switch dpc-switch--success">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Success</span>
      </label>
      <label class="dpc-switch dpc-switch--warning">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Warning</span>
      </label>
      <label class="dpc-switch dpc-switch--danger">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Danger</span>
      </label>
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input" disabled>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Disabled off</span>
      </label>
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input" checked disabled>
        <span class="dpc-switch__track">
          <span class="dpc-switch__thumb"></span>
        </span>
        <span class="dpc-switch__label">Disabled on</span>
      </label>
    </div>
  `,
};
