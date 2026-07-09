# Motion System

## Purpose

Define how animation should support the Zexa Media website experience.

## Motion Principles

- Motion should clarify, guide, or add polish.
- Avoid animation that slows down comprehension.
- Respect performance and accessibility.
- Keep transitions consistent across the site.

## Libraries

Installed motion-related packages:

- `framer-motion`
- `gsap`
- `lenis`
- `react-countup`

## Usage Guidance

Use `framer-motion` for:

- Section reveals
- Button and card interactions
- Simple entrance animations
- UI state transitions

Use `gsap` for:

- More advanced timelines
- Scroll-linked sequences when needed
- Carefully scoped hero or showcase motion

Use `lenis` for:

- Smooth scrolling if it improves the site feel and does not harm usability

Use `react-countup` for:

- Metrics or result counters when real numbers are available

## Motion Constraints

- Do not animate large amounts of text at once.
- Avoid distracting infinite loops.
- Keep mobile animations lighter.
- Provide reduced-motion handling.
- Test production build after adding animation-heavy sections.

## Suggested Motion Language

- Subtle upward reveals
- Soft opacity transitions
- Smooth hover elevation or border changes
- Measured number counters for proof sections
- Minimal page-level motion
