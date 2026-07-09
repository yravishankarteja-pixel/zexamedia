import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Free Marketing Audit | Zexa Media Vizag",
  description:
    "Get a free marketing audit from Zexa Media. We review your ads, social media and website to show where you're losing money.",
  alternates: { canonical: "https://zexamedia.in/free-audit" },
};

export default function FreeAuditPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Free marketing audit"
        title="Find out exactly where your marketing is leaking money."
        description="In 30 minutes, we audit your ads, social media, and website, then give you a clear picture of what to fix first."
      />
      <Section eyebrow="What the audit covers" title="A sharper view of your growth system.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Paid Ads Review",
            "Social Media Audit",
            "Website & Landing Page",
            "SEO Snapshot",
            "Competitor Snapshot",
            "Growth Roadmap",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
