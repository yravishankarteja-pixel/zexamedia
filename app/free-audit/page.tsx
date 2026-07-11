import type { Metadata } from "next";
import { AuditForm } from "@/components/audit-form";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Free Marketing Audit | Zexa Media Vizag",
  description:
    "Get a free marketing audit from Zexa Media. We review your ads, social media and website to show where you're losing money.",
  alternates: { canonical: absoluteUrl("/free-audit") },
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
      <Section eyebrow="Book audit" title="Share a few details before the call.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <AuditForm />
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <div className="mt-6 grid gap-4 text-white/62">
              <p>1. We review your business, current marketing, and lead flow.</p>
              <p>2. We identify the biggest growth leak and the fastest practical fix.</p>
              <p>3. You get a clear next-action roadmap before spending more budget.</p>
            </div>
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
