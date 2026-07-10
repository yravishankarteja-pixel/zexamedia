import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  LineChart,
  Megaphone,
  MessageCircle,
  Search,
  Target,
  Workflow,
} from "lucide-react";
import { GlassCard, PageShell, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "The Zexa Growth System | Zexa Media",
  description:
    "See how Zexa Media connects ads, content, tracking, landing pages, reporting, and automation into one growth system for local businesses.",
  alternates: { canonical: "https://zexamedia.in/growth-system" },
};

const services = [
  ["Performance Marketing", "Campaigns built around calls, leads, bookings, and revenue.", Target],
  ["Google Ads", "Capture people already searching for your service.", Search],
  ["Meta Ads", "Create demand before buyers actively compare options.", Megaphone],
  ["Social Media Growth", "Build daily trust with useful, consistent brand visibility.", BadgeCheck],
  ["Marketing Automation", "Improve response speed with WhatsApp and follow-up workflows.", Workflow],
  ["Analytics & Reporting", "Track what is working, wasting, and ready to scale.", BarChart3],
] as const;

const principles = [
  ["Strategy before spending", "Audience, offer, market, and channel direction are clarified before budget goes live."],
  ["Tracking before scaling", "Calls, WhatsApp leads, forms, CPL, and source quality are visible before spend increases."],
  ["Follow-up before losing leads", "Lead response systems help owners convert more of the enquiries they already receive."],
] as const;

const systemParts = [
  "Campaign planning",
  "Tracking",
  "Lead quality",
  "Optimization",
  "Reporting",
  "Scaling roadmap",
];

const process = [
  ["01", "Free Audit", "We identify the biggest leaks across ads, website, content, and follow-up."],
  ["02", "Strategy Session", "We decide the best offer, audience, budget, channel mix, and conversion path."],
  ["03", "Launch & Track", "Campaigns go live with tracking for calls, forms, WhatsApp, and lead source quality."],
  ["04", "Review & Scale", "We scale what converts, fix what leaks, and keep the next action clear."],
] as const;

const proof = [
  ["Walk-ins doubled", "Local offer and Google Ads structure improved walk-in intent."],
  ["CPL reduced", "Creative testing and weak-source cuts improved lead cost."],
  ["60-second response", "WhatsApp-first follow-up reduced missed lead windows."],
  ["Better lead tracking", "Owners could see what campaign generated each enquiry."],
] as const;

export default function GrowthSystemPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
            The Zexa Growth System
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
            The Growth System Behind Better Leads, Better Follow-Up, and Better ROI.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Zexa Media connects ads, content, landing pages, tracking, reporting, and
            automation into one growth system for local businesses.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-0.5"
            >
              Book Free Audit
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-7 text-base font-semibold text-white transition hover:border-[#8EEA4D]/50"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="What We Build" title="One connected growth system across ads, content, automation, and reporting.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([title, copy, Icon]) => (
            <GlassCard key={title}>
              <Icon className="mb-7 size-7 text-[#8EEA4D]" strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/58">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why It Feels Different" title="Growth starts with real people, clear numbers, and faster follow-up.">
        <div className="grid gap-4 lg:grid-cols-3">
          {principles.map(([title, copy]) => (
            <GlassCard key={title}>
              <CheckCircle2 className="mb-6 size-6 text-[#8EEA4D]" />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/58">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="We Don’t Just Run Ads" title="We build the operating system behind growth.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systemParts.map((item) => (
            <GlassCard key={item}>
              <LineChart className="mb-6 size-6 text-[#8EEA4D]" />
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The Missed Lead Problem"
        title="Most Businesses Don’t Need More Leads. They Need Better Follow-Up."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            "Slow response loses leads",
            "WhatsApp follow-up matters",
            "Lead tracking matters",
            "Automation improves conversion",
          ].map((item) => (
            <GlassCard key={item}>
              <MessageCircle className="mb-6 size-6 text-[#8EEA4D]" />
              <h2 className="text-xl font-semibold">{item}</h2>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Activity vs Accountability" title="From activity marketing to accountable growth.">
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Activity Marketing</h2>
            <ul className="mt-6 grid gap-3 text-white/62">
              {["Posting content", "Running ads", "Sending reports", "No clear funnel"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold text-[#8EEA4D]">Accountable Growth</h2>
            <ul className="mt-6 grid gap-3 text-white/70">
              {[
                "Clear strategy",
                "Measurable campaigns",
                "Lead tracking",
                "Follow-up system",
                "Scaling based on data",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Audit to Scale" title="A controlled path from first audit to better growth decisions.">
        <div className="grid gap-4 lg:grid-cols-4">
          {process.map(([step, title, copy]) => (
            <GlassCard key={step}>
              <p className="mb-6 text-sm font-bold text-[#8EEA4D]">{step}</p>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/58">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Detailed Proof" title="Compact signals from the growth system.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proof.map(([title, copy]) => (
            <GlassCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-white/58">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-[1.5rem] border border-[#8EEA4D]/22 bg-[#8EEA4D] p-8 text-[#071006] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to Build Your Growth System?
            </h2>
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#071006] px-7 text-base font-bold text-white"
            >
              Book Free Audit
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
