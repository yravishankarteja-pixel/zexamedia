import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import { StaggerContainer } from "@/components/animation/StaggerContainer";
import { StaggerItem } from "@/components/animation/StaggerItem";
import { GlassCard, PageHero, PageShell, Section, phoneHref } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Marketing Packages & Pricing | Zexa Media Vizag",
  description:
    "View Zexa Media's final monthly growth marketing packages from Basic Ads Starter to Premium Growth Partner.",
  alternates: { canonical: "https://zexamedia.in/packages" },
};

const packages = [
  {
    name: "Basic Ads Starter",
    price: "\u20B915,000/month",
    fit: "Best for businesses that want to start digital ads with a basic monthly plan.",
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
    notIncluded: ["Video reels", "Video shoot", "Google + Meta both", "Landing page", "Influencer collaboration", "Ad budget"],
    note: "If the client wants video shoot or reels, it will be charged separately.",
  },
  {
    name: "Growth Ads Package",
    price: "\u20B925,000/month",
    fit: "Best for businesses that want to run both Google and Meta with stronger creative support.",
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
    notIncluded: ["Ad budget", "Influencer fee", "Landing page", "Advanced automation", "Third-party tool costs"],
  },
  {
    name: "Local Growth Package",
    price: "\u20B930,000/month",
    fit: "Best for gyms, clinics, restaurants, coaching institutes, and local service businesses that need ads, local SEO, and landing page support.",
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
    notIncluded: ["Ad budget", "Influencer fee", "Advanced AI automation", "Paid tools or plugin costs", "Hosting/domain costs"],
    note: "Landing page is included, limited to one professional landing page with necessary changes.",
  },
  {
    name: "Premium Growth Partner",
    price: "\u20B950,000/month",
    fit: "Best for businesses that want full growth marketing with ads, content, landing pages, analytics, automation, and influencer support.",
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
      "Basic AI call/lead response structure guidance or setup",
      "Google Sheet or CRM-ready lead tracking structure",
      "Google Business Profile + local SEO optimization",
      "Local influencer coordination included",
      "Advanced monthly analytics and strategy review",
      "Monthly scaling plan and next action roadmap",
    ],
    notIncluded: [
      "Ad budget",
      "Influencer fee",
      "WhatsApp API charges",
      "AI calling tool cost or credits",
      "CRM subscription cost",
      "Domain, hosting, landing page tool, or paid plugin costs",
    ],
    note: "Package fee covers strategy, execution, management, creatives, tracking, reporting, and optimization.",
  },
];

const comparisonRows = [
  ["Monthly fee", "\u20B915,000", "\u20B925,000", "\u20B930,000", "\u20B950,000"],
  ["Platforms", "Google OR Meta", "Google + Meta", "Google + Meta", "Google + Meta"],
  ["Static creatives", "10", "10", "10-12", "12-15"],
  ["Video shoots", "Add-on", "1/month", "2/month", "2/month"],
  ["Landing page", "No", "No", "Included", "Professional + monthly improvements"],
  ["Local SEO / GBP", "No", "No", "Included", "Included"],
  ["Automation", "No", "Basic tracking", "Sheet tracking", "WhatsApp + basic AI workflow"],
  ["Recommended for", "Ad starters", "Growing ad accounts", "Local service businesses", "Full growth partner"],
];

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zexa Media Marketing Packages",
  itemListElement: packages.map((item, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: item.name,
    price: item.price.replace(/[₹,]/g, "").replace("/month", ""),
    priceCurrency: "INR",
    description: item.fit,
    seller: {
      "@type": "Organization",
      name: "Zexa Media",
      url: "https://zexamedia.in",
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
      <PageHero
        eyebrow="Packages"
        title="Growth packages built for clear monthly execution."
        description="Choose the package that matches your current growth stage. Ad budget and third-party costs stay transparent and separate."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media reviewing marketing package performance dashboards with a business owner"
        metricLabel="Pricing clarity"
        metricValue="From \u20B915,000 to \u20B950,000/month"
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
              <Link
                href={phoneHref}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
              >
                Call to Start
              </Link>
              <div className="mt-7 grid gap-3">
                {item.includes.slice(0, item.recommended ? 10 : 8).map((feature) => (
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

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
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
      </section>
    </PageShell>
  );
}
