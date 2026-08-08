import type { Metadata } from "next";
import { AuditForm } from "@/components/audit-form";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Free Marketing Audit | Zexa Media Vizag",
  description:
    "Get a free marketing audit from Zexa Media. We review your ads, social media and website to show where you're losing money.",
  alternates: { canonical: absoluteUrl("/free-audit") },
};

const pageUrl = absoluteUrl("/free-audit");

const auditCovers = [
  [
    "Paid Ads Review",
    "We check your Google and Meta campaign structure, targeting, creative quality, bidding direction and lead quality.",
  ],
  [
    "Social Media Audit",
    "We review profile clarity, content quality, posting frequency, engagement trend and whether your content builds trust.",
  ],
  [
    "Website & Landing Page",
    "We look at mobile experience, CTA clarity, page speed, offer presentation and whether visitors can enquire easily.",
  ],
  [
    "SEO Snapshot",
    "We review basic search visibility, metadata, page structure, local signals and discoverability gaps.",
  ],
  [
    "Competitor Snapshot",
    "We identify what your top competitors are doing in ads, content, offers and search visibility.",
  ],
  [
    "Growth Roadmap",
    "We end with a practical action plan: what to fix first, what to build next and what can wait.",
  ],
];

const auditSteps = [
  ["01", "Book a time slot", "Share your details through the form so we can understand your business and current priority."],
  ["02", "Share context", "Send view-only access or screenshots when needed. We do not change anything without permission."],
  ["03", "We review everything", "We review your ads, website, social media, competitors and lead flow before the audit call."],
  ["04", "Audit call", "You get a 30-minute walkthrough of what is working, what is wasting money and what to fix first."],
  ["05", "Written summary", "You receive a practical summary you can use whether or not you decide to work with Zexa Media."],
];

const auditFaqs = [
  {
    question: "Is the audit really free?",
    answer:
      "Yes. The Zexa Media marketing audit is free, with no credit card, no commitment and no pressure to sign up afterward. The goal is to give you clarity before you spend more on marketing.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "The audit call itself takes about 30 minutes. Before the call, Zexa Media reviews your submitted details and available marketing assets so the conversation is focused and useful.",
  },
  {
    question: "What if I am not ready to hire an agency?",
    answer:
      "That is fine. The audit is still useful if you manage marketing yourself. You will leave with a clearer view of what to fix, what to ignore and what should be prioritised next.",
  },
  {
    question: "Will Zexa Media try to sell me a package?",
    answer:
      "Zexa Media will only discuss packages if they are relevant to your goals or if you ask. The audit is designed to diagnose your growth bottleneck, not force a decision.",
  },
];

const auditPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Free Marketing Audit by Zexa Media",
  description:
    "Free 30-minute marketing audit covering ads, social media, website, SEO, competitors and growth roadmap.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Zexa Media",
    url: siteUrl,
  },
  about: {
    "@type": "Service",
    name: "Free Marketing Audit",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Zexa Media",
    },
    areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: auditFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FreeAuditPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Free marketing audit"
        title="Free Marketing Audit for Businesses in Vizag"
        description="In 30 minutes, Zexa Media reviews your Google Ads, Meta Ads, social media, website and lead flow, then gives you a clear picture of what is working, what is wasting money and what to fix first."
      />

      <Section eyebrow="What the audit covers" title="A sharper view of your growth system.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {auditCovers.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who should book" title="This audit is useful when your growth feels unclear.">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <GlassCard>
            <CheckList
              items={[
                "You are spending on ads but are unsure whether the return is healthy.",
                "You are getting enquiries but lead quality or follow-up is weak.",
                "Your social media is active but not creating trust, calls or appointments.",
                "Your website gets visitors but does not convert them into leads.",
                "You want an honest second opinion before increasing your marketing budget.",
              ]}
            />
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
              Audit promise
            </p>
            <h2 className="mt-4 text-3xl font-semibold">₹0. 30 minutes. A clearer path to growth.</h2>
            <p className="mt-5 leading-8 text-white/62">
              You will not get vague advice. You will get a practical priority order based on
              your current marketing, budget and business stage.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Audit process" title="Simple steps before we give recommendations.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {auditSteps.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">{step}</p>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
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
              <p>1. We confirm your request and review your business context.</p>
              <p>2. We identify the biggest growth leak and the fastest practical fix.</p>
              <p>3. You get a clear next-action roadmap before spending more budget.</p>
              <p>4. If Zexa can help, we explain the right service or package. If not, we still tell you what to do next.</p>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Free audit questions.">
        <div className="grid gap-5 lg:grid-cols-2">
          {auditFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
