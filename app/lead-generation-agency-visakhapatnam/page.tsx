import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Filter,
  MapPin,
  MessageCircle,
  MousePointerClick,
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
  title: "Lead Generation Agency Visakhapatnam | Zexa Media",
  description:
    "Zexa Media is a lead generation agency in Visakhapatnam helping businesses get qualified calls, WhatsApp enquiries and form leads through ads, landing pages, tracking and follow-up.",
  alternates: { canonical: absoluteUrl("/lead-generation-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/lead-generation-agency-visakhapatnam");

const leadSystem = [
  ["Offer & Funnel Audit", "Review what the business sells, who should enquire, and where prospects currently drop off.", ClipboardCheck],
  ["Google & Meta Campaigns", "Use search demand and social demand creation to bring the right prospects into the funnel.", Target],
  ["Landing Page Clarity", "Improve mobile pages, trust signals, CTAs, forms, call buttons and WhatsApp entry points.", MousePointerClick],
  ["Lead Qualification", "Reduce poor-fit enquiries with better targeting, copy, form fields and audience feedback.", Filter],
  ["WhatsApp Follow-Up", "Route leads to faster owner response, quick replies, reminders and simple follow-up workflows.", MessageCircle],
  ["Tracking & Reporting", "Track source, cost per lead, lead quality, response speed and campaign-wise outcomes.", BarChart3],
] as const;

const outcomes = [
  ["More qualified enquiries", "The goal is better-fit calls, WhatsApp messages and forms, not just more low-quality leads."],
  ["Lower missed-lead risk", "Lead generation improves when response speed, ownership and follow-up are clear."],
  ["Clearer channel decisions", "Know whether Google Ads, Meta Ads, landing pages or automation deserve the next budget push."],
  ["Better local context", "Campaigns are shaped around Visakhapatnam buyer intent, local trust and service-area demand."],
] as const;

const localFit = [
  "Clinics, doctors, dentists, IVF centres and aesthetics practices",
  "Education institutes, schools, spoken English academies and coaching centres",
  "Spas, salons, gyms, wellness centres and appointment-led businesses",
  "Real estate projects, builders, brokers and property consultants",
  "Home services, repair services and local service providers",
  "Consultants, B2B services and professional firms",
];

const process = [
  ["01", "Lead audit", "Review current lead sources, enquiry quality, response speed, website clarity and tracking gaps."],
  ["02", "Funnel plan", "Choose the right lead path: call, WhatsApp, form, landing page, lead form or hybrid flow."],
  ["03", "Campaign launch", "Build campaigns and pages with tracking for source, CPL, conversion action and lead quality."],
  ["04", "Improve quality", "Use weekly feedback to cut weak sources, improve targeting and strengthen follow-up."],
] as const;

const faqs = [
  {
    question: "What does a lead generation agency in Visakhapatnam do?",
    answer:
      "A lead generation agency in Visakhapatnam helps businesses generate qualified calls, WhatsApp enquiries and form leads through paid campaigns, landing pages, tracking and follow-up systems. The goal is not only more enquiries, but better-fit enquiries that can become real sales conversations.",
  },
  {
    question: "Which channels does Zexa Media use for lead generation?",
    answer:
      "Zexa Media can use Google Ads, Meta Ads, landing pages, WhatsApp lead flows, social content, local SEO signals and tracking systems depending on the business goal. The right channel mix depends on demand, budget, offer clarity and lead quality.",
  },
  {
    question: "Can lead generation work for local service businesses in Vizag?",
    answer:
      "Yes. Lead generation can work well for clinics, education institutes, spas, real estate businesses, local services and professional firms when campaigns, landing pages and follow-up are built around local buyer intent.",
  },
  {
    question: "Does Zexa Media guarantee a fixed number of leads?",
    answer:
      "No. Zexa Media does not guarantee a fixed number of leads. Lead volume depends on budget, competition, offer, landing page quality, tracking and response speed. The focus is on improving the system and reporting honestly.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Lead Generation Agency in Visakhapatnam",
  serviceType: "Lead Generation",
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
    "Lead generation services in Visakhapatnam including Google Ads, Meta Ads, landing pages, WhatsApp follow-up, conversion tracking and lead quality reporting.",
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
      name: "Lead Generation Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function LeadGenerationAgencyVisakhapatnamPage() {
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
        eyebrow="Lead generation agency in Visakhapatnam"
        title="Lead generation built for qualified enquiries and faster follow-up."
        description="Zexa Media helps Vizag businesses generate better calls, WhatsApp enquiries and form leads through connected ads, landing pages, tracking and response systems."
        imageSrc="/images/zexa-hero-strategy.png"
        imageAlt="Zexa Media lead generation agency in Visakhapatnam tracking enquiries and campaign performance"
        metricLabel="Lead system focus"
        metricValue="Ads, landing pages, WhatsApp, tracking, and quality"
      />

      <Section eyebrow="Lead system" title="A lead-generation system needs more than traffic.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {leadSystem.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Business outcomes" title="Better leads start with better lead paths.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local fit" title="Lead generation for businesses that depend on conversations.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Built around Visakhapatnam buyer intent.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Local lead generation works best when the campaign understands how people in Vizag
              compare providers, ask questions, message on WhatsApp and decide who to trust.
              Zexa Media connects that local context to paid campaigns and follow-up systems.
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

      <Section eyebrow="Location" title="A lead generation partner based in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Zexa Media local address</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Lead generation campaigns can target
              Visakhapatnam, nearby Vizag neighbourhoods, Andhra Pradesh service areas or
              broader India markets depending on the offer and lead quality.
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

      <Section eyebrow="Process" title="From lead audit to better enquiry quality.">
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

      <Section eyebrow="FAQ" title="Lead generation questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Book a free lead generation audit.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review where your current enquiries come from and where they are lost.",
              "We identify whether ads, landing pages, WhatsApp follow-up or tracking should be fixed first.",
              "You get a practical next-step plan before increasing marketing spend.",
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
              href="/services/automation"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              See Lead Automation
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
