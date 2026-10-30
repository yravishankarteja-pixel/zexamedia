import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, ClipboardCheck, ShieldCheck } from "lucide-react";
import { StaggerContainer } from "@/components/animation/StaggerContainer";
import { StaggerItem } from "@/components/animation/StaggerItem";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Clients, Partners & Case Studies | Zexa Media",
  description:
    "Explore Zexa Media clients, partners and selected growth snapshots from Vizag businesses across wellness, education, consulting and technology.",
  alternates: { canonical: absoluteUrl("/case-studies") },
};

const pageUrl = absoluteUrl("/case-studies");

const partners = [
  {
    name: "Shree Beautician Academy",
    category: "Beauty education / Wellness",
    logo: "/images/partners/shree-beautician-academy.png",
    alt: "Shree Beautician Academy partner logo",
  },
  {
    name: "Moon Wellness Spa",
    category: "Wellness / Spa",
    logo: "/images/partners/moon-wellness-spa.webp",
    alt: "Moon Wellness Spa partner logo",
  },
  {
    name: "Tara Wellness Spa",
    category: "Wellness / Spa",
    logo: null,
    alt: "",
  },
  {
    name: "Sky Space AI On STEM Technology",
    category: "Education technology / STEM",
    logo: "/images/partners/sky-space-ai-stem-technology.png",
    alt: "Sky Space AI On STEM Technology partner logo",
  },
  {
    name: "Sanmay Consulting",
    category: "Consulting / Education guidance",
    logo: "/images/partners/sanmay-consulting.jpg",
    alt: "Sanmay Consulting partner logo",
  },
  {
    name: "Joy Wellness Spa",
    category: "Wellness / Spa",
    logo: "/images/partners/joy-wellness-spa.webp",
    alt: "Joy Wellness Spa partner logo",
  },
  {
    name: "Fluenta Spoken English",
    category: "Education / Spoken English",
    logo: "/images/partners/fluenta-spoken-english.jpeg",
    alt: "Fluenta Spoken English partner logo",
  },
  {
    name: "School & education partners",
    category: "Schools / Education",
    logo: null,
    alt: "",
  },
];

type CaseStudy = {
  client: string;
  category: string;
  proofImage: string | null;
  proofImageAlt: string;
  challenge: string;
  strategy: string;
  channels: string[];
  timeline: string;
  spend: string;
  clicks: string;
  conversions: string;
  costPerConversion: string;
  clickToConversion: string;
  lastUpdated: string;
  ctr?: string;
  averageCpc?: string;
  impressionShare?: string;
};

