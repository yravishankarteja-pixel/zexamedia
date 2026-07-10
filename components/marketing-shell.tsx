import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SiteHeaderClient } from "@/components/site-header-client";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const whatsappUrl =
  "https://wa.me/919515256630?text=Hi%20Zexa%20Media%2C%20I%20want%20to%20book%20a%20free%20marketing%20audit.";

export const contactEmail = "contactzexamedia@gmail.com";
export const phoneNumber = "+91 95152 56630";
export const phoneHref = "tel:+919515256630";
export const socialLinks = [
  {
    label: "Instagram",
    handle: "@zexamedia_official",
    href: "https://www.instagram.com/zexamedia_official/",
    short: "IG",
  },
  {
    label: "Facebook",
    handle: "@zexamedia_official",
    href: "https://www.facebook.com/zexamedia_official",
    short: "FB",
  },
  {
    label: "LinkedIn",
    handle: "@zexamedia_official",
    href: "https://www.linkedin.com/company/zexamedia-official/",
    short: "IN",
  },
];

function BrandMark() {
  return (
    <span className="relative block h-16 w-56 overflow-hidden">
      <Image
        src="/zexa-media-logo-transparent.png"
        alt="Zexa Media"
        fill
        sizes="224px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050806]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Zexa Media home">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-white/66 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={phoneHref}
          className="magnetic-cta hidden rounded-full bg-[#8EEA4D] px-5 py-3 text-sm font-bold text-[#071006] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 sm:inline-flex"
        >
          Book Free Audit
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030604] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.65fr_0.95fr] lg:p-10">
        <div>
          <Link href="/" className="inline-flex flex-col gap-3" aria-label="Zexa Media home">
            <BrandMark />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
              Rank higher. Convert faster. Grow stronger.
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
            Zexa Media is a growth marketing agency in Visakhapatnam helping businesses grow with
            ads, content, landing pages, automation, and analytics.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
            >
              Call Zexa
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-5 text-sm font-bold text-white transition hover:border-[#8EEA4D]/50 hover:text-[#8EEA4D]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <FooterColumn
          title="Explore"
          links={[
            ["Services", "/services"],
            ["Growth System", "/growth-system"],
            ["Packages", "/packages"],
            ["Case Studies", "/case-studies"],
            ["Blog", "/blog"],
            ["Free Audit", "/free-audit"],
          ]}
        />

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
            <a className="transition hover:text-[#8EEA4D]" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <a className="transition hover:text-[#8EEA4D]" href={whatsappUrl} target="_blank">
              WhatsApp: +91 95152 56630
            </a>
            <span>Visakhapatnam, Andhra Pradesh</span>
            <span>Serving Vizag, Hyderabad, and clients across India.</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Zexa Media on ${item.label}`}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-white/72 transition hover:border-[#8EEA4D]/50 hover:text-[#8EEA4D]"
              >
                <span className="text-xs font-black tracking-[0.08em]">{item.short}</span>
              </a>
            ))}
          </div>
        </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 bg-black/20 px-6 py-5 text-sm text-white/48 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <span>© 2026 Zexa Media. All rights reserved.</span>
        <span>zexamedia.in</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: Readonly<{ title: string; links: Array<[string, string]> }>) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm">
        {links.map(([label, href]) => (
          <Link key={href} className="text-white/70 transition hover:text-[#8EEA4D]" href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050806] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(128deg,rgba(142,234,77,0.06),transparent_34%),linear-gradient(225deg,rgba(255,255,255,0.045),transparent_30%),linear-gradient(180deg,#050806_0%,#081008_42%,#020302_100%)]" />
      <div className="premium-orb premium-orb-one" />
      <div className="premium-orb premium-orb-two" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="relative z-10">
        <SiteHeaderClient />
        {children}
        <SiteFooter />
        <Link
          href={phoneHref}
          className="magnetic-cta fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#8EEA4D]/30 bg-[#071006]/90 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition hover:border-[#8EEA4D] hover:text-[#8EEA4D] sm:inline-flex"
        >
          Call for Free Audit
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#8EEA4D] px-4 text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 sm:px-5"
          aria-label="Chat with Zexa Media on WhatsApp"
        >
          <MessageCircle className="size-6" />
          <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
        </a>
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
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
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
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
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
