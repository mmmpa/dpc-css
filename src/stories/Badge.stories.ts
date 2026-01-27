// src/stories/Badge.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface BadgeArgs {
  variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  text: string;
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      description: 'Badge color variant',
    },
    text: {
      control: 'text',
      description: 'Badge text',
    },
  },
  render: (args) => {
    const variantClass = args.variant !== 'default' ? `dpc-badge--${args.variant}` : '';
    return `<span class="dpc-badge ${variantClass}">${args.text}</span>`;
  },
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Default: Story = {
  args: {
    variant: 'default',
    text: '5',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: '12',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    text: 'New',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    text: '3',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    text: '99+',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    text: '7',
  },
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; align-items: center;">
      <span class="dpc-badge">Default</span>
      <span class="dpc-badge dpc-badge--primary">Primary</span>
      <span class="dpc-badge dpc-badge--success">Success</span>
      <span class="dpc-badge dpc-badge--warning">Warning</span>
      <span class="dpc-badge dpc-badge--danger">Danger</span>
      <span class="dpc-badge dpc-badge--info">Info</span>
    </div>
  `,
};
