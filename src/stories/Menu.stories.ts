// src/stories/Menu.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Menu",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div class="dpc-menu-popover" style="position: relative; display: inline-block;">
      <div class="dpc-menu">
        <div class="dpc-menu__item">Open</div>
        <div class="dpc-menu__item">Edit</div>
        <div class="dpc-menu__item">Duplicate</div>
        <div class="dpc-menu__separator"></div>
        <div class="dpc-menu__item">Delete</div>
      </div>
    </div>
  `,
};

export const WithSections: Story = {
  render: () => `
    <div class="dpc-menu-popover" style="position: relative; display: inline-block;">
      <div class="dpc-menu">
        <div class="dpc-menu__section">
          <div class="dpc-menu__header">View</div>
          <div class="dpc-menu__item">List</div>
          <div class="dpc-menu__item">Grid</div>
          <div class="dpc-menu__item">Gallery</div>
        </div>
        <div class="dpc-menu__separator"></div>
        <div class="dpc-menu__section">
          <div class="dpc-menu__header">Sort By</div>
          <div class="dpc-menu__item">Name</div>
          <div class="dpc-menu__item">Date</div>
          <div class="dpc-menu__item">Size</div>
        </div>
      </div>
    </div>
  `,
};

export const WithStates: Story = {
  render: () => `
    <div class="dpc-menu-popover" style="position: relative; display: inline-block;">
      <div class="dpc-menu">
        <div class="dpc-menu__item">Normal Item</div>
        <div class="dpc-menu__item" data-hovered="true">Hovered Item</div>
        <div class="dpc-menu__item" data-selected="true">Selected Item</div>
        <div class="dpc-menu__item" data-disabled="true">Disabled Item</div>
      </div>
    </div>
  `,
};

export const Variants: Story = {
  render: () => `
    <div style="display: flex; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 8px;">Default</h4>
        <div class="dpc-menu-popover" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__header">Actions</div>
            <div class="dpc-menu__item">Open</div>
            <div class="dpc-menu__item">Edit</div>
            <div class="dpc-menu__separator"></div>
            <div class="dpc-menu__item">Delete</div>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Inverse</h4>
        <div class="dpc-menu-popover dpc-menu-popover--inverse" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__header">Actions</div>
            <div class="dpc-menu__item">Open</div>
            <div class="dpc-menu__item">Edit</div>
            <div class="dpc-menu__separator"></div>
            <div class="dpc-menu__item">Delete</div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const WithButton: Story = {
  render: () => `
    <div style="position: relative; display: inline-block;">
      <button class="dpc-button dpc-button--primary">Actions</button>
      <div class="dpc-menu-popover" style="position: absolute; top: 100%; left: 0; margin-top: 10px;">
        <div class="dpc-menu">
          <div class="dpc-menu__item">Open</div>
          <div class="dpc-menu__item">Edit</div>
          <div class="dpc-menu__item">Delete</div>
        </div>
      </div>
    </div>
  `,
};

export const SelectionVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div>
        <h4 style="margin-bottom: 8px;">Primary</h4>
        <div class="dpc-menu-popover dpc-menu-popover--selection-primary" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__item">Normal</div>
            <div class="dpc-menu__item" data-selected="true">Selected</div>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Success</h4>
        <div class="dpc-menu-popover dpc-menu-popover--selection-success" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__item">Normal</div>
            <div class="dpc-menu__item" data-selected="true">Selected</div>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Warning</h4>
        <div class="dpc-menu-popover dpc-menu-popover--selection-warning" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__item">Normal</div>
            <div class="dpc-menu__item" data-selected="true">Selected</div>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Danger</h4>
        <div class="dpc-menu-popover dpc-menu-popover--selection-danger" style="position: relative; display: inline-block;">
          <div class="dpc-menu">
            <div class="dpc-menu__item">Normal</div>
            <div class="dpc-menu__item" data-selected="true">Selected</div>
          </div>
        </div>
      </div>
    </div>
  `,
};
