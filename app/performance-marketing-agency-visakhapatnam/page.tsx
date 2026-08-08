import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Search,
  Target,
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
  title: "Performance Marketing Agency Visakhapatnam | Zexa Media",
  description:
    "Zexa Media is a performance marketing agency in Visakhapatnam for Google Ads, Meta Ads, lead generation, landing pages, tracking, reporting and WhatsApp follow-up.",
  alternates: { canonical: absoluteUrl("/performance-marketing-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/performance-marketing-agency-visakhapatnam");

const outcomes = [
  ["Qualified enquiries", "Campaigns are built around calls, WhatsApp messages, forms, bookings and sales conversations."],
  ["Cleaner tracking", "GA4, Meta Pixel, Google Tag Manager and lead-source visibility help owners see what is working."],
  ["Better follow-up", "WhatsApp-first workflows and reporting reduce missed leads after campaigns start producing demand."],
  ["Local relevance", "Copy, offers and targeting are shaped for Visakhapatnam, Vizag neighbourhoods and Andhra Pradesh buyers."],
] as const;

const campaignStack = [
  ["Google Search Ads", "Capture active buyers searching for services in Visakhapatnam and nearby locations.", Search],
  ["Meta Ads", "Generate demand on Instagram and Facebook with offer-led creative and audience testing.", Target],
  ["Landing Page Support", "Improve page clarity, calls to action, trust signals and mobile conversion paths.", BarChart3],
  ["WhatsApp Lead Flow", "Connect enquiries to faster owner response, lead labels and basic follow-up sequences.", MessageCircle],
  ["Local Targeting", "Plan city, radius and service-area campaigns around real buyer behaviour in Vizag.", MapPin],
  ["Weekly Optimisation", "Improve keywords, negative lists, creatives, audiences, bids, budgets and lead quality.", CheckCircle2],
] as const;

const industries = [
  "Healthcare clinics, doctors and dental practices",
  "IVF, aesthetics and wellness businesses",
  "Education institutes and coaching centres",
  "Real estate projects and local service businesses",
  "Spas, gyms, salons and appointment-led brands",
  "Consultants, B2B services and professional firms",
];

const process = [
  ["01", "Audit", "Review current ads, website, landing pages, offer, tracking and lead response gaps."],
  ["02", "Plan", "Choose the right channel mix, budget direction, audience, message and conversion path."],
  ["03", "Launch", "Build campaigns with conversion tracking for calls, forms, WhatsApp clicks and page events."],
  ["04", "Optimise", "Use weekly data to improve spend, lead quality, creative performance and follow-up clarity."],
] as const;

const faqs = [
  {
    question: "What does a performance marketing agency in Visakhapatnam do?",
    answer:
      "A performance marketing agency in Visakhapatnam plans and manages measurable campaigns across channels like Google Ads, Meta Ads, landing pages and lead tracking. The goal is to generate qualified enquiries, calls, WhatsApp messages, bookings or sales conversations rather than only impressions or reach.",
  },
  {
    question: "Does Zexa Media manage Google Ads and Meta Ads together?",
    answer:
      "Yes. Zexa Media can manage Google Ads and Meta Ads together when both channels fit the business goal. Google Ads usually captures existing search demand, while Meta Ads helps create demand, retarget audiences and build local trust.",
  },
  {
    question: "Which Visakhapatnam businesses fit performance marketing?",
    answer:
      "Performance marketing works well for clinics, doctors, dental practices, IVF centres, aesthetics clinics, education institutes, spas, gyms, real estate businesses, consultants and local services that need measurable enquiries and faster follow-up.",
  },
  {
    question: "Can Zexa Media guarantee leads or ranking positions?",
    answer:
      "No ethical agency should guarantee specific ranking positions or fixed lead volume. Zexa Media focuses on practical planning, campaign quality, tracking, optimisation and transparent reporting so decisions are based on real data.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Performance Marketing Agency in Visakhapatnam",
  serviceType: "Performance Marketing",
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
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: pageUrl,
    servicePhone: {
      "@type": "ContactPoint",
      telephone: phoneE164,
      contactType: "sales",
      areaServed: "IN",
    },
  },
  description:
    "Performance marketing, Google Ads, Meta Ads, landing page support, tracking, reporting and lead follow-up for businesses in Visakhapatnam.",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: absoluteUrl("/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Performance Marketing Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function PerformanceMarketingAgencyVisakhapatnamPage() {
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
        eyebrow="Performance marketing agency in Visakhapatnam"
        title="Performance marketing built for qualified enquiries, not empty reach."
        description="Zexa Media helps Visakhapatnam businesses turn Google Ads, Meta Ads, landing pages, tracking and WhatsApp follow-up into one measurable growth system."
        imageSrc="/images/zexa-hero-strategy.png"
        imageAlt="Zexa Media performance marketing dashboard for Visakhapatnam businesses"
        metricLabel="Local campaign focus"
        metricValue="Ads, landing pages, tracking, and follow-up"
      />

      <Section eyebrow="Commercial outcomes" title="What the page is designed to sell clearly.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Campaign stack" title="A connected paid growth system for Vizag businesses.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {campaignStack.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local fit" title="Built for businesses that need calls, bookings and sales conversations.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Where Zexa Media is based</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Campaign planning can focus on
              Visakhapatnam, Vizag neighbourhoods, Andhra Pradesh markets, or national
              lead-generation goals depending on the business model.
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-bold text-[#8EEA4D]"
            >
              View location
              <ArrowRight className="ml-2 size-4" />
            </a>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Industries this suits</h2>
            <div className="mt-5 grid gap-3">
              {industries.map((industry) => (
                <div key={industry} className="flex gap-3 text-white/68">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
                  <span className="leading-7">{industry}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Process" title="From audit to clearer growth decisions.">
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

      <Section eyebrow="FAQ" title="Performance marketing questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Start with a free performance marketing audit.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your current ads, website, tracking and lead follow-up.",
              "We identify whether Google Ads, Meta Ads, landing pages or automation should come first.",
              "You get a practical next-step plan before committing to a monthly retainer.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Book Free Audit
            </Link>
            <Link
              href="/services/performance-marketing"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              View Service Details
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
