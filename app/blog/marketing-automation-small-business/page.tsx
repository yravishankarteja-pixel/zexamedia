import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "5 Marketing Automations Every Small Business in India Should Set Up Today",
  description:
    "Most small businesses lose leads because of slow follow-up. These five marketing automations help fix that.",
  alternates: { canonical: absoluteUrl("/blog/marketing-automation-small-business") },
};

export default function AutomationArticle() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Marketing automation small business India"
        title="5 marketing automations every small business should set up."
        description="The solution to slow follow-up is not always more staff. Often, it is smarter lead systems."
      />
      <Section eyebrow="Guide" title="Automations that stop leads slipping away.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "WhatsApp instant reply",
            "Lead sheet auto-update",
            "5-day follow-up sequence",
            "Monthly report auto-delivery",
            "Appointment reminders",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-8 text-white/62">
                A practical automation that reduces manual work, improves response speed, and
                helps businesses convert more of the leads they already paid for.
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
