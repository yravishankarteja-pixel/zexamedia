import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AmbientGeometry } from "@/components/ambient-geometry";
import { phoneHref } from "@/components/site-footer";

export {
  contactEmail,
  fullAddress,
  mapUrl,
  phoneHref,
  phoneNumber,
  secondaryPhoneHref,
  secondaryPhoneNumber,
  serviceAreaLabel,
  socialLinks,
  whatsappUrl,
} from "@/components/site-footer";

export function Container({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-4 min-[480px]:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.16em] text-neutral-300 ${className}`}
    >
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Readonly<{
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  className?: string;
}>) {
  const styles = {
    primary:
      "magnetic-cta rounded-lg bg-[#61E003] px-6 text-black hover:bg-[#76ef1e]",
    secondary:
      "rounded-lg border border-white/40 px-6 text-white hover:border-[#61E003]/70",
    link: "px-0 text-white hover:text-[#61E003]",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050806] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function IconTile({ icon: Icon }: Readonly<{ icon: LucideIcon }>) {
  return (
    <span className="grid size-10 place-items-center rounded-[10px] bg-[#61E003]/10 text-[#61E003]">
      <Icon className="size-5" strokeWidth={1.9} />
    </span>
  );
}

export function Card({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`lift-card flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-[transform,border-color,box-shadow] duration-300 hover:border-[#61E003]/40 min-[480px]:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="site-page min-h-screen overflow-hidden bg-[#050806] pb-16 text-white md:pb-0">
      <div className="ambient-surface pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_78%_12%,rgba(97,224,3,0.09),transparent_25%),linear-gradient(128deg,rgba(97,224,3,0.055),transparent_34%),linear-gradient(180deg,#050806_0%,#081008_48%,#020302_100%)]" />
      <div className="ambient-grid-layer pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(142,234,77,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(142,234,77,.65)_1px,transparent_1px)] [background-size:96px_96px]" />
      <AmbientGeometry />
      <div className="relative z-10">{children}</div>
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
  primaryCta = "Call Zexa",
  primaryHref = phoneHref,
  secondaryCta = "Talk to Zexa",
  secondaryHref = "/contact",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  metricLabel?: string;
  metricValue?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}>) {
  const optimizedImageSrc = imageSrc?.replace(/\.png$/, ".webp");
  return (
    <section className="py-14 md:py-[72px] lg:py-24">
      <Container
        className={`grid gap-10 lg:items-center ${imageSrc ? "lg:grid-cols-[55fr_45fr]" : "grid-cols-1"}`}
      >
        <div>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h1 className="max-w-5xl text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.035em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[70ch] text-lg leading-[1.6] text-white/75">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={primaryHref}>
              {primaryCta}
              <ArrowRight className="size-4" />
            </Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryCta}
            </Button>
          </div>
          <div className="mt-6 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
            {["30-minute audit", "Clear next step", "Call or WhatsApp"].map(
              (item) => (
                <div
                  key={item}
                  className="flex min-h-12 items-center gap-2 border-white/10 px-4 text-sm font-semibold text-white/70 not-last:border-b sm:not-last:border-b-0 sm:not-last:border-r"
                >
                  <span className="size-2 rounded-full bg-[#61E003]" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
        {optimizedImageSrc && (
          <div className="hero-visual-float image-depth-card relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <Image
              src={optimizedImageSrc}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 1023px) calc(100vw - 32px), 520px"
              className="object-cover"
              priority
              fetchPriority="high"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#071006] p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[80%]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#61E003]">
                {metricLabel}
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug">
                {metricValue}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export function GlassCard({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return <Card className={className}>{children}</Card>;
}

export function Section({
  eyebrow,
  title,
  children,
}: Readonly<{ eyebrow: string; title: string; children: ReactNode }>) {
  return (
    <section className="py-14 md:py-[72px] lg:py-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.2] tracking-[-0.03em]">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  );
}

export function CheckList({ items }: Readonly<{ items: string[] }>) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-2 text-sm leading-[1.65] text-white/75 sm:text-base"
        >
          <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#61E003]" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
export function CtaBand({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`rounded-2xl border border-[#61E003]/30 bg-[linear-gradient(135deg,rgba(97,224,3,.12),rgba(10,18,11,.95))] p-8 text-center md:p-12 lg:p-16 ${className}`}
    >
      {children}
    </div>
  );
}
export function FaqList({
  items,
}: Readonly<{ items: Array<{ question: string; answer: string }> }>) {
  return (
    <div className="mx-auto grid max-w-[800px] gap-3">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
        >
          <h3 className="text-lg font-semibold leading-[1.3]">
            {item.question}
          </h3>
          <p className="mt-3 leading-[1.65] text-white/75">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
export function StepList({
  items,
}: Readonly<{
  items: Array<{ number: string; title: string; copy: string }>;
}>) {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.number}
          className="relative border-l border-white/10 pl-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-7"
        >
          <span className="grid size-10 place-items-center rounded-full border border-[#61E003] text-sm font-bold text-[#61E003]">
            {item.number}
          </span>
          <h3 className="mt-4 text-xl font-semibold leading-[1.3]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-[1.65] text-white/70">
            {item.copy}
          </p>
        </div>
      ))}
    </div>
  );
}
export function DataTable({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-8 after:bg-gradient-to-l after:from-[#050806] after:to-transparent">
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
