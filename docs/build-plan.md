# Zexa Media Website Implementation Plan

## Purpose

This plan translates the approved source documents into a build sequence for the Zexa Media website at `https://zexamedia.in`.

Source documents:

- `docs/website-content.md`
- `docs/seo-aeo.md`

No website pages should be built until this plan is approved.

## 1. Final Sitemap

### Core Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Brand intro, core positioning, service overview, proof, free audit CTA |
| About | `/about` | Founder story, mission, vision, local Vizag positioning |
| Services Overview | `/services` | Full service overview and industry fit |
| Performance Marketing | `/services/performance-marketing` | Google Ads, Meta Ads, lead generation, ROI positioning |
| Social Media Management | `/services/social-media-management` | Instagram, Facebook, Reels, content calendar, community management |
| Branding and Positioning | `/services/branding` | Logo, brand kit, brand voice, positioning strategy |
| Marketing Automation | `/services/automation` | WhatsApp automation, Make, Zapier, CRM, lead follow-up |
| Packages and Pricing | `/packages` | Basic Ads Starter, Growth Ads Package, Local Growth Package, Premium Growth Partner |
| Case Studies | `/case-studies` | Spoken English institute, gold mortgage business, wellness clinic |
| Blog Index | `/blog` | Marketing education and SEO content hub |
| Contact | `/contact` | Contact details, inquiry form, trust signals |
| Free Marketing Audit | `/free-audit` | Lead magnet and booking flow |

### Blog Pages

| Page | Route | Primary Keyword |
| --- | --- | --- |
| What Is Growth Marketing? | `/blog/what-is-growth-marketing` | growth marketing agency |
| Meta Ads for Local Business in Vizag | `/blog/meta-ads-local-business-vizag` | Meta Ads for local business Vizag |
| Marketing Automation for Small Business | `/blog/marketing-automation-small-business` | marketing automation small business India |

## 2. Page Build Order

1. Foundation pass
   - Confirm brand assets, logo, phone number, WhatsApp number, social links, and final founder details.
   - Add `lib/utils.ts` for `clsx` and `tailwind-merge`.
   - Add base layout primitives and global metadata for `https://zexamedia.in`.

2. Global shell
   - Header navigation.
   - Mobile navigation.
   - Footer with domain, location, services, and contact links.
   - Shared CTA paths to `/free-audit` and `/contact`.

3. Homepage
   - Hero.
   - Trust bar.
   - Service strip.
   - Zexa difference.
   - Process.
   - Testimonials.
   - Final CTA.

4. Conversion pages
   - `/free-audit`
   - `/contact`
   - These pages should be built early because most CTAs point to them.

5. Service pages
   - `/services`
   - `/services/performance-marketing`
   - `/services/social-media-management`
   - `/services/branding`
   - `/services/automation`

6. Commercial proof pages
   - `/packages`
   - `/case-studies`

7. Blog system
   - `/blog`
   - Three initial blog articles from the content source.

8. SEO, AEO, schema, tracking, and deployment pass
   - Metadata.
   - Structured data.
   - Sitemap.
   - Robots.
   - Analytics and conversion events.
   - Final production build.

## 3. Reusable Components

### Layout Components

- `SiteHeader`
- `SiteFooter`
- `MobileNavigation`
- `Container`
- `Section`
- `PageHero`
- `CTASection`

### UI Components

- `Button`
- `Badge`
- `Card`
- `StatCard`
- `ServiceCard`
- `PackageCard`
- `ProcessStep`
- `FAQItem`
- `TestimonialCard`
- `CaseStudyCard`
- `BlogCard`
- `ContactMethodCard`

### Content Components

- `ServicesGrid`
- `TrustBar`
- `ProcessTimeline`
- `ComparisonBlock`
- `PackageComparisonTable`
- `AEOAnswerBlock`
- `FAQSection`
- `SchemaJsonLd`
- `LeadForm`
- `AuditForm`

### Data Structure Recommendation

Use structured content objects for:

