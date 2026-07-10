import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { GlassCard, PageHero, PageShell, phoneHref, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Free Marketing Audit | Zexa Media Vizag",
  description:
    "Get a free marketing audit from Zexa Media. We review your ads, social media and website to show where you're losing money.",
  alternates: { canonical: "https://zexamedia.in/free-audit" },
};

export default function FreeAuditPage() {
  const inputClass =
    "min-h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35";

  return (
    <PageShell>
      <PageHero
        eyebrow="Free marketing audit"
        title="Find out exactly where your marketing is leaking money."
        description="In 30 minutes, we audit your ads, social media, and website, then give you a clear picture of what to fix first."
      />
      <Section eyebrow="What the audit covers" title="A sharper view of your growth system.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Paid Ads Review",
            "Social Media Audit",
            "Website & Landing Page",
            "SEO Snapshot",
            "Competitor Snapshot",
            "Growth Roadmap",
          ].map((item) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section eyebrow="Book audit" title="Share a few details before the call.">
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
                  <select className={`${inputClass} appearance-none pr-10`} defaultValue="">
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
                  <select className={`${inputClass} appearance-none pr-10`} defaultValue="">
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
                href={phoneHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] font-bold text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5"
              >
                Book My Free Audit
              </a>
            </form>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <div className="mt-6 grid gap-4 text-white/62">
              <p>1. We review your business, current marketing, and lead flow.</p>
              <p>2. We identify the biggest growth leak and the fastest practical fix.</p>
              <p>3. You get a clear next-action roadmap before spending more budget.</p>
            </div>
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
