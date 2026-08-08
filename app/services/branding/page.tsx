import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Branding Agency Vizag | Brand Identity Design",
  description:
    "Zexa Media creates logo design, brand kits, visual identity and positioning strategy for businesses in Vizag and Andhra Pradesh.",
  alternates: { canonical: absoluteUrl("/services/branding") },
};

const pageUrl = absoluteUrl("/services/branding");

const brandingFaqs = [
  {
    question: "What is brand positioning?",
    answer:
      "Brand positioning is the process of defining how your business should be perceived by the right customers. It clarifies who you serve, what makes you different, why customers should choose you and how your message should sound across marketing channels.",
  },
  {
    question: "Why do businesses need a brand kit?",
    answer:
      "A brand kit keeps your business consistent across your website, social media, ads, print material and sales assets. It usually includes logo files, colours, typography, usage rules and visual examples so every customer touchpoint looks professional and recognisable.",
  },
  {
    question: "How long does branding take?",
    answer:
      "A standard branding project that includes logo design, brand kit and social media templates usually takes 7 to 12 business days from the completed brief. Larger rebranding projects can take longer depending on the number of assets and approvals.",
  },
  {
    question: "Do you offer rebranding for existing businesses?",
    answer:
      "Yes. Zexa Media can audit an existing brand, identify what should stay, what should evolve and what needs to be rebuilt. The goal is to refresh the identity without losing the trust or recognition the business has already earned.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Branding and Brand Identity Design in Visakhapatnam",
  serviceType: "Brand Identity Design",
  url: pageUrl,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Zexa Media",
    url: siteUrl,
  },
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  description:
    "Logo design, brand kit design, visual identity systems, brand positioning strategy and social media templates for businesses in Visakhapatnam.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: brandingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BrandingPage() {
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
        eyebrow="Branding agency in Vizag"
        title="Brand Identity Design for Businesses in Visakhapatnam"
        description="Zexa Media builds logo systems, brand kits, visual identity and positioning strategy for businesses that need to look credible, memorable and consistent across every customer touchpoint."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media branding and visual identity content production"
        metricLabel="Brand clarity"
        metricValue="Positioning, visuals, messaging, and recall"
      />

      <Section eyebrow="Deliverables" title="Brand systems that go deeper than aesthetics.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Logo Design",
              "Three focused logo concepts, refinement rounds and final export files for digital and print use.",
            ],
            [
              "Brand Colour Palette",
              "Primary and secondary colours with practical usage guidance for websites, ads, social media and print.",
            ],
            [
              "Typography System",
              "Heading and body font pairings that make your brand feel premium, readable and consistent.",
            ],
            [
              "Brand Guidelines PDF",
              "A clear brand kit covering logo spacing, colour usage, typography and visual do's and don'ts.",
            ],
            [
              "Brand Voice & Tone",
              "Messaging direction that defines how your brand should sound: expert, friendly, aspirational or direct.",
            ],
            [
              "Social Media Templates",
              "Reusable post, story, Reel cover and testimonial templates that keep content on-brand.",
            ],
          ].map(([item, copy]) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Positioning" title="Branding is not just design. It is how you win the market.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">A good logo is only the beginning.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Real brand power comes from knowing who you serve, what makes you different,
              and why customers should choose you over competitors. We translate that clarity
              into your visual identity, messaging and digital presence.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Built for local trust and commercial recall.</h2>
            <p className="mt-4 leading-8 text-white/62">
              For Vizag and Andhra Pradesh businesses, branding has to work across signboards,
              Instagram posts, ads, landing pages, WhatsApp creatives and sales conversations.
              Zexa Media builds identity systems that hold together across all of those places.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Process" title="A clear path from business idea to usable brand system.">
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            ["01", "Brand brief", "We understand your business, audience, competitors, personality and visual preferences."],
            ["02", "Positioning", "We define what the brand should be known for and how it should speak to customers."],
            ["03", "Identity design", "We create logo concepts, colours, typography and social media-ready visual assets."],
            ["04", "Brand handover", "You receive files and guidelines your team can use consistently across channels."],
          ].map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">{step}</p>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Branding answers for growing businesses.">
        <div className="grid gap-5 lg:grid-cols-2">
          {brandingFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Ready to make your brand look sharper and more credible?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your existing logo, colours, content and competitor positioning.",
              "You get a clear recommendation on whether you need a refresh or full brand system.",
              "We connect brand identity with social media, ads, landing pages and sales material.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Book Brand Audit
            </Link>
            <Link
              href="/packages"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              View Packages
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
