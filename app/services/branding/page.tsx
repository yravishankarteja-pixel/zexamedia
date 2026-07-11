import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Branding & Brand Identity Agency | Zexa Media",
  description:
    "Build a brand that stands out. Zexa Media creates logos, brand kits, and positioning strategies for businesses in Vizag and Andhra Pradesh.",
  alternates: { canonical: absoluteUrl("/services/branding") },
};

export default function BrandingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Branding and positioning"
        title="Your brand is your most valuable business asset."
        description="We design brand identities that create recognition and trust, from logo and brand kit to messaging and voice."
      />
      <Section eyebrow="Deliverables" title="Brand systems that go deeper than aesthetics.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Logo Design",
            "Brand Colour Palette",
            "Typography System",
            "Brand Guidelines PDF",
            "Brand Voice & Tone",
            "Social Media Templates",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section eyebrow="Positioning" title="Branding is how you win the market.">
        <GlassCard>
          <p className="text-lg leading-9 text-white/66">
            Real brand power comes from knowing who you serve, what makes you different, and why
            customers should choose you over competitors. Zexa Media defines that positioning
            for the Vizag market and turns it into a consistent customer experience.
          </p>
        </GlassCard>
      </Section>
    </PageShell>
  );
}
