import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { phoneHref } from "@/components/site-footer";
export { contactEmail, phoneHref, phoneNumber, socialLinks, whatsappUrl } from "@/components/site-footer";

export function PageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="site-page min-h-screen overflow-hidden bg-[#050806] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(128deg,rgba(142,234,77,0.06),transparent_34%),linear-gradient(225deg,rgba(255,255,255,0.045),transparent_30%),linear-gradient(180deg,#050806_0%,#081008_42%,#020302_100%)]" />
      <div className="premium-orb premium-orb-one" />
      <div className="premium-orb premium-orb-two" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  metricLabel = "Growth system",
  metricValue = "Live strategy",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  metricLabel?: string;
  metricValue?: string;
}>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">{description}</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href={phoneHref}
            className="magnetic-cta inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-1"
          >
            Call Zexa
            <ArrowRight className="ml-2 size-5" />
          </Link>
          <Link
            href="/contact"
            className="premium-secondary-cta inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 backdrop-blur-xl transition hover:border-[#8EEA4D]/60 hover:bg-[#8EEA4D]/10"
          >
            Talk to Zexa
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["30-minute audit", "Clear next step", "Call or WhatsApp"].map((item) => (
            <div
              key={item}
              className="flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 text-sm font-semibold text-white/62"
            >
              <span className="size-2 rounded-full bg-[#8EEA4D]" />
              {item}
            </div>
          ))}
        </div>
      </div>
      {imageSrc && (
        <div className="image-depth-card relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.38)] lg:min-h-[480px]">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 1024px) 92vw, 620px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0.05),rgba(5,8,6,0.88)),radial-gradient(circle_at_75%_20%,rgba(142,234,77,0.2),transparent_32%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8EEA4D]">
              {metricLabel}
            </p>
            <p className="mt-3 text-2xl font-semibold">{metricValue}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export function GlassCard({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="lift-card rounded-[1.75rem] border border-white/10 bg-white/[0.052] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-[#8EEA4D]/40 hover:bg-[#8EEA4D]/8">
      {children}
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  children,
}: Readonly<{ eyebrow: string; title: string; children: ReactNode }>) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-18">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
          {eyebrow}
        </p>
        <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function CheckList({ items }: Readonly<{ items: string[] }>) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3 text-white/68">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8EEA4D]" />
          <span className="leading-7">{item}</span>
        </div>
      ))}
    </div>
  );
}
