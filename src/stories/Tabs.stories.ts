// src/stories/Tabs.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface TabsArgs {
  activeTab: number;
  variant: 'default' | 'stroke';
}

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'Active tab index',
    },
    variant: {
      control: 'select',
      options: ['default', 'stroke'],
      description: 'Tab style variant',
    },
  },
  render: (args) => {
    const variantClass = args.variant === 'stroke' ? 'dpc-tabs--stroke' : '';
    const tabs = ['Home', 'Profile', 'Settings', 'Help'];

    const tabsHtml = tabs
      .map((tab, index) => {
        const activeClass = index + 1 === args.activeTab ? 'dpc-tabs__item--active' : '';
        return `<li class="dpc-tabs__item ${activeClass}">
          <a href="#" class="dpc-tabs__link">${tab}</a>
        </li>`;
      })
      .join('');

    return `<ul class="dpc-tabs ${variantClass}">${tabsHtml}</ul>`;
  },
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const Default: Story = {
  args: {
    activeTab: 1,
    variant: 'default',
  },
};

export const Stroke: Story = {
  args: {
    activeTab: 2,
    variant: 'stroke',
  },
};

export const WithDisabled: Story = {
  render: () => `
    <ul class="dpc-tabs">
      <li class="dpc-tabs__item dpc-tabs__item--active">
        <a href="#" class="dpc-tabs__link">Home</a>
      </li>
      <li class="dpc-tabs__item">
        <a href="#" class="dpc-tabs__link">Profile</a>
      </li>
      <li class="dpc-tabs__item dpc-tabs__item--disabled">
        <a href="#" class="dpc-tabs__link">Disabled</a>
      </li>
      <li class="dpc-tabs__item">
        <a href="#" class="dpc-tabs__link">Settings</a>
      </li>
    </ul>
  `,
};

export const BothVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default tabs:</p>
        <ul class="dpc-tabs">
          <li class="dpc-tabs__item dpc-tabs__item--active"><a href="#" class="dpc-tabs__link">Home</a></li>
          <li class="dpc-tabs__item"><a href="#" class="dpc-tabs__link">Profile</a></li>
          <li class="dpc-tabs__item"><a href="#" class="dpc-tabs__link">Settings</a></li>
        </ul>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Stroke tabs:</p>
        <ul class="dpc-tabs dpc-tabs--stroke">
          <li class="dpc-tabs__item dpc-tabs__item--active"><a href="#" class="dpc-tabs__link">Home</a></li>
          <li class="dpc-tabs__item"><a href="#" class="dpc-tabs__link">Profile</a></li>
          <li class="dpc-tabs__item"><a href="#" class="dpc-tabs__link">Settings</a></li>
        </ul>
      </div>
    </div>
  `,
};
