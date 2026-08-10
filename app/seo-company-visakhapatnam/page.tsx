import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  MapPin,
  ShieldCheck,
  Sparkles,
  Tags,
} from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import {
  addressCountry,
  addressLocality,
  addressRegion,
  areaServed,
  businessName,
  contactEmail,
  fullAddress,
  mapUrl,
  phoneE164,
  postalCode,
  secondaryPhoneE164,
  streetAddress,
} from "@/lib/business-info";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "SEO Company in Vizag | Local SEO Services | Zexa Media",
  description:
    "Zexa Media provides SEO and local SEO services in Vizag for technical SEO, on-page optimization, content planning, schema, Google Business Profile alignment and reporting.",
  alternates: { canonical: absoluteUrl("/seo-company-visakhapatnam") },
};

const pageUrl = absoluteUrl("/seo-company-visakhapatnam");

const seoServices = [
  ["Technical SEO", "Review crawlability, metadata, canonical tags, sitemap, robots, indexability and page structure.", ShieldCheck],
  ["Local SEO", "Improve location signals, service-area relevance, NAP consistency and Google Business Profile alignment.", MapPin],
  ["On-Page SEO", "Clarify titles, headings, internal links, service copy, alt text and search-intent alignment.", FileSearch],
  ["Content Strategy", "Plan useful pages and articles around commercial, local and answer-driven search intent.", Sparkles],
  ["Structured Data", "Add Organization, LocalBusiness, Service, WebPage, Breadcrumb and FAQ schema where appropriate.", Tags],
  ["Reporting", "Track visibility, page performance, technical issues, enquiries and content opportunities.", BarChart3],
] as const;

const visibilityGaps = [
  ["Weak local signals", "Search engines need consistent business, service and location information across the website and profiles."],
  ["Thin service pages", "Useful local pages should answer real buyer questions, not repeat the same copy with swapped city names."],
  ["Poor technical hygiene", "Broken metadata, weak internal links and missing sitemap signals can limit organic visibility."],
  ["No conversion path", "SEO pages should guide visitors toward calls, WhatsApp, audits or relevant service pages."],
] as const;

const localFit = [
  "Clinics, hospitals, dentists, IVF centres and aesthetics providers",
  "Schools, training academies, coaching centres and education businesses",
  "Real estate, construction, interior and home-service businesses",
  "Spas, salons, gyms, wellness brands and appointment-led businesses",
  "Professional services, consultants and B2B firms",
  "Local businesses that want stronger Google visibility in Vizag",
];

const process = [
  ["01", "SEO audit", "Review crawlability, metadata, schema, headings, indexability, speed and local signals."],
  ["02", "Search intent map", "Prioritise service pages, FAQ sections, internal links and future article topics."],
  ["03", "Implementation", "Improve page copy, technical tags, schema, links, GBP alignment and conversion CTAs."],
  ["04", "Measure and expand", "Track visibility, queries, clicks, leads and new content opportunities over time."],
] as const;

const faqs = [
  {
    question: "What does an SEO company in Vizag do?",
    answer:
      "An SEO company in Vizag helps businesses improve organic visibility through technical SEO, on-page optimization, local SEO, content strategy, schema markup, internal linking and reporting. The goal is to attract relevant search traffic and convert visitors into enquiries.",
  },
  {
    question: "What is local SEO for Visakhapatnam businesses?",
    answer:
      "Local SEO improves how a business appears for nearby and city-specific searches. It includes Google Business Profile alignment, location signals, service-area copy, reviews strategy, NAP consistency, local landing pages and website content that reflects real buyer intent.",
  },
  {
    question: "How long does SEO take to work?",
    answer:
      "SEO usually compounds over months, not days. Technical fixes can help quickly, but rankings and qualified traffic depend on competition, content quality, local signals, authority, reviews, conversion paths and consistent publishing.",
  },
  {
    question: "Does Zexa Media guarantee SEO rankings?",
    answer:
      "No. Zexa Media does not guarantee fixed rankings. Ethical SEO focuses on improving technical quality, content usefulness, local entity signals, internal links and conversion paths so the website has a stronger chance to earn visibility.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "SEO Company in Visakhapatnam",
  serviceType: "SEO and Local SEO",
  url: pageUrl,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: businessName,
    url: siteUrl,
    email: contactEmail,
    telephone: [phoneE164, secondaryPhoneE164],
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    areaServed,
    hasMap: mapUrl,
  },
  areaServed,
  description:
    "SEO and local SEO services in Visakhapatnam including technical SEO, on-page SEO, content strategy, schema, Google Business Profile alignment and reporting.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
    { "@type": "ListItem", position: 3, name: "SEO Company Visakhapatnam", item: pageUrl },
  ],
};

export default function SeoCompanyVisakhapatnamPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="SEO company in Visakhapatnam"
        title="SEO and local visibility systems for growing Vizag businesses."
        description="Zexa Media helps businesses improve organic discovery with technical SEO, local SEO, content planning, schema, Google Business Profile alignment, internal links and conversion-focused service pages."
        imageSrc="/images/zexa-hero-strategy.png"
        imageAlt="Zexa Media SEO company in Visakhapatnam planning local search visibility"
        metricLabel="SEO focus"
        metricValue="Technical health, local signals, content, schema, and reporting"
        primaryCta="Book Free SEO Audit"
        primaryHref="/free-audit"
        secondaryCta="View Digital Marketing"
        secondaryHref="/digital-marketing-agency-visakhapatnam"
      />

      <Section eyebrow="SEO services" title="Local SEO services in Visakhapatnam built around useful search intent.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seoServices.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Search problems" title="Why many local websites struggle to rank and convert.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {visibilityGaps.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local relevance" title="SEO for businesses serving Visakhapatnam and nearby buyers.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Local visibility needs real entity signals.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media aligns website content, business details, service pages and Google
              Business Profile signals so search engines can understand the brand, services and
              Visakhapatnam service area more clearly.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Best-fit businesses</h2>
            <div className="mt-5 grid gap-3">
              {localFit.map((item) => (
                <div key={item} className="flex gap-3 text-white/68">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
                  <span className="leading-7">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Location" title="An SEO partner based in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Zexa Media local address</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. SEO work can support Visakhapatnam,
              Dwaraka Nagar, MVP Colony, Siripuram, Madhurawada, Gajuwaka and broader
              Andhra Pradesh search visibility where the business genuinely serves those areas.
            </p>
          </GlassCard>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-cta inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
          >
            View Location
            <ArrowRight className="ml-2 size-5" />
          </a>
        </div>
      </Section>

      <Section eyebrow="Process" title="From technical audit to stronger organic visibility.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                {step}
              </p>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="SEO questions from Vizag business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Start with a practical SEO and local visibility audit.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review metadata, headings, schema, sitemap, robots, internal links and local signals.",
              "We identify which pages need stronger content, clearer CTAs or technical fixes.",
              "You get a prioritized plan before ongoing SEO work begins.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Book Free SEO Audit
            </Link>
            <Link
              href="/digital-marketing-agency-visakhapatnam"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Digital Marketing Agency in Vizag
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
