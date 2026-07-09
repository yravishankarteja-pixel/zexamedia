# Component Plan

## Purpose

Plan the reusable component architecture before building Zexa Media website pages.

## Suggested Folder Structure

```text
components/
├─ layout/
├─ sections/
├─ ui/
└─ shared/
```

## Layout Components

- SiteHeader
- SiteFooter
- MobileNavigation
- Container
- Section

## UI Components

- Button
- Badge
- Card
- Stat
- ServiceIcon
- SectionHeading
- Testimonial
- FAQItem

## Section Components

- HeroSection
- ServicesSection
- ProcessSection
- WhyZexaSection
- ResultsSection
- TestimonialsSection
- CTASection
- ContactSection

## Utility Layer

Use `clsx` and `tailwind-merge` to create a class name helper when component work begins.

Suggested helper:

```text
lib/utils.ts
```

## Component Rules

- Keep components typed with TypeScript.
- Keep visual variants explicit.
- Avoid over-abstracting before patterns repeat.
- Prefer composition over deeply configurable components.
- Keep copy content easy to edit.

## Build Order

1. Base utilities and layout primitives
2. Header and footer
3. UI components
4. Homepage sections
5. Responsive and accessibility pass
6. SEO metadata
7. Performance and build validation
