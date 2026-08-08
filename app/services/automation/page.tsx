import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Marketing Automation Agency India | Zexa Media",
  description:
    "Zexa Media builds WhatsApp automation, CRM workflows, lead follow-ups and reporting systems for businesses in Vizag and India.",
  alternates: { canonical: absoluteUrl("/services/automation") },
};

const pageUrl = absoluteUrl("/services/automation");

const automationFaqs = [
  {
    question: "What is marketing automation?",
    answer:
      "Marketing automation uses software to handle repeated marketing and sales tasks such as lead notifications, WhatsApp replies, follow-up messages, CRM updates, appointment reminders and reporting. It helps businesses respond faster without adding more manual work.",
  },
  {
    question: "How can WhatsApp automation help my business?",
    answer:
      "WhatsApp automation can send instant replies to new enquiries, route leads to the sales team, follow up with people who did not respond and remind customers about appointments. Faster response times can improve lead handling and reduce missed opportunities.",
  },
  {
    question: "What tools are used for marketing automation in India?",
    answer:
      "Common marketing automation tools in India include Make, Zapier, Zoho CRM, HubSpot, Google Sheets, Meta Business Suite and WhatsApp Business API providers. The right stack depends on your budget, existing systems and workflow complexity.",
  },
  {
    question: "How quickly can a lead automation system be set up?",
    answer:
      "A standard WhatsApp automation and lead notification flow can usually be planned, built and tested in 3 to 5 business days once account access, message approvals and workflow details are ready.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Marketing Automation Services",
  serviceType: "Marketing Automation",
  url: pageUrl,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Zexa Media",
    url: siteUrl,
  },
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  description:
    "Lead automation, WhatsApp automation, CRM workflows, reporting automation and appointment reminder systems for businesses in Visakhapatnam and India.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: automationFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AutomationPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Marketing automation agency"
        title="Marketing Automation for Faster Lead Follow-Up"
        description="Zexa Media builds WhatsApp automation, CRM workflows, lead notifications and reporting systems for businesses that cannot afford to miss enquiries after ads, landing pages or social media campaigns go live."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media marketing automation and lead reporting dashboard"
        metricLabel="Automation flow"
        metricValue="Lead alerts, WhatsApp, CRM, and reporting"
      />

      <Section eyebrow="What we automate" title="Lead flow systems that protect your ad spend.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Lead Notifications",
              "Send instant WhatsApp, email or sheet alerts to your sales team when a new lead arrives.",
            ],
            [
              "WhatsApp Auto-Reply",
              "Respond to new enquiries quickly with approved welcome messages, next steps and contact prompts.",
            ],
            [
              "Follow-Up Sequences",
              "Build structured follow-ups for leads who did not answer, including reminders, offers and proof points.",
            ],
            [
              "CRM Integration",
              "Move leads from ads, forms or landing pages into Zoho, HubSpot, Google Sheets or your current CRM.",
            ],
            [
              "Reporting Automation",
              "Prepare recurring campaign snapshots so owners can see enquiries, sources and follow-up status.",
            ],
            [
              "Appointment Booking",
              "Send booking confirmations and reminders to reduce no-shows for consultations, visits and calls.",
            ],
          ].map(([item, copy]) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Lead journey" title="From new enquiry to follow-up, without manual chaos.">
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            ["01", "Lead captured", "A form, ad, WhatsApp click or landing page enquiry comes in from your campaign."],
            ["02", "Team alerted", "Your team receives the lead details with source, time and contact information."],
            ["03", "Customer replied to", "The prospect gets a fast WhatsApp message or next-step confirmation."],
            ["04", "Follow-up tracked", "The lead enters a sheet or CRM so status, owner and campaign source stay visible."],
          ].map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">{step}</p>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tools" title="Built with practical, reliable automation tools.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">We choose the stack around the workflow.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Our automation stack can include Make, Zapier, WhatsApp Business API,
              Zoho CRM, Google Sheets, Meta Business Suite, Google Tag Manager and GA4.
              We avoid overbuilding when a simpler workflow can solve the problem.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">The goal is response speed and visibility.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Automation is not about adding complexity. It is about making sure every new
              enquiry is captured, acknowledged, assigned and tracked before the lead goes cold.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Marketing automation answers.">
        <div className="grid gap-5 lg:grid-cols-2">
          {automationFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Every unanswered lead is money wasted. Let us fix the flow.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We audit where leads currently come from and where they get delayed.",
              "We map the ideal response, assignment, follow-up and reporting workflow.",
              "We recommend the simplest tool stack before building anything complex.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Automate My Lead Flow
            </Link>
            <Link
              href="/services/performance-marketing"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              See Paid Ads
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
