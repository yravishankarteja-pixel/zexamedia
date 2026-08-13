import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import type { IndustryPageConfig } from "@/lib/industry-pages";
import { areaServed, businessName } from "@/lib/business-info";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export function IndustryPage({ config }: Readonly<{ config: IndustryPageConfig }>) {
  const pageUrl = absoluteUrl(`/industries/${config.slug}`);
  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}#service`,
      name: `Digital Marketing for ${config.industry} in Visakhapatnam`, url: pageUrl,
      description: config.metaDescription, serviceType: "Digital Marketing",
      provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness`, name: businessName, url: siteUrl },
      areaServed,
      audience: { "@type": "Audience", audienceType: config.industry },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: config.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries") },
        { "@type": "ListItem", position: 3, name: config.industry, item: pageUrl },
      ],
    },
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />)}
      <PageHero eyebrow={config.eyebrow} title={config.title} description={config.description} imageSrc={config.imageSrc} imageAlt={config.imageAlt} metricLabel="Growth focus" metricValue="Qualified enquiries, clearer attribution" />

      <Section eyebrow="Who this is for" title="Built around the way your market discovers and chooses.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {config.audiences.map((item) => <GlassCard key={item}><CheckCircle2 className="mb-6 size-7 text-[#8EEA4D]" /><h2 className="text-xl font-semibold">{item}</h2></GlassCard>)}
        </div>
      </Section>

      <Section eyebrow="Growth problems" title="Fix the journey, not just the ad.">
        <div className="grid gap-4 md:grid-cols-2">
          {config.challenges.map(([title, copy]) => <GlassCard key={title}><Target className="mb-6 size-7 text-[#8EEA4D]" /><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-8 text-white/62">{copy}</p></GlassCard>)}
        </div>
      </Section>

      <Section eyebrow="Channel strategy" title="Each channel has a specific job.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {config.channels.map(([title, copy]) => <GlassCard key={title}><h2 className="text-xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-white/62">{copy}</p></GlassCard>)}
        </div>
      </Section>

      <Section eyebrow="Process" title="From market context to measurable improvement.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {config.process.map(([step, title, copy]) => <GlassCard key={step}><p className="text-sm font-black tracking-[0.2em] text-[#8EEA4D]">{step}</p><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-white/62">{copy}</p></GlassCard>)}
        </div>
      </Section>

      <Section eyebrow="Measurement and safeguards" title="Evidence first. Responsible claims always.">
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard><h2 className="text-2xl font-semibold">What to measure</h2><div className="mt-6"><CheckList items={config.measurements} /></div></GlassCard>
          <GlassCard><ShieldCheck className="mb-6 size-7 text-[#8EEA4D]" /><h2 className="text-2xl font-semibold">Campaign safeguards</h2><div className="mt-6"><CheckList items={config.safeguards} /></div></GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title={`Questions about marketing for ${config.industry.toLowerCase()}.`}>
        <div className="grid gap-4 md:grid-cols-2">{config.faqs.map((faq) => <GlassCard key={faq.question}><h2 className="text-xl font-semibold">{faq.question}</h2><p className="mt-4 leading-8 text-white/62">{faq.answer}</p></GlassCard>)}</div>
      </Section>

      <Section eyebrow="Connected services" title="Build the right supporting system.">
        <div className="grid gap-4 md:grid-cols-3">{config.relatedServices.map(([label, href]) => <Link key={href} href={href} className="group"><GlassCard><h2 className="text-xl font-semibold group-hover:text-[#8EEA4D]">{label}</h2><span className="mt-5 inline-flex items-center text-sm font-bold text-[#8EEA4D]">View service <ArrowRight className="ml-2 size-4" /></span></GlassCard></Link>)}</div>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/free-audit" className="inline-flex min-h-14 items-center rounded-full bg-[#8EEA4D] px-7 font-bold text-[#071006]">Book a free marketing audit</Link><Link href="/industries" className="inline-flex min-h-14 items-center rounded-full border border-white/14 px-7 font-semibold">Explore all industries</Link></div>
      </Section>
    </PageShell>
  );
}
