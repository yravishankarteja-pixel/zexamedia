import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3 } from "lucide-react";
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
    logo: "/images/partners/joy-wellness-spa.png",
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

const studies = [
  {
    client: "Spoken English Institute",
    category: "Education / Coaching",
    challenge: "Low lead volume, high cost per enquiry and unclear targeting.",
    strategy: "Refined audience targeting, campaign structure, offer clarity, and enquiry tracking.",
    channels: ["Meta Ads", "Lead tracking", "Creative testing"],
    timeline: "45 days",
    result: "CPL reduced from \u20B9380 to \u20B9110, with a 3x increase in admissions.",
  },
  {
    client: "SV Gold Shop",
    category: "Jewellery / Local Retail",
    challenge: "No meaningful digital presence and heavy dependence on walk-ins and word of mouth.",
    strategy: "Built a lead-focused digital presence and campaign flow for qualified enquiries.",
    channels: ["Local campaigns", "Lead forms", "Follow-up structure"],
    timeline: "60 days",
    result: "48 qualified leads in the first month, with loan disbursals increasing by 40%.",
  },
  {
    client: "Moon Wellness Spa",
    category: "Wellness / Spa",
    challenge: "Inconsistent bookings, weak social presence and poor online visibility.",
    strategy: "Improved local campaign positioning, social visibility, and booking-oriented content.",
    channels: ["Google Ads", "Instagram growth", "Local visibility"],
    timeline: "6 weeks",
    result: "Walk-in appointments doubled, and Instagram grew from approximately 200 to 1,800 followers.",
  },
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
      />

      <Section eyebrow="Clients and partners" title="Brands and local businesses connected with Zexa Media.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <GlassCard key={partner.name}>
              <div className="flex min-h-44 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={420}
                    height={220}
                    className="max-h-28 w-auto max-w-full object-contain"
                  />
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

      <Section eyebrow="Proof" title="Structured growth stories worth studying.">
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
                <div className="grid min-h-56 place-items-center rounded-[1.25rem] border border-dashed border-white/14 bg-white/[0.035] p-6 text-center">
                  <div>
                    <BarChart3 className="mx-auto size-10 text-[#8EEA4D]" />
                    <p className="mt-4 text-sm font-semibold text-white/72">
                      Future campaign screenshot placeholder
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/42">
                      Placeholder only. Not genuine campaign evidence.
                    </p>
                  </div>
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
                    Key result
                  </p>
                  <p className="mt-3 text-xl font-semibold leading-8 text-white">{study.result}</p>
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
