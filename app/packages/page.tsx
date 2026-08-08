import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink, Star } from "lucide-react";
import { StaggerContainer } from "@/components/animation/StaggerContainer";
import { StaggerItem } from "@/components/animation/StaggerItem";
import { GlassCard, PageHero, PageShell, Section, phoneHref } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Marketing Packages & Pricing | Zexa Media Vizag",
  description:
    "Compare Zexa Media's monthly digital marketing packages for ads, social media, local SEO, landing pages, tracking and automation.",
  alternates: { canonical: absoluteUrl("/packages") },
};

const packages = [
  {
    name: "Basic Ads Starter",
    price: "\u20B915,000/month",
    priceValue: 15000,
    fit: "Best for businesses that want to start digital ads with a basic monthly plan.",
    bestFor: "First-time advertisers testing one channel.",
    outcome: "Launch one focused lead campaign with basic tracking and weekly optimisation.",
    recommended: false,
    includes: [
      "Only 1 platform: Google Ads OR Meta Ads",
      "Basic campaign strategy and audience understanding",
      "Campaign setup for selected platform",
      "10 static creative posters per month",
      "Call, WhatsApp, or lead form campaign setup",
      "Basic call, WhatsApp, and form lead tracking",
      "Weekly campaign optimization",
      "Basic monthly performance report",
    ],
  },
  {
    name: "Growth Ads Package",
    price: "\u20B925,000/month",
    priceValue: 25000,
    fit: "Best for businesses that want to run both Google and Meta with stronger creative support.",
    bestFor: "Businesses ready to compare Google intent with Meta reach.",
    outcome: "Run both major ad platforms with creative support and source-level lead tracking.",
    recommended: false,
    includes: [
      "Google Ads + Meta Ads",
      "Target audience and offer analysis",
      "Google and Meta campaign setup",
      "10 static creative posters per month",
      "1 video shoot per month",
      "Basic reels from shoot footage",
      "WhatsApp, call, and lead form campaigns",
      "Basic retargeting setup if audience data is available",
      "Calls, WhatsApp, forms, and lead source tracking",
      "Monthly performance report",
    ],
  },
  {
    name: "Local Growth Package",
    price: "\u20B930,000/month",
    priceValue: 30000,
    fit: "Best for gyms, clinics, restaurants, coaching institutes, and local service businesses that need ads, local SEO, and landing page support.",
    bestFor: "Local service businesses that need ads plus better local discovery.",
    outcome: "Connect paid ads, Google Business Profile, local SEO and landing page support.",
    recommended: false,
    includes: [
      "Google Ads + Meta Ads",
      "Positioning, audience analysis, competitor research",
      "2 professional video shoots per month",
      "10-12 static creative posters per month",
      "Reels from shoot footage",
      "Google My Business setup or optimization",
      "Basic local SEO development",
      "Free landing page support",
      "Required landing page changes included",
      "Call, WhatsApp, and lead form campaigns",
      "Calls, WhatsApp, forms, and landing page lead tracking",
      "Google Sheet lead tracking structure",
      "Monthly performance insights and improvement plan",
    ],
  },
  {
    name: "Premium Growth Partner",
    price: "\u20B950,000/month",
    priceValue: 50000,
    fit: "Best for businesses that want full growth marketing with ads, content, landing pages, analytics, automation, and influencer support.",
    bestFor: "Serious growth teams that want one partner across ads, content, tracking and automation.",
    outcome: "Build a complete monthly growth system with stronger reporting and lead response support.",
    recommended: true,
    includes: [
      "Google Ads + Meta Ads",
      "Advanced market research, positioning, offer planning, and funnel strategy",
      "2 professional video shoots per month",
      "12-15 static creative posters per month",
      "Premium reels from shoot footage",
      "Professional landing page support",
      "Monthly landing page improvements",
      "GA4 setup and event tracking",
      "Google Tag Manager setup",
      "Meta Pixel setup and event tracking",
      "Calls, WhatsApp, forms, landing page leads, and campaign-wise source tracking",
      "Basic WhatsApp lead response automation",
      "Basic AI automation workflow for lead handling",
      "Google Sheet or CRM-ready lead tracking structure",
      "Google Business Profile + local SEO optimization",
      "Local influencer coordination included",
      "Advanced monthly analytics and strategy review",
      "Monthly scaling plan and next action roadmap",
    ],
  },
];

