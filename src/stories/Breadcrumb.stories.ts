// src/stories/Breadcrumb.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface BreadcrumbArgs {
  items: string[];
  variant: "default" | "minimal";
}

const meta: Meta<BreadcrumbArgs> = {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "minimal"],
      description: "Breadcrumb style variant",
    },
  },
  render: (args) => {
    const variantClass =
      args.variant === "minimal" ? "dpc-breadcrumb--minimal" : "";
    const items = args.items || [
      "Home",
      "Products",
      "Cameras",
      "Digital Cameras",
    ];
    const lastIndex = items.length - 1;

    const itemsHtml = items
      .map((item, index) => {
        if (index === lastIndex) {
          return `<li class="dpc-breadcrumb__item dpc-breadcrumb__item--active">${item}</li>`;
        }
        return `<li class="dpc-breadcrumb__item"><a href="#">${item}</a></li>`;
      })
      .join("");

    return `<nav><ol class="dpc-breadcrumb ${variantClass}">${itemsHtml}</ol></nav>`;
  },
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const Default: Story = {
  args: {
    items: ["Home", "Products", "Cameras", "Digital Cameras"],
    variant: "default",
  },
};

export const Minimal: Story = {
  args: {
    items: ["Home", "Products", "Cameras", "Digital Cameras"],
    variant: "minimal",
  },
};

export const Short: Story = {
  args: {
    items: ["Home", "About"],
    variant: "default",
  },
};

export const Long: Story = {
  args: {
    items: [
      "Home",
      "Electronics",
      "Computers",
      "Laptops",
      "Gaming Laptops",
      "ASUS ROG",
    ],
    variant: "default",
  },
};

export const BothVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default (with border):</p>
        <nav>
          <ol class="dpc-breadcrumb">
            <li class="dpc-breadcrumb__item"><a href="#">Home</a></li>
            <li class="dpc-breadcrumb__item"><a href="#">Electronics</a></li>
            <li class="dpc-breadcrumb__item"><a href="#">Cameras</a></li>
            <li class="dpc-breadcrumb__item dpc-breadcrumb__item--active">Digital Cameras</li>
          </ol>
        </nav>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Minimal (no border):</p>
        <nav>
          <ol class="dpc-breadcrumb dpc-breadcrumb--minimal">
            <li class="dpc-breadcrumb__item"><a href="#">Home</a></li>
            <li class="dpc-breadcrumb__item"><a href="#">Electronics</a></li>
            <li class="dpc-breadcrumb__item"><a href="#">Cameras</a></li>
            <li class="dpc-breadcrumb__item dpc-breadcrumb__item--active">Digital Cameras</li>
          </ol>
        </nav>
      </div>
    </div>
  `,
};
