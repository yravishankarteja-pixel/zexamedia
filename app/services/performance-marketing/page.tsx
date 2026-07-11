import type { Metadata } from "next";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Performance Marketing | Google & Meta Ads - Zexa",
  description:
    "Drive qualified leads with expert Google Ads and Meta Ads management. Zexa Media runs ROI-focused paid campaigns for local and national businesses.",
  alternates: { canonical: absoluteUrl("/services/performance-marketing") },
};

export default function PerformanceMarketingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Performance marketing"
        title="More leads. Better costs. Measurable results."
        description="We run Google Ads and Meta Ads campaigns engineered for qualified leads that convert into paying customers."
      />
      <Section eyebrow="What's included" title="Paid campaigns built around ROI.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Google Search Ads",
            "Meta Ads",
            "Audience Research",
            "Ad Copy & Creative",
            "Conversion Tracking",
            "Weekly Optimisation",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Performance marketing answers.">
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard>
            <h2 className="text-2xl font-semibold">How long before I see results?</h2>
            <p className="mt-4 leading-8 text-white/62">
              Google Ads typically deliver first leads within 7-10 days. Meta Ads optimise over
              2-4 weeks. We set realistic expectations before launch.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">What is tracked?</h2>
            <CheckList items={["Cost per lead", "ROAS", "Lead source", "Form fills and calls"]} />
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
