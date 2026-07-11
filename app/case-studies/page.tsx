import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3 } from "lucide-react";
import { StaggerContainer } from "@/components/animation/StaggerContainer";
import { StaggerItem } from "@/components/animation/StaggerItem";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Zexa Media",
  description:
    "See how Zexa Media helped Vizag businesses generate leads, improve CPL, and grow their brand.",
  alternates: { canonical: absoluteUrl("/case-studies") },
};

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

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Real businesses. Real results. Real numbers."
        description="Selected growth snapshots from Zexa Media campaigns in Visakhapatnam."
      />
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
