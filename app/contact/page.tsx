import type { Metadata } from "next";
import Link from "next/link";
import { AuditForm } from "@/components/audit-form";
import {
  contactEmail,
  GlassCard,
  PageHero,
  PageShell,
  phoneHref,
  phoneNumber,
  secondaryPhoneHref,
  secondaryPhoneNumber,
  Section,
  socialLinks,
  whatsappUrl,
} from "@/components/marketing-shell";
import {
  addressCountry,
  addressLocality,
  addressRegion,
  areaServed,
  businessName,
  fullAddress,
  mapUrl,
  officeHours,
  phoneE164,
  postalCode,
  secondaryPhoneE164,
  serviceAreaLabel,
  streetAddress,
} from "@/lib/business-info";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Contact Zexa Media | Book a Free Strategy Call",
  description:
    "Ready to grow? Contact Zexa Media for a free 30-minute marketing audit. Based in Visakhapatnam and serving businesses across India.",
  alternates: { canonical: absoluteUrl("/contact") },
};

const pageUrl = absoluteUrl("/contact");

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#contact`,
  url: pageUrl,
  name: "Contact Zexa Media",
  description:
    "Contact Zexa Media for a free marketing audit, performance marketing, social media, branding and automation services.",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: businessName,
    url: siteUrl,
    telephone: [phoneE164, secondaryPhoneE164],
    email: contactEmail,
    image: absoluteUrl("/zexa-media-logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneE164,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: secondaryPhoneE164,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    sameAs: socialLinks.map((item) => item.href),
  },
};

const contactFaqs = [
  {
    question: "How can I contact Zexa Media?",
    answer:
      "You can contact Zexa Media by phone, WhatsApp, email or the website audit form. WhatsApp is usually the fastest path for quick questions and audit booking.",
  },
  {
    question: "Where is Zexa Media located?",
    answer:
      "Zexa Media is based in Dwaraka Nagar, Visakhapatnam, Andhra Pradesh, near Kalanikethan Shopping Mall and GK Towers.",
  },
  {
    question: "Is the marketing audit really free?",
    answer:
      "Yes. The free audit is a 30-minute review of your current marketing, ads, website, social media and growth opportunities. There is no obligation to hire Zexa Media after the call.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Contact"
        title="Contact Zexa Media in Visakhapatnam"
        description="Whether you have a specific goal or just want to understand your options, book a free 30-minute marketing audit and let us map the next practical growth move."
        imageSrc="/images/zexa-founder-audit.png"
        imageAlt="Contact Zexa Media in Visakhapatnam for a free marketing audit"
        metricLabel="Free audit"
        metricValue="Call Zexa"
      />
      <Section eyebrow="Start here" title="Tell us what growth looks like for you.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <AuditForm />
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <div className="mt-6 grid gap-4 leading-8 text-white/62">
              <p>
                Business: <span className="text-white/82">{businessName}</span>
              </p>
              <p>
                Email:{" "}
                <a className="text-[#8EEA4D]" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="text-[#8EEA4D]" href={phoneHref}>
                  {phoneNumber}
                </a>
              </p>
              <p>
                Alternate Phone:{" "}
                <a className="text-[#8EEA4D]" href={secondaryPhoneHref}>
                  {secondaryPhoneNumber}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  className="text-[#8EEA4D]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phoneNumber}
                </a>
              </p>
              <p>
                Address:{" "}
                <a
                  className="text-[#8EEA4D]"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {fullAddress}
                </a>
              </p>
              <p>Office hours: {officeHours}</p>
              <p>Service area: {serviceAreaLabel}</p>
              <p>Audit cost: 100% free. No obligation. No sales pressure.</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                Follow Zexa Media
              </p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-white/70 transition hover:border-[#8EEA4D]/45 hover:text-[#8EEA4D]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black">
                        {item.short}
                      </span>
                      {item.label}
                    </span>
                    <span className="text-sm">{item.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Before the call" title="What we review in your free marketing audit.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Paid Ads Review", "Campaign structure, targeting, creative quality, bidding direction and lead quality."],
            ["Social Media Audit", "Profile clarity, content quality, posting consistency, engagement and local relevance."],
            ["Website & Landing Page", "Mobile experience, page clarity, CTA placement, load speed and conversion readiness."],
            ["SEO Snapshot", "Basic visibility, page structure, metadata, local signals and search discoverability."],
            ["Competitor Snapshot", "What nearby competitors are doing in ads, content, offers and search presence."],
            ["Growth Roadmap", "A clear priority order: what to fix first, what to build next and what to ignore."],
          ].map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Contact and audit questions.">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <GlassCard>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                Need direction first?
              </p>
              <h2 className="mt-4 text-2xl font-semibold">Start with a free audit, then choose the right service.</h2>
              <p className="mt-4 leading-8 text-white/62">
                We will review your current position and recommend whether ads, content,
                branding, automation, local SEO or a landing page should come first.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/free-audit"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
              >
                Book Free Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
