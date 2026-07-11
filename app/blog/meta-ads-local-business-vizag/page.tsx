import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "How to Run Meta Ads for a Local Business in Vizag",
  description:
    "Meta Ads can transform a local business in Visakhapatnam if you target right, write strong copy, and track the right metrics.",
  alternates: { canonical: absoluteUrl("/blog/meta-ads-local-business-vizag") },
};

export default function MetaAdsArticle() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Meta Ads for local business Vizag"
        title="How to run Meta Ads for a local business in Vizag."
        description="Meta Ads help local businesses reach the right person, in the right neighbourhood, before they start searching for alternatives."
      />
      <Section eyebrow="Guide" title="The local campaign system.">
        <GlassCard>
          <div className="prose prose-invert max-w-none prose-p:leading-8 prose-p:text-white/66 prose-headings:text-white">
            <h2>Define the campaign objective first</h2>
            <p>
              Decide whether you want calls, lead forms, WhatsApp messages, or store visits.
              The objective determines format, bidding, and how Meta finds the right people.
            </p>
            <h2>Get local targeting right</h2>
            <p>
              For Vizag businesses, start with a clear local radius and then layer relevant
              interests or demographics. Specificity beats broad targeting.
            </p>
            <h2>Track everything before spending</h2>
            <p>
              Install Meta Pixel, configure lead events, track WhatsApp clicks, and review lead
              quality weekly. Without tracking, ads become guesswork.
            </p>
          </div>
        </GlassCard>
      </Section>
    </PageShell>
  );
}
