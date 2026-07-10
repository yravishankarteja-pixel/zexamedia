import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import {
  contactEmail,
  GlassCard,
  PageHero,
  PageShell,
  phoneHref,
  Section,
  socialLinks,
  whatsappUrl,
} from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Contact Zexa Media | Book a Free Strategy Call",
  description:
    "Ready to grow? Contact Zexa Media for a free 30-minute marketing audit. Based in Visakhapatnam and serving businesses across India.",
  alternates: { canonical: "https://zexamedia.in/contact" },
};

export default function ContactPage() {
  const inputClass =
    "min-h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35";
  const selectClass = `${inputClass} appearance-none pr-10`;

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
            <form className="grid gap-4">
              {["Your Name", "Business Name", "Phone Number / WhatsApp", "Email Address"].map(
                (label) => (
                  <label key={label} className="grid gap-2 text-sm font-semibold text-white/70">
                    {label}
                    <input className={inputClass} />
                  </label>
                ),
              )}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="relative grid gap-2 text-sm font-semibold text-white/70">
                  What are you looking for?
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Google Ads / Meta Ads</option>
                    <option>Social media management</option>
                    <option>Local SEO / Google Business Profile</option>
                    <option>Landing page + tracking</option>
                    <option>Marketing automation</option>
                    <option>Full growth partnership</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-4 right-4 size-4 text-white/45" />
                </label>
                <label className="relative grid gap-2 text-sm font-semibold text-white/70">
                  Monthly Marketing Budget
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select budget range
                    </option>
                    <option>Under ₹20k</option>
                    <option>₹20k-₹50k</option>
                    <option>₹50k-₹1L</option>
                    <option>Above ₹1L</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-4 right-4 size-4 text-white/45" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-white/70">
                Tell us about your business
                <textarea className="min-h-32 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35" />
              </label>
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] font-bold text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5"
                href={phoneHref}
              >
                Book My Free Audit
              </a>
            </form>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <div className="mt-6 grid gap-4 leading-8 text-white/62">
              <p>Email: {contactEmail}</p>
              <p>
                WhatsApp:{" "}
                <a className="text-[#8EEA4D]" href={whatsappUrl} target="_blank">
                  +91 95152 56630
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
