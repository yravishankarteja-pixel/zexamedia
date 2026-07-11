import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About Zexa Media | Our Story & Mission",
  description:
    "Zexa Media is a Visakhapatnam-based growth marketing agency built to help local businesses scale with data-driven strategy, automation, and performance marketing.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Built in Vizag. Built for growth."
        description="Zexa Media was founded with one belief: every business, no matter its size, deserves marketing that actually works."
      />
      <Section eyebrow="Our story" title="Why we started Zexa Media.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <p className="text-lg leading-9 text-white/68">
              We saw too many local businesses in Vizag spending money on marketing that
              delivered nothing: generic posts, disconnected ads, and agencies that disappeared
              after onboarding. Zexa Media exists to change that with strategy, tracking, and
              systems that keep delivering.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">A message from our founder</h2>
            <p className="mt-5 leading-8 text-white/62">
              A local gym, clinic, jewellery shop, or coaching centre deserves the same quality
              of strategy that big brands get. Zexa Media gives Vizag businesses that edge.
            </p>
            <p className="mt-6 font-semibold text-[#8EEA4D]">Teja, Founder, Zexa Media</p>
          </GlassCard>
        </div>
      </Section>
      <Section eyebrow="Mission and vision" title="Results, transparency, and long-term partnerships.">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 leading-8 text-white/62">
              To help businesses in Visakhapatnam and across India grow faster through
              data-driven marketing, intelligent automation, and brand-first thinking.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 leading-8 text-white/62">
              To be the most trusted growth marketing agency in Andhra Pradesh, known for
              results, transparency, and long-term partnerships.
            </p>
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
