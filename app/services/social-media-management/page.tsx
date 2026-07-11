import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Social Media Management Agency | Zexa Media",
  description:
    "Zexa Media manages Instagram, Facebook and reels content strategy. Consistent, creative, conversion-focused social media management in Vizag.",
  alternates: { canonical: absoluteUrl("/services/social-media-management") },
};

export default function SocialMediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Social media management"
        title="Social media that builds brands and generates business."
        description="We handle Instagram and Facebook entirely: content calendar, design, captions, Reels, scheduling, and community management."
      />
      <Section eyebrow="What we do" title="Content that educates, entertains, and converts.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Monthly Content Calendar",
            "Creative Design",
            "Reel Production",
            "Photoshoot Coordination",
            "Community Management",
            "Monthly Report",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section eyebrow="Local relevance" title="Built for the Vizag and AP audience.">
        <GlassCard>
          <p className="text-lg leading-9 text-white/66">
            We mix Reels for reach, carousels for education, stories for daily touchpoints,
            and testimonial posts for social proof. For local Vizag businesses, bilingual
            Telugu and English content can create stronger relevance.
          </p>
        </GlassCard>
      </Section>
    </PageShell>
  );
}
