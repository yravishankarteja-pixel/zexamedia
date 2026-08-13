import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarClock,
  Camera,
  Gem,
  LineChart,
  MessageSquareText,
  Search,
  Sparkles,
} from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Marketing Services | Zexa Media",
  description:
    "Explore Zexa Media's marketing services for businesses worldwide: Google Ads, Meta Ads, social media, branding, automation, content, SEO, analytics and lead generation.",
  alternates: { canonical: absoluteUrl("/services") },
};

const pageUrl = absoluteUrl("/services");

const services = [
  {
    icon: LineChart,
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    serviceType: "Performance Marketing",
    copy: "Google Ads, Meta Ads, audience targeting, conversion tracking, and weekly optimisation for qualified leads.",
    fit: "Best when you need calls, forms, WhatsApp enquiries or sales conversations from paid campaigns.",
  },
  {
    icon: Sparkles,
    title: "Social Media Management",
    href: "/services/social-media-management",
    serviceType: "Social Media Management",
    copy: "Content calendars, Reels, static posts, captions, scheduling, and community management for consistent brand trust.",
    fit: "Best when your Instagram and Facebook need stronger consistency, better creative and local audience relevance.",
  },
  {
    icon: Gem,
    title: "Branding & Positioning",
    href: "/services/branding",
    serviceType: "Brand Identity Design",
    copy: "Logo, brand kit, voice, visual identity, and strategic market positioning for clearer customer recall.",
    fit: "Best when your brand looks inconsistent or your offer is not clear enough to stand apart.",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    href: "/services/automation",
    serviceType: "Marketing Automation",
    copy: "WhatsApp flows, lead notifications, CRM integration, follow-up sequences, and reporting automation.",
    fit: "Best when leads are coming in but response delays, manual follow-up or poor tracking are costing conversions.",
  },
  {
    icon: Camera,
    title: "Content Production",
    href: "/contact",
    serviceType: "Content Production",
    copy: "Photoshoot direction and Reel production for ads, social media, landing pages, and brand credibility.",
    fit: "Best when your campaigns need original visuals instead of generic stock-style content.",
  },
  {
    icon: Search,
    title: "SEO & AEO",
    href: "/contact",
    serviceType: "SEO and Answer Engine Optimization",
    copy: "On-page SEO, schema, answer-ready content, and technical structure for Google and AI search visibility.",
    fit: "Best when you need better organic discoverability, local entity signals and content AI systems can cite.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    href: "/free-audit",
    serviceType: "Analytics and Reporting",
    copy: "Monthly dashboards, source tracking, campaign reviews and practical next actions for better decisions.",
    fit: "Best when you want to know where every rupee is going and which channels deserve more budget.",
  },
];

const industries = [
  ["Doctors & Clinics", "Doctors, dental practices, diagnostic centres, fertility clinics and multi-location healthcare practices.", "/industries/doctors-clinics"],
  ["Spas & Wellness", "Day spas, wellness studios, beauty centres and multi-branch wellness brands.", "/industries/spas-wellness"],
  ["Education & Coaching", "Institutes, schools, training centres and career-focused education brands."],
  ["Finance & Gold", "Gold loan, mortgage, finance and advisory businesses that need trust-led lead generation."],
  ["Retail & Local Services", "Showrooms, salons, restaurants, repair services and local consumer brands.", "/industries/salons"],
  ["Real Estate", "Builders, developers, brokers and project campaigns that need qualified enquiries.", "/industries/real-estate"],
  ["Professional Services", "Consultants, service firms and B2B businesses that need credibility and pipeline."],
];

