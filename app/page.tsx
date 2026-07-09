"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Gem,
  LineChart,
  Menu,
  MessageCircle,
  MousePointerClick,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  GrowthCircuitVisual,
  HumanStrategyVisual,
  MarketingOpsVisual,
} from "@/components/abstract-visuals";

const whatsappUrl =
  "https://wa.me/919515256630?text=Hi%20Zexa%20Media%2C%20I%20want%20to%20book%20a%20free%20marketing%20audit.";
const contactEmail = "contactzexamedia@gmail.com";
const phoneHref = "tel:+919515256630";
const socialLinks = [
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

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { value: 20, suffix: "+", label: "Clients served" },
  { value: 50, prefix: "₹", suffix: "L+", label: "Ad spend managed" },
  { value: 3.2, decimals: 1, suffix: "x", label: "Average ROAS signal" },
  { value: 4, label: "Cities across AP" },
];

const services = [
  {
    icon: LineChart,
    title: "Performance Marketing",
    copy: "Google Ads and Meta Ads campaigns built for leads, calls, and sales, not vanity reach.",
  },
  {
    icon: Sparkles,
    title: "Social Media Management",
    copy: "Content calendars, Reels, captions, and community systems that build trust and demand.",
  },
  {
    icon: Gem,
    title: "Branding & Positioning",
    copy: "Logo, brand kit, messaging, and market positioning that make your business easier to choose.",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    copy: "WhatsApp flows, lead notifications, CRM integrations, and follow-ups that work 24/7.",
  },
  {
    icon: MousePointerClick,
    title: "Content Production",
    copy: "Photoshoot direction and Reel production that give campaigns strong visual credibility.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    copy: "Monthly dashboards and performance reports so every rupee has a clear trail.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Audit",
    copy: "We review your current marketing, ads, and online presence to find what is working and what is wasting money.",
  },
  {
    step: "02",
    title: "Strategy Session",
    copy: "We map a 90-day growth plan with the right platforms, budget, audience, and conversion path.",
  },
  {
    step: "03",
    title: "Launch & Optimise",
    copy: "Campaigns, content, tracking, and automations go live with weekly optimisation based on real data.",
  },
  {
    step: "04",
    title: "Review & Scale",
    copy: "Monthly reviews make the next move obvious: scale winners, fix leaks, and cut waste.",
  },
];

const testimonials = [
  {
    quote:
      "Zexa Media doubled our walk-in appointments in 45 days. Their Google Ads setup was the best investment we made this year.",
    name: "Dr. Priya",
    role: "Fertility & Wellness Clinic, Vizag",
  },
  {
    quote:
      "We tried two agencies before Zexa. Nobody else tracked our results this closely. Our CPL dropped by 60% in 3 months.",
    name: "Ravi Kumar",
    role: "SV Gold Shop, Visakhapatnam",
  },
];

const packages = [
  { name: "Basic Ads Starter", fit: "Start with one ad platform", price: "₹15k" },
  { name: "Growth Ads Package", fit: "Google + Meta with creative support", price: "₹25k" },
  { name: "Local Growth Package", fit: "Ads + local SEO + landing page", price: "₹30k" },
  { name: "Premium Growth Partner", fit: "Full growth marketing partner", price: "₹50k" },
];

const humanProof = [
  {
    title: "Strategy with the owner in the room",
    copy: "We turn business context, local market reality, and campaign data into one clear growth direction.",
  },
  {
    title: "Content built from real operations",
    copy: "Shoots, reels, and offers are planned around what customers actually need to trust before enquiring.",
  },
  {
    title: "Performance reviewed like a business decision",
    copy: "Calls, WhatsApp leads, forms, CPL, and source quality are reviewed before budgets are scaled.",
  },
];

const whoWeHelp = [
  "Gyms and fitness studios",
  "Clinics and healthcare practices",
  "Restaurants and local retail",
  "Coaching institutes",
  "Real estate and service businesses",
  "Founder-led growth brands",
];

const resultCards = [
  {
    metric: "2.8x",
    label: "higher qualified enquiry rate",
    copy: "Offer, audience, and landing flow rebuilt before scaling ad budget.",
  },
  {
    metric: "60%",
    label: "lower cost per lead",
    copy: "Creative testing and source tracking made weak campaigns visible fast.",
  },
  {
    metric: "4 hrs",
    label: "audit response window",
    copy: "Fast call-back flow designed for owners who cannot afford missed leads.",
  },
];