- Services
- Packages
- FAQs
- Case studies
- Blog metadata
- Navigation links
- Schema payloads

This keeps future edits safer than hardcoding every repeated block inside page files.

## 4. Design System

### Visual Direction

The source content calls for a dark, growth-focused visual direction with a bold green accent, local Vizag relevance, and no generic stock people in the hero.

### Recommended Style

- Premium growth marketing feel.
- Dark hero section with green accent.
- Clean white or near-white content sections for readability.
- Strong contrast for CTAs.
- Data, systems, and local-business growth as visual motifs.

### Color Roles

- Background dark: hero and high-impact CTA areas.
- Surface light: main content sections.
- Accent green: primary CTAs, stats, active states, highlights.
- Neutral gray: supporting text, borders, dividers, cards.
- Alert or emphasis color: limited use for proof points and results.

### Typography

- One modern sans-serif family.
- Strong H1 scale for page heroes.
- Compact, readable body text.
- Clear heading hierarchy for SEO and scanability.

### Layout Rules

- Mobile-first.
- 70%+ of local users are expected to browse on mobile, so mobile polish is a priority.
- Use generous spacing without creating empty agency-template sections.
- Keep service cards and package cards scannable.
- Avoid nested cards.
- Use real text content rather than image-only sections.

## 5. Motion System

### Libraries

- `framer-motion` for UI and section transitions.
- `gsap` only for advanced hero or scroll sequences if needed.
- `lenis` for smooth scrolling only if it improves usability.
- `react-countup` for proof metrics.

### Motion Rules

- Use motion to guide attention, not distract.
- Keep mobile animation lighter than desktop.
- Respect reduced-motion preferences.
- Avoid infinite loops except subtle hero ambience.
- Do not animate critical text in a way that delays comprehension.

### Suggested Motion Patterns

- Hero headline fade and rise.
- CTA button hover transitions.
- Service cards reveal on scroll.
- Stat counters in trust bar.
- Process steps staggered on entry.
- Case study result metrics count up.

## 6. SEO Plan

### Global SEO Priorities

- Position Zexa Media as a growth marketing agency in Visakhapatnam.
- Support local search for Vizag and Andhra Pradesh.
- Build topical relevance around performance marketing, social media, branding, automation, packages, and marketing audits.

### Page-Level SEO Requirements

- One `h1` per page.
- `h2` sections should include secondary keywords and AEO questions.
- Each core page should link to at least two related pages.
- Every page must include a clear CTA.
- Every meaningful image needs descriptive alt text.
- Mention Visakhapatnam, Vizag, and Andhra Pradesh naturally where relevant.

### Metadata

Use the title tags and meta descriptions from `docs/seo-aeo.md`, normalized for Next.js metadata exports.

### Internal Linking

- Home links to services, packages, free audit, and contact.
- Services overview links to all service detail pages.
- Packages links to services and free audit.
- Blog articles link to relevant service pages and free audit.
- Case studies link to relevant services and packages.

### Technical SEO

- Add `app/sitemap.ts`.
- Add `app/robots.ts`.
- Configure canonical URLs using `https://zexamedia.in`.
- Optimize image sizes and formats.
- Keep page speed target under 3 seconds.

## 7. AEO Plan

### Objective

Make Zexa Media eligible for AI Overviews, featured snippets, People Also Ask results, voice search, and chatbot-style answers.

### Implementation Rules

- Use the exact AEO questions from `docs/seo-aeo.md` as `h2` or `h3` headings.
- Keep answer snippets around 40-80 words.
- Place AEO sections on relevant pages, not only in the blog.
- Add FAQ sections to service pages.
- Use direct, concise definitions before elaborating.

### Priority AEO Sections

- Homepage/About:
  - What is a growth marketing agency?
  - What does Zexa Media do?
  - How is a growth marketing agency different from a digital marketing agency?
  - Why should I hire a marketing agency in Vizag?

