---
name: Luminescent Precision
colors:
  surface: '#10131f'
  surface-dim: '#10131f'
  surface-bright: '#363946'
  surface-container-lowest: '#0b0e1a'
  surface-container-low: '#181b27'
  surface-container: '#1c1f2c'
  surface-container-high: '#272936'
  surface-container-highest: '#313442'
  on-surface: '#e0e1f3'
  on-surface-variant: '#bdc8ce'
  inverse-surface: '#e0e1f3'
  inverse-on-surface: '#2d303d'
  outline: '#879298'
  outline-variant: '#3d484d'
  surface-tint: '#5ed4fd'
  primary: '#91e0ff'
  on-primary: '#003544'
  primary-container: '#4ec7ef'
  on-primary-container: '#005165'
  inverse-primary: '#006781'
  secondary: '#bdc2ff'
  on-secondary: '#192283'
  secondary-container: '#333c9a'
  on-secondary-container: '#a8afff'
  tertiary: '#d3d5d9'
  on-tertiary: '#2e3134'
  tertiary-container: '#b8b9bd'
  on-tertiary-container: '#474a4d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b9eaff'
  primary-fixed-dim: '#5ed4fd'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d61'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000668'
  on-secondary-fixed-variant: '#333c9a'
  tertiary-fixed: '#e1e2e6'
  tertiary-fixed-dim: '#c5c6ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#10131f'
  on-background: '#e0e1f3'
  surface-variant: '#313442'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a high-contrast, tech-forward aesthetic engineered for a contemporary marketing and digital media agency. Rooted in transparency, strategic velocity, and precision, the visual language merges the sleek sophistication of deep space minimalism with electric neon accents. It discards agency hyperbole in favor of structured geometry, razor-sharp focus, and calm technical mastery.

The visual style unites:
- **Dark Minimalist Precision:** A deep near-black substrate paired with structured surfaces to eliminate cognitive noise and focus client attention on metrics, narratives, and creative output.
- **Electric Luminescence:** Concentrated hits of high-chroma cyan and deep indigo that slice through the dark canvas, functioning as intentional focal anchors for primary interactions, metrics, and conversion paths.
- **Glass & Ghost Architecture:** Subtle translucent backing panels, micro-borders with faint indigo/cyan radiance, and rigorous spatial cadence that evoke high-end SaaS tools and bleeding-edge web platforms.

## Colors

The palette leverages a dark canvas contrasted by single-point radiant accents. The role distribution ensures high legibility and precise visual hierarchy:

- **Primary (`#4EC7EF` - Electric Sky Cyan):** The high-velocity accent. Dedicated strictly to critical calls-to-action, key metric readouts, focused states, interactive badges, and luminous indicator nodes. Never overused as solid full-screen backdrops.
- **Secondary (`#2B3492` - Deep Indigo):** The architectural bedrock. Powers secondary interactive elements, active card outlines, container depth tinting, subtle glowing gradients, and deep structural surfaces.
- **Neutral (`#0B0E1A` - Deep Void Navy):** The core base. Establishes the immersive near-black foundation across screens, viewports, headers, and modal backdrops. Sub-surfaces scale up through tonal increments:
  - Surface Elevation 1: `#121726` (Standard cards and modules)
  - Surface Elevation 2: `#1A2035` (Hover states, input containers, flyouts)
  - Surface Elevation 3: `#242D4A` (Active interactive layers)
- **Tertiary / Light (`#F7F8FC` - Pure Off-White):** High-clarity foreground. Powers crisp display headlines, bold numerals, and card typography. Subordinate text cascades through opacity steps: `rgba(247, 248, 252, 0.72)` for body copy and `rgba(247, 248, 252, 0.45)` for captions and metadata.

## Typography

Typography centers around **Plus Jakarta Sans**, utilizing its geometric proportions, wide apertures, and humanist touches to project technical capability without clinical coldness.

- **Weight Hierarchy:** Headlines use 700 and 800 weights with negative letter tracking to create punchy, high-impact titles. Body text stays strictly at weight 400 for maximum readability against dark surfaces.
- **Eyebrow & Metric Tags:** All categorization chips, overlines, and metric labels deploy `label-caps` set in full uppercase with expanded letter-spacing (`0.1em`) to establish clear hierarchy without competing with main titles.
- **Mobile Adjustments:** Viewport-conscious tokens scale large titles down cleanly beneath 768px viewports, preventing awkward hyphenations and word wraps while preserving visual scale.

## Layout & Spacing

The layout model is constructed on an 8pt baseline rhythm within a 12-column responsive fluid grid.

- **Grid & Alignment:**
  - **Desktop (1024px+):** 12-column fluid grid, 1.5rem (`24px`) gutters, and an outer page margin bounded at a max container width of `1280px` with dynamic outer horizontal spacing (`margin: 2.5rem`).
  - **Tablet (768px - 1023px):** 8-column layout, 1.25rem (`20px`) gutters, and `1.5rem` canvas margins.
  - **Mobile (<768px):** 4-column layout, 1rem (`16px`) gutters, and `1rem` outer canvas padding.
