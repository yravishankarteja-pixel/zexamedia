<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Zexa Media Website Agent Guide

## Project Context

This repository is the official website codebase for Zexa Media.

Final live domain:

```text
https://zexamedia.in
```

The project is already initialized as a Next.js App Router project with TypeScript, Tailwind CSS, and ESLint.

## Hard Rules

- Do not run `create-next-app` again.
- Do not run `npm audit fix --force`.
- Do not change the GitHub repository name.
- Do not change the package name in `package.json`.
- Do not build website pages until the planning docs are reviewed or a page build is explicitly requested.
- Keep the package name as `zexa-website`.

## Development Standards

- Use the existing Next.js App Router structure in `app/`.
- Keep components reusable, accessible, and easy to maintain.
- Use TypeScript for all application code.
- Use Tailwind CSS for styling unless a different approach is explicitly requested.
- Prefer small, focused components over large monolithic page files.
- Validate the production build before considering implementation work complete.

## Documentation Source of Truth

Before building pages or components, review the documents in `docs/`:

- `docs/brand.md`
- `docs/website-content.md`
- `docs/seo-aeo.md`
- `docs/design-system.md`
- `docs/motion.md`
- `docs/component-plan.md`
- `docs/build-plan.md`

These files define the brand direction, content structure, SEO/AEO approach, design system, motion language, component architecture, and build sequence for the Zexa Media website.
