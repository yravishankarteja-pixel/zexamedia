import type { Metadata } from "next";
import { AuditForm } from "@/components/audit-form";
import {
  contactEmail,
  GlassCard,
  PageHero,
  PageShell,
  phoneHref,
  phoneNumber,
  Section,
  socialLinks,
  whatsappUrl,
} from "@/components/marketing-shell";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Contact Zexa Media | Book a Free Strategy Call",
  description:
    "Ready to grow? Contact Zexa Media for a free 30-minute marketing audit. Based in Visakhapatnam and serving businesses across India.",
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about growing your business."
        description="Whether you have a specific goal or just want to understand your options, book a free 30-minute call and let us map the next move."
        imageSrc="/images/zexa-founder-audit.png"
        imageAlt="Zexa Media strategist discussing a free growth audit with a business founder"
        metricLabel="Free audit"
        metricValue="Call Zexa"
      />
      <Section eyebrow="Start here" title="Tell us what growth looks like for you.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <AuditForm />
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <div className="mt-6 grid gap-4 leading-8 text-white/62">
              <p>
                Email:{" "}
                <a className="text-[#8EEA4D]" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="text-[#8EEA4D]" href={phoneHref}>
                  {phoneNumber}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  className="text-[#8EEA4D]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phoneNumber}
                </a>
              </p>
              <p>Location: Visakhapatnam, Andhra Pradesh, India</p>
              <p>Office hours: Monday to Saturday, 9:00 AM - 7:00 PM IST</p>
              <p>100% free. No obligation. No sales pressure.</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                Follow Zexa Media
              </p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-white/70 transition hover:border-[#8EEA4D]/45 hover:text-[#8EEA4D]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black">
                        {item.short}
                      </span>
                      {item.label}
                    </span>
                    <span className="text-sm">{item.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