const comparison = [
  {
    label: "Strategy",
    other: "Post content, run ads, and hope something works.",
    zexa: "Set clear growth targets before any budget is spent.",
  },
  {
    label: "Execution",
    other: "Monthly activity reports with vague performance summaries.",
    zexa: "Weekly optimisation across ads, creatives, audiences, and lead flow.",
  },
  {
    label: "Tracking",
    other: "Impressions, likes, and reach presented as business results.",
    zexa: "CPL, ROAS, lead quality, conversion rate, and spend clarity.",
  },
  {
    label: "Systems",
    other: "Campaigns depend on manual follow-up and scattered tools.",
    zexa: "WhatsApp, CRM, and reporting automations built into the funnel.",
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
  priceRange: "₹15,000 - ₹50,000",
  description:
    "Growth marketing agency in Visakhapatnam offering performance marketing, social media management, branding, marketing automation, content production, and analytics.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const heroParallax = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 80]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
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
    <main className="min-h-screen overflow-hidden bg-[#050806] text-white">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-[#8EEA4D] shadow-[0_0_18px_rgba(142,234,77,0.75)]"
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
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(128deg,rgba(142,234,77,0.16),transparent_34%),linear-gradient(225deg,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,#050806_0%,#081008_42%,#020302_100%)]"
        style={{ y: heroParallax }}
      />
      <div className="premium-orb premium-orb-one" />
      <div className="premium-orb premium-orb-two" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050806]/75 backdrop-blur-2xl">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="group flex items-center gap-3" aria-label="Zexa Media home">
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
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-white/62 transition hover:text-[#8EEA4D]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={phoneHref}
              className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/78 transition hover:border-[#8EEA4D]/60 hover:text-white"
            >
              Call Audit
            </a>
            <a
              href={phoneHref}
              className="group rounded-full bg-[#8EEA4D] px-5 py-3 text-sm font-bold text-[#071006] shadow-[0_0_36px_rgba(142,234,77,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(142,234,77,0.42)]"
            >
              Call Zexa
              <ArrowRight className="ml-2 inline size-4 transition group-hover:translate-x-1" />
            </a>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-[#071006]/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/75 transition hover:bg-white/6 hover:text-[#8EEA4D]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={phoneHref}
                className="mt-3 rounded-full bg-[#8EEA4D] px-5 py-4 text-center text-sm font-bold text-[#071006]"
                onClick={() => setMenuOpen(false)}
              >
                Call Zexa
              </a>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10">
        <section className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-32">
          <div className="pointer-events-none absolute inset-x-5 bottom-0 h-32 overflow-hidden opacity-45 sm:inset-x-8">
            <svg
              viewBox="0 0 1200 160"
              className="h-full w-full text-[#8EEA4D]"
              aria-hidden="true"
            >
              <path
                d="M0 134h70V98h42v36h58V76h42v58h68v-28h44v28h76V62h52v72h70V88h40v46h70V52h58v82h80V72h46v62h76v-36h44v36h72V68h50v66h122"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.42"
                strokeWidth="2"
              />
              <path
                d="M0 138h1200"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div>
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-4 py-2 text-sm font-semibold text-[#CFFFAB] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <ShieldCheck className="size-4" />
                Growth marketing agency in Visakhapatnam
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Your Business Deserves to{" "}
                <span className="relative inline-block text-[#8EEA4D]">
                  Grow Faster.
                  <span className="absolute -bottom-2 left-1 h-1 w-[92%] rounded-full bg-[#8EEA4D]/45 shadow-[0_0_24px_rgba(142,234,77,0.55)]" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl">
                Zexa Media runs high-performance Google Ads, Meta Ads, social media campaigns,
                and marketing automation engineered to deliver real ROI, not just reach.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={phoneHref}
                  className="magnetic-cta group inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] shadow-[0_0_42px_rgba(142,234,77,0.30)] transition hover:-translate-y-1 hover:shadow-[0_0_58px_rgba(142,234,77,0.48)] focus:outline-none focus:ring-2 focus:ring-[#8EEA4D] focus:ring-offset-2 focus:ring-offset-[#050806]"
                >
                  Call for Free Audit
                  <ArrowRight className="ml-2 size-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="/packages"
                  className="premium-secondary-cta inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 backdrop-blur-xl transition hover:border-[#8EEA4D]/60 hover:bg-[#8EEA4D]/10 hover:text-white"
                >
                  See Our Packages
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["30-minute free audit", "No sales pressure", "Clear growth roadmap"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/62 backdrop-blur-xl"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#8EEA4D]" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="relative mx-auto aspect-[0.92] w-full max-w-[560px]">
              <div className="absolute inset-0 rotate-6 rounded-[3rem] border border-[#8EEA4D]/15 bg-[linear-gradient(135deg,rgba(142,234,77,0.14),transparent_52%)]" />
              <div className="data-orbit absolute inset-4 rounded-full border border-[#8EEA4D]/20" />
              <div className="data-orbit data-orbit-reverse absolute inset-16 rounded-full border border-white/10" />
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                <Image
                  src="/images/zexa-hero-strategy.png"
                  alt="Zexa Media strategist and business owner reviewing campaign analytics"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0.02),rgba(5,8,6,0.42)),radial-gradient(circle_at_50%_45%,rgba(142,234,77,0.13),transparent_30%)]" />
                <div className="data-flow absolute inset-0 opacity-35" />
                <div className="absolute left-6 top-6 hidden items-center gap-2 rounded-full border border-[#8EEA4D]/20 bg-black/30 px-3 py-2 text-xs font-semibold text-[#CFFFAB] backdrop-blur-xl sm:flex">
                  <span className="size-2 rounded-full bg-[#8EEA4D] shadow-[0_0_12px_rgba(142,234,77,0.8)]" />
                  Vizag market signal
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-black/52 p-4 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:w-[64%] sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span>
                      <span className="block text-sm font-semibold text-white/84">
                        Client Growth Dashboard
                      </span>
                      <span className="mt-1 block text-xs text-white/42">Last 30 days review</span>
                    </span>
                    <span className="rounded-full border border-[#8EEA4D]/22 bg-[#8EEA4D]/12 px-3 py-1 text-xs font-bold text-[#8EEA4D]">
                      Verified
                    </span>
                  </div>
                  <div className="grid gap-2.5">
                    {[
                      { label: "Qualified leads", value: "184", width: "78%" },
                      { label: "Cost per lead", value: "₹186", width: "64%" },
                      { label: "ROAS signal", value: "3.2x", width: "68%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                      >
                        <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-white/66">{item.label}</span>
                          <span className="font-semibold text-white">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-[#8EEA4D] shadow-[0_0_18px_rgba(142,234,77,0.5)]"
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 hidden w-[30%] min-w-28 gap-3 sm:grid">
                  <div className="rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">Response</p>
                    <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">60s</p>
                  </div>
                  <div className="hidden rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-xl sm:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">CPL Trend</p>
                    <p className="mt-2 text-3xl font-semibold text-white">-60%</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="relative -mt-8 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#071006]/80 px-6 py-8">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                    {stat.label}
                  </p>
                <p className="text-4xl font-semibold text-white sm:text-5xl">
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals ?? 0}
                    duration={2.2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t border-white/10 bg-[#8EEA4D]/10 px-6 py-5 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
              <span>Built for local businesses that need trackable growth, not activity reports.</span>
              <span className="font-semibold text-[#CFFFAB]">Vizag first. ROI always.</span>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  What we do
                </p>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  One growth system across ads, content, brand, automation, and reporting.
                </h2>
              </div>
              <GrowthCircuitVisual />
            </div>
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.05}
              >
                <article
                  className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.052] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/45 hover:bg-[#8EEA4D]/8"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8EEA4D]/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="relative mb-7 flex items-start justify-between gap-4">
                    <div className="grid size-11 place-items-center rounded-full border border-[#8EEA4D]/20 bg-[#8EEA4D]/10 text-[#8EEA4D] transition group-hover:border-[#8EEA4D]/45 group-hover:shadow-[0_0_28px_rgba(142,234,77,0.28)]">
                      <service.icon className="size-5" strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative text-2xl font-semibold leading-tight">{service.title}</h3>
                  <p className="relative mt-4 leading-7 text-white/58">{service.copy}</p>
                  {index === 0 && (
                    <div className="relative mt-auto grid gap-3 pt-8 sm:grid-cols-2">
                      {["Search intent", "Lead quality", "CPL control", "ROAS visibility"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/60"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="image-depth-card relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.38)]">
                <Image
                  src="/images/zexa-content-shoot.png"
                  alt="Zexa Media team planning a premium content shoot for a local fitness business"
                  fill
                  sizes="(max-width: 1024px) 92vw, 650px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(5,8,6,0.9)),linear-gradient(90deg,rgba(5,8,6,0.18),transparent)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8EEA4D]">
                    Human proof
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    Real businesses, real shoots, real campaign context.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  Human connection
                </p>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  Growth feels different when the strategy starts with real people.
                </h2>
                <p className="mt-6 leading-8 text-white/62">
                  Strong campaigns need more than dashboards. We capture what makes your
                  business trustworthy, then connect it to paid ads, content, tracking, and
                  follow-up systems.
                </p>
                <div className="mt-8 grid gap-4">
                  {humanProof.map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.05}>
                      <div className="lift-card rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 leading-7 text-white/56">{item.copy}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-[#8EEA4D]/18 bg-[#8EEA4D]/9 p-8 backdrop-blur-2xl sm:p-10">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  The Zexa difference
                </p>
                <h2 className="text-4xl font-semibold leading-tight">
                  We don&apos;t just run ads. We build growth systems.
                </h2>
                <p className="mt-6 leading-8 text-white/65">
                  Every campaign starts with a clear growth goal. Every rupee is tracked,
                  optimised, and reported. Zexa Media understands the Vizag market,
                  Telugu-speaking audiences, and the competitive landscape local businesses face.
                </p>
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/24 p-5">
                  <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/38">
                    <span>Growth OS</span>
                    <span className="text-[#8EEA4D]">Live stack</span>
                  </div>
                  <div className="grid gap-3">
                    {["Targeting", "Creative", "Tracking", "Automation"].map((item, index) => (
                      <div key={item} className="grid grid-cols-[90px_1fr] items-center gap-3">
                        <span className="text-sm text-white/52">{item}</span>
                        <span className="h-2 overflow-hidden rounded-full bg-white/10">
                          <span
                            className="block h-full rounded-full bg-[#8EEA4D] shadow-[0_0_18px_rgba(142,234,77,0.45)]"
                            style={{ width: `${68 + index * 7}%` }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <MarketingOpsVisual />
                </div>
                {[
                  "Data over opinions",
                  "ROI first execution",
                  "Radical transparency",
                  "Local-first thinking",
                ].map((item) => (
                  <div
                    key={item}
                    className="lift-card rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="mb-5 size-6 text-[#8EEA4D]" />
                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <HumanStrategyVisual />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {whoWeHelp.map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/24 px-4 py-3 text-sm font-semibold text-white/62"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  Who we help
                </p>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  Built for businesses where every missed enquiry costs real money.
                </h2>
                <p className="mt-6 leading-8 text-white/62">
                  Zexa Media is especially useful for founder-led local businesses that need
                  better calls, WhatsApp leads, bookings, walk-ins, and campaign visibility.
                </p>
                <a
                  href={phoneHref}
                  className="magnetic-cta mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] shadow-[0_0_42px_rgba(142,234,77,0.30)] transition hover:-translate-y-1"
                >
                  Check if Zexa fits your business
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <Reveal>
            <div className="max-w-4xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  Other agencies vs Zexa Media
                </p>
                <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  From activity marketing to accountable growth.
                </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                Most agencies sell deliverables. Zexa Media builds the operating system
                behind growth: strategy, campaigns, tracking, automation, and scale.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-5">
            {comparison.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#8EEA4D]/35 hover:bg-white/[0.06]">
                  <div className="grid gap-px bg-white/10 lg:grid-cols-[0.62fr_1fr_1fr]">
                    <div className="bg-[#0B120D]/92 p-6 lg:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                        Decision area
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{item.label}</h3>
                    </div>
                    <div className="bg-[#080D09]/92 p-6 lg:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/32">
                        Typical agency
                      </p>
                      <p className="mt-4 leading-8 text-white/50">{item.other}</p>
                    </div>
                    <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(142,234,77,0.12),rgba(255,255,255,0.035))] p-6 lg:p-7">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8EEA4D]/65 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                        Zexa Media
                      </p>
                      <div className="mt-4 flex gap-4">
                        <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-[#8EEA4D]/40 bg-[#8EEA4D]/12 text-[#8EEA4D] transition group-hover:shadow-[0_0_24px_rgba(142,234,77,0.26)]">
                          <CheckCircle2 className="size-4" />
                        </span>
                        <p className="leading-8 text-white/76">{item.zexa}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-[#071006]/82 text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                    How we work
                  </p>
                  <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                    A controlled path from audit to scale.
                  </h2>
                  <p className="mt-5 max-w-2xl leading-8 text-white/58">
                    The operating rhythm is simple: diagnose the leak, design the system,
                    launch with tracking, then scale only what proves itself.
                  </p>
                </div>
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#8EEA4D]/40 bg-[#8EEA4D]/10 px-6 text-sm font-bold text-[#CFFFAB] transition hover:bg-[#8EEA4D] hover:text-[#071006]"
                >
                  Call for a free audit
                </a>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {process.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-[#8EEA4D]/40 hover:bg-white/[0.07]">
                    <div className="absolute left-6 top-16 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#8EEA4D] to-transparent opacity-40 lg:hidden" />
                    <p className="mb-8 inline-flex rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-3 py-1 text-sm font-bold text-[#8EEA4D]">
                      {item.step}
                    </p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-white/58">{item.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  Case-study signals
                </p>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  Client result cards that connect emotion with evidence.
                </h2>
                <p className="mt-6 leading-8 text-white/62">
                  Business owners need proof they can understand quickly. These result signals
                  show the kind of decisions Zexa Media optimises for: enquiry quality, lower
                  waste, and faster follow-up.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {resultCards.map((item, index) => (
                    <Reveal key={item.label} delay={index * 0.05}>
                      <div className="lift-card rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                        <p className="text-4xl font-semibold text-[#8EEA4D]">{item.metric}</p>
                        <h3 className="mt-2 font-semibold text-white">{item.label}</h3>
                        <p className="mt-2 leading-7 text-white/52">{item.copy}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="image-depth-card relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.38)]">
                <Image
                  src="/images/zexa-dashboard-review.png"
                  alt="Zexa Media performance marketer reviewing campaign analytics with a business owner"
                  fill
                  sizes="(max-width: 1024px) 92vw, 650px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0.05),rgba(5,8,6,0.86)),radial-gradient(circle_at_25%_20%,rgba(142,234,77,0.18),transparent_35%)]" />
                <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">Decision view</p>
                    <p className="mt-2 text-2xl font-semibold">Spend to lead source</p>
                  </div>
                  <div className="rounded-3xl border border-[#8EEA4D]/22 bg-[#8EEA4D]/12 p-5 backdrop-blur-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#CFFFAB]">Next action</p>
                    <p className="mt-2 text-2xl font-semibold">Scale what converts</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                  Proof, not promises
              </p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  Results that make the next decision easier.
              </h2>
            </div>
              <p className="max-w-2xl leading-8 text-white/58 lg:justify-self-end">
                The homepage keeps proof close to conversion: walk-ins, CPL drops, and
                lead speed are the signals a business owner needs before booking an audit.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="image-depth-card relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.38)]">
                <Image
                  src="/images/zexa-founder-audit.png"
                  alt="Zexa Media strategist discussing a growth audit with a founder"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(5,8,6,0.88)),radial-gradient(circle_at_75%_20%,rgba(142,234,77,0.2),transparent_32%)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/12 bg-black/42 p-5 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8EEA4D]">
                    Audit conversation
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    Clarity first. Then campaigns, content, tracking, and scale.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-5">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <figure
                  className={`relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl ${
                    index === 0 ? "lg:p-10" : ""
                  }`}
                >
                  <div className="absolute right-6 top-6 rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#CFFFAB]">
                    {index === 0 ? "Walk-ins doubled" : "CPL down 60%"}
                  </div>
                  <blockquote className="mt-12 text-2xl font-medium leading-snug text-white/88">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-white/48">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-2xl sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                    Packages
                  </p>
                  <h2 className="text-4xl font-semibold leading-tight">
                    Choose based on where you are right now.
                  </h2>
                  <p className="mt-5 leading-8 text-white/62">
                    From basic ad campaigns to full growth partnership, every plan is built
                    around clear execution, creative support, tracking, and measurable growth.
                  </p>
                </div>
                <div className="grid gap-3">
                  {packages.map((item, index) => (
                    <a
                      key={item.name}
                      href={phoneHref}
                      className={`group grid gap-4 rounded-2xl border px-5 py-5 transition hover:-translate-y-0.5 hover:border-[#8EEA4D]/55 hover:bg-[#8EEA4D]/8 sm:grid-cols-[auto_1fr_auto] sm:items-center ${
                        item.name === "Premium Growth Partner"
                          ? "border-[#8EEA4D]/45 bg-[#8EEA4D]/12 shadow-[0_0_42px_rgba(142,234,77,0.12)]"
                          : "border-white/10 bg-black/24"
                      }`}
                    >
                      <span className="text-xs font-bold text-white/35">0{index + 1}</span>
                      <span>
                        <span className="flex flex-wrap items-center gap-2 font-semibold">
                          {item.name}
                          {item.name === "Premium Growth Partner" && (
                            <span className="rounded-full bg-[#8EEA4D] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#071006]">
                              Recommended
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-sm text-white/45">{item.fit}</span>
                      </span>
                      <span className="inline-flex items-center justify-between gap-4 font-semibold text-[#8EEA4D]">
                        {item.price}
                        <ChevronRight className="size-5 transition group-hover:translate-x-1" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="audit" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#8EEA4D]/28 bg-[#8EEA4D] p-8 text-[#071006] shadow-[0_0_90px_rgba(142,234,77,0.18)] sm:p-10 lg:p-14">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#071006]/35 to-transparent" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#245C1B]">
                    Ready to grow?
                  </p>
                  <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                    Book a free 30-minute marketing audit.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#183313]/78">
                    No commitment. No pressure. Just clarity on what is working, what is
                    leaking money, and what to fix first.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#071006]/10 bg-[#071006]/10 p-5 backdrop-blur-xl">
                  {["100% free", "Response within 4 business hours", "Written growth roadmap"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-[#071006]/10 py-4 last:border-b-0"
                      >
                        <CheckCircle2 className="size-5 shrink-0" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ),
                  )}
                  <a
                    href={phoneHref}
                    className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#071006] px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(7,16,6,0.24)]"
                  >
                    Call Zexa
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-white/10 bg-[#030604]/92 px-5 py-10 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[1.2fr_0.65fr_0.95fr] lg:p-10">
            <div>
              <a href="#" className="inline-flex items-center gap-3" aria-label="Zexa Media home">
                <span className="relative block h-20 w-64 overflow-hidden">
                  <Image
                    src="/zexa-media-logo-transparent.png"
                    alt="Zexa Media"
                    fill
                    sizes="256px"
                    className="object-contain object-left"
                  />
                </span>
              </a>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                Rank higher. Convert faster. Grow stronger.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Growth marketing agency in Visakhapatnam helping businesses grow with
                paid ads, social media, branding, automation, and analytics.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
                >
                  Call Zexa
                </a>
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

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">
                Explore
              </h3>
              <div className="mt-5 grid gap-3 text-sm">
                <a className="text-white/70 transition hover:text-[#8EEA4D]" href="/services">
                  Services
                </a>
                <a className="text-white/70 transition hover:text-[#8EEA4D]" href="/packages">
                  Packages
                </a>
                <a className="text-white/70 transition hover:text-[#8EEA4D]" href="/case-studies">
                  Case Studies
                </a>
                <a className="text-white/70 transition hover:text-[#8EEA4D]" href="/contact">
                  Contact
                </a>
                <a className="text-white/70 transition hover:text-[#8EEA4D]" href="/free-audit">
                  Free Audit
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">
                Contact
              </h3>
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
          <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/25 px-6 py-5 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Zexa Media. All rights reserved.</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a className="transition hover:text-[#8EEA4D]" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="transition hover:text-[#8EEA4D]" href="/contact">
                Contact
              </a>
              <span>zexamedia.in</span>
            </div>
          </div>
        </footer>
      </div>

      <a
        href={phoneHref}
        className="magnetic-cta fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#8EEA4D]/30 bg-[#071006]/88 px-5 py-3 text-sm font-bold text-white shadow-[0_0_42px_rgba(142,234,77,0.22)] backdrop-blur-2xl transition hover:border-[#8EEA4D] hover:text-[#8EEA4D] sm:inline-flex"
      >
        <Play className="size-4 fill-[#8EEA4D] text-[#8EEA4D]" />
        Call for Free Audit
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#8EEA4D] px-4 text-[#071006] shadow-[0_0_46px_rgba(142,234,77,0.42)] transition hover:-translate-y-1 sm:px-5"
        aria-label="Chat with Zexa Media on WhatsApp"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
      </a>
    </main>
  );
}
