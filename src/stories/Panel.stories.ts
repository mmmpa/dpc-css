// src/stories/Panel.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface PanelArgs {
  title: string;
  content: string;
  variant: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  showFooter: boolean;
}

const meta: Meta<PanelArgs> = {
  title: 'Components/Panel',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title',
    },
    content: {
      control: 'text',
      description: 'Panel content',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: 'Panel color variant',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show panel footer',
    },
  },
  render: (args) => {
    const variantClass = args.variant !== 'default' ? `dpc-panel--${args.variant}` : '';
    const footer = args.showFooter
      ? '<div class="dpc-panel__footer">Panel footer</div>'
      : '';

    return `<div class="dpc-panel ${variantClass}" style="max-width: 400px;">
      <div class="dpc-panel__header">
        <h3 class="dpc-panel__title">${args.title}</h3>
      </div>
      <div class="dpc-panel__body">${args.content}</div>
      ${footer}
    </div>`;
  },
};

export default meta;
type Story = StoryObj<PanelArgs>;

export const Default: Story = {
  args: {
    title: 'Panel Title',
    content: 'This is the panel content. You can put any content here.',
    variant: 'default',
    showFooter: false,
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Panel with Footer',
    content: 'This panel includes a footer section.',
    variant: 'default',
    showFooter: true,
  },
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
      <div class="dpc-panel">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Default Panel</h3>
        </div>
        <div class="dpc-panel__body">Default panel styling with neutral colors.</div>
      </div>

      <div class="dpc-panel dpc-panel--primary">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Primary Panel</h3>
        </div>
        <div class="dpc-panel__body">Primary panel with Lagoon blue header.</div>
      </div>

      <div class="dpc-panel dpc-panel--success">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Success Panel</h3>
        </div>
        <div class="dpc-panel__body">Success panel with teal header.</div>
      </div>

      <div class="dpc-panel dpc-panel--warning">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Warning Panel</h3>
        </div>
        <div class="dpc-panel__body">Warning panel with yellow header.</div>
      </div>

      <div class="dpc-panel dpc-panel--danger">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Danger Panel</h3>
        </div>
        <div class="dpc-panel__body">Danger panel with red header.</div>
      </div>
    </div>
  `,
};

export const BodyOnly: Story = {
  render: () => `
    <div class="dpc-panel" style="max-width: 400px;">
      <div class="dpc-panel__body">
        This is a simple panel with only a body section. No header or footer.
      </div>
    </div>
  `,
};

export const CompletePanel: Story = {
  render: () => `
    <div class="dpc-panel dpc-panel--primary" style="max-width: 400px;">
      <div class="dpc-panel__header">
        <h3 class="dpc-panel__title">User Profile</h3>
      </div>
      <div class="dpc-panel__body">
        <p style="margin: 0 0 8px 0;"><strong>Name:</strong> John Doe</p>
        <p style="margin: 0 0 8px 0;"><strong>Email:</strong> john@example.com</p>
        <p style="margin: 0;"><strong>Role:</strong> Administrator</p>
      </div>
      <div class="dpc-panel__footer">
        <button class="dpc-button dpc-button--sm">Edit Profile</button>
      </div>
    </div>
  `,
};