- **Rhythm & Structure:** Section blocks utilize generous vertical padding (`5rem` to `7.5rem` on desktop, `3.5rem` on mobile) to frame offerings with deliberate breathability. Component gaps map strictly to the `space-*` scale to maintain consistent spacing between headers, descriptions, and CTA clusters.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of a clean, tech-forward depth model built on tonal layering, low-contrast luminous outlines, and controlled accent glows:

- **Tonal Layering:** Visual hierarchy rises from the darkest ground (`#0B0E1A`) to surface panels (`#121726`), with elevated cards resting on `#1A2035`.
- **Micro-Borders:** Panels, cards, and modal sheets are outlined with a fine 1px semi-transparent border: `rgba(247, 248, 252, 0.08)` for passive surfaces, shifting to `rgba(78, 199, 239, 0.4)` on hover or focus.
- **Cyan & Indigo Luminescence:** High-priority cards (featured case studies, pricing tiers) feature an interior linear gradient glow along the top edge or an ambient backlight:
  - Default Ambient Glow: `0 0 32px -8px rgba(43, 52, 146, 0.35)`
  - Active / Hover Cyan Flare: `0 0 24px -4px rgba(78, 199, 239, 0.35)`
- **Glass Backdrop Blurs:** Navigation headers, floating action toolbars, and context drawers apply backdrop filters (`backdrop-filter: blur(16px); background: rgba(11, 14, 26, 0.75)`), maintaining spatial continuity as users scroll.

## Shapes

The geometric personality balances crisp technology with human touch:

- **Base Radius (0.5rem / 8px):** Applied to form inputs, utility buttons, dropdown menus, and standard informational tags.
- **Large Radius (1rem / 16px):** Applied to content cards, portfolio modules, pricing containers, and modal sheets.
- **Pill Geometry (`rounded-full`):** Reserved strictly for status badges, notification pips, filter pills, and circular icon wrappers.

## Components

### Buttons
- **Primary:** Filled `#4EC7EF` background with `#0B0E1A` high-contrast typography (`label-lg`), `0.5rem` border radius, and `1rem 1.75rem` padding. On hover: slight vertical lift (`transform: translateY(-1px)`) coupled with a subtle cyan shadow flare (`0 6px 20px rgba(78, 199, 239, 0.4)`).
- **Secondary:** Filled `#2B3492` background with `#F7F8FC` typography, 1px border of `rgba(78, 199, 239, 0.25)`. On hover: surface brightens to `#3742B0` with clean crisp text definition.
- **Tertiary / Ghost:** Transparent surface, 1px border in `rgba(247, 248, 252, 0.15)`, `#F7F8FC` text. On hover: border transitions to `#4EC7EF`, text transitions to `#4EC7EF`.

### Cards & Modules
- Formed with `#121726` background, 1px stroke of `rgba(247, 248, 252, 0.08)`, and `1rem` corner rounding.
- Hover states transition the border to `rgba(78, 199, 239, 0.35)` and project a deep indigo aura (`0 12px 32px rgba(43, 52, 146, 0.25)`).
- Featured cards integrate a 1px gradient stroke running from `#4EC7EF` at the top down to transparent along the bottom edge.

### Badges & Chips
- Compact horizontal layouts featuring `label-caps` typography.
- Built using deep indigo translucent fills (`rgba(43, 52, 146, 0.4)`), a 1px border in `rgba(78, 199, 239, 0.4)`, and crisp `#4EC7EF` text. Optional leading indicator dot is a solid 6px `#4EC7EF` circle with a micro pulse.

### Form Inputs
- Backgrounds utilize `#0F1424`, bordered by `1px solid rgba(247, 248, 252, 0.12)` with `0.5rem` border radius.
- Placeholder text set to `rgba(247, 248, 252, 0.35)`.
- On focus: border shifts instantly to `#4EC7EF` accompanied by an outer micro-ring (`box-shadow: 0 0 0 3px rgba(78, 199, 239, 0.15)`).

### Checkboxes & Radio Controls
- Base control frame: 20px square (checkbox) or 20px circle (radio) with a 1.5px outline in `rgba(247, 248, 252, 0.25)`.
- Checked state: `#4EC7EF` solid fill with `#0B0E1A` interior checkmark or radio dot, backed by an electric cyan micro-halo.

### Lists & Activity Feeds
- Row items bordered on bottom by a 1px hairline in `rgba(247, 248, 252, 0.06)`.
- Leading icons or indices housed within 36px `#1A2035` circular containers bordered with `rgba(78, 199, 239, 0.2)`.

### Metrics & Stat Callouts
- Stat values set in `display` or `headline-lg` in `#F7F8FC`, paired with an accent trend icon in `#4EC7EF` and an uppercase category title in `label-caps` (`rgba(247, 248, 252, 0.5)`).
