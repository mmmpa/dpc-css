// src/stories/DatePicker.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/DatePicker",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const dateSegments = `
  <span class="dpc-datepicker__segment" data-placeholder>mm</span>
  <span class="dpc-datepicker__segment" data-type="literal">/</span>
  <span class="dpc-datepicker__segment" data-placeholder>dd</span>
  <span class="dpc-datepicker__segment" data-type="literal">/</span>
  <span class="dpc-datepicker__segment" data-placeholder>yyyy</span>
`;

const filledSegments = `
  <span class="dpc-datepicker__segment">02</span>
  <span class="dpc-datepicker__segment" data-type="literal">/</span>
  <span class="dpc-datepicker__segment">15</span>
  <span class="dpc-datepicker__segment" data-type="literal">/</span>
  <span class="dpc-datepicker__segment">2026</span>
`;

const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;

export const Default: Story = {
  render: () => `
    <div class="dpc-datepicker" style="max-width: 250px;">
      <label class="dpc-datepicker__label">Select Date</label>
      <div class="dpc-datepicker__field dpc-datepicker__field--md">
        <div class="dpc-datepicker__input">
          ${dateSegments}
        </div>
        <button class="dpc-datepicker__button">${calendarIcon}</button>
      </div>
    </div>
  `,
};

export const WithValue: Story = {
  render: () => `
    <div class="dpc-datepicker" style="max-width: 250px;">
      <label class="dpc-datepicker__label">Event Date</label>
      <div class="dpc-datepicker__field dpc-datepicker__field--md">
        <div class="dpc-datepicker__input">
          ${filledSegments}
        </div>
        <button class="dpc-datepicker__button">${calendarIcon}</button>
      </div>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Small</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--sm">
          <div class="dpc-datepicker__input">
            ${dateSegments}
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Medium (Default)</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">
            ${dateSegments}
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Large</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--lg">
          <div class="dpc-datepicker__input">
            ${dateSegments}
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
    </div>
  `,
};

export const Variants: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Default</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Primary</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md dpc-datepicker__field--primary">
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Success</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md dpc-datepicker__field--success">
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Warning</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md dpc-datepicker__field--warning">
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Danger</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md dpc-datepicker__field--danger">
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
    </div>
  `,
};

export const States: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Normal</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">${dateSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Disabled</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md" data-disabled>
          <div class="dpc-datepicker__input">${dateSegments}</div>
          <button class="dpc-datepicker__button" disabled>${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">Invalid</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md" data-invalid>
          <div class="dpc-datepicker__input">${filledSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
        <span class="dpc-datepicker__error">Please select a valid date.</span>
      </div>
      <div class="dpc-datepicker">
        <label class="dpc-datepicker__label">With Description</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">${dateSegments}</div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
        <span class="dpc-datepicker__description">Choose your preferred date.</span>
      </div>
    </div>
  `,
};

export const DateRangePicker: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div class="dpc-datepicker" style="max-width: 400px;">
        <label class="dpc-datepicker__label">Date Range</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">
            ${dateSegments}
          </div>
          <span class="dpc-datepicker__separator">&ndash;</span>
          <div class="dpc-datepicker__input">
            ${dateSegments}
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker" style="max-width: 400px;">
        <label class="dpc-datepicker__label">With Values</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md dpc-datepicker__field--primary">
          <div class="dpc-datepicker__input">
            <span class="dpc-datepicker__segment">02</span>
            <span class="dpc-datepicker__segment" data-type="literal">/</span>
            <span class="dpc-datepicker__segment">08</span>
            <span class="dpc-datepicker__segment" data-type="literal">/</span>
            <span class="dpc-datepicker__segment">2026</span>
          </div>
          <span class="dpc-datepicker__separator">&ndash;</span>
          <div class="dpc-datepicker__input">
            <span class="dpc-datepicker__segment">02</span>
            <span class="dpc-datepicker__segment" data-type="literal">/</span>
            <span class="dpc-datepicker__segment">14</span>
            <span class="dpc-datepicker__segment" data-type="literal">/</span>
            <span class="dpc-datepicker__segment">2026</span>
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
    </div>
  `,
};

export const WithPopover: Story = {
  render: () => `
    <div style="position: relative; padding-bottom: 350px;">
      <div class="dpc-datepicker" style="max-width: 250px;">
        <label class="dpc-datepicker__label">Select Date</label>
        <div class="dpc-datepicker__field dpc-datepicker__field--md">
          <div class="dpc-datepicker__input">
            ${filledSegments}
          </div>
          <button class="dpc-datepicker__button">${calendarIcon}</button>
        </div>
      </div>
      <div class="dpc-datepicker__content" style="position: absolute; top: 100%; left: 0; margin-top: 4px;">
        <div class="dpc-calendar">
          <div class="dpc-calendar__header">
            <button class="dpc-calendar__nav-button">&lsaquo;</button>
            <span class="dpc-calendar__heading">February 2026</span>
            <button class="dpc-calendar__nav-button">&rsaquo;</button>
          </div>
          <table class="dpc-calendar__grid">
            <thead>
              <tr>
                <th class="dpc-calendar__header-cell">Sun</th>
                <th class="dpc-calendar__header-cell">Mon</th>
                <th class="dpc-calendar__header-cell">Tue</th>
                <th class="dpc-calendar__header-cell">Wed</th>
                <th class="dpc-calendar__header-cell">Thu</th>
                <th class="dpc-calendar__header-cell">Fri</th>
                <th class="dpc-calendar__header-cell">Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button class="dpc-calendar__cell" data-outside-month>25</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>26</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>27</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>28</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>29</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>30</button></td>
                <td><button class="dpc-calendar__cell" data-outside-month>31</button></td>
              </tr>
              <tr>
                <td><button class="dpc-calendar__cell">1</button></td>
                <td><button class="dpc-calendar__cell">2</button></td>
                <td><button class="dpc-calendar__cell">3</button></td>
                <td><button class="dpc-calendar__cell">4</button></td>
                <td><button class="dpc-calendar__cell">5</button></td>
                <td><button class="dpc-calendar__cell">6</button></td>
                <td><button class="dpc-calendar__cell">7</button></td>
              </tr>
              <tr>
                <td><button class="dpc-calendar__cell">8</button></td>
                <td><button class="dpc-calendar__cell">9</button></td>
                <td><button class="dpc-calendar__cell">10</button></td>
                <td><button class="dpc-calendar__cell">11</button></td>
                <td><button class="dpc-calendar__cell">12</button></td>
                <td><button class="dpc-calendar__cell">13</button></td>
                <td><button class="dpc-calendar__cell">14</button></td>
              </tr>
              <tr>
                <td><button class="dpc-calendar__cell" data-selected>15</button></td>
                <td><button class="dpc-calendar__cell">16</button></td>
                <td><button class="dpc-calendar__cell">17</button></td>
                <td><button class="dpc-calendar__cell">18</button></td>
                <td><button class="dpc-calendar__cell">19</button></td>
                <td><button class="dpc-calendar__cell">20</button></td>
                <td><button class="dpc-calendar__cell">21</button></td>
              </tr>
              <tr>
                <td><button class="dpc-calendar__cell">22</button></td>
                <td><button class="dpc-calendar__cell">23</button></td>
                <td><button class="dpc-calendar__cell">24</button></td>
                <td><button class="dpc-calendar__cell">25</button></td>
                <td><button class="dpc-calendar__cell">26</button></td>
                <td><button class="dpc-calendar__cell">27</button></td>
                <td><button class="dpc-calendar__cell">28</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};