const studies: CaseStudy[] = [
  {
    client: "Tara Wellness Spa",
    category: "Wellness / Spa",
    proofImage: "/images/case-studies/tara-wellness-google-ads-proof.png",
    proofImageAlt: "Cropped Google Ads performance snapshot for Tara Wellness Spa",
    challenge: "Needed measurable paid-search visibility and clearer reporting for local wellness enquiries.",
    strategy:
      "Managed Google Ads with conversion tracking focused on clicks, enquiry actions, cost visibility and campaign optimization.",
    channels: ["Google Ads", "Conversion tracking", "Campaign reporting"],
    timeline: "Dec 8, 2025 to May 1, 2026",
    spend: "~₹1,20,000",
    clicks: "5.18K",
    conversions: "182",
    costPerConversion: "~₹659",
    clickToConversion: "3.5%",
    lastUpdated: "May 1, 2026",
  },
  {
    client: "Moon Wellness Spa",
    category: "Wellness / Spa",
    proofImage: "/images/case-studies/moon-wellness-google-ads-proof.png",
    proofImageAlt: "Cropped Google Ads performance snapshot for Moon Wellness Spa",
    challenge: "Inconsistent bookings, weak social presence and poor online visibility.",
    strategy:
      "Managed Google Ads with local campaign positioning, conversion tracking, cost visibility and booking-oriented optimization.",
    channels: ["Google Ads", "Conversion tracking", "Local visibility"],
    timeline: "Dec 18, 2025 to Aug 10, 2026",
    spend: "₹2,09,655",
    clicks: "4,339",
    conversions: "599.5",
    costPerConversion: "~₹350",
    clickToConversion: "13.8%",
    lastUpdated: "August 10, 2026",
  },
  {
    client: "Joy Wellness Spa",
    category: "Wellness / Spa",
    proofImage: "/images/case-studies/joy-wellness-google-ads-proof.png",
    proofImageAlt: "Cropped Google Ads performance snapshot for Joy Wellness Spa",
    challenge: "Needed sustained paid-search visibility and measurable enquiry tracking for wellness-service demand.",
    strategy:
      "Managed Google Ads with conversion tracking, campaign reporting, CTR monitoring and cost-per-click visibility.",
    channels: ["Google Ads", "Conversion tracking", "Search campaign reporting"],
    timeline: "Jan 5, 2026 to Aug 10, 2026",
    spend: "₹1,85,396",
    clicks: "4,626",
    conversions: "394",
    costPerConversion: "~₹470",
    clickToConversion: "8.5%",
    lastUpdated: "August 10, 2026",
  },
  {
    // TODO: Replace this descriptor with the approved client name.
    client: "Wellness Spa, Madhurawada",
    category: "Wellness / Spa",
    proofImage: null,
    proofImageAlt: "",
    challenge: "Needed measurable local search enquiries and clearer visibility into campaign efficiency.",
    strategy:
      "Managed Google Ads with local targeting, conversion tracking, click and cost monitoring, and impression-share improvement.",
    channels: ["Google Ads", "Conversion tracking", "Local search"],
    timeline: "Aug 31 to Oct 30, 2026",
    spend: "₹44,400",
    clicks: "656",
    conversions: "91",
    costPerConversion: "~₹488",
    clickToConversion: "13.9%",
    ctr: "10.83%",
    averageCpc: "~₹68",
    impressionShare: "33% to 48%",
    lastUpdated: "October 30, 2026",
    // TODO: Confirm whether a paused-campaign note should be displayed. It is intentionally omitted.
  },
];

