import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import {
  addressCountry,
  addressLocality,
  addressRegion,
  areaServed,
  businessName,
  postalCode,
  streetAddress,
} from "@/lib/business-info";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About Zexa Media | Our Story & Mission",
  description:
    "Zexa Media is a Visakhapatnam-based growth marketing agency built to help local businesses scale with data-driven strategy, automation, and performance marketing.",
  alternates: { canonical: absoluteUrl("/about") },
};

const pageUrl = absoluteUrl("/about");

const values = [
  [
    "Data Over Opinions",
    "Every campaign decision should be backed by numbers, customer behaviour and clear business goals.",
  ],
  [
    "ROI First",
    "Marketing should connect to leads, revenue, response speed, lead quality and measurable business movement.",
  ],
  [
    "Radical Transparency",
    "Clients should understand what is being spent, what is being tested and what is actually working.",
  ],
  [
    "Local-First Thinking",
    "Vizag businesses need messaging built around local intent, Telugu-speaking audiences and regional trust signals.",
  ],
  [
    "Speed of Execution",
    "Campaigns, creatives, landing pages and automations need momentum. Slow execution quietly kills growth.",
  ],
  [
    "Systems, Not Luck",
    "Sustainable growth comes from repeatable systems: tracking, follow-up, reporting, creative testing and optimisation.",
  ],
];

const founderExpertise = [
  [
    "Performance mindset",
    "Campaign planning starts with leads, conversion paths, tracking and business goals instead of vanity metrics.",
    BarChart3,
  ],
  [
    "Transparent execution",
    "Clients should know what is being tested, what is being changed and why the next action matters.",
    ShieldCheck,
  ],
  [
    "System-led growth",
    "Ads, content, landing pages, follow-up and reporting work better when they are connected.",
    Workflow,
  ],
  [
    "Founder attention",
    "Strategy and growth direction stay close to the founder instead of being handed off without context.",
    BadgeCheck,
  ],
];

const aboutFaqs = [
  {
    question: "What does Zexa Media do?",
    answer:
      "Zexa Media is a growth marketing agency based in Visakhapatnam. The agency helps businesses grow through Google Ads, Meta Ads, social media management, branding, marketing automation, landing page support, analytics and local SEO.",
  },
  {
    question: "Why should I hire a marketing agency in Vizag?",
    answer:
      "A local marketing agency in Vizag understands the regional market, local search behaviour, Telugu-speaking audience patterns and Andhra Pradesh business culture. That context can make campaigns, offers and follow-up messages more relevant to nearby customers.",
  },
  {
    question: "How is Zexa Media different from a traditional digital marketing agency?",
    answer:
      "Zexa Media focuses on growth systems, not only posting content or running isolated ads. The work connects campaigns, content, tracking, landing pages, follow-up automation and reporting so business owners can see what is moving the needle.",
  },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${pageUrl}#about`,
  url: pageUrl,
  name: "About Zexa Media",
  description:
    "About Zexa Media, a growth marketing agency based in Visakhapatnam, Andhra Pradesh.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: businessName,
    url: siteUrl,
  },
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: businessName,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    areaServed,
    description:
      "Performance marketing and growth marketing agency serving businesses in Visakhapatnam and across India.",
    founder: {
      "@type": "Person",
      name: "Teja",
      jobTitle: "Founder",
      worksFor: {
        "@id": `${siteUrl}/#localbusiness`,
      },
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="About Zexa Media"
        title="Growth Marketing Agency Built in Visakhapatnam"
        description="Zexa Media was founded with one belief: every business, no matter its size, deserves marketing that actually works. We are rooted in Vizag and built for ambitious businesses across Andhra Pradesh and India."
        imageSrc="/images/zexa-founder-audit.png"
        imageAlt="Zexa Media founder reviewing marketing strategy and growth audit"
        metricLabel="Built for growth"
        metricValue="Strategy, tracking, creative, and follow-up"
      />

      <Section eyebrow="Our story" title="Why we started Zexa Media.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <p className="text-lg leading-9 text-white/68">
              We saw too many local businesses in Vizag spending money on marketing that
              delivered nothing: generic posts, disconnected ads, and agencies that disappeared
              after onboarding. We started Zexa Media to change that.
            </p>
            <p className="mt-5 text-lg leading-9 text-white/68">
              Our approach is different from the start: we treat every client&apos;s budget carefully,
              track every rupee, and build systems that keep delivering even when we are not in
              the room. We are not a content farm. We are a growth partner.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">A message from our founder</h2>
            <p className="mt-5 leading-8 text-white/62">
              Great marketing should not be reserved for companies with massive budgets. A local
              gym, clinic, jewellery shop, coaching centre or service business deserves the same
              quality of strategy that larger brands get.
            </p>
            <p className="mt-5 leading-8 text-white/62">
              Zexa Media was built to give Vizag businesses that edge: sharper campaigns,
              stronger follow-up and clearer reporting.
            </p>
            <p className="mt-6 font-semibold text-[#8EEA4D]">Teja, Founder, Zexa Media</p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Mission and vision" title="Results, transparency, and long-term partnerships.">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 leading-8 text-white/62">
              To help businesses in Visakhapatnam and across India grow faster through
              data-driven marketing, intelligent automation, and brand-first thinking.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 leading-8 text-white/62">
              To be the most trusted growth marketing agency in Andhra Pradesh, known for
              results, transparency, and long-term partnerships.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Founder expertise" title="What clients should expect from Zexa Media.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {founderExpertise.map(([title, copy, Icon]) => (
            <GlassCard key={title as string}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-xl font-semibold">{title as string}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy as string}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we believe" title="The operating principles behind Zexa Media.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local focus" title="Why Visakhapatnam businesses need a different marketing approach.">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Local intent changes how campaigns should be built.</h2>
            <p className="mt-4 leading-8 text-white/62">
              A clinic in Dwaraka Nagar, a fitness brand in Rushikonda, a retail business in
              MVP Colony and an education institute near the city centre do not need the same
              campaign structure. Local targeting, language, offer clarity and response speed
              all change by business type.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Growth needs more than one channel.</h2>
            <p className="mt-4 leading-8 text-white/62">
              Google Ads can capture demand, Meta Ads can create demand, social media can build
              trust, branding can improve recall, and automation can protect every lead. Zexa
              Media connects those pieces into one growth system.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="About Zexa Media.">
        <div className="grid gap-5 lg:grid-cols-3">
          {aboutFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Work with a team focused on your growth system.">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We start with your business goal, not a generic service menu.",
              "We identify the bottleneck before recommending ads, content, branding or automation.",
              "We keep the next step practical, measurable and tied to your budget.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Start the Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
