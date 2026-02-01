// src/stories/Modal.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Modal",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div class="dpc-modal__overlay" style="position: relative; min-height: 400px; background: rgba(0,0,0,0.5);">
      <div class="dpc-modal__content dpc-modal__content--md" style="margin: auto;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Modal Title</h3>
          <button class="dpc-modal__close">&times;</button>
        </div>
        <div class="dpc-modal__body">
          <p>This is the modal body content. You can put any content here.</p>
        </div>
        <div class="dpc-modal__footer">
          <button class="dpc-button">Cancel</button>
          <button class="dpc-button dpc-button--primary">Confirm</button>
        </div>
      </div>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 8px;">Extra Small (xs - 300px)</h4>
        <div class="dpc-modal__content dpc-modal__content--xs" style="position: relative;">
          <div class="dpc-modal__header">
            <h3 class="dpc-modal__title">XS Modal</h3>
          </div>
          <div class="dpc-modal__body">Small modal content.</div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Small (sm - 400px)</h4>
        <div class="dpc-modal__content dpc-modal__content--sm" style="position: relative;">
          <div class="dpc-modal__header">
            <h3 class="dpc-modal__title">SM Modal</h3>
          </div>
          <div class="dpc-modal__body">Small modal content.</div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Medium (md - 600px)</h4>
        <div class="dpc-modal__content dpc-modal__content--md" style="position: relative;">
          <div class="dpc-modal__header">
            <h3 class="dpc-modal__title">MD Modal</h3>
          </div>
          <div class="dpc-modal__body">Medium modal content.</div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Large (lg - 800px)</h4>
        <div class="dpc-modal__content dpc-modal__content--lg" style="position: relative;">
          <div class="dpc-modal__header">
            <h3 class="dpc-modal__title">LG Modal</h3>
          </div>
          <div class="dpc-modal__body">Large modal content.</div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Extra Large (xl - 1000px)</h4>
        <div class="dpc-modal__content dpc-modal__content--xl" style="position: relative;">
          <div class="dpc-modal__header">
            <h3 class="dpc-modal__title">XL Modal</h3>
          </div>
          <div class="dpc-modal__body">Extra large modal content.</div>
        </div>
      </div>
    </div>
  `,
};

export const Variants: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
      <div class="dpc-modal__content dpc-modal__content--sm dpc-modal__content--primary" style="position: relative;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Primary Modal</h3>
        </div>
        <div class="dpc-modal__body">Modal with primary left border.</div>
      </div>
      <div class="dpc-modal__content dpc-modal__content--sm dpc-modal__content--success" style="position: relative;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Success Modal</h3>
        </div>
        <div class="dpc-modal__body">Modal with success left border.</div>
      </div>
      <div class="dpc-modal__content dpc-modal__content--sm dpc-modal__content--warning" style="position: relative;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Warning Modal</h3>
        </div>
        <div class="dpc-modal__body">Modal with warning left border.</div>
      </div>
      <div class="dpc-modal__content dpc-modal__content--sm dpc-modal__content--danger" style="position: relative;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Danger Modal</h3>
        </div>
        <div class="dpc-modal__body">Modal with danger left border.</div>
      </div>
    </div>
  `,
};

export const ConfirmDialog: Story = {
  render: () => `
    <div class="dpc-modal__overlay" style="position: relative; min-height: 300px; background: rgba(0,0,0,0.5);">
      <div class="dpc-modal__content dpc-modal__content--sm dpc-modal__content--danger" style="margin: auto;">
        <div class="dpc-modal__header">
          <h3 class="dpc-modal__title">Confirm Delete</h3>
          <button class="dpc-modal__close">&times;</button>
        </div>
        <div class="dpc-modal__body">
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </div>
        <div class="dpc-modal__footer">
          <button class="dpc-button">Cancel</button>
          <button class="dpc-button dpc-button--danger">Delete</button>
        </div>
      </div>
    </div>
  `,
};