const credibilityChecks = [
  [
    "Named business context",
    "Each snapshot explains the business category, challenge, timeline and channels used so the result has context.",
  ],
  [
    "No universal promises",
    "Results are not presented as guaranteed outcomes. Market, offer, budget, tracking and follow-up can change performance.",
  ],
  [
    "Campaign learning focus",
    "The goal is to show what was fixed: targeting, offer clarity, lead tracking, social visibility or response flow.",
  ],
  [
    "Audit-led next step",
    "A new business should not copy a case study blindly. The audit identifies which part of the growth system needs attention first.",
  ],
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#partners`,
  url: pageUrl,
  name: "Zexa Media Clients, Partners and Case Studies",
  description:
    "Clients, partners and selected growth snapshots from Zexa Media, a growth marketing agency in Visakhapatnam.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Zexa Media",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Zexa Media client and partner list",
    itemListElement: partners.map((partner, index) => ({
      "@type": "Organization",
      position: index + 1,
      name: partner.name,
      description: partner.category,
      ...(partner.logo ? { logo: absoluteUrl(partner.logo) } : {}),
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />
      <PageHero
        eyebrow="Case studies"
        title="Clients, partners and selected growth stories."
        description="A look at brands and businesses connected with Zexa Media across wellness, beauty, education, consulting, technology and local growth campaigns."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media campaign dashboard for selected growth stories"
        metricLabel="Proof signals"
        metricValue="Partners, case snapshots, and campaign learning"
      />

      <Section eyebrow="Clients and partners" title="Brands and local businesses connected with Zexa Media.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <GlassCard key={partner.name}>
              <div className="flex aspect-[2.35] items-center justify-center rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_48%,rgba(0,0,0,0.16))] p-5">
                {partner.logo ? (
                  <div className="relative h-full max-h-28 w-full max-w-[13rem]">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      fill
                      sizes="(max-width: 768px) 64vw, 208px"
                      className="object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                ) : (
                  <div className="grid size-24 place-items-center rounded-full border border-[#8EEA4D]/30 bg-[#8EEA4D]/10 text-3xl font-black text-[#8EEA4D]">
                    S
                  </div>
                )}
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{partner.name}</h2>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                {partner.category}
              </p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-white/50">
          Partner names and logos are shown as relationship signals. Performance results are only
          listed in the selected growth snapshots below where details are available.
        </p>
      </Section>

      <Section eyebrow="Credibility" title="Why these proof signals are presented carefully.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <ShieldCheck className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Strong proof should create trust, not unrealistic expectations.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media uses case snapshots to show campaign direction, business context and
              learning. Results vary by offer, audience, budget, sales handling and timing, so the
              right next step is always a fresh audit of the current business.
            </p>
            <Link
              href="/free-audit"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
            >
              Audit My Business
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </GlassCard>
          <div className="grid gap-4 md:grid-cols-2">
            {credibilityChecks.map(([title, copy]) => (
              <GlassCard key={title}>
                <ClipboardCheck className="mb-6 size-6 text-[#8EEA4D]" strokeWidth={1.8} />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-white/62">{copy}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Proof" title="Structured growth stories worth studying.">
        <div className="mb-6 grid gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/58 sm:grid-cols-2">
          <p>
            Conversions = [TODO: confirm calls + WhatsApp clicks + form fills].
          </p>
          <p className="sm:text-right">
            Pooled result: ~₹442 average cost per conversion across four wellness accounts.
          </p>
        </div>
        <StaggerContainer className="grid gap-6">
          {studies.map((study, index) => (
            <StaggerItem key={study.client}>
            <article className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/35 lg:grid-cols-[0.85fr_1.15fr] lg:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#071006] p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-3 py-1 text-xs font-bold text-[#CFFFAB]">
                    {study.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/36">
                    Case 0{index + 1}
                  </span>
                </div>
                <div className="relative min-h-56 overflow-hidden rounded-[1.25rem] border border-white/14 bg-white/[0.035]">
                  {study.proofImage ? (
                    <Image
                      src={study.proofImage}
                      alt={study.proofImageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 420px"
                      className="object-cover object-left-top"
                    />
                  ) : (
                    <>
                      <Image
                        src="/images/zexa-dashboard-review.png"
                        alt="Illustrative Zexa Media dashboard visual for growth campaign review"
                        fill
                        sizes="(max-width: 1024px) 92vw, 420px"
                        className="object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0.05),rgba(5,8,6,0.82))]" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <BarChart3 className="size-8 text-[#8EEA4D]" />
                        <p className="mt-3 text-sm font-semibold text-white/82">
                          Campaign review visual
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/52">
                          Illustrative dashboard image. Results are described separately.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <GlassCard>
                <h2 className="text-3xl font-semibold">{study.client}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <InfoBlock title="Challenge" copy={study.challenge} />
                  <InfoBlock title="Strategy" copy={study.strategy} />
                  <InfoBlock title="Timeline" copy={study.timeline} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/35">
                      Channels used
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.channels.map((channel) => (
                        <span
                          key={channel}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/68"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-7 rounded-[1.25rem] border border-[#8EEA4D]/25 bg-[#8EEA4D]/8 p-5">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#CFFFAB]">
                    <BadgeCheck className="size-4" />
                    Campaign metrics
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      ["Spend", study.spend],
                      ["Clicks", study.clicks],
                      ["Conversions", study.conversions],
                      ["Cost / conversion", study.costPerConversion],
                      ["Click-to-conversion", study.clickToConversion],
                      ...(study.ctr ? [["CTR", study.ctr]] : []),
                      ...(study.averageCpc ? [["Average CPC", study.averageCpc]] : []),
                      ...(study.impressionShare
                        ? [["Impression share", study.impressionShare]]
                        : []),
                    ].map(([label, value]) => (
                      <div key={label} className="min-w-0 rounded-xl border border-white/10 bg-black/15 p-3">
                        <p className="text-xs uppercase tracking-[0.12em] text-white/38">{label}</p>
                        <p className="mt-1 break-words font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-white/42">
                    Last updated: {study.lastUpdated}
                  </p>
                </div>
                <Link
                  href="/free-audit"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
                >
                  Discuss a Similar Campaign
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </GlassCard>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-6 text-sm leading-7 text-white/50">
          Results vary by market, offer, budget and execution. These case studies are not guarantees
          of future performance.
        </p>
      </Section>
    </PageShell>
  );
}

function InfoBlock({ title, copy }: Readonly<{ title: string; copy: string }>) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/35">{title}</p>
      <p className="mt-3 leading-7 text-white/62">{copy}</p>
    </div>
  );
}
