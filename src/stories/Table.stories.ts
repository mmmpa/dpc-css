// src/stories/Table.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

interface TableArgs {
  bordered: boolean;
  striped: boolean;
  hover: boolean;
  size: 'sm' | 'md' | 'lg';
}

const meta: Meta<TableArgs> = {
  title: 'Components/Table',
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean',
      description: 'Add borders to all cells',
    },
    striped: {
      control: 'boolean',
      description: 'Add zebra striping',
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect on rows',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Table size',
    },
  },
  render: (args) => {
    const classes = ['dpc-table'];
    if (args.bordered) classes.push('dpc-table--bordered');
    if (args.striped) classes.push('dpc-table--striped');
    if (args.hover) classes.push('dpc-table--hover');
    if (args.size !== 'md') classes.push(`dpc-table--${args.size}`);

    return `<table class="${classes.join(' ')}">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>jane@example.com</td>
          <td>Editor</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Bob Wilson</td>
          <td>bob@example.com</td>
          <td>Viewer</td>
          <td>Inactive</td>
        </tr>
        <tr>
          <td>Alice Brown</td>
          <td>alice@example.com</td>
          <td>Editor</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>`;
  },
};

export default meta;
type Story = StoryObj<TableArgs>;

export const Default: Story = {
  args: {
    bordered: false,
    striped: false,
    hover: false,
    size: 'md',
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    striped: false,
    hover: false,
    size: 'md',
  },
};

export const Striped: Story = {
  args: {
    bordered: false,
    striped: true,
    hover: false,
    size: 'md',
  },
};

export const StripedHover: Story = {
  args: {
    bordered: false,
    striped: true,
    hover: true,
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Small:</p>
        <table class="dpc-table dpc-table--sm dpc-table--bordered">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
            <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default:</p>
        <table class="dpc-table dpc-table--bordered">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
            <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Large:</p>
        <table class="dpc-table dpc-table--lg dpc-table--bordered">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
            <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

export const WithRowColors: Story = {
  render: () => `
    <table class="dpc-table dpc-table--bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="dpc-table__row--success">
          <td>Build #123</td>
          <td>Passed</td>
          <td>View logs</td>
        </tr>
        <tr class="dpc-table__row--warning">
          <td>Build #122</td>
          <td>Warning</td>
          <td>View logs</td>
        </tr>
        <tr class="dpc-table__row--danger">
          <td>Build #121</td>
          <td>Failed</td>
          <td>View logs</td>
        </tr>
        <tr class="dpc-table__row--info">
          <td>Build #120</td>
          <td>Running</td>
          <td>View logs</td>
        </tr>
        <tr>
          <td>Build #119</td>
          <td>Passed</td>
          <td>View logs</td>
        </tr>
      </tbody>
    </table>
  `,
};