const serviceFaqs = [
  {
    question: "What marketing services does Zexa Media offer?",
    answer:
      "Zexa Media offers performance marketing, Google Ads, Meta Ads, social media management, branding, content production, marketing automation, analytics, SEO and answer engine optimisation for businesses in Visakhapatnam and across India.",
  },
  {
    question: "Which service should a local business in Vizag start with?",
    answer:
      "Most local businesses should start with an audit. If demand already exists, Google Ads and landing page tracking may come first. If trust is weak, branding and social content may need attention before scaling ads. If leads are delayed, automation becomes the priority.",
  },
  {
    question: "Can Zexa Media manage both ads and content?",
    answer:
      "Yes. Zexa Media can manage paid campaigns, creative assets, social media content, landing page improvements and lead follow-up systems together so each channel supports the same growth goal.",
  },
  {
    question: "Do all services need to be bought together?",
    answer:
      "No. Services can be planned based on your current stage, budget and bottleneck. The goal is to fix the highest-impact problem first rather than forcing every business into the same plan.",
  },
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#services`,
  name: "Zexa Media Marketing Services",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    serviceType: service.serviceType,
    url: absoluteUrl(service.href),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Zexa Media",
      url: siteUrl,
    },
    areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
    description: service.copy,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Marketing services for worldwide growth"
        title="Growth marketing services built as one connected system."
        description="From the first ad impression to the final sale, Zexa Media connects paid ads, social content, branding, automation, SEO and analytics for businesses that want growth beyond location limits."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media team creating content for a local business campaign"
        metricLabel="Campaign assets"
        metricValue="Ads, content, tracking, and follow-up"
      />

      <Section eyebrow="Services grid" title="Built as one connected growth system.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <GlassCard>
                <service.icon className="mb-8 size-7 text-[#8EEA4D]" />
                <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-white/58">{service.copy}</p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-black/18 p-4 text-sm leading-6 text-white/64">
                  {service.fit}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  Explore service
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it connects" title="Growth works better when every channel supports the next step.">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Ads bring attention. Systems convert it.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Paid campaigns can create demand quickly, but the result depends on the offer,
              landing page clarity, content credibility, response speed and tracking setup.
              Zexa Media builds those parts together so leads are not wasted after the click.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Local knowledge shapes the message.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Vizag businesses need marketing that understands regional intent, Telugu-speaking
              audiences, local competition and service-area behaviour. That context changes how
              ads, social posts, landing pages and follow-up messages should be written.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Who we work with" title="Industries we serve across local and worldwide markets.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([industry, copy, href]) => (
            <GlassCard key={industry}>
              <h2 className="text-xl font-semibold">{industry}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
              {href && (
                <Link href={href} className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  Explore industry <ArrowRight className="ml-2 size-4" />
                </Link>
              )}
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Work from anywhere" title="Remote marketing support without location limits.">
        <div className="grid gap-5 lg:grid-cols-3">
          <GlassCard>
            <CalendarClock className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Online audit first</h2>
            <p className="mt-4 leading-8 text-white/62">
              Zexa reviews your website, ad accounts, social presence, tracking and lead flow
              remotely before recommending what to fix first.
            </p>
          </GlassCard>
          <GlassCard>
            <MessageSquareText className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Clear communication rhythm</h2>
            <p className="mt-4 leading-8 text-white/62">
              Strategy calls, updates and reporting can be handled online with a practical cadence
              that fits your location and decision-making style.
            </p>
          </GlassCard>
          <GlassCard>
            <LineChart className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Reports that show next actions</h2>
            <p className="mt-4 leading-8 text-white/62">
              Reporting focuses on what changed, what improved, what needs attention and what
              should happen next, not just screenshots of metrics.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Buyer needs" title="Not sure which service should come first?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <GlassCard>
            <h2 className="text-2xl font-semibold">
              Choose by the problem: leads, ads, tracking, follow-up, social or brand trust.
            </h2>
            <p className="mt-4 leading-8 text-white/62">
              The remote services page groups Zexa Media global services by buyer need, so a
              business can quickly find the right next step without being locked to a location or
              forced into the wrong channel first.
            </p>
          </GlassCard>
          <Link
            href="/remote-marketing-services"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
          >
            Explore Remote Services
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </Section>

      <Section eyebrow="Global service pages" title="Choose the service by your growth problem, not your location.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            [
              "/performance-marketing-agency",
              "Performance Marketing Agency",
              "Google Ads, Meta Ads, landing pages, tracking, reporting and optimisation for measurable growth.",
              LineChart,
            ],
            [
              "/digital-marketing-agency",
              "Digital Marketing Agency",
              "Ads, social media, branding, automation, SEO, content and analytics as one connected system.",
              Sparkles,
            ],
            [
              "/google-ads-agency",
              "Google Ads Agency",
              "Search campaigns, keyword planning, conversion tracking, landing page review and waste reduction.",
              Search,
            ],
            [
              "/meta-ads-agency",
              "Meta Ads Agency",
              "Instagram and Facebook ads, creative testing, retargeting, WhatsApp enquiries and reporting.",
              Camera,
            ],
            [
              "/lead-generation-agency",
              "Lead Generation Agency",
              "Qualified calls, WhatsApp enquiries, forms, landing pages, tracking and lead follow-up systems.",
              BarChart3,
            ],
            [
              "/marketing-automation-agency",
              "Marketing Automation Agency",
              "WhatsApp follow-up, lead alerts, CRM handoff, reminders, source tracking and reporting workflows.",
              Bot,
            ],
          ].map(([href, title, copy, Icon]) => (
            <Link key={href as string} href={href as string} className="group">
              <GlassCard>
                <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
                <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                  {title as string}
                </h2>
                <p className="mt-4 leading-7 text-white/62">{copy as string}</p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  Open service page
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local proof pages" title="Visakhapatnam pages stay as local trust signals.">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/lead-generation-agency-visakhapatnam" className="group">
            <GlassCard>
              <BarChart3 className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Lead Generation Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused page for qualified calls, WhatsApp enquiries, landing pages,
                campaign tracking, lead quality feedback and follow-up systems.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/meta-ads-agency-visakhapatnam" className="group">
            <GlassCard>
              <Camera className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Meta Ads Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused page for Instagram Ads, Facebook Ads, creative testing, retargeting,
                WhatsApp enquiries, local audiences and Meta campaign reporting.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/google-ads-agency-visakhapatnam" className="group">
            <GlassCard>
              <Search className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Google Ads Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused page for search ads, keyword planning, calls, WhatsApp enquiries,
                tracking, landing page review and weekly Google Ads optimisation.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/digital-marketing-agency-visakhapatnam" className="group">
            <GlassCard>
              <Sparkles className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Digital Marketing Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A broad local page for businesses that need ads, social media, branding,
                automation, SEO, content, analytics and lead generation as one connected system.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/performance-marketing-agency-visakhapatnam" className="group">
            <GlassCard>
              <LineChart className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Performance Marketing Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused landing page for Google Ads, Meta Ads, lead generation, tracking,
                landing pages and WhatsApp follow-up for Visakhapatnam businesses.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/marketing-automation-agency-visakhapatnam" className="group">
            <GlassCard>
              <Bot className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                Marketing Automation Agency Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused page for WhatsApp automation, CRM workflows, lead alerts,
                AI-assisted qualification, reminders and reporting automation.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <Link href="/seo-company-visakhapatnam" className="group">
            <GlassCard>
              <Search className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                SEO Company Visakhapatnam
              </h2>
              <p className="mt-4 leading-7 text-white/62">
                A focused page for technical SEO, local SEO, content planning, schema,
                Google Business Profile alignment and organic visibility.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                Open local page
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </span>
            </GlassCard>
          </Link>
          <GlassCard>
            <Search className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold">Local pages support city-level discovery</h2>
            <p className="mt-4 leading-7 text-white/62">
              These pages help Zexa appear for Vizag and Visakhapatnam searches, while the
              global pages above speak to businesses anywhere in the world.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Marketing services questions.">
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Need help choosing the right service first?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We identify whether your biggest bottleneck is ads, content, branding, automation or tracking.",
              "You get a practical priority order before committing to a full monthly plan.",
              "We connect the right service mix to your budget, lead goals and current growth stage.",
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
              href="/packages"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Compare Packages
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
