# DPC-CSS

CSS components based on Drunken Parrot Flat UI.

## Installation

```bash
npm install github:mmmpa/dpc-css
```

## Usage

```html
<link rel="stylesheet" href="node_modules/dpc-css/dist/dpc.css">
```

Or import in your CSS/Sass:

```css
@import 'dpc-css/dist/dpc.css';
```

### Per-Component Import (SCSS)

For smaller bundle size, import only the components you need:

```scss
@use 'dpc-css/src/scss/variables';
@use 'dpc-css/src/scss/mixins' as *;
@use 'dpc-css/src/scss/components/button';
@use 'dpc-css/src/scss/components/input';
```

## Components

### Button

```html
<button class="dpc-button dpc-button--primary">Primary</button>
<button class="dpc-button dpc-button--success dpc-button--sm">Small Success</button>
<button class="dpc-button dpc-button--danger dpc-button--lg">Large Danger</button>
```

### Input

```html
<input class="dpc-input" placeholder="Default input">
<input class="dpc-input dpc-input--error" value="Invalid">
<input class="dpc-input dpc-input--success" value="Valid">
```

### Alert

```html
<div class="dpc-alert dpc-alert--success">
  <span class="dpc-alert__icon">✓</span>
  <span class="dpc-alert__content">Success message</span>
</div>
```

## Customization

Override CSS variables:

```css
:root {
  --dpc-primary: #6366f1;
  --dpc-border-radius: 8px;
}
```

## Development

```bash
npm install
npm run watch        # Watch Sass changes
npm run storybook    # Start Storybook
npm run build        # Production build
```

## License

MIT

Based on [Drunken Parrot Flat UI](https://github.com/rikitanone/drunken-parrot-flat-ui) by [rikitanone](https://github.com/rikitanone), licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
