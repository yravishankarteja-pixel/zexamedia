import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "What Is Growth Marketing? And Why Every Vizag Business Needs It",
  description:
    "Growth marketing is a data-driven system combining paid ads, content, automation and branding. Here's what it means for your business.",
  alternates: { canonical: absoluteUrl("/blog/what-is-growth-marketing") },
};

export default function GrowthMarketingArticle() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Growth marketing agency"
        title="What is growth marketing?"
        description="Growth marketing connects every marketing activity to measurable outcomes: leads, conversions, revenue, and long-term scale."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Growth marketing dashboard showing campaign analytics and conversion signals"
        metricLabel="Growth guide"
        metricValue="Strategy, experiments, analytics, and scale"
      />
      <Section eyebrow="Guide" title="A full-system approach to business growth.">
        <GlassCard>
          <div className="prose prose-invert max-w-none prose-p:leading-8 prose-p:text-white/66 prose-headings:text-white">
            <h2>What makes growth marketing different?</h2>
            <p>
              Traditional digital marketing often focuses on activity: posting, boosting, and
              creating. Growth marketing focuses on outcomes: cost per lead, conversion rate,
              revenue, and the drop-off points in your funnel.
            </p>
            <h2>The four pillars of growth marketing</h2>
            <p>
              Performance marketing, brand elevation, marketing automation, and data analytics
              work together as one system. If an activity does not move the needle, it should be
              questioned.
            </p>
            <h2>Why it matters in Visakhapatnam</h2>
            <p>
              Vizag is growing fast across healthcare, education, gold, real estate, and
              wellness. Businesses that build growth systems now will be better positioned as
              competition rises.
            </p>
          </div>
        </GlassCard>
      </Section>
    </PageShell>
  );
}
