import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Marketing Automation Services | Zexa Media",
  description:
    "Automate leads, follow-ups and reporting with Zexa Media. We build workflows using Make, Zapier and WhatsApp automation.",
  alternates: { canonical: "https://zexamedia.in/services/automation" },
};

export default function AutomationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Marketing automation"
        title="Stop losing leads while you sleep."
        description="Most businesses lose leads because nobody followed up fast enough. We build systems that respond within 60 seconds, 24/7."
      />
      <Section eyebrow="What we automate" title="Lead flow systems that protect your ad spend.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Lead Notifications",
            "WhatsApp Auto-Reply",
            "Follow-Up Sequences",
            "CRM Integration",
            "Reporting Automation",
            "Appointment Booking",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section eyebrow="Tools" title="Built with practical, reliable automation tools.">
        <GlassCard>
          <p className="text-lg leading-9 text-white/66">
            Our automation stack includes Make, Zapier, WhatsApp Business API, Zoho CRM,
            Google Sheets, Meta Business Suite, Google Tag Manager, and GA4.
          </p>
        </GlassCard>
      </Section>
    </PageShell>
  );
}
