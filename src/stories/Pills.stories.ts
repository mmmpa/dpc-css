// src/stories/Pills.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface PillsArgs {
  activeIndex: number;
  vertical: boolean;
}

const meta: Meta<PillsArgs> = {
  title: "Components/Pills",
  tags: ["autodocs"],
  argTypes: {
    activeIndex: {
      control: { type: "number", min: 1, max: 4 },
      description: "Active pill index",
    },
    vertical: {
      control: "boolean",
      description: "Vertical layout",
    },
  },
  render: (args) => {
    const verticalClass = args.vertical ? "dpc-pills--vertical" : "";
    const pills = ["Home", "Profile", "Settings", "Help"];
    const style = args.vertical ? 'style="width: 200px;"' : "";

    const pillsHtml = pills
      .map((pill, index) => {
        const activeClass =
          index + 1 === args.activeIndex ? "dpc-pills__item--active" : "";
        return `<li class="dpc-pills__item ${activeClass}">
          <a href="#" class="dpc-pills__link">${pill}</a>
        </li>`;
      })
      .join("");

    return `<ul class="dpc-pills ${verticalClass}" ${style}>${pillsHtml}</ul>`;
  },
};

export default meta;
type Story = StoryObj<PillsArgs>;

export const Default: Story = {
  args: {
    activeIndex: 1,
    vertical: false,
  },
};

export const Vertical: Story = {
  args: {
    activeIndex: 2,
    vertical: true,
  },
};

export const WithDisabled: Story = {
  render: () => `
    <ul class="dpc-pills">
      <li class="dpc-pills__item dpc-pills__item--active">
        <a href="#" class="dpc-pills__link">Home</a>
      </li>
      <li class="dpc-pills__item">
        <a href="#" class="dpc-pills__link">Profile</a>
      </li>
      <li class="dpc-pills__item dpc-pills__item--disabled">
        <a href="#" class="dpc-pills__link">Disabled</a>
      </li>
      <li class="dpc-pills__item">
        <a href="#" class="dpc-pills__link">Settings</a>
      </li>
    </ul>
  `,
};

export const BothLayouts: Story = {
  render: () => `
    <div style="display: flex; gap: 48px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Horizontal:</p>
        <ul class="dpc-pills">
          <li class="dpc-pills__item dpc-pills__item--active"><a href="#" class="dpc-pills__link">Home</a></li>
          <li class="dpc-pills__item"><a href="#" class="dpc-pills__link">Profile</a></li>
          <li class="dpc-pills__item"><a href="#" class="dpc-pills__link">Settings</a></li>
        </ul>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Vertical:</p>
        <ul class="dpc-pills dpc-pills--vertical" style="width: 150px;">
          <li class="dpc-pills__item dpc-pills__item--active"><a href="#" class="dpc-pills__link">Home</a></li>
          <li class="dpc-pills__item"><a href="#" class="dpc-pills__link">Profile</a></li>
          <li class="dpc-pills__item"><a href="#" class="dpc-pills__link">Settings</a></li>
        </ul>
      </div>
    </div>
  `,
};
