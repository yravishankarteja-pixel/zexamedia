import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { industryPages } from "@/lib/industry-pages";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Industry Marketing Expertise in Vizag | Zexa Media",
  description: "Explore responsible, measurable digital marketing strategies for doctors, clinics, spas, salons and real estate businesses in Visakhapatnam.",
  alternates: { canonical: absoluteUrl("/industries") },
};

export default function IndustriesPage() {
  return <PageShell>
    <PageHero eyebrow="Industry marketing in Visakhapatnam" title="Marketing systems shaped around how your customers choose." description="Different industries have different trust, compliance, creative and lead-handling needs. Explore practical approaches built around those realities." imageSrc="/images/zexa-hero-strategy.png" imageAlt="Zexa Media planning a local growth marketing strategy" metricLabel="Approach" metricValue="Industry context before channel tactics" />
    <Section eyebrow="Industry paths" title="Choose the market closest to your business.">
      <div className="grid gap-4 md:grid-cols-2">{industryPages.map((page) => <Link key={page.slug} href={`/industries/${page.slug}`} className="group"><GlassCard><p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EEA4D]">{page.eyebrow}</p><h2 className="mt-5 text-2xl font-semibold group-hover:text-[#8EEA4D]">{page.industry}</h2><p className="mt-4 leading-8 text-white/62">{page.description}</p><span className="mt-6 inline-flex items-center text-sm font-bold text-[#8EEA4D]">Explore strategy <ArrowRight className="ml-2 size-4" /></span></GlassCard></Link>)}</div>
    </Section>
  </PageShell>;
}
