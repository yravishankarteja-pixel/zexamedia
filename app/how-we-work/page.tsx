import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  Globe2,
  LockKeyhole,
  MessageSquareText,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "How We Work | Zexa Media Remote Growth Marketing Process",
  description:
    "See how Zexa Media works with businesses remotely: audits, onboarding, access safety, campaign execution, reporting, communication and growth optimisation.",
  alternates: { canonical: absoluteUrl("/how-we-work") },
};

const pageUrl = absoluteUrl("/how-we-work");

const workflow = [
  ["01", "Remote audit", "We review your business, offer, website, campaigns, tracking, social presence and lead flow before recommending a plan."],
  ["02", "Priority roadmap", "We identify the highest-impact problem first: ads, landing pages, tracking, content, automation, SEO or positioning."],
  ["03", "Safe onboarding", "We request only the access needed, prefer client-owned accounts and use view-only access when diagnosis is enough."],
  ["04", "Execution sprint", "Campaigns, pages, content, tracking or workflows are built around one clear commercial goal."],
  ["05", "Reporting rhythm", "Updates focus on what changed, what improved, what needs attention and what action comes next."],
  ["06", "Optimisation loop", "Lead quality, campaign data, page behaviour and follow-up feedback shape the next decisions."],
] as const;

const trustPillars = [
  ["Access stays controlled", "Ad accounts, analytics, pixels, tag managers and pages should stay under client ownership wherever possible.", LockKeyhole],
  ["No mystery reports", "Reports should explain decisions and next actions, not only show screenshots of reach, clicks or impressions.", BarChart3],
  ["Communication is planned", "Calls, updates and review windows are set around practical overlap for the client location and workflow.", MessageSquareText],
  ["No fake promises", "Zexa does not guarantee rankings, fixed lead volume, fake results or fabricated authority.", ShieldCheck],
] as const;

const onboardingChecklist = [
  "Business goals and monthly priority.",
  "Website, landing page and social profile links.",
  "Current ad accounts or screenshots if campaigns are already running.",
  "Analytics, pixel, tag manager or lead tracking context if available.",
  "Target markets, service areas, ideal customer and offer details.",
  "Current lead handling process: calls, WhatsApp, forms, CRM or spreadsheets.",
];

const communication = [
  "Free audit or discovery call to understand the current situation.",
  "Clear next-step recommendation before full execution begins.",
  "Scheduled reviews for strategy, reporting and key decisions.",
  "Short updates when campaigns, tracking or workflows change.",
  "Client feedback on lead quality so optimisation is grounded in reality.",
];

const faqs = [
  {
    question: "Can Zexa Media work with businesses outside Visakhapatnam?",
    answer:
      "Yes. Zexa Media is based in Visakhapatnam but can work remotely with businesses across worldwide markets through online audits, strategy calls, campaign management, tracking, reporting and optimisation.",
  },
  {
    question: "Do you need full access to my accounts?",
    answer:
      "Not always. For an audit, view-only access or screenshots may be enough. For execution, access should be limited to what is needed, and client-owned accounts are preferred wherever possible.",
  },
  {
    question: "How do remote reporting and communication work?",
    answer:
      "Reporting can be handled through scheduled calls, email or message-based updates. The focus is to explain what changed, what improved, what needs attention and what action is planned next.",
  },
  {
    question: "Will Zexa Media guarantee results?",
    answer:
      "No. Ethical marketing cannot guarantee rankings, fixed lead volume or sales. Zexa focuses on practical strategy, accurate tracking, execution quality and transparent optimisation.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "How Zexa Media Works",
  description:
    "Remote growth marketing workflow covering audits, onboarding, access safety, execution, reporting and optimisation.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Zexa Media",
    url: siteUrl,
  },
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

export default function HowWeWorkPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="How we work"
        title="A clear remote growth workflow from audit to optimisation."
        description="Zexa Media works with businesses through online audits, safe onboarding, focused execution, practical reporting and continuous optimisation, whether the buyer is local or across the world."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media remote marketing workflow for audits onboarding reporting and optimisation"
        metricLabel="Remote workflow"
        metricValue="Audit, access, execution, reporting, and optimisation"
      />

      <Section eyebrow="Workflow" title="Six stages that keep marketing work clear.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                {step}
              </p>
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Remote trust" title="Built for serious work without location confusion.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Onboarding" title="What we usually need before execution starts.">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <GlassCard>
            <CheckList items={onboardingChecklist} />
          </GlassCard>
          <GlassCard>
            <Globe2 className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Your location does not decide the strategy.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa can support local, national or international campaigns. The right plan depends
              on your offer, buyer intent, market, budget, landing pages, tracking and follow-up,
              not only where your business is based.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Communication" title="How updates stay practical.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <CalendarClock className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Cadence before chaos.</h2>
            <p className="mt-4 leading-8 text-white/62">
              The best remote work has a rhythm: decision calls when needed, short updates when
              work changes, and reporting that makes the next action clear.
            </p>
          </GlassCard>
          <GlassCard>
            <CheckList items={communication} />
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="What we connect" title="Every useful channel should support the next step.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Discovery", "Google, social, local search, referrals and AI-search visibility.", Search],
            ["Conversion", "Landing pages, forms, calls, WhatsApp and trust signals.", ClipboardCheck],
            ["Follow-up", "Lead alerts, reminders, CRM handoff and response visibility.", Workflow],
            ["Decision-making", "Reports, source tracking, lead quality and next actions.", BarChart3],
          ].map(([title, copy, Icon]) => (
            <GlassCard key={title as string}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-xl font-semibold">{title as string}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy as string}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions before working with Zexa.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Start with the free remote audit.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your current growth system before recommending services.",
              "You get a clear next action before increasing spend.",
              "If Zexa is a fit, the workflow moves from audit to onboarding to execution.",
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
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
