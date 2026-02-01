// src/stories/Tooltip.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div style="padding: 40px;">
      <div class="dpc-tooltip" data-placement="top" style="position: relative; display: inline-block;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </div>
        This is a tooltip
      </div>
    </div>
  `,
};

export const Placements: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 40px; align-items: center; padding: 40px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        <span>Top:</span>
        <div class="dpc-tooltip" data-placement="top" style="position: relative;">
          <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </div>
          Tooltip on top
        </div>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <span>Bottom:</span>
        <div class="dpc-tooltip" data-placement="bottom" style="position: relative;">
          <div class="dpc-tooltip__arrow" style="position: absolute; top: -8px; left: 50%; transform: translateX(-50%);">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </div>
          Tooltip on bottom
        </div>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <span>Left:</span>
        <div class="dpc-tooltip" data-placement="left" style="position: relative;">
          <div class="dpc-tooltip__arrow" style="position: absolute; right: -8px; top: 50%; transform: translateY(-50%);">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </div>
          Tooltip on left
        </div>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <span>Right:</span>
        <div class="dpc-tooltip" data-placement="right" style="position: relative;">
          <div class="dpc-tooltip__arrow" style="position: absolute; left: -8px; top: 50%; transform: translateY(-50%);">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </div>
          Tooltip on right
        </div>
      </div>
    </div>
  `,
};

export const LongContent: Story = {
  render: () => `
    <div style="padding: 40px;">
      <div class="dpc-tooltip" data-placement="top" style="position: relative; display: inline-block;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </div>
        This is a longer tooltip message that demonstrates how the tooltip handles multiple lines of text content.
      </div>
    </div>
  `,
};

export const Variants: Story = {
  render: () => `
    <div style="display: flex; gap: 24px; padding: 40px; flex-wrap: wrap;">
      <div class="dpc-tooltip" style="position: relative;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg>
        </div>
        Default
      </div>
      <div class="dpc-tooltip dpc-tooltip--primary" style="position: relative;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg>
        </div>
        Primary
      </div>
      <div class="dpc-tooltip dpc-tooltip--success" style="position: relative;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg>
        </div>
        Success
      </div>
      <div class="dpc-tooltip dpc-tooltip--warning" style="position: relative;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg>
        </div>
        Warning
      </div>
      <div class="dpc-tooltip dpc-tooltip--danger" style="position: relative;">
        <div class="dpc-tooltip__arrow" style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);">
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg>
        </div>
        Danger
      </div>
    </div>
  `,
};
