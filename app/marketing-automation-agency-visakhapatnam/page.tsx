import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Workflow,
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
  title: "Marketing Automation Agency Vizag | Zexa Media",
  description:
    "Zexa Media builds marketing automation in Vizag for WhatsApp follow-up, CRM workflows, lead alerts, AI-assisted qualification, appointment reminders and reporting.",
  alternates: { canonical: absoluteUrl("/marketing-automation-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/marketing-automation-agency-visakhapatnam");

const automationServices = [
  ["WhatsApp Automation", "Instant lead replies, quick replies, reminders and follow-up prompts for new enquiries.", MessageCircle],
  ["CRM Automation", "Move leads from forms, ads or sheets into a cleaner owner or sales-team workflow.", Workflow],
  ["Lead Alerts", "Notify the right person when a new enquiry arrives from Google Ads, Meta Ads or the website.", BellRing],
  ["AI-Assisted Qualification", "Use structured questions and routing logic to separate serious enquiries from poor-fit leads.", Bot],
  ["Appointment Workflows", "Support bookings with confirmation, reminder and no-show reduction workflows.", CalendarCheck],
  ["Reporting Automation", "Summarise lead sources, response status, campaign performance and next actions.", BarChart3],
] as const;

const workflowProblems = [
  ["Slow response", "Leads often go cold when a team responds hours later instead of within the first few minutes."],
  ["Scattered lead data", "Enquiries from WhatsApp, forms, calls and ads become hard to track without one clear workflow."],
  ["Weak follow-up", "Many sales opportunities are lost because nobody owns the next message, reminder or callback."],
  ["Unclear source quality", "Owners need to know which campaign created a lead and what happened after the enquiry."],
] as const;

const localFit = [
  "Clinics, hospitals, dental practices and appointment-led healthcare teams",
  "Education institutes, schools, coaching centres and training academies",
  "Real estate, home services and high-consideration local businesses",
  "Spas, salons, gyms, wellness centres and booking-led service brands",
  "Professional services, consultants and B2B companies",
  "Any Vizag business using ads, WhatsApp, forms or CRM tools",
];

const process = [
  ["01", "Workflow audit", "Map how leads arrive, who responds, what gets missed and where tracking breaks."],
  ["02", "Automation design", "Choose practical triggers, actions, labels, reminders, CRM fields and reporting outputs."],
  ["03", "Build and test", "Connect WhatsApp, forms, sheets, CRM, ads or reporting tools where access is available."],
  ["04", "Monitor and improve", "Review response speed, owner usage, lead quality and workflow reliability over time."],
] as const;

const faqs = [
  {
    question: "What does a marketing automation agency in Vizag do?",
    answer:
      "A marketing automation agency in Vizag helps businesses reduce manual follow-up by connecting lead sources, WhatsApp replies, CRM workflows, reminders, notifications and reporting. The goal is to respond faster, track leads better and convert more enquiries that campaigns already generate.",
  },
  {
    question: "Can WhatsApp automation help local businesses in Visakhapatnam?",
    answer:
      "Yes. WhatsApp automation can send instant replies, qualify enquiries, notify teams, schedule reminders and reduce missed follow-up. It works best when the messages are useful, compliant and connected to a clear sales process.",
  },
  {
    question: "Does Zexa Media build CRM automation in Vizag?",
    answer:
      "Yes. Zexa Media can help connect forms, ad leads, WhatsApp paths and spreadsheets or CRM systems so lead ownership, source tracking and follow-up status are easier to manage.",
  },
  {
    question: "Can AI automation replace my sales team?",
    answer:
      "No. AI and automation should support people, not replace trust-building conversations. Zexa Media uses automation to improve response speed, lead routing, reminders and qualification so your team can focus on closing serious enquiries.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Marketing Automation Agency in Visakhapatnam",
  serviceType: "Marketing Automation",
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
    "Marketing automation, WhatsApp automation, CRM workflows, lead alerts, AI-assisted qualification and reporting automation for businesses in Visakhapatnam.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Marketing Automation Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function MarketingAutomationAgencyVisakhapatnamPage() {
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
        eyebrow="Marketing automation agency in Visakhapatnam"
        title="Marketing automation that helps Vizag businesses respond faster."
        description="Zexa Media builds WhatsApp automation, CRM workflows, lead alerts, appointment reminders, AI-assisted qualification and reporting systems so local businesses lose fewer enquiries after campaigns generate demand."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media marketing automation agency in Visakhapatnam reviewing lead follow-up workflows"
        metricLabel="Automation focus"
        metricValue="WhatsApp, CRM, lead alerts, reminders, and reports"
        primaryCta="Automate My Lead Flow"
        primaryHref="/free-audit"
        secondaryCta="View Lead Generation"
        secondaryHref="/lead-generation-agency-visakhapatnam"
      />

      <Section eyebrow="Automation services" title="AI and marketing automation for Vizag businesses.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {automationServices.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Root problems" title="Automation fixes the gaps after a lead is generated.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflowProblems.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local fit" title="Who benefits from lead automation in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Built around real local sales behaviour.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Many Vizag buyers prefer calling or messaging before they decide. Automation helps
              your team respond quickly, keep context, and avoid losing enquiries from Google Ads,
              Meta Ads, landing pages and social media.
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

      <Section eyebrow="Location" title="A marketing automation partner based in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Zexa Media local address</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Automation projects can support local
              Visakhapatnam campaigns, Andhra Pradesh service areas, and remote workflows where
              the tools and access are available.
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

      <Section eyebrow="Process" title="How automation moves from audit to working system.">
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

      <Section eyebrow="FAQ" title="Marketing automation questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Find where your lead follow-up is leaking opportunities.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review how enquiries arrive from ads, forms, WhatsApp and calls.",
              "We identify missed follow-up, slow response and tracking gaps.",
              "You get a practical automation map before tools or subscriptions are added.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Book Free Growth Audit
            </Link>
            <Link
              href="/digital-marketing-agency-visakhapatnam"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Digital Growth Services
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
