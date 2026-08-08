import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Gem,
  LineChart,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Remote Marketing Services | Zexa Media",
  description:
    "Choose Zexa Media remote marketing services by buyer need: get leads, improve ads, fix tracking, automate follow-up, improve social presence and build brand trust.",
  alternates: { canonical: absoluteUrl("/remote-marketing-services") },
};

const pageUrl = absoluteUrl("/remote-marketing-services");

type BuyerNeed = {
  icon: LucideIcon;
  need: string;
  problem: string;
  outcome: string;
  services: Array<[string, string]>;
  cta: string;
};

const buyerNeeds: BuyerNeed[] = [
  {
    icon: Target,
    need: "Get leads",
    problem: "You need more qualified calls, WhatsApp enquiries or form submissions.",
    outcome:
      "Zexa builds campaign paths around buyer intent, clearer landing pages, source tracking and fast next-step handling.",
    services: [
      ["Lead Generation", "/lead-generation-agency"],
      ["Performance Marketing", "/performance-marketing-agency"],
      ["Google Ads", "/google-ads-agency"],
    ],
    cta: "Build a lead system",
  },
  {
    icon: LineChart,
    need: "Improve ads",
    problem: "You are spending on ads, but the quality, cost or conversion path is unclear.",
    outcome:
      "We tighten targeting, creative, search intent, landing page clarity and reporting so ad decisions become easier.",
    services: [
      ["Google Ads", "/google-ads-agency"],
      ["Meta Ads", "/meta-ads-agency"],
      ["Performance Marketing", "/performance-marketing-agency"],
    ],
    cta: "Improve campaign performance",
  },
  {
    icon: BarChart3,
    need: "Fix tracking",
    problem: "You cannot clearly see which campaign, page, keyword or channel creates serious enquiries.",
    outcome:
      "We connect conversion events, forms, calls, WhatsApp clicks, lead source notes and practical reporting views.",
    services: [
      ["Performance Marketing", "/performance-marketing-agency"],
      ["Marketing Automation", "/marketing-automation-agency"],
      ["Free Audit", "/free-audit"],
    ],
    cta: "Find the tracking gaps",
  },
  {
    icon: Workflow,
    need: "Automate follow-up",
    problem: "Leads are missed, response is slow or follow-up depends too much on manual reminders.",
    outcome:
      "Zexa plans lead alerts, WhatsApp-first handling, reminders, sheet or CRM handoff and simple reporting workflows.",
    services: [
      ["Marketing Automation", "/marketing-automation-agency"],
      ["Lead Generation", "/lead-generation-agency"],
      ["How We Work", "/how-we-work"],
    ],
    cta: "Speed up follow-up",
  },
  {
    icon: Sparkles,
    need: "Improve social presence",
    problem: "Your Instagram, Facebook or content presence looks inconsistent, inactive or hard to trust.",
    outcome:
      "We improve content themes, campaign visuals, social proof, captions, Reels direction and paid-social readiness.",
    services: [
      ["Social Media Management", "/services/social-media-management"],
      ["Meta Ads", "/meta-ads-agency"],
      ["Digital Marketing", "/digital-marketing-agency"],
    ],
    cta: "Strengthen social trust",
  },
  {
    icon: Gem,
    need: "Build brand trust",
    problem: "People see the business, but the offer, proof, visuals or positioning do not feel strong enough.",
    outcome:
      "We clarify the message, improve visual consistency, strengthen proof points and connect brand trust to conversion.",
    services: [
      ["Branding", "/services/branding"],
      ["Digital Marketing", "/digital-marketing-agency"],
      ["Case Studies", "/case-studies"],
    ],
    cta: "Make the brand clearer",
  },
];

const remoteProof = [
  ["Remote audit first", "Website, ads, social profiles, tracking and lead flow can be reviewed online before any monthly plan."],
  ["View-only access where possible", "Ad accounts, analytics and website data can be inspected with safer access before deeper changes."],
  ["Weekly action clarity", "Reporting focuses on what changed, what improved, what needs attention and what should happen next."],
  ["Client-owned assets", "Campaign accounts, pages, tracking, content and reporting should stay transparent and easy to understand."],
];

const journey = [
  ["01", "Discovery", "Audit the offer, audience, website, ads, tracking and follow-up path."],
  ["02", "Priority", "Choose the first bottleneck to fix instead of trying to do every channel at once."],
  ["03", "Execution", "Build or improve the campaigns, pages, content, automations and reports."],
  ["04", "Learning", "Use lead quality, response speed and conversion data to guide the next move."],
  ["05", "Scale", "Increase effort only after the message, tracking and lead handling are clearer."],
];

