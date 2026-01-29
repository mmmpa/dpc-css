// src/stories/AllComponents.stories.ts
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Overview/All Components",
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => `
<div style="max-width: 1200px; margin: 0 auto; padding: 24px; display: flex; flex-direction: column; gap: 48px;">

  <!-- Button -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Button</h2>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button class="dpc-button dpc-button--primary">Primary</button>
      <button class="dpc-button dpc-button--success">Success</button>
      <button class="dpc-button dpc-button--warning">Warning</button>
      <button class="dpc-button dpc-button--danger">Danger</button>
      <button class="dpc-button dpc-button--primary dpc-button--sm">Small</button>
      <button class="dpc-button dpc-button--primary dpc-button--lg">Large</button>
      <button class="dpc-button dpc-button--primary" disabled>Disabled</button>
    </div>
  </section>

  <!-- Input -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Input</h2>
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 300px;">
      <input class="dpc-input" placeholder="Default input">
      <input class="dpc-input dpc-input--success" value="Success state">
      <input class="dpc-input dpc-input--error" value="Error state">
      <input class="dpc-input" disabled value="Disabled">
    </div>
  </section>

  <!-- Select -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Select</h2>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <div class="dpc-select">
        <select class="dpc-select__input">
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <span class="dpc-select__icon"></span>
      </div>
      <div class="dpc-select dpc-select--sm">
        <select class="dpc-select__input">
          <option>Small</option>
        </select>
        <span class="dpc-select__icon"></span>
      </div>
      <div class="dpc-select dpc-select--lg">
        <select class="dpc-select__input">
          <option>Large</option>
        </select>
        <span class="dpc-select__icon"></span>
      </div>
    </div>
  </section>

  <!-- Checkbox -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Checkbox</h2>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <label class="dpc-checkbox">
        <input type="checkbox" class="dpc-checkbox__input">
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Default</span>
      </label>
      <label class="dpc-checkbox">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Checked</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--success">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Success</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--warning">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Warning</span>
      </label>
      <label class="dpc-checkbox dpc-checkbox--danger">
        <input type="checkbox" class="dpc-checkbox__input" checked>
        <span class="dpc-checkbox__box"></span>
        <span class="dpc-checkbox__label">Danger</span>
      </label>
    </div>
  </section>

  <!-- Radio -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Radio</h2>
    <div class="dpc-radio-group dpc-radio-group--inline">
      <label class="dpc-radio">
        <input type="radio" name="demo-radio" class="dpc-radio__input" checked>
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Option 1</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" name="demo-radio" class="dpc-radio__input">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Option 2</span>
      </label>
      <label class="dpc-radio">
        <input type="radio" name="demo-radio" class="dpc-radio__input">
        <span class="dpc-radio__circle"></span>
        <span class="dpc-radio__label">Option 3</span>
      </label>
    </div>
  </section>

  <!-- Switch -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Switch</h2>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input">
        <span class="dpc-switch__track"><span class="dpc-switch__thumb"></span></span>
        <span class="dpc-switch__label">Off</span>
      </label>
      <label class="dpc-switch">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track"><span class="dpc-switch__thumb"></span></span>
        <span class="dpc-switch__label">On</span>
      </label>
      <label class="dpc-switch dpc-switch--success">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track"><span class="dpc-switch__thumb"></span></span>
        <span class="dpc-switch__label">Success</span>
      </label>
      <label class="dpc-switch dpc-switch--sm">
        <input type="checkbox" class="dpc-switch__input" checked>
        <span class="dpc-switch__track"><span class="dpc-switch__thumb"></span></span>
        <span class="dpc-switch__label">Small</span>
      </label>
    </div>
  </section>

  <!-- Alert -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Alert</h2>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div class="dpc-alert dpc-alert--info">
        <span class="dpc-alert__icon">i</span>
        <span class="dpc-alert__content">Info alert message</span>
      </div>
      <div class="dpc-alert dpc-alert--success">
        <span class="dpc-alert__icon">✓</span>
        <span class="dpc-alert__content">Success alert message</span>
      </div>
      <div class="dpc-alert dpc-alert--warning">
        <span class="dpc-alert__icon">!</span>
        <span class="dpc-alert__content">Warning alert message</span>
      </div>
      <div class="dpc-alert dpc-alert--danger">
        <span class="dpc-alert__icon">✕</span>
        <span class="dpc-alert__content">Danger alert message</span>
      </div>
    </div>
  </section>

  <!-- Badge & Label -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Badge & Label</h2>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-bottom: 12px;">
      <span class="dpc-badge">Default</span>
      <span class="dpc-badge dpc-badge--primary">Primary</span>
      <span class="dpc-badge dpc-badge--success">Success</span>
      <span class="dpc-badge dpc-badge--warning">Warning</span>
      <span class="dpc-badge dpc-badge--danger">Danger</span>
      <span class="dpc-badge dpc-badge--info">Info</span>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span class="dpc-label">Default</span>
      <span class="dpc-label dpc-label--primary">Primary</span>
      <span class="dpc-label dpc-label--success">Success</span>
      <span class="dpc-label dpc-label--warning">Warning</span>
      <span class="dpc-label dpc-label--danger">Danger</span>
      <span class="dpc-label dpc-label--info">Info</span>
    </div>
  </section>

  <!-- Breadcrumb -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Breadcrumb</h2>
    <nav class="dpc-breadcrumb">
      <li class="dpc-breadcrumb__item"><a href="#">Home</a></li>
      <li class="dpc-breadcrumb__item"><a href="#">Category</a></li>
      <li class="dpc-breadcrumb__item dpc-breadcrumb__item--active">Current Page</li>
    </nav>
    <nav class="dpc-breadcrumb dpc-breadcrumb--minimal" style="margin-top: 8px;">
      <li class="dpc-breadcrumb__item"><a href="#">Home</a></li>
      <li class="dpc-breadcrumb__item"><a href="#">Category</a></li>
      <li class="dpc-breadcrumb__item dpc-breadcrumb__item--active">Minimal</li>
    </nav>
  </section>

  <!-- Pagination -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Pagination</h2>
    <nav class="dpc-pagination">
      <li class="dpc-pagination__item dpc-pagination__item--disabled">
        <a class="dpc-pagination__link" href="#">&laquo;</a>
      </li>
      <li class="dpc-pagination__item dpc-pagination__item--active">
        <a class="dpc-pagination__link" href="#">1</a>
      </li>
      <li class="dpc-pagination__item">
        <a class="dpc-pagination__link" href="#">2</a>
      </li>
      <li class="dpc-pagination__item">
        <a class="dpc-pagination__link" href="#">3</a>
      </li>
      <li class="dpc-pagination__item">
        <a class="dpc-pagination__link" href="#">&raquo;</a>
      </li>
    </nav>
  </section>

  <!-- Tabs & Pills -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Tabs & Pills</h2>
    <ul class="dpc-tabs" style="margin-bottom: 16px;">
      <li class="dpc-tabs__item dpc-tabs__item--active">
        <a class="dpc-tabs__link" href="#">Active</a>
      </li>
      <li class="dpc-tabs__item">
        <a class="dpc-tabs__link" href="#">Tab 2</a>
      </li>
      <li class="dpc-tabs__item">
        <a class="dpc-tabs__link" href="#">Tab 3</a>
      </li>
      <li class="dpc-tabs__item dpc-tabs__item--disabled">
        <a class="dpc-tabs__link" href="#">Disabled</a>
      </li>
    </ul>
    <ul class="dpc-pills">
      <li class="dpc-pills__item dpc-pills__item--active">
        <a class="dpc-pills__link" href="#">Active</a>
      </li>
      <li class="dpc-pills__item">
        <a class="dpc-pills__link" href="#">Pill 2</a>
      </li>
      <li class="dpc-pills__item">
        <a class="dpc-pills__link" href="#">Pill 3</a>
      </li>
    </ul>
  </section>

  <!-- Panel -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Panel</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
      <div class="dpc-panel">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Default Panel</h3>
        </div>
        <div class="dpc-panel__body">Panel content goes here.</div>
      </div>
      <div class="dpc-panel dpc-panel--primary">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Primary Panel</h3>
        </div>
        <div class="dpc-panel__body">Panel content goes here.</div>
      </div>
      <div class="dpc-panel dpc-panel--success">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Success Panel</h3>
        </div>
        <div class="dpc-panel__body">Panel content goes here.</div>
      </div>
      <div class="dpc-panel dpc-panel--danger">
        <div class="dpc-panel__header">
          <h3 class="dpc-panel__title">Danger Panel</h3>
        </div>
        <div class="dpc-panel__body">Panel content goes here.</div>
      </div>
    </div>
  </section>

  <!-- Table -->
  <section>
    <h2 style="margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Table</h2>
    <table class="dpc-table dpc-table--bordered dpc-table--striped dpc-table--hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td><span class="dpc-badge dpc-badge--success">Active</span></td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td><span class="dpc-badge dpc-badge--warning">Pending</span></td>
          <td>User</td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td><span class="dpc-badge dpc-badge--danger">Inactive</span></td>
          <td>User</td>
        </tr>
      </tbody>
    </table>
  </section>

</div>
  `,
};