- Performance Marketing:
  - What is performance marketing?
  - How much should a small business spend on Google Ads in India?
  - How long does it take to see results from Meta Ads?
  - What is ROAS and why does it matter?

- Social and Branding:
  - How many Instagram posts should a business publish per week?
  - What is brand positioning?
  - Why do businesses need a brand kit?

- Automation:
  - What is marketing automation?
  - How can WhatsApp automation help my business?
  - What tools are used for marketing automation in India?

- Packages:
  - How much does a digital marketing agency charge in India?
  - What is included in a digital marketing package?
  - Is it better to hire a freelancer or a marketing agency?

## 8. Schema Plan

### Global Schema

- `Organization`
- `LocalBusiness`
- `WebSite`

### Page Schema

| Page | Schema |
| --- | --- |
| Home | `Organization`, `LocalBusiness`, `WebSite` |
| Services | `Service` |
| Performance Marketing | `Service`, `FAQPage` |
| Social Media Management | `Service`, `FAQPage` |
| Branding | `Service`, `FAQPage` |
| Automation | `Service`, `FAQPage` |
| Packages | `Product`, `Offer` |
| Case Studies | `Article`, optional `Review` where appropriate |
| Blog Posts | `Article` |
| Contact | `LocalBusiness`, `ContactPage` |
| Free Audit | `Service`, `FAQPage` |

### Data Needed Before Final Schema

- Official phone number.
- WhatsApp number.
- Full business address, if public.
- Latitude and longitude, if using `LocalBusiness`.
- Logo URL.
- Social profile URLs.
- Founder or author name for article schema.

## 9. Forms And Tracking Plan

### Forms

Build two primary conversion forms:

- Contact form on `/contact`.
- Free audit form on `/free-audit`.

### Contact Form Fields

- Name, required.
- Business name, required.
- Phone or WhatsApp, required.
- Email, optional.
- Service interest dropdown.
- Monthly marketing budget dropdown.
- Business details textarea, optional.

### Free Audit Form Fields

- Name.
- Business name.
- Phone or WhatsApp.
- Email.
- Website or social profile link.
- Current marketing activity.
- Monthly budget range.
- Main growth challenge.
- Preferred audit slot or contact preference.

### Tracking Events

- `cta_click_free_audit`
- `cta_click_contact`
- `contact_form_submit`
- `audit_form_submit`
- `whatsapp_click`
- `phone_click`
- `package_cta_click`
- `service_cta_click`
- `blog_cta_click`

### Tracking Stack

- Google Analytics 4.
- Google Tag Manager.
- Meta Pixel.
- Conversion events for form submissions, WhatsApp clicks, phone clicks, and audit bookings.

### Integration Options

- Email notification.
- Google Sheets lead capture.
- WhatsApp notification.
- CRM integration later through Zoho, HubSpot, or another confirmed tool.

## 10. Deployment Checklist

### Pre-Build

- Confirm official logo.
- Confirm public phone and WhatsApp number.
- Confirm public address or service-area-only positioning.
- Confirm social links.
- Confirm whether pricing should be public exactly as documented.
- Confirm testimonials and case studies are approved for public use.

### Build QA

- Run linting.
- Run production build.
- Check mobile layout first.
- Check desktop layout.
- Validate forms.
- Validate reduced-motion behavior.
- Validate metadata.
- Validate schema with Google's Rich Results Test.
- Check sitemap and robots output.

### Performance QA

- Compress images.
- Prefer WebP or optimized Next.js images.
- Avoid heavy hero media unless optimized.
- Keep animations lightweight.
- Check Core Web Vitals.

### Launch

- Connect deployment platform.
- Set final domain to `https://zexamedia.in`.
- Configure redirects if needed.
- Verify SSL.
- Submit sitemap to Google Search Console.
- Install GA4, GTM, and Meta Pixel.
- Test all conversion events.

### Post-Launch

- Monitor Search Console indexing.
- Monitor form submissions.
- Monitor analytics events.
- Review page speed.
- Review early keyword impressions.
- Add blog content monthly for SEO growth.