const faqs = [
  {
    question: "Can Zexa Media help businesses outside India?",
    answer:
      "Yes. Zexa Media can support remote marketing work for businesses in different cities and countries. Strategy, audits, ad management, tracking, reporting and follow-up planning can be handled online.",
  },
  {
    question: "Which remote marketing service should I choose first?",
    answer:
      "Start with the biggest bottleneck. If enquiries are weak, focus on lead generation or ads. If spend is unclear, fix tracking. If leads are missed, improve follow-up. If trust is weak, improve brand and social presence.",
  },
  {
    question: "Can Zexa manage only one part of marketing?",
    answer:
      "Yes. Zexa can support one priority area such as Google Ads, Meta Ads, tracking, automation, social content or branding, then connect other services only when they are useful.",
  },
  {
    question: "Does Zexa Media guarantee fixed leads, sales or rankings?",
    answer:
      "No. Results depend on the offer, market, budget, competition, landing page quality, follow-up and sales process. Zexa focuses on responsible setup, clear tracking and practical optimisation.",
  },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Remote Marketing Services",
  description: metadata.description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Zexa Media",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Zexa Media",
    url: siteUrl,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#buyer-needs`,
  name: "Remote marketing services grouped by buyer need",
  itemListElement: buyerNeeds.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.need,
    description: item.outcome,
    url: `${pageUrl}#${item.need.toLowerCase().replaceAll(" ", "-")}`,
  })),
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

export default function RemoteMarketingServicesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Remote marketing services"
        title="Choose marketing support by the problem you need fixed first."
        description="Zexa Media supports businesses remotely with lead generation, ad improvement, tracking, automation, social presence and brand trust. Start with the buyer need, then choose the right service path."
        imageSrc="/images/zexa-dashboard-review.png"
        imageAlt="Zexa Media remote marketing dashboard showing campaign and lead performance"
        metricLabel="Remote growth system"
        metricValue="Leads, ads, tracking, follow-up, social, and brand trust"
      />

      <Section eyebrow="Buyer needs" title="Pick the service path by what is slowing growth.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {buyerNeeds.map((item) => (
            <GlassCard key={item.need}>
              <div id={item.need.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-28">
                <item.icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
                <h2 className="text-2xl font-semibold">{item.need}</h2>
                <p className="mt-4 leading-7 text-white/62">{item.problem}</p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-black/22 p-4 text-sm leading-6 text-white/66">
                  {item.outcome}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.services.map(([label, href]) => (
                    <Link
                      key={`${item.need}-${href}`}
                      href={href}
                      className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/[0.055] px-4 text-sm font-semibold text-white/76 transition hover:border-[#8EEA4D]/55 hover:text-[#8EEA4D]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/free-audit"
                  className="mt-6 inline-flex items-center text-sm font-bold text-[#8EEA4D]"
                >
                  {item.cta}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="How to choose" title="The first fix should match the real bottleneck.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Do not start with a package. Start with diagnosis.</h2>
            <p className="mt-4 leading-8 text-white/62">
              A business may need better ads, but the real issue could be tracking, landing page
              clarity, delayed follow-up or weak trust signals. The remote audit helps identify the
              highest-impact fix before budget is committed.
            </p>
          </GlassCard>
          <GlassCard>
            <CheckList
              items={[
                "If demand exists but enquiries are weak, improve campaigns, landing pages and conversion tracking.",
                "If spend feels unclear, fix analytics, conversion events and source visibility first.",
                "If leads arrive but do not convert, improve response speed and follow-up workflows.",
                "If people hesitate to trust the brand, improve social presence, proof and positioning.",
              ]}
            />
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Remote execution" title="Built for businesses that want expert support from anywhere.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {remoteProof.map(([title, copy], index) => {
            const icons = [ClipboardCheck, ShieldCheck, MessageCircle, CheckCircle2];
            const Icon = icons[index];
            return (
              <GlassCard key={title}>
                <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-white/62">{copy}</p>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Growth journey" title="A simple workflow for remote marketing support.">
        <div className="grid gap-4 lg:grid-cols-5">
          {journey.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <span className="text-sm font-black uppercase tracking-[0.24em] text-[#8EEA4D]">
                {step}
              </span>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service shortcuts" title="Go directly to the service that matches the problem.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            [Search, "Google Ads Agency", "/google-ads-agency", "Capture high-intent search demand."],
            [Megaphone, "Meta Ads Agency", "/meta-ads-agency", "Create demand and retarget warm audiences."],
            [Target, "Lead Generation Agency", "/lead-generation-agency", "Build qualified enquiry systems."],
            [Bot, "Marketing Automation Agency", "/marketing-automation-agency", "Improve lead alerts and follow-up."],
            [MousePointerClick, "Performance Marketing Agency", "/performance-marketing-agency", "Connect campaigns to conversion paths."],
            [Sparkles, "Digital Marketing Agency", "/digital-marketing-agency", "Connect ads, social, brand and analytics."],
          ].map(([Icon, title, href, copy]) => (
            <Link key={href as string} href={href as string} className="group">
              <GlassCard>
                <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
                <h2 className="text-2xl font-semibold transition group-hover:text-[#8EEA4D]">
                  {title as string}
                </h2>
                <p className="mt-4 leading-7 text-white/62">{copy as string}</p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">
                  Open service
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Remote marketing service questions.">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Need help deciding which problem to fix first?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "Get a practical review of your ads, website, social presence, tracking and follow-up.",
              "Receive a clear first priority instead of a forced all-in service bundle.",
              "Use the audit to decide whether to improve leads, ads, tracking, automation, social or brand trust first.",
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
              href="/how-we-work"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
