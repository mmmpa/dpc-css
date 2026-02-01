// src/stories/Calendar.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Calendar",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Helper to generate calendar grid (February 2026: starts on Sunday, 28 days)
const generateCalendarGrid = (
  selectedDate?: number,
  rangeStart?: number,
  rangeEnd?: number,
) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const headerCells = days
    .map((d) => `<th class="dpc-calendar__header-cell">${d}</th>`)
    .join("");

  const rows: string[] = [];
  let currentRow: string[] = [];

  // February 2026 starts on Sunday, has 28 days
  for (let i = 1; i <= 28; i++) {
    let attrs = "";
    if (i === 1) attrs += " data-today";
    if (selectedDate && i === selectedDate) attrs += " data-selected";
    if (rangeStart && rangeEnd) {
      if (i === rangeStart) attrs += " data-selected data-selection-start";
      else if (i === rangeEnd) attrs += " data-selected data-selection-end";
      else if (i > rangeStart && i < rangeEnd) attrs += " data-selected";
    }
    if (i === 25) attrs += " data-disabled";
    currentRow.push(
      `<td><button class="dpc-calendar__cell"${attrs}>${i}</button></td>`,
    );

    if (currentRow.length === 7) {
      rows.push(`<tr>${currentRow.join("")}</tr>`);
      currentRow = [];
    }
  }

  return `
    <table class="dpc-calendar__grid">
      <thead>
        <tr>${headerCells}</tr>
      </thead>
      <tbody>
        ${rows.join("\n        ")}
      </tbody>
    </table>
  `;
};

export const Default: Story = {
  render: () => `
    <div class="dpc-calendar">
      <div class="dpc-calendar__header">
        <button class="dpc-calendar__nav-button">&lsaquo;</button>
        <span class="dpc-calendar__heading">February 2026</span>
        <button class="dpc-calendar__nav-button">&rsaquo;</button>
      </div>
      ${generateCalendarGrid()}
    </div>
  `,
};

export const WithSelectedDate: Story = {
  render: () => `
    <div class="dpc-calendar">
      <div class="dpc-calendar__header">
        <button class="dpc-calendar__nav-button">&lsaquo;</button>
        <span class="dpc-calendar__heading">February 2026</span>
        <button class="dpc-calendar__nav-button">&rsaquo;</button>
      </div>
      ${generateCalendarGrid(10)}
    </div>
  `,
};

export const RangeSelection: Story = {
  render: () => `
    <div class="dpc-calendar">
      <div class="dpc-calendar__header">
        <button class="dpc-calendar__nav-button">&lsaquo;</button>
        <span class="dpc-calendar__heading">February 2026</span>
        <button class="dpc-calendar__nav-button">&rsaquo;</button>
      </div>
      ${generateCalendarGrid(undefined, 8, 14)}
    </div>
  `,
};

export const States: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 8px;">Cell States</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="dpc-calendar__cell">Normal</button>
          <button class="dpc-calendar__cell" data-hovered>Hovered</button>
          <button class="dpc-calendar__cell" data-focused data-focus-visible>Focused</button>
          <button class="dpc-calendar__cell" data-selected>Selected</button>
          <button class="dpc-calendar__cell" data-today>Today</button>
          <button class="dpc-calendar__cell" data-outside-month>Outside</button>
          <button class="dpc-calendar__cell" data-disabled>Disabled</button>
          <button class="dpc-calendar__cell" data-unavailable>Unavail</button>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Range States</h4>
        <div style="display: flex; gap: 0;">
          <button class="dpc-calendar__cell" data-selected data-selection-start>8</button>
          <button class="dpc-calendar__cell" data-selected>9</button>
          <button class="dpc-calendar__cell" data-selected>10</button>
          <button class="dpc-calendar__cell" data-selected>11</button>
          <button class="dpc-calendar__cell" data-selected data-selection-end>12</button>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom: 8px;">Navigation Buttons</h4>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button class="dpc-calendar__nav-button">&lsaquo;</button>
          <button class="dpc-calendar__nav-button" data-hovered>&lsaquo; Hovered</button>
          <button class="dpc-calendar__nav-button" data-disabled>&lsaquo; Disabled</button>
        </div>
      </div>
    </div>
  `,
};