const comparisonRows = [
  ["Monthly fee", "\u20B915,000", "\u20B925,000", "\u20B930,000", "\u20B950,000"],
  ["Platforms", "Google OR Meta", "Google + Meta", "Google + Meta", "Google + Meta"],
  ["Static creatives", "10/month", "10/month", "10-12/month", "12-15/month"],
  ["Video shoots", "Add-on", "1/month", "2/month", "2/month"],
  ["Reels", "Add-on", "Basic reels from footage", "Reels from footage", "Premium reels from footage"],
  ["Landing page", "Not included", "Not included", "Included", "Professional + monthly improvements"],
  ["Tracking", "Basic calls, WhatsApp, forms", "Lead source tracking", "Landing page + sheet tracking", "GA4, GTM, Meta Pixel + source tracking"],
  ["Local SEO / GBP", "Not included", "Not included", "Included", "Included"],
  ["Automation", "Not included", "Not included", "Google Sheet tracking", "WhatsApp + basic AI workflow"],
  ["Recommended for", "Ad starters", "Growing ad accounts", "Local service businesses", "Full growth partner"],
];

const decisionCards = [
  {
    title: "Choose Basic Ads Starter if",
    copy: "you want one platform launched properly before increasing your monthly marketing spend.",
    link: "/services/performance-marketing",
    linkLabel: "See paid ads service",
  },
  {
    title: "Choose Growth Ads Package if",
    copy: "you need Google and Meta running together with better creative support and basic retargeting.",
    link: "/services/social-media-management",
    linkLabel: "See social media service",
  },
  {
    title: "Choose Local Growth Package if",
    copy: "you depend on calls, visits, appointments or nearby enquiries and need local SEO plus landing page support.",
    link: "/services",
    linkLabel: "See all services",
  },
  {
    title: "Choose Premium Growth Partner if",
    copy: "you want Zexa to manage the full growth engine: ads, content, landing page improvements, analytics and automation.",
    link: "/services/automation",
    linkLabel: "See automation service",
  },
];

const addOns = [
  ["Website Design", "Up to 5 pages, mobile responsive build and core content setup.", "\u20B925,000 one-time"],
  ["Landing Page Design", "Single conversion-focused page with copy and CTA structure.", "\u20B910,000 one-time"],
  ["Logo + Brand Kit", "Logo, colours, fonts and a practical brand guidelines PDF.", "\u20B912,000 one-time"],
  ["Reel Production", "Four Reels per month with scripting, direction, editing and captions.", "\u20B912,000/month"],
  ["WhatsApp Automation", "Lead notification and a 5-step follow-up sequence.", "\u20B98,000 one-time"],
  ["Google Business Profile", "Profile optimisation and monthly post management.", "\u20B95,000/month"],
  ["SEO Starter Pack", "On-page SEO for 5 pages with schema markup.", "\u20B915,000 one-time"],
  ["Monthly Blog Content", "Four SEO-optimised articles of 800 to 1200 words each.", "\u20B910,000/month"],
];

