import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Bot, Camera, Gem, LineChart, Sparkles } from "lucide-react";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Marketing Services | Zexa Media Vizag",
  description:
    "Explore Zexa Media's growth marketing services: paid ads, social media, branding, automation, content production, SEO and analytics.",
  alternates: { canonical: absoluteUrl("/services") },
};

const services = [
  {
    icon: LineChart,
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    copy: "Google Ads, Meta Ads, audience targeting, conversion tracking, and weekly optimisation.",
  },
  {
    icon: Sparkles,
    title: "Social Media Management",
    href: "/services/social-media-management",
    copy: "Content calendars, Reels, static posts, captions, scheduling, and community management.",
  },
  {
    icon: Gem,
    title: "Branding & Positioning",
    href: "/services/branding",
    copy: "Logo, brand kit, voice, visual identity, and strategic market positioning.",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    href: "/services/automation",
    copy: "WhatsApp flows, lead notifications, CRM integration, follow-up sequences, and reporting automation.",
  },
  {
    icon: Camera,
    title: "Content Production",
    href: "/contact",
    copy: "Photoshoot direction and Reel production for ads, social media, and brand credibility.",
  },
  {
    icon: BarChart3,
    title: "SEO & AEO",
    href: "/contact",
    copy: "On-page SEO, schema, answer-ready content, and technical structure for Google and AI search.",
  },
];

const industries = [
  "Healthcare & Wellness",
  "Education & Coaching",
  "Finance & Gold",
  "Retail & Local Services",
  "Real Estate",
  "Professional Services",
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Everything your business needs to grow, under one roof."
        description="From the first ad impression to the final sale, Zexa Media manages every layer of your growth marketing. One agency. Full stack."
        imageSrc="/images/zexa-content-shoot.png"
        imageAlt="Zexa Media team creating content for a local business campaign"
        metricLabel="Campaign assets"
        metricValue="Ads, content, tracking, and follow-up"
      />
      <Section eyebrow="Services grid" title="Built as one connected growth system.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <GlassCard>
                <service.icon className="mb-8 size-7 text-[#8EEA4D]" />
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-7 text-white/58">{service.copy}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="Who we work with" title="Industries we serve across Vizag and Andhra Pradesh.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <GlassCard key={industry}>
              <h2 className="text-xl font-semibold">{industry}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
