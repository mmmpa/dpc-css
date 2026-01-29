// src/stories/Pagination.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

interface PaginationArgs {
  currentPage: number;
  totalPages: number;
  size: "sm" | "md" | "lg";
}

const meta: Meta<PaginationArgs> = {
  title: "Components/Pagination",
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1, max: 10 },
      description: "Current active page",
    },
    totalPages: {
      control: { type: "number", min: 1, max: 10 },
      description: "Total number of pages",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Pagination size",
    },
  },
  render: (args) => {
    const sizeClass = args.size !== "md" ? `dpc-pagination--${args.size}` : "";
    const pages = Array.from({ length: args.totalPages }, (_, i) => i + 1);

    const pagesHtml = pages
      .map((page) => {
        const activeClass =
          page === args.currentPage ? "dpc-pagination__item--active" : "";
        return `<li class="dpc-pagination__item ${activeClass}">
          <a href="#" class="dpc-pagination__link">${page}</a>
        </li>`;
      })
      .join("");

    return `<nav>
      <ul class="dpc-pagination ${sizeClass}">
        <li class="dpc-pagination__item">
          <a href="#" class="dpc-pagination__link">&larr;</a>
        </li>
        ${pagesHtml}
        <li class="dpc-pagination__item">
          <a href="#" class="dpc-pagination__link">&rarr;</a>
        </li>
      </ul>
    </nav>`;
  },
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    size: "lg",
  },
};

export const WithDisabled: Story = {
  render: () => `
    <nav>
      <ul class="dpc-pagination">
        <li class="dpc-pagination__item dpc-pagination__item--disabled">
          <a href="#" class="dpc-pagination__link">&larr;</a>
        </li>
        <li class="dpc-pagination__item dpc-pagination__item--active">
          <a href="#" class="dpc-pagination__link">1</a>
        </li>
        <li class="dpc-pagination__item">
          <a href="#" class="dpc-pagination__link">2</a>
        </li>
        <li class="dpc-pagination__item">
          <a href="#" class="dpc-pagination__link">3</a>
        </li>
        <li class="dpc-pagination__item">
          <a href="#" class="dpc-pagination__link">&rarr;</a>
        </li>
      </ul>
    </nav>
  `,
};

export const AllSizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Small:</p>
        <nav>
          <ul class="dpc-pagination dpc-pagination--sm">
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&larr;</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">1</a></li>
            <li class="dpc-pagination__item dpc-pagination__item--active"><a href="#" class="dpc-pagination__link">2</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">3</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&rarr;</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Default:</p>
        <nav>
          <ul class="dpc-pagination">
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&larr;</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">1</a></li>
            <li class="dpc-pagination__item dpc-pagination__item--active"><a href="#" class="dpc-pagination__link">2</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">3</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&rarr;</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-weight: 600;">Large:</p>
        <nav>
          <ul class="dpc-pagination dpc-pagination--lg">
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&larr;</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">1</a></li>
            <li class="dpc-pagination__item dpc-pagination__item--active"><a href="#" class="dpc-pagination__link">2</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">3</a></li>
            <li class="dpc-pagination__item"><a href="#" class="dpc-pagination__link">&rarr;</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `,
};
