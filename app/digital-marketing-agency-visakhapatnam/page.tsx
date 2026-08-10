import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Gem,
  LineChart,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
  Sparkles,
  Target,
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
  title: "Best Digital Marketing Agency in Vizag | Zexa Media",
  description:
    "Zexa Media is a performance-driven digital marketing agency in Vizag helping businesses generate qualified leads through Google Ads, Meta Ads, SEO, landing pages, tracking and automation.",
  alternates: { canonical: absoluteUrl("/digital-marketing-agency-visakhapatnam") },
};

const pageUrl = absoluteUrl("/digital-marketing-agency-visakhapatnam");

const serviceMix = [
  ["Performance Marketing", "Google Ads, Meta Ads, campaign planning and lead-generation optimisation.", LineChart],
  ["Google Ads", "Search campaigns, local intent keywords, call leads, negative keywords and conversion tracking.", Search],
  ["Meta Ads", "Facebook and Instagram campaigns with creative testing, retargeting and WhatsApp lead paths.", Megaphone],
  ["Social Media Management", "Instagram, Facebook, Reels, content calendars, captions and local brand trust.", Sparkles],
  ["Landing Pages", "Conversion-focused pages with clear offers, proof, forms, WhatsApp CTAs and mobile speed.", MousePointerClick],
  ["Conversion Tracking", "GA4, Google Tag Manager, Meta Pixel, CAPI planning, calls, forms and WhatsApp events.", Target],
  ["Branding & Positioning", "Logo, brand kit, offer clarity, visual identity and market positioning.", Gem],
  ["Marketing Automation", "WhatsApp lead flow, CRM handoff, reminders, reporting and follow-up systems.", Bot],
  ["SEO & AI Search Visibility", "On-page SEO, local entity signals, schema and answer-ready content structure.", Search],
  ["Analytics & Reporting", "Dashboards and monthly reviews that connect spend, source quality, CPL and next actions.", BarChart3],
] as const;

