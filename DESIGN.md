---
name: Hesed Counselling Services
description: care rooted in love
colors:
  primary: "#5a375b"
  primary-hover: "#482b49"
  secondary: "#705271"
  warm-paper: "#fcfafc"
  surface: "#ffffff"
  soft-lavender: "#f1ebf2"
  charcoal-plum: "#352d36"
  muted: "#6b606d"
  line: "#e3dbe4"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 5.4vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 3.3vw, 3.45rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
rounded:
  field: "7px"
  button: "8px"
  notice: "10px"
  card: "12px"
  pill: "20px"
spacing:
  compact: "8px"
  control: "12px"
  comfortable: "20px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#fbfafb"
    rounded: "{rounded.button}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal-plum}"
    rounded: "{rounded.button}"
    padding: "15px 25px"
  field:
    backgroundColor: "#fdfdfd"
    textColor: "{colors.charcoal-plum}"
    rounded: "{rounded.field}"
    padding: "12px 13px"
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.charcoal-plum}"
    rounded: "{rounded.card}"
    padding: "26px 22px 24px"
  pill:
    backgroundColor: "#ebe0eb"
    textColor: "#6b496c"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
---

# Design System: Hesed Counselling Services

## Overview

**Creative North Star: "The Welcoming Room"**

The Welcoming Room is warm, calm and professional: generous space, gentle curves and reassuring language make the interface feel approachable. Deep Plum anchors actions and contact information; pale surfaces keep longer sections quiet.

Components are gentle and clear. Depth comes mainly from tonal layers and fine borders, with ambient shadows reserved for floating elements and hover states. This records the existing implementation, not a redesign or an accessibility certification.

**Key Characteristics:**

- Logo-led plum identity with Geist typography.
- Spacious sections and rounded, lightly bordered components.
- Arched image and brand panels as recurring signatures.
- Subtle layers rather than heavy elevation.

Recorded from [global styles](app/globals.css), [header](app/components/chrome.tsx), [brand](app/components/brand.tsx), and the shared local homepage on 2026-10-14. Computed styles were sampled at a 691px viewport; other breakpoint values come from source, not a full device audit. The newest cascading declarations take precedence over earlier theme values.

## Colors

### Primary

Deep Plum is the logo-derived anchor for primary actions, the contact bar and emphasis. Its darker hover shade provides interaction feedback. The secondary token is a quieter plum for supporting identity text, not a separate green accent.

### Neutral

Warm Paper is the page canvas; white surfaces distinguish cards and form panels. Soft Lavender provides tonal separation. Charcoal Plum is the main text, with muted plum for supporting copy and pale plum lines for boundaries.

**The Logo Leads Rule.** Use plum for the primary identity and actions; do not reintroduce a green-led theme.

The frontmatter records the reusable palette, not every legacy hard-coded shade. Legacy CSS variables named sage now resolve to plum or lavender; their names do not authorize a green palette. Sidecar tonal ramps are generated preview aids, not additional implemented colour tokens.

## Typography

Geist serves every role, loaded through Google Fonts with Arial and sans-serif fallbacks. Legacy serif and sans variables both resolve to this same stack.

**The One Family Rule.** Use Geist across display, body and controls, with Arial and sans-serif fallbacks.

Display and section headings use medium weight (500), with italic plum emphasis where implemented. Body text uses regular weight (400) and relaxed line-height (1.75). The base body drops to 14px at 640px and below; mobile form controls use 16px text. Heading sizes have component-specific overrides: the mobile hero uses clamp(2.65rem, 9vw, 3.8rem), while the base heading scale is recorded above.

Uppercase eyebrow labels are small, tracked (0.16em), and semibold (650). Existing small labels and footnotes are observations, not recommended minimum sizes or evidence of WCAG conformance.

## Layout

The main desktop container is min(1200px, calc(100% - 96px)). At 1450px and above it expands to min(1260px, calc(100% - 120px)); at 1150px and below gutters total 64px; at 640px and below they total 40px.

Sections generally use 100px vertical padding, reduced to 70px below 900px and 54px below 640px. The hero is a two-column split on larger screens and stacks below 640px. Service cards move from five columns to three below 900px, then two below 640px, with the last card spanning the mobile row.

The header combines a wrapping plum contact strip with a separate logo/navigation row. At 900px and below, a menu toggle replaces desktop navigation. The address occupies its own row below this breakpoint. Booking content becomes single-column below 900px. These are existing behaviours, not permission to compress contact text to fit.

## Elevation & Depth

**The Subtle Layers Rule.** Keep cards flat at rest; reserve ambient shadows for floating surfaces and hover feedback.

The welcome note uses a soft shadow (0 7px 26px #39253910) and a slight rotation (-4deg). The privacy notice uses 0 4px 30px #301f3015; mobile navigation uses 0 10px 20px #301f3010. Primary-button hover uses 0 5px 18px #4b304c18. Tonal section backgrounds carry most separation.

## Shapes

Controls have gentle corners: fields (7px), buttons (8px), notices (10px), cards (12px) and tags (20px). The default radius variable is 18px, but component values govern actual rendering.

Arched image crops and branded panels are signature silhouettes. The desktop hero arch uses 220px 220px 16px 16px corners; the brand panel uses 150px 150px 24px 24px. Preserve the supplied logo artwork; its emblem is clipped in the layout and paired with a text wordmark and current tagline.

## Components

### Buttons

Gentle and clear. Primary buttons use plum fill, pale text and medium-weight type (0.86rem). Outline buttons use transparent fill and a muted plum border. Hover darkens the primary, lightly washes the outline, and lifts enabled buttons by 2px over 0.2s. Disabled buttons reduce opacity to 0.5 and use a not-allowed cursor. Visible focus uses a 3px plum outline with 4px offset.

### Cards

White, lightly bordered service cards use the frontmatter padding and radius, with an icon/number row, title, short description and action. Hover introduces a pale wash and 5px lift over 0.2s. Responsive padding varies; the observed 691px layout uses 23px.

### Inputs

Labels sit above fields with an 8px gap. Fields use a pale background, a 1px plum-tinted border and 1.6 line-height. Focus is outlined; focus-visible follows the shared plum ring. Textareas resize vertically. Error messages are separate warm-tinted notices; do not invent red input borders or success states absent from the implementation.

### Navigation

Desktop links are small and understated, with an underline on the active route and a solid booking action. Mobile navigation is a vertically stacked panel controlled by an accessible menu button. Contact links stay white on plum and underline on hover; their focus ring is white to remain distinct against the dark bar.

### Tags

Compact non-interactive pills use a pale plum fill and darker plum text. Do not imply selectable filter behaviour where none exists.

### Brand and floating notices

The logo emblem, HESED wordmark and lowercase tagline recur in the header, footer and brand panel. The floating privacy notice is dismissible and uses a soft shadow. Preserve its real disclosure rather than using it as decorative copy.

Motion is restrained: 0.2s transitions on buttons and cards, with animations/transitions disabled under prefers-reduced-motion. Smooth scrolling is likewise disabled for that preference.

## Do's and Don'ts

### Do:

- Do preserve the supplied logo, plum identity and Geist typography.
- Do retain clear keyboard focus and reduced-motion behaviour.
- Do keep contact information readable and able to wrap on narrow screens.

### Don't:

- Don't restore green as the main theme colour.
- Don't present placeholder photography as the actual therapist or office.
- Don't treat recorded small text sizes as proof of accessibility compliance.
