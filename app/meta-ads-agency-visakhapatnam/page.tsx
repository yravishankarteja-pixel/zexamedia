import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Film,
  MapPin,
  Megaphone,
  MessageCircle,
  RefreshCw,
  Users,
} from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
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

export const metadata: Metadata = {
  title: "Meta Ads Agency Visakhapatnam | Zexa Media",
  description:
    "Zexa Media is a Meta Ads agency in Visakhapatnam helping businesses generate Instagram, Facebook and WhatsApp leads with creative testing, targeting and tracking.",
  alternates: { canonical: absoluteUrl("/meta-ads-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/meta-ads-agency-visakhapatnam");

const metaServices = [
  ["Instagram & Facebook Ads", "Campaigns across Instagram, Facebook, Reels, Stories, feeds and lead forms.", Megaphone],
  ["Audience Targeting", "Local audiences, interest layers, lookalikes, retargeting and offer-specific segments.", Users],
  ["Creative Testing", "Static creatives, short videos, Reels hooks, copy angles and offer variations.", Film],
  ["WhatsApp Lead Flow", "Campaigns shaped around WhatsApp enquiries, quick replies and faster owner response.", MessageCircle],
  ["Retargeting", "Re-engage website visitors, video viewers, page engagers and warm audiences.", RefreshCw],
  ["Tracking & Reporting", "Meta Pixel, event tracking, campaign reports and lead quality feedback loops.", BarChart3],
] as const;

const outcomes = [
  ["More local enquiries", "Reach people in Vizag before they actively search and guide them toward WhatsApp, calls or forms."],
  ["Better creative clarity", "Test visuals, Reels hooks, captions and offers so the message is easier to understand quickly."],
  ["Stronger retargeting", "Stay visible to people who watched, clicked, visited or engaged but did not enquire yet."],
  ["Cleaner lead feedback", "Connect campaign reports with real enquiry quality, not only likes, reach or impressions."],
] as const;

const localFit = [
  "Spas, salons, gyms, wellness centres and appointment-led brands",
  "Clinics, doctors, dental, IVF and aesthetics businesses",
  "Education institutes, spoken English academies and coaching centres",
  "Real estate projects, interior brands and local service providers",
  "Retail showrooms, restaurants and consumer businesses",
  "Personal brands, consultants and professional service firms",
];

const process = [
  ["01", "Offer and audience audit", "Review the service, customer journey, current creatives, profile trust and lead path."],
  ["02", "Creative plan", "Map hooks, visuals, Reels ideas, copy angles, target audiences and lead destination."],
  ["03", "Launch and track", "Run Meta campaigns with Pixel events, lead forms, WhatsApp clicks or landing page goals."],
  ["04", "Test and optimise", "Improve creative winners, audiences, placements, retargeting and lead quality every week."],
] as const;

const faqs = [
  {
    question: "What does a Meta Ads agency in Visakhapatnam do?",
    answer:
      "A Meta Ads agency in Visakhapatnam plans and manages Instagram and Facebook advertising campaigns for local businesses. The work includes audience targeting, creative testing, campaign setup, Meta Pixel tracking, WhatsApp lead flow, retargeting and reporting.",
  },
  {
    question: "Are Meta Ads better than Google Ads for local businesses?",
    answer:
      "Meta Ads and Google Ads solve different problems. Google Ads captures people already searching. Meta Ads helps create demand, build trust, retarget warm audiences and generate enquiries through Instagram, Facebook and WhatsApp. Many businesses benefit from using both after tracking is clear.",
  },
  {
    question: "Can Meta Ads generate WhatsApp enquiries in Vizag?",
    answer:
      "Yes. Meta Ads can send people to WhatsApp, lead forms or landing pages. Lead quality depends on the offer, creative, targeting, response speed and whether enquiries are followed up properly.",
  },
  {
    question: "Does Zexa Media guarantee Meta Ads results?",
    answer:
      "No. Zexa Media does not guarantee fixed lead volume or sales. The focus is on responsible setup, creative testing, tracking, optimisation and reporting so decisions are based on real campaign data.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Meta Ads Agency in Visakhapatnam",
  serviceType: "Meta Ads Management",
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
    areaServed,
    hasMap: mapUrl,
  },
  areaServed,
  description:
    "Meta Ads management, Instagram Ads, Facebook Ads, creative testing, retargeting, WhatsApp lead generation and campaign reporting for businesses in Visakhapatnam.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: absoluteUrl("/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meta Ads Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function MetaAdsAgencyVisakhapatnamPage() {
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
        eyebrow="Meta Ads agency in Visakhapatnam"
        title="Instagram and Facebook ads built for local enquiries."
        description="Zexa Media helps Vizag businesses generate Meta Ads leads through better creative, sharper targeting, retargeting, WhatsApp enquiry paths and campaign tracking."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media Meta Ads agency in Visakhapatnam planning Instagram and Facebook campaigns"
        metricLabel="Meta campaign focus"
        metricValue="Creative, targeting, retargeting, WhatsApp, and reporting"
      />

      <Section eyebrow="Meta Ads services" title="What Zexa Media manages across Instagram and Facebook.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metaServices.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Business outcomes" title="Meta Ads should create demand and move people toward enquiry.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local fit" title="Best-fit businesses for Meta Ads in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Meta Ads need local context.</h2>
            <p className="mt-4 leading-8 text-white/62">
              For Vizag and Andhra Pradesh businesses, creative has to match how people
              browse, compare and message brands locally. That means stronger hooks,
              bilingual-friendly copy where useful, trust signals and fast WhatsApp follow-up.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Who this fits</h2>
            <div className="mt-5 grid gap-3">
              {localFit.map((item) => (
                <div key={item} className="flex gap-3 text-white/68">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
                  <span className="leading-7">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Location" title="A Meta Ads partner based in Visakhapatnam.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Zexa Media local address</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Campaigns can target Visakhapatnam,
              nearby Vizag neighbourhoods, Andhra Pradesh audiences or broader India
              markets depending on the offer and lead goal.
            </p>
          </GlassCard>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-cta inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
          >
            View Location
            <ArrowRight className="ml-2 size-5" />
          </a>
        </div>
      </Section>

      <Section eyebrow="Process" title="From creative idea to cleaner lead feedback.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([step, title, copy]) => (
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

      <Section eyebrow="FAQ" title="Meta Ads questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Book a free Meta Ads audit before scaling spend.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your current Meta campaigns, audience setup, creatives, profile trust and lead flow.",
              "You get a clear view of what should be tested, paused, improved or retargeted.",
              "We recommend whether Meta Ads should run alone or support Google Ads, content and automation.",
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
              href="/performance-marketing-agency-visakhapatnam"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              View Performance Marketing
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
