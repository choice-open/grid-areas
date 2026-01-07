# Grid Areas - Tailwind CSS v4 Plugin

## Project Overview

A Tailwind CSS v4 plugin that provides utilities for CSS Grid named areas.

## Tech Stack

- **Language**: TypeScript
- **Build Tool**: tsup
- **Package Manager**: pnpm
- **Target**: Tailwind CSS v4

## Project Structure

```
src/
  index.ts              # Main plugin implementation
  tailwindcss-plugin.d.ts  # Type declarations for tailwindcss/plugin
dist/                   # Build output (ESM + CJS + types)
```

## Key Commands

```bash
pnpm build        # Build the plugin (ESM, CJS, and types)
pnpm build:watch  # Watch mode for development
pnpm clean        # Remove dist folder
```

## Plugin Features

The plugin provides these utility classes:

- `grid-areas-{name}` - Define grid template areas (`grid-template-areas`)
- `grid-area-{name}` - Place elements in named areas (`grid-area`)
- `row-start-{name}`, `row-end-{name}` - Row positioning with named lines
- `col-start-{name}`, `col-end-{name}` - Column positioning with named lines
- `row-span-{name}`, `col-span-{name}` - Span from named line to named line

### Arbitrary Value Syntax

- `grid-areas-[header_main,sidebar_footer]` - `_` = space, `,` = row separator
- `grid-area-[header]` - Place in named area
- Supports CSS variables: `grid-areas-[var(--my-areas)]`

## Code Conventions

- Use `CssInJs` type for CSS-in-JS style objects
- Plugin uses `plugin.withOptions<T>()` pattern for configuration
- API callback receives `PluginAPI` and destructures `{ addUtilities, matchUtilities }`

## Configuration Interface

```typescript
interface GridAreasPluginOptions {
  gridTemplateAreas?: Record<string, GridTemplateArea | string[]>
}

interface GridTemplateArea {
  rows: string[]
  gridTemplateRows?: string
  gridTemplateColumns?: string
}
```

## Usage Example

```html
<div class="grid-areas-[header_header,sidebar_main,footer_footer]">
  <header class="grid-area-[header]">Header</header>
  <aside class="grid-area-[sidebar]">Sidebar</aside>
  <main class="grid-area-[main]">Main</main>
  <footer class="grid-area-[footer]">Footer</footer>
</div>
```
