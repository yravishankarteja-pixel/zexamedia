import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Zexa Media",
  description:
    "See how Zexa Media helped Vizag businesses generate leads, improve ROAS, and grow their brand.",
  alternates: { canonical: "https://zexamedia.in/case-studies" },
};

const studies = [
  {
    client: "Spoken English Institute",
    challenge: "Low lead volume, high cost per enquiry, no clear targeting strategy.",
    result: "CPL reduced from Rs. 380 to Rs. 110 in 45 days. 3x increase in admissions.",
  },
  {
    client: "SV Gold Shop",
    challenge: "No digital presence, relying entirely on walk-ins and word of mouth.",
    result: "48 qualified leads in Month 1. Loan disbursals increased by 40% within 60 days.",
  },
  {
    client: "Moon Wellness Spa",
    challenge: "Inconsistent bookings, no social presence, poor online visibility.",
    result: "Walk-in appointments doubled in 6 weeks. Instagram grew from 200 to 1,800 followers.",
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Real businesses. Real results. Real numbers."
        description="Here are some of the growth stories Zexa Media has helped build in Visakhapatnam."
      />
      <Section eyebrow="Proof" title="Growth stories worth studying.">
        <div className="grid gap-5 lg:grid-cols-3">
          {studies.map((study) => (
            <GlassCard key={study.client}>
              <h2 className="text-2xl font-semibold">{study.client}</h2>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-white/35">
                Challenge
              </p>
              <p className="mt-3 leading-7 text-white/58">{study.challenge}</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                Result
              </p>
              <p className="mt-3 leading-7 text-white/78">{study.result}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
