"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Megaphone,
  MessageCircle,
  Search,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

const contactEmail = "contactzexamedia@gmail.com";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/zexamedia_official/", short: "IG" },
  { label: "Facebook", href: "https://www.facebook.com/zexamedia_official", short: "FB" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zexamedia-official/", short: "IN" },
];

const stats: Array<{
  value: string;
  label: string;
}> = [
  {
    value: "50+",
    label: "Clients Served",
  },
  {
    value: "\u20B92Cr+",
    label: "Ad Spend Managed",
  },
  {
    value: "3x–8x",
    label: "ROAS Signal",
  },
  {
    value: "4",
    label: "Cities Across AP",
  },
];

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    copy: "Turn ad spend into measurable leads, calls, and revenue.",
  },
  {
    icon: Search,
    title: "Google Ads",
    href: "/services/performance-marketing",
    copy: "Capture people already searching for your service.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    href: "/services/performance-marketing",
    copy: "Get in front of people before they know they need you.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    href: "/services/social-media-management",
    copy: "Build daily trust with content that keeps your brand visible.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    href: "/services/automation",
    copy: "Never lose a lead to slow follow-up.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    href: "/services",
    copy: "Know exactly what is working, wasting, and ready to scale.",
  },
];

const caseSnapshots = [
  {
    clientName: "Moon Wellness Spa",
    industry: "Wellness & Spa, Vizag",
    headlineResult: "2x walk-ins in 60 days",
    supportingMetric: "Google Ads + local campaign optimization",
  },
  {
    clientName: "Local Service Business",
    industry: "Service Business, Vizag",
    headlineResult: "CPL reduced by 40%",
    supportingMetric: "Meta Ads + WhatsApp lead tracking",
  },
];

const proofCards = [
  {
    metric: "2x",
    title: "Walk-ins doubled",
    copy: "Local campaign and offer clarity improved appointment flow.",
  },
  {
    metric: "60%",
    title: "CPL down 60%",
    copy: "Weak sources were cut and winning creatives were scaled.",
  },
  {
    metric: "60s",
    title: "60-second lead response",
    copy: "WhatsApp-first follow-up helped owners act faster.",
  },
];

const testimonial = {
  text: "Zexa Media made our lead flow clearer within the first month. We finally understood where enquiries were coming from and what to scale.",
  clientName: "Local Business Client",
  initials: "ZM",
};

const packages = [
  {
    name: "Basic Ads Starter",
    price: "\u20B915,000",
    whoFor: "For businesses testing one paid ads channel for the first time.",
    features: ["Google Ads or Meta Ads", "10 static creatives", "Basic lead tracking"],
  },
  {
    name: "Growth Ads Package",
    price: "\u20B925,000",
    whoFor: "For businesses ready to run Google and Meta together with stronger creative support.",
    features: ["Google + Meta Ads", "1 video shoot", "Monthly report"],
  },
  {
    name: "Local Growth Package",
    price: "\u20B930,000",
    whoFor:
      "For local businesses that need ads, local SEO, landing page support, and regular video content.",
    features: ["Local SEO support", "Landing page support", "2 video shoots"],
  },
  {
    name: "Premium Growth Partner",
    price: "\u20B950,000",
    whoFor: "For businesses that want full-funnel growth with tracking, automation, content, and strategy.",
    features: ["GA4, GTM, Meta Pixel", "Automation workflow", "Strategy review"],
    recommended: true,
  },
];

