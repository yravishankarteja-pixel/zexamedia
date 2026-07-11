import type { Metadata } from "next";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Privacy Policy | Zexa Media",
  description:
    "Read Zexa Media's privacy policy for website visitors, audit requests, contact forms, analytics, and marketing communications.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
};

const sections = [
  {
    title: "Information we collect",
    copy: "When you contact Zexa Media, request a free audit, or submit a form, we may collect your name, business name, phone number, email address, website or social profile, service interest, budget range, and message details.",
  },
  {
    title: "How we use information",
    copy: "We use your information to respond to enquiries, schedule calls, provide marketing audits, prepare proposals, improve our website, and communicate about Zexa Media services you requested or may find relevant.",
  },
  {
    title: "Analytics and tracking",
    copy: "The website may use analytics, pixels, tags, and similar tools to understand traffic, page performance, campaign attribution, and conversion activity. This helps us improve user experience and marketing performance.",
  },
  {
    title: "Sharing of information",
    copy: "We do not sell your personal information. We may share limited information with service providers that help us operate forms, analytics, email, WhatsApp communication, CRM systems, hosting, or reporting workflows.",
  },
  {
    title: "Data security",
    copy: "We use reasonable administrative and technical safeguards to protect information. No online system is completely risk-free, so visitors should avoid submitting highly sensitive personal data through website forms.",
  },
  {
    title: "Contact",
    copy: "For privacy questions or data requests, contact Zexa Media at contactzexamedia@gmail.com or call +91 95152 56630.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Zexa Media handles visitor and lead information."
        description="This policy explains what information we collect, how we use it, and how visitors can contact us about privacy questions."
      />
      <Section eyebrow="Policy" title="Privacy practices for zexamedia.in.">
        <div className="grid gap-5">
          {sections.map((section) => (
            <GlassCard key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 leading-8 text-white/62">{section.copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