const proofStats = [
  ["50+", "Clients Served"],
  ["Rs.2Cr+", "Ad Spend Managed"],
  ["3x-8x", "ROAS ranges documented in the content base"],
  ["4", "Cities Across AP"],
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

const topicCluster = [
  ["Performance marketing services in Vizag", "/performance-marketing-agency-visakhapatnam"],
  ["Google Ads management in Vizag", "/google-ads-agency-visakhapatnam"],
  ["Meta Ads services", "/meta-ads-agency-visakhapatnam"],
  ["Lead generation services", "/lead-generation-agency-visakhapatnam"],
  ["Marketing automation for local businesses", "/marketing-automation-agency-visakhapatnam"],
  ["SEO and local SEO services in Visakhapatnam", "/seo-company-visakhapatnam"],
] as const;

const growthFlow = [
  "Traffic",
  "Landing Page",
  "Tracking",
  "Lead",
  "Follow-Up",
  "Conversion",
  "Reporting",
  "Scaling",
] as const;

const process = [
  ["01", "Free Growth Audit", "Review ads, landing pages, social profiles, tracking, offers and lead follow-up gaps."],
  ["02", "Strategy & Funnel Planning", "Decide which channels, offers, pages, budgets and follow-up workflows should come first."],
  ["03", "Launch, Track & Optimize", "Create campaigns, content, pages and analytics around calls, forms, WhatsApp and sales conversations."],
  ["04", "Review, Automate & Scale", "Use reports and lead-quality feedback to improve conversion, response speed and budget allocation."],
] as const;

const caseStudySlots = [
  ["Education", "Lead quality, admission enquiries, CPL, follow-up speed and conversion learnings."],
  ["Healthcare", "Search intent, landing-page trust, call tracking, booking flow and patient enquiry quality."],
  ["Local Business", "Walk-in demand, WhatsApp response, local visibility, retargeting and reporting clarity."],
  ["Training Institute", "Campaign structure, Meta creative tests, form quality, admissions and lead-to-booking rate."],
] as const;

const faqs = [
  {
    question: "What does a digital marketing agency in Vizag do?",
    answer:
      "A digital marketing agency in Visakhapatnam helps businesses grow through online channels such as Google Ads, Meta Ads, social media, branding, SEO, content, landing pages, analytics and lead follow-up. The best channel mix depends on the business goal and current bottleneck.",
  },
  {
    question: "How much does digital marketing cost in Vizag?",
    answer:
      "Digital marketing costs in Vizag depend on scope, channels, ad budget, content needs, landing pages, tracking and automation. A small paid-campaign starter plan may need a different budget than full growth marketing with Google Ads, Meta Ads, SEO, reporting and lead follow-up.",
  },
  {
    question: "Which is better for my business, Google Ads or Meta Ads?",
    answer:
      "Google Ads is often stronger when people already search for your service. Meta Ads is useful for demand creation, retargeting, creative testing and WhatsApp enquiries. Many businesses need both, but the right starting point depends on search demand, offer clarity, budget and tracking readiness.",
  },
  {
    question: "Does Zexa Media provide performance marketing in Visakhapatnam?",
    answer:
      "Yes. Zexa Media provides performance marketing in Visakhapatnam through Google Ads, Meta Ads, landing-page support, conversion tracking, reporting and lead follow-up systems. The focus is measurable enquiries and business outcomes rather than reach alone.",
  },
  {
    question: "Can you generate leads for local businesses?",
    answer:
      "Zexa Media can help local businesses build lead-generation systems using ads, landing pages, WhatsApp paths, forms, tracking and follow-up workflows. Lead quality depends on the offer, market demand, response speed, budget, competition and sales handling.",
  },
  {
    question: "Do you provide Google Ads management in Vizag?",
    answer:
      "Yes. Zexa Media manages Google Ads campaigns for Vizag businesses, including keyword strategy, Search campaigns, local intent targeting, call and form conversion tracking, negative keywords, landing-page review and weekly optimisation.",
  },
  {
    question: "Do you manage Meta Ads in Vizag?",
    answer:
      "Yes. Zexa Media manages Meta Ads for Instagram and Facebook, including audience strategy, creative testing, retargeting, lead forms, WhatsApp enquiry paths, Meta Pixel planning, CAPI consideration and lead-quality feedback.",
  },
  {
    question: "Do you provide marketing automation and WhatsApp automation?",
    answer:
      "Yes. Zexa Media builds practical marketing automation for lead alerts, WhatsApp follow-up, CRM handoff, appointment reminders, reporting workflows and AI-assisted lead qualification where suitable.",
  },
  {
    question: "How do I choose the best digital marketing agency in Vizag?",
    answer:
      "Choose a digital marketing agency by checking whether they understand your business model, set up tracking properly, report transparently, improve lead quality, show real case studies where available, and focus on follow-up and business outcomes. Avoid agencies that promise guaranteed rankings, leads or ROAS.",
  },
  {
    question: "What makes Zexa different from a traditional digital marketing company?",
    answer:
      "Zexa Media focuses on strategy before spending, tracking before scaling, and follow-up before losing leads. The work connects ads, landing pages, automation and reporting so business owners can see what is producing qualified enquiries and what needs improvement.",
  },
  {
    question: "Which businesses in Vizag should hire a digital marketing agency?",
    answer:
      "Businesses that need better enquiries, stronger local trust, clearer content, reliable tracking or faster lead follow-up can benefit. This includes clinics, education brands, real estate businesses, wellness brands, local services, consultants and retail businesses.",
  },
  {
    question: "Is digital marketing different from performance marketing?",
    answer:
      "Yes. Digital marketing is the broader system that can include branding, social media, content, SEO, paid ads, automation and analytics. Performance marketing is the measurable paid-campaign part focused on leads, calls, sales conversations and return on ad spend.",
  },
  {
    question: "Does Zexa Media force every business into the same package?",
    answer:
      "No. Zexa Media starts with an audit and recommends the highest-impact next step. Some businesses need Google Ads first, some need brand clarity, some need social content, and some need tracking or automation before spending more.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Performance-Driven Digital Marketing Agency in Vizag",
  description: metadata.description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: businessName,
    url: siteUrl,
  },
  about: {
    "@id": `${pageUrl}#service`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: businessName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#localbusiness`,
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <PageHero
        eyebrow="Digital marketing agency in Visakhapatnam"
        title="Performance-Driven Digital Marketing Agency in Vizag"
        description="Looking for a digital marketing agency in Vizag focused on qualified leads and measurable growth? Zexa Media combines Google Ads, Meta Ads, performance marketing, SEO, landing pages, conversion tracking and marketing automation to build complete customer acquisition systems for businesses in Visakhapatnam."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media digital marketing agency in Visakhapatnam creating campaign content"
        metricLabel="Connected execution"
        metricValue="Ads, social, branding, SEO, automation, and reporting"
        primaryCta="Book a Free Growth Audit"
        primaryHref="/free-audit"
        secondaryCta="Explore Our Growth System"
        secondaryHref="/growth-system"
      />

      <Section eyebrow="Verified proof" title="Trust signals from the approved Zexa content base.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofStats.map(([value, label]) => (
            <GlassCard key={label}>
              <p className="text-4xl font-semibold text-[#8EEA4D]">{value}</p>
              <h2 className="mt-4 text-xl font-semibold">{label}</h2>
              <p className="mt-3 leading-7 text-white/58">
                Used only because this metric already exists in the project content source.
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Zexa"
        title="Why Businesses Choose Zexa as Their Digital Marketing Agency in Vizag"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Strategy before spending.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa Media does not treat marketing as a list of disconnected activities.
              We clarify the offer, audience, funnel, tracking and follow-up before
              increasing spend, so budget decisions are based on business reality.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Tracking before scaling. Follow-up before losing leads.</h2>
            <p className="mt-4 leading-8 text-white/62">
              The work focuses on qualified enquiries, cost per lead, cost per acquisition,
              conversion rate, lead-to-booking rate, sales attribution, ROAS and revenue
              growth. Vanity metrics are useful only when they support a real conversion path.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Growth system" title="Performance marketing that goes beyond running ads.">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">A connected customer acquisition flow.</h2>
            <p className="mt-4 leading-8 text-white/62">
              As a performance marketing agency in Vizag, Zexa connects traffic, pages,
              tracking and follow-up so growth marketing becomes measurable. The aim is not
              only cheaper clicks, but better customer acquisition and clearer lead generation.
            </p>
          </GlassCard>
          <div className="grid gap-3">
            {growthFlow.map((step, index) => (
              <GlassCard key={step}>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold">{step}</h2>
                  <span className="text-sm font-bold text-[#8EEA4D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Service mix" title="Digital Marketing Services in Visakhapatnam">
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

      <Section eyebrow="Topic cluster" title="Explore specialist local marketing services.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topicCluster.map(([label, href]) => (
            <Link key={href} href={href} className="group">
              <GlassCard>
                <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                  {label}
                </h2>
                <p className="mt-4 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  Open service page
                  <ArrowRight className="ml-2 size-4" />
                </p>
              </GlassCard>
            </Link>
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

      <Section eyebrow="Service areas" title="Serving Businesses Across Visakhapatnam">
        <GlassCard>
          <h2 className="text-2xl font-semibold">Local SEO signals without doorway pages.</h2>
          <p className="mt-4 leading-8 text-white/62">
            Zexa Media supports businesses across Visakhapatnam, including Dwaraka Nagar,
            MVP Colony, Siripuram, Seethammadhara, Madhurawada, Rushikonda, Gajuwaka,
            Akkayyapalem, NAD and Beach Road. These areas are mentioned because they reflect
            real local relevance for city-wide campaigns, not because each area needs a thin page.
          </p>
        </GlassCard>
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

      <Section eyebrow="Proof roadmap" title="Case study slots for genuine client data.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {caseStudySlots.map(([industry, fields]) => (
            <GlassCard key={industry}>
              <h2 className="text-xl font-semibold">{industry}</h2>
              <p className="mt-4 leading-7 text-white/62">{fields}</p>
              <p className="mt-5 text-sm font-semibold text-white/48">
                Populate only with approved real data.
              </p>
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
              Book Free Growth Audit
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
