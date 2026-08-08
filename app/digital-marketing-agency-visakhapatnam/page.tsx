import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Camera,
  CheckCircle2,
  Gem,
  LineChart,
  MapPin,
  Search,
  Sparkles,
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
  title: "Digital Marketing Agency Visakhapatnam | Zexa Media",
  description:
    "Zexa Media is a digital marketing agency in Visakhapatnam for Google Ads, Meta Ads, social media, branding, automation, SEO, content, analytics and lead generation.",
  alternates: { canonical: absoluteUrl("/digital-marketing-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/digital-marketing-agency-visakhapatnam");

const serviceMix = [
  ["Performance Marketing", "Google Ads, Meta Ads, campaign planning and lead-generation optimisation.", LineChart],
  ["Social Media Management", "Instagram, Facebook, Reels, content calendars, captions and local brand trust.", Sparkles],
  ["Branding & Positioning", "Logo, brand kit, offer clarity, visual identity and market positioning.", Gem],
  ["Marketing Automation", "WhatsApp lead flow, CRM handoff, reminders, reporting and follow-up systems.", Bot],
  ["SEO & AI Search Visibility", "On-page SEO, local entity signals, schema and answer-ready content structure.", Search],
  ["Content Production", "Photoshoot direction, Reels, campaign assets and landing-page visuals.", Camera],
] as const;

const outcomes = [
  ["Stronger discovery", "Help people find Zexa Media and client businesses across Google Search, Maps, social platforms and AI-search systems."],
  ["Better conversion", "Improve landing pages, CTAs, forms, WhatsApp paths and trust signals so traffic has a clearer next step."],
  ["Clearer reporting", "Connect ads, content, website actions and lead sources into practical reports business owners can understand."],
  ["Local relevance", "Shape campaigns around Visakhapatnam buyer intent, Telugu-speaking audiences and Andhra Pradesh service areas."],
] as const;

const localIndustries = [
  "Healthcare, doctors, dental, IVF and aesthetics clinics",
  "Education institutes, schools and coaching centres",
  "Spas, salons, gyms, wellness and appointment-led brands",
  "Real estate, construction and local service businesses",
  "Retail, showrooms, restaurants and consumer brands",
  "Consulting, B2B services and professional firms",
];

const process = [
  ["01", "Audit the current system", "Review ads, social profiles, website pages, tracking, offers and lead follow-up."],
  ["02", "Choose the priority channel", "Decide whether ads, content, branding, automation, SEO or landing pages should come first."],
  ["03", "Build connected assets", "Create campaigns, content, pages, tracking and follow-up around one clear growth goal."],
  ["04", "Measure and improve", "Use reports and lead quality feedback to improve the next month of execution."],
] as const;

const faqs = [
  {
    question: "What does a digital marketing agency in Visakhapatnam do?",
    answer:
      "A digital marketing agency in Visakhapatnam helps businesses grow through online channels such as Google Ads, Meta Ads, social media, branding, SEO, content, landing pages, analytics and lead follow-up. The best channel mix depends on the business goal and current bottleneck.",
  },
  {
    question: "Is digital marketing different from performance marketing?",
    answer:
      "Yes. Digital marketing is the broader system that can include branding, social media, content, SEO, paid ads, automation and analytics. Performance marketing is the measurable paid-campaign part focused on leads, calls, sales conversations and return on ad spend.",
  },
  {
    question: "Which businesses in Vizag should hire a digital marketing agency?",
    answer:
      "Businesses that need better enquiries, stronger local trust, clearer content, reliable tracking or faster lead follow-up can benefit. This includes clinics, education brands, real estate businesses, wellness brands, local services, consultants and retail businesses.",
  },
  {
    question: "Does Zexa Media force every business into the same package?",
    answer:
      "No. Zexa Media starts with an audit and recommends the highest-impact next step. Some businesses need Google Ads first, some need brand clarity, some need social content, and some need tracking or automation before spending more.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Digital Marketing Agency in Visakhapatnam",
  serviceType: "Digital Marketing",
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
    "Digital marketing services in Visakhapatnam including Google Ads, Meta Ads, social media management, branding, automation, SEO, content, analytics and lead generation.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zexa Media digital marketing services",
    itemListElement: serviceMix.map(([name, description]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        description,
      },
    })),
  },
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
      name: "Digital Marketing Agency Visakhapatnam",
      item: pageUrl,
    },
  ],
};

export default function DigitalMarketingAgencyVisakhapatnamPage() {
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
        eyebrow="Digital marketing agency in Visakhapatnam"
        title="Digital marketing built around visibility, trust and qualified leads."
        description="Zexa Media helps Visakhapatnam businesses connect ads, social media, branding, automation, SEO, content and analytics into one practical growth system."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media digital marketing agency in Visakhapatnam creating campaign content"
        metricLabel="Connected execution"
        metricValue="Ads, social, branding, SEO, automation, and reporting"
      />

      <Section eyebrow="Service mix" title="A complete digital marketing system, not disconnected tasks.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceMix.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Business outcomes" title="What local businesses should expect from better digital marketing.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local context" title="Marketing shaped for Vizag buyers and Andhra Pradesh markets.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <MapPin className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Zexa Media is based in Visakhapatnam.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media works from {fullAddress}. Campaigns can be planned for
              city-level visibility in Vizag, local service areas across Andhra Pradesh,
              or national lead-generation goals where relevant.
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-bold text-[#8EEA4D]"
            >
              View location
              <ArrowRight className="ml-2 size-4" />
            </a>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Industries Zexa can support</h2>
            <div className="mt-5 grid gap-3">
              {localIndustries.map((industry) => (
                <div key={industry} className="flex gap-3 text-white/68">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
                  <span className="leading-7">{industry}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Process" title="A practical route from audit to execution.">
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

      <Section eyebrow="FAQ" title="Digital marketing questions from local business owners.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Find the highest-impact digital marketing move first.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your ads, website, social media, tracking, content and lead flow.",
              "You get a clear recommendation on which channel should come first.",
              "The plan connects marketing activity to commercial outcomes, not vanity metrics.",
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
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