const faqs = [
  {
    question: "How much does Google Ads cost for a small business in Vizag?",
    answer:
      "Most small businesses can start with a monthly ad budget based on their industry, competition, and location. Zexa Media helps you choose a practical starting budget and tracks every lead source clearly.",
  },
  {
    question: "Do you work with wellness, spa, gym, clinic, or local service clients?",
    answer:
      "Yes. Zexa Media works with local businesses such as wellness brands, clinics, gyms, education institutes, and service businesses that need calls, enquiries, walk-ins, and better lead follow-up.",
  },
  {
    question: "How long until I see results from paid ads?",
    answer:
      "Google Ads can start generating early leads within days after launch, while Meta Ads usually need testing and optimization. Most campaigns need 2–4 weeks to identify stronger audiences, creatives, and offers.",
  },
  {
    question: "What makes Zexa Media different from other agencies?",
    answer:
      "Zexa Media focuses on growth systems, not just posting content or running ads. We combine strategy, tracking, creatives, paid ads, follow-up systems, and reporting so every rupee is connected to business outcomes.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zexa Media",
  url: "https://zexamedia.in",
  email: contactEmail,
  logo: "https://zexamedia.in/zexa-media-logo-transparent.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-95152-56630",
    contactType: "customer service",
  },
  sameAs: socialLinks.map((item) => item.href),
  description:
    "Zexa Media is a growth marketing agency in Visakhapatnam helping businesses grow with Google Ads, Meta Ads, social media, branding, and marketing automation.",
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zexa Media",
  url: "https://zexamedia.in",
  email: contactEmail,
  telephone: "+91-95152-56630",
  image: "https://zexamedia.in/zexa-media-logo-transparent.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  priceRange: "\u20B915,000 - \u20B950,000",
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zexa Media homepage package preview",
  itemListElement: packages.map((item, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: item.name,
    price: item.price.replace(/\D/g, ""),
    priceCurrency: "INR",
    url: "https://zexamedia.in/packages",
    seller: {
      "@type": "Organization",
      name: "Zexa Media",
    },
  })),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: Readonly<{ children: React.ReactNode; delay?: number; className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: Readonly<{ eyebrow: string; title: string; copy?: string }>) {
  return (
    <Reveal>
      <div className="mx-auto mb-9 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {copy && <p className="mt-5 text-base leading-7 text-white/58 sm:text-lg">{copy}</p>}
      </div>
    </Reveal>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const heroParallax = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 42]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return (
    <main className="site-page min-h-screen overflow-hidden bg-[#050806] text-white">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-[#8EEA4D]"
        style={{ scaleX: progressScale }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      <motion.div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(128deg,rgba(142,234,77,0.055),transparent_34%),linear-gradient(225deg,rgba(255,255,255,0.045),transparent_30%),linear-gradient(180deg,#050806_0%,#081008_48%,#020302_100%)]"
        style={{ y: heroParallax }}
      />
      <div className="premium-orb premium-orb-one" />
      <div className="floating-geo geo-cube geo-cube-a" />
      <div className="floating-geo geo-ring geo-ring-a" />
      <div className="floating-geo geo-prism geo-prism-a" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:112px_112px]" />

      <div className="relative z-10">
        <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-16 sm:px-8 sm:pt-18 lg:grid-cols-[1.02fr_0.98fr] lg:pb-14 lg:pt-20">
          <div className="pointer-events-none absolute left-1/2 top-6 hidden h-28 w-28 -translate-x-1/2 rounded-[2rem] border border-[#8EEA4D]/18 bg-[#8EEA4D]/10 blur-[0.2px] lg:block geo-float-local" />
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-white/72">
                <BadgeCheck className="size-4 text-[#8EEA4D]" />
                Performance marketing agency in Visakhapatnam
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Your Business Deserves to{" "}
                <span className="text-[#8EEA4D]">Grow Faster.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
                Zexa Media runs high-performance Google Ads, Meta Ads, social media campaigns,
                and marketing automation engineered to deliver real ROI, not just reach.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/free-audit"
                  className="magnetic-cta group inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#8EEA4D] focus:ring-offset-2 focus:ring-offset-[#050806]"
                >
                  Call for Free Audit
                  <ArrowRight className="ml-2 size-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="/packages"
                  className="premium-secondary-cta inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/50 hover:bg-white/[0.09]"
                >
                  See Our Packages
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="image-depth-card hero-visual-float relative aspect-[0.92] overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0A100B] shadow-[0_26px_90px_rgba(0,0,0,0.42)]">
                <Image
                  src="/images/zexa-hero-strategy.png"
                  alt="Zexa Media strategist and business owner reviewing digital marketing analytics"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0.03),rgba(5,8,6,0.58)),linear-gradient(90deg,rgba(5,8,6,0.12),transparent)]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/12 bg-black/58 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="font-semibold text-white">Campaign Snapshot</p>
                    <span className="rounded-full bg-[#8EEA4D]/14 px-3 py-1 text-xs font-bold text-[#CFFFAB]">
                      LIVE
                    </span>
                  </div>
                  {[
                    ["Google Ads Leads", "184", "72%"],
                    ["WhatsApp Response", "60s", "86%"],
                    ["ROAS Signal", "3x–8x", "78%"],
                  ].map(([label, value, width]) => (
                    <div key={label} className="mb-4 last:mb-0">
                      <div className="mb-2 flex justify-between gap-4 text-sm">
                        <span className="text-white/62">{label}</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                      <span className="block h-2 overflow-hidden rounded-full bg-white/12">
                        <span
                          className="block h-full rounded-full bg-[#8EEA4D]"
                          style={{ width }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#0A100B]">
              <div className="trust-marquee border-b border-white/10 bg-white/[0.035] py-4">
                <div className="trust-marquee-track flex w-max items-center gap-12 whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.24em] text-white/42">
                  {[
                    "Google Ads",
                    "Meta Ads",
                    "WhatsApp Leads",
                    "Landing Pages",
                    "GA4 Tracking",
                    "Automation",
                    "Local SEO",
                    "Campaign Reports",
                    "Google Ads",
                    "Meta Ads",
                    "WhatsApp Leads",
                    "Landing Pages",
                    "GA4 Tracking",
                    "Automation",
                    "Local SEO",
                    "Campaign Reports",
                  ].map((item, index) => (
                    <span key={`${item}-${index}`} className="inline-flex items-center gap-4">
                      <span className="size-1.5 rounded-full bg-[#8EEA4D]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    aria-label={`${stat.value} ${stat.label}`}
                    className="bg-[#071006]/72 px-6 py-7"
                  >
                    <p className="min-h-12 text-4xl font-semibold text-white sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/38">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {caseSnapshots.map((item, index) => (
                <Reveal key={item.clientName} delay={index * 0.05}>
                  <article className="root-style-card h-full rounded-[1.35rem] border border-white/10 bg-[#0A100B]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/30">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8EEA4D]">
                      Case snapshot
                    </p>
                    <h2 className="mt-5 text-2xl font-semibold text-white">{item.clientName}</h2>
                    <p className="mt-2 text-sm text-white/46">{item.industry}</p>
                    <p className="mt-7 text-3xl font-semibold leading-tight text-white">
                      {item.headlineResult}
                    </p>
                    <p className="mt-4 leading-7 text-white/56">{item.supportingMetric}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.08}>
              <figure className="relative h-full rounded-[1.35rem] border border-white/10 bg-[#0A100B]/90 p-6">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#8EEA4D]/20 bg-[#8EEA4D]/8 px-4 py-2 text-xs font-bold text-[#CFFFAB]">
                  <MessageCircle className="size-4" />
                  WhatsApp feedback
                </div>
                <blockquote className="rounded-[1.25rem] rounded-tl-sm border border-white/10 bg-white/[0.055] p-5 text-lg leading-8 text-white/78">
                  “{testimonial.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-[#8EEA4D] text-sm font-black text-[#071006]">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{testimonial.clientName}</span>
                    <span className="block text-sm text-white/46">Local business owner</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Six ways we turn attention into enquiries."
            copy="Short, focused execution across the channels that matter most."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <a
                  href={service.href}
                  className="root-style-card group flex h-full min-h-52 flex-col rounded-[1.35rem] border border-white/10 bg-[#0A100B]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/35 hover:bg-white/[0.055]"
                >
                  <div className="mb-7 grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition group-hover:border-[#8EEA4D]/35 group-hover:text-[#8EEA4D]">
                    <service.icon className="size-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/56">{service.copy}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-white/70 transition group-hover:text-[#8EEA4D]">
                    View service
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <SectionHeading
            eyebrow="Proof"
            title="Fast signals business owners care about."
            copy="More proof and context lives on the case studies page."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {proofCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <a
                  href="/case-studies"
                  className="root-style-card group block h-full rounded-[1.35rem] border border-white/10 bg-[#0A100B]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/35"
                >
                  <p className="text-5xl font-semibold text-[#8EEA4D]">{item.metric}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/56">{item.copy}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <SectionHeading
            eyebrow="Packages"
            title="Simple monthly growth plans."
            copy="See full inclusions, exclusions, and comparison on the packages page."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {packages.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04}>
                <article
                  className={`root-style-card flex h-full flex-col rounded-[1.35rem] border p-6 ${
                    item.recommended
                      ? "border-[#8EEA4D]/42 bg-[#8EEA4D]/9"
                      : "border-white/10 bg-[#0A100B]/90"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                      Monthly
                    </span>
                    {item.recommended && (
                      <span className="rounded-full bg-[#8EEA4D] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#071006]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[#CFFFAB]">{item.price}/month</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-white/52">{item.whoFor}</p>
                  <div className="mt-6 grid gap-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-white/62">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#8EEA4D]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/packages"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-white transition hover:text-[#8EEA4D]"
                  >
                    View Full Package
                    <ArrowRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 grid justify-items-center gap-5 text-center">
              <p className="max-w-2xl text-sm leading-7 text-white/52">
                Flexible monthly engagements. Ad budget and third-party costs are billed separately.
              </p>
              <a
                href="/packages"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 text-sm font-bold text-white transition hover:border-[#8EEA4D]/45 hover:text-[#8EEA4D]"
              >
                View Full Packages
                <ArrowRight className="ml-2 size-4" />
              </a>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:pb-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you book."
            copy="Built for search clarity and real buyer questions."
          />
          <div className="grid gap-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.25rem] border border-white/10 bg-[#0A100B]/90 p-5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-[#8EEA4D] transition group-open:rotate-180">
                      <ChevronDown className="size-4" />
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-white/58">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#8EEA4D]/22 bg-[#8EEA4D] p-8 text-[#071006] sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-[#245C1B]">
                    Free audit
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                    Book a free 30-minute marketing audit.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#183313]/78">
                    No pressure. Just clarity.
                  </p>
                </div>
                <a
                  href="/free-audit"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#071006] px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(7,16,6,0.24)]"
                >
                  Book Free Audit
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}