const packageFaqs = [
  {
    question: "How much does a digital marketing agency charge in India?",
    answer:
      "Digital marketing agency fees in India commonly range from about \u20B915,000 to \u20B91,50,000 per month depending on scope, city, deliverables and team size. Zexa Media packages start at \u20B915,000/month and scale based on ads, content, local SEO, landing pages, tracking and automation needs.",
  },
  {
    question: "Is ad budget included in the package fee?",
    answer:
      "No. Ad budget is paid separately to platforms such as Google or Meta. The Zexa Media package fee covers strategy, setup, creative support, management, optimisation, tracking and reporting based on the selected package.",
  },
  {
    question: "Which package is best for a local business in Vizag?",
    answer:
      "Local Growth Package is usually the best fit for gyms, clinics, restaurants, coaching institutes and local service businesses because it combines Google Ads, Meta Ads, Google Business Profile work, local SEO and landing page support.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. A business can start with a smaller package and upgrade once the campaign has enough data, the offer is clearer and the team is ready to handle more leads.",
  },
];

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zexa Media Marketing Packages",
  itemListElement: packages.map((item, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: item.name,
    price: item.priceValue,
    priceCurrency: "INR",
    description: item.fit,
    seller: {
      "@type": "Organization",
      name: "Zexa Media",
      url: siteUrl,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: packageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PackagesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Packages"
        title="Growth packages built for clear monthly execution."
        description="Choose the package that matches your current growth stage. Ad budget and third-party costs stay transparent and separate."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media marketing packages and pricing dashboard for Vizag businesses"
        metricLabel="Pricing clarity"
        metricValue={"\u20B915,000 to \u20B950,000/month"}
      />

      <Section eyebrow="Pricing" title="Premium monthly growth packages.">
        <StaggerContainer className="grid gap-5 xl:grid-cols-4">
          {packages.map((item) => (
            <StaggerItem key={item.name}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/45 ${
                  item.recommended
                    ? "border-[#8EEA4D]/60 bg-[#8EEA4D]/10 shadow-[0_0_70px_rgba(142,234,77,0.18)]"
                    : "border-white/10 bg-white/[0.052]"
                }`}
              >
                {item.recommended && (
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#8EEA4D] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#071006]">
                    <Star className="size-4 fill-[#071006]" />
                    Recommended
                  </div>
                )}
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                  {item.price}
                </p>
                <h2 className="mt-4 text-3xl font-semibold">{item.name}</h2>
                <p className="mt-4 min-h-24 leading-7 text-white/58">{item.fit}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/18 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{item.bestFor}</p>
                </div>
                <Link
                  href={phoneHref}
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
                >
                  Call to Start
                </Link>
                <p className="mt-5 text-sm font-semibold leading-6 text-white/78">{item.outcome}</p>
                <div className="mt-7 grid gap-3">
                  {item.includes.slice(0, item.recommended ? 12 : 9).map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm text-white/68">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#8EEA4D]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section eyebrow="Package chooser" title="Not sure which package fits? Start here.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {decisionCards.map((card) => (
            <GlassCard key={card.title}>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-4 min-h-28 leading-7 text-white/62">{card.copy}</p>
              <Link
                href={card.link}
                className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D] transition hover:text-white"
              >
                {card.linkLabel}
                <ExternalLink className="ml-2 size-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Comparison" title="Compare the final packages side by side.">
        <p className="mb-4 text-sm text-white/50">
          On mobile, swipe horizontally to compare every package column.
        </p>
        <div
          className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.045] backdrop-blur-2xl"
          role="region"
          aria-label="Scrollable package comparison table"
          tabIndex={0}
        >
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white">
                {["Feature", ...packages.map((item) => item.name)].map((heading) => (
                  <th key={heading} className="px-5 py-5 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row[0]}
                  className="border-b border-white/10 transition hover:bg-white/[0.035] last:border-b-0"
                >
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${cell}`}
                      className={`px-5 py-5 ${index === 0 ? "font-semibold text-white" : "text-white/62"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Add-ons" title="Add extra support when the package needs more firepower.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {addOns.map(([name, copy, price]) => (
            <GlassCard key={name}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                {price}
              </p>
              <h2 className="mt-4 text-xl font-semibold">{name}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title="What happens after you choose a package.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Audit and scope", "We review your current ads, social media, website, tracking and lead flow before locking the final scope."],
            ["Launch plan", "You get a clear 30-day execution plan with platforms, content priorities, tracking setup and reporting expectations."],
            ["Weekly optimisation", "Campaigns, creatives and lead quality are reviewed weekly so the monthly work improves with real data."],
          ].map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Pricing questions business owners ask first.">
        <div className="grid gap-5 lg:grid-cols-2">
          {packageFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-stretch">
          <GlassCard>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
              Costs paid separately
            </p>
            <p className="mt-4 leading-8 text-white/66">
              Ad budget, influencer fee, WhatsApp API, AI calling tools, CRM, hosting, domain,
              landing page tools, paid plugins, and third-party software costs are separate from
              the package fee unless explicitly agreed in writing.
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
              Not sure yet?
            </p>
            <h2 className="mt-4 text-2xl font-semibold">We will recommend the right starting point.</h2>
            <p className="mt-4 leading-7 text-white/62">
              Book a free audit and we will suggest the package that matches your goals,
              budget and current growth stage.
            </p>
            <Link
              href="/free-audit"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-6 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
            >
              Call For Free Audit
            </Link>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
