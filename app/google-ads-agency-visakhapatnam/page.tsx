import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  MousePointerClick,
  PhoneCall,
  Search,
  ShieldCheck,
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
  title: "Google Ads Agency Visakhapatnam | Zexa Media",
  description:
    "Zexa Media is a Google Ads agency in Visakhapatnam helping businesses generate qualified calls, WhatsApp enquiries and leads with search ads, tracking and optimisation.",
  alternates: { canonical: absoluteUrl("/google-ads-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/google-ads-agency-visakhapatnam");

const adServices = [
  ["Search Ads", "Capture people actively searching for clinics, services, institutes, real estate and local providers in Vizag.", Search],
  ["Call & WhatsApp Leads", "Shape campaigns around high-intent calls, WhatsApp clicks, forms and booking enquiries.", PhoneCall],
  ["Keyword Planning", "Build campaigns around commercial keywords, local intent and negative keyword protection.", Target],
  ["Landing Page Review", "Improve mobile clarity, CTA placement, trust signals and lead form conversion paths.", MousePointerClick],
  ["Conversion Tracking", "Track calls, forms, WhatsApp clicks, GA4 events and campaign source quality.", BarChart3],
  ["Waste Reduction", "Cut irrelevant searches, weak locations, low-quality keywords and spend leaks.", ShieldCheck],
] as const;

const localFit = [
  "Doctors, clinics, dental practices, IVF and aesthetics centres",
  "Education institutes, schools, coaching centres and training academies",
  "Spas, salons, gyms, wellness centres and appointment-led businesses",
  "Real estate, construction, home services and local service providers",
  "Consultants, professional firms and B2B service companies",
  "Retail showrooms and local brands that need calls or walk-ins",
];

const process = [
  ["01", "Search audit", "Review current keywords, locations, landing pages, tracking and wasted spend patterns."],
  ["02", "Campaign plan", "Choose campaign types, keyword groups, budgets, match types, negatives and conversion actions."],
  ["03", "Launch with tracking", "Set up campaigns around calls, forms, WhatsApp clicks and lead-source visibility."],
  ["04", "Optimise weekly", "Improve search terms, bids, ad copy, locations, landing pages and lead quality."],
] as const;

const faqs = [
  {
    question: "What does a Google Ads agency in Visakhapatnam do?",
    answer:
      "A Google Ads agency in Visakhapatnam plans, launches and optimises paid search campaigns so businesses can appear when people search for their services. The work includes keyword research, campaign structure, ad copy, conversion tracking, landing page review, negative keywords and lead quality reporting.",
  },
  {
    question: "Can Google Ads help local businesses in Vizag get calls?",
    answer:
      "Yes. Google Ads can help local businesses generate calls, WhatsApp enquiries and form leads from people already searching for a service nearby. Results depend on offer clarity, landing page quality, tracking setup, budget, competition and follow-up speed.",
  },
  {
    question: "Which Google Ads campaign type should a local business start with?",
    answer:
      "Many local service businesses should start with focused Search campaigns before expanding. Search captures existing intent. Other campaign types can be tested later when tracking, landing pages and lead quality are clear.",
  },
  {
    question: "Does Zexa Media guarantee leads from Google Ads?",
    answer:
      "No. Zexa Media does not guarantee fixed lead volume or ranking positions. The focus is on responsible campaign setup, clear tracking, weekly optimisation and transparent reporting so budget decisions are based on real performance data.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Google Ads Agency in Visakhapatnam",
  serviceType: "Google Ads Management",
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
    "Google Ads management, search ads, keyword planning, conversion tracking, landing page review and lead generation for businesses in Visakhapatnam.",
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
      name: "Google Ads Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function GoogleAdsAgencyVisakhapatnamPage() {
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
        eyebrow="Google Ads agency in Visakhapatnam"
        title="Google Ads campaigns built to capture high-intent local demand."
        description="Zexa Media helps Vizag businesses turn search traffic into calls, WhatsApp enquiries, forms and sales conversations with focused Google Ads, tracking and weekly optimisation."
        imageSrc="/images/zexa-hero-strategy.png"
        imageAlt="Zexa Media Google Ads agency in Visakhapatnam reviewing lead generation campaigns"
        metricLabel="Search intent"
        metricValue="Keywords, calls, WhatsApp leads, and tracking"
      />

      <Section eyebrow="Google Ads services" title="What Zexa Media manages inside Google Ads.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {adServices.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local search demand" title="Why Google Ads works well for service businesses in Vizag.">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Local buyers search when they are ready to act.</h2>
            <p className="mt-4 leading-8 text-white/62">
              People searching for a clinic, institute, spa, service provider or real estate
              option in Visakhapatnam often need a quick answer. Google Ads helps your offer
              appear during that decision window when location, trust and response speed matter.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Who this fits</h2>
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

      <Section eyebrow="Location" title="A Google Ads partner based in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Zexa Media local address</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Campaigns can target Visakhapatnam,
              nearby Vizag neighbourhoods, Andhra Pradesh service areas or broader India
              searches depending on the offer and lead quality.
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

      <Section eyebrow="Process" title="A controlled setup from keywords to conversions.">
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

      <Section eyebrow="FAQ" title="Google Ads questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Book a free Google Ads audit before spending more.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review campaign structure, keywords, search terms, landing pages and tracking.",
              "You get a clear view of what is wasting budget and what can be improved first.",
              "We recommend whether Google Ads alone is enough or Meta Ads and automation should support it.",
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
              href="/performance-marketing-agency-visakhapatnam"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              View Performance Marketing
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
