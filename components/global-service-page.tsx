import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  LineChart,
  LockKeyhole,
  MessageSquareText,
} from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import type { GlobalServiceConfig } from "@/lib/global-commercial-pages";
import {
  addressCountry,
  addressLocality,
  addressRegion,
  areaServed,
  businessName,
  contactEmail,
  fullAddress,
  mapUrl,
  phoneE164,
  postalCode,
  secondaryPhoneE164,
  streetAddress,
} from "@/lib/business-info";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export function GlobalServicePage({ config }: Readonly<{ config: GlobalServiceConfig }>) {
  const pageUrl = absoluteUrl(`/${config.slug}`);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: config.serviceName,
    serviceType: config.serviceType,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: businessName,
      url: siteUrl,
      email: contactEmail,
      telephone: [phoneE164, secondaryPhoneE164],
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
      },
      areaServed: ["Worldwide", ...areaServed],
      hasMap: mapUrl,
    },
    areaServed: ["Worldwide", ...areaServed],
    description: config.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      { "@type": "ListItem", position: 3, name: config.serviceName, item: pageUrl },
    ],
  };

  const remoteTrust = [
    [
      "Online audit",
      "Zexa reviews your website, campaigns, social profiles, tracking and lead flow through a remote audit before recommending the next step.",
      ClipboardCheck,
    ],
    [
      "Simple onboarding",
      "You get a clear checklist for access, goals, offer details, service area, existing assets and reporting requirements.",
      CheckCircle2,
    ],
    [
      "Reporting rhythm",
      "Campaign updates focus on what changed, what improved, what needs attention and what action is planned next.",
      LineChart,
    ],
    [
      "Clear communication",
      "Work can be coordinated through scheduled calls, email and WhatsApp-style updates depending on the client workflow.",
      MessageSquareText,
    ],
    [
      "Access control",
      "Ad accounts, analytics, pixels, tag managers and pages should stay under the client's ownership wherever possible.",
      LockKeyhole,
    ],
    [
      "Timezone-friendly",
      "For non-local clients, meeting windows and update cadence can be planned around practical overlap instead of location.",
      CalendarClock,
    ],
  ] as const;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
        imageSrc={config.imageSrc}
        imageAlt={config.imageAlt}
        metricLabel={config.metricLabel}
        metricValue={config.metricValue}
      />

      <Section eyebrow="Global service" title="Built for remote, local, national and international growth.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <Globe2 className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Work with Zexa Media from anywhere.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media is based at {fullAddress}, but the work is not limited by geography.
              Audits, strategy calls, campaign planning, tracking, reporting and optimisation
              can be handled online for businesses targeting local, national or worldwide markets.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Who this fits</h2>
            <div className="mt-5 grid gap-3">
              {config.fit.map((item) => (
                <div key={item} className="flex gap-3 text-white/68">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
                  <span className="leading-7">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Remote trust" title="How working with Zexa feels from anywhere.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {remoteTrust.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service system" title="What Zexa Media can help with.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {config.serviceItems.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="The goal is useful growth, not just activity.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {config.outcomes.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="A practical path from audit to better execution.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {config.process.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                {step}
              </p>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions before you book.">
        <div className="grid gap-5 lg:grid-cols-2">
          {config.faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Related services" title="Explore the connected growth stack.">
        <div className="grid gap-4 md:grid-cols-3">
          {config.relatedLinks.map(([label, href]) => (
            <Link key={href} href={href} className="group">
              <GlassCard>
                <h2 className="text-xl font-semibold transition group-hover:text-[#8EEA4D]">
                  {label}
                </h2>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  View service
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Book a free audit from anywhere.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your offer, channels, pages, tracking and follow-up online.",
              "You get a practical next-step plan before increasing spend.",
              "The recommendation is based on your business model, not your location.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Book Free Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Contact Zexa
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
