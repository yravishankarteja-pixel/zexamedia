import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Performance Marketing Agency Vizag | Zexa Media",
  description:
    "Zexa Media runs Google Ads, Meta Ads, PPC and lead generation campaigns for businesses in Vizag with clear tracking and ROI reporting.",
  alternates: { canonical: absoluteUrl("/services/performance-marketing") },
};

const pageUrl = absoluteUrl("/services/performance-marketing");

const performanceFaqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is digital advertising focused on measurable outcomes such as leads, calls, sales, cost per lead and return on ad spend. It usually includes Google Ads, Meta Ads, retargeting, landing page tracking and weekly campaign optimization.",
  },
  {
    question: "Can a local business in Vizag benefit from Google Ads?",
    answer:
      "Yes. Google Ads can help Vizag businesses capture people who are already searching for a service nearby. Local targeting, call tracking, landing page optimization and negative keyword cleanup help improve lead quality and reduce wasted spend.",
  },
  {
    question: "How long does it take to see results from Meta Ads?",
    answer:
      "Meta Ads can generate early enquiries within the first one to two weeks, but meaningful optimization usually takes two to four weeks. Creative testing, audience refinement and offer clarity determine how quickly lead quality improves.",
  },
  {
    question: "What does Zexa Media track in paid campaigns?",
    answer:
      "Zexa Media tracks cost per lead, calls, WhatsApp clicks, form fills, landing page conversions, Meta Pixel events, GA4 events and campaign-wise lead source. This helps business owners see which ads are producing useful enquiries.",
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
    name: "Zexa Media",
    url: siteUrl,
  },
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  description:
    "Google Ads, Meta Ads, PPC campaign management, conversion tracking and lead generation services for businesses in Visakhapatnam.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: performanceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PerformanceMarketingPage() {
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
      <PageHero
        eyebrow="Performance marketing agency in Vizag"
        title="Performance Marketing Agency in Visakhapatnam"
        description="Zexa Media runs Google Ads, Meta Ads, PPC and lead-generation campaigns for Vizag businesses that need qualified enquiries, cleaner tracking and better return on ad spend."
        imageSrc="/images/zexa-hero-strategy.png"
        imageAlt="Zexa Media performance marketing strategy dashboard"
        metricLabel="Campaign system"
        metricValue="Google Ads, Meta Ads, tracking, and optimisation"
      />

      <Section eyebrow="What's included" title="Paid campaigns built around leads, not vanity metrics.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Google Search Ads", "Capture high-intent buyers searching for your service in Visakhapatnam."],
            ["Meta Ads", "Reach the right local audience through Facebook and Instagram campaigns."],
            ["Audience Research", "Build campaigns around location, intent, demographics, interests and retargeting."],
            ["Ad Copy & Creative", "Create sharper messages and visuals that explain the offer clearly."],
            ["Conversion Tracking", "Track calls, forms, WhatsApp clicks, landing page events and campaign sources."],
            ["Weekly Optimisation", "Improve keywords, audiences, bids, creatives and lead quality every week."],
          ].map(([item, copy]) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local advantage" title="Why paid ads work differently for Vizag businesses.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Local search intent is already commercial.</h2>
            <p className="mt-4 leading-8 text-white/62">
              People searching for clinics, education institutes, real estate, spas, dentists,
              doctors or service providers in Vizag often need a quick answer. Google Ads helps
              capture that demand when the campaign is built around the right keywords, location
              targeting and conversion path.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Every campaign needs a follow-up system.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Lead generation does not stop at the click. Zexa Media connects campaign tracking
              with landing pages, WhatsApp response, call visibility and reporting so business
              owners can see which sources deserve more budget.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Performance marketing answers.">
        <div className="grid gap-5 lg:grid-cols-2">
          {performanceFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Want to know if paid ads can work for your business?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your offer, current website, ad accounts and lead flow.",
              "You get practical recommendations before spending more budget.",
              "We map whether Google Ads, Meta Ads or both should come first.",
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
