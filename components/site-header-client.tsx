"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Menu,
  Megaphone,
  Search,
  Sparkles,
  Stethoscope,
  Target,
  Workflow,
  X,
} from "lucide-react";

const mainNavItems = [
  { label: "Growth System", href: "/growth-system" },
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  ...mainNavItems,
  { label: "About", href: "/about" },
];

const serviceMenuItems = [
  { label: "Services Overview", href: "/services", icon: Sparkles },
  { label: "Performance Marketing", href: "/performance-marketing-agency", icon: Target },
  { label: "Google Ads", href: "/google-ads-agency", icon: Search },
  { label: "Meta Ads", href: "/meta-ads-agency", icon: Megaphone },
  { label: "Lead Generation", href: "/lead-generation-agency", icon: CircleDollarSign },
  { label: "Marketing Automation", href: "/marketing-automation-agency", icon: Workflow },
  { label: "Analytics & Reporting", href: "/services", icon: BarChart3 },
];

const industryMenuItems = [
  { label: "Industries Overview", href: "/industries", icon: Building2 },
  { label: "Doctors & Clinics", href: "/industries/doctors-clinics", icon: Stethoscope },
  { label: "Dental Clinics", href: "/industries/dental-clinics", icon: Sparkles },
  { label: "Fertility & IVF", href: "/industries/fertility-ivf", icon: HeartPulse },
  { label: "Education & Coaching", href: "/industries/education-coaching", icon: GraduationCap },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness", icon: Dumbbell },
  { label: "Spas & Wellness", href: "/industries/spas-wellness", icon: Sparkles },
  { label: "Salons", href: "/industries/salons", icon: Sparkles },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

export function SiteHeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = serviceMenuItems.some((item) => isActive(item.href));
  const industriesActive = industryMenuItems.some((item) => isActive(item.href));

  const dropdownLinkClass = (href: string) =>
    `rounded-xl px-3 py-2.5 text-sm font-semibold leading-tight transition hover:bg-[#8EEA4D]/10 hover:text-[#8EEA4D] ${
      isActive(href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"
    }`;

  return (
    <header
      className={`site-header sticky top-0 z-[80] border-b transition duration-300 ${
        scrolled
          ? "border-white/12 bg-[#050806]/94 shadow-[0_14px_34px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-white/8 bg-[#050806]/86 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:min-h-[5.25rem]">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl border border-transparent px-1 py-1 transition hover:border-white/10 hover:bg-white/[0.035] lg:px-3 lg:py-2"
          aria-label="Zexa Media home"
        >
          <Image
            src="/zexa-media-logo-transparent.webp"
            alt="Zexa Media"
            width={300}
            height={97}
            sizes="(max-width: 1023px) 140px, 170px"
            unoptimized
            className="h-auto w-[132px] object-contain sm:w-[150px] lg:w-[150px] xl:w-[170px]"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="group/mega relative flex items-center">
            <Link
              href="/services"
              aria-current={servicesActive ? "page" : undefined}
              className={`relative inline-flex min-h-12 items-center gap-1 px-3 text-[0.8rem] font-semibold transition hover:text-[#8EEA4D] xl:px-4 xl:text-sm ${servicesActive ? "text-[#8EEA4D]" : "text-white/76"}`}
            >
              Services
              <ChevronDown className="size-4 transition group-hover/mega:rotate-180 group-focus-within/mega:rotate-180" />
            </Link>
            <Link
              href="/industries"
              aria-current={industriesActive ? "page" : undefined}
              className={`relative inline-flex min-h-12 items-center gap-1 px-3 text-[0.8rem] font-semibold transition hover:text-[#8EEA4D] xl:px-4 xl:text-sm ${industriesActive ? "text-[#8EEA4D]" : "text-white/76"}`}
            >
              Industries
              <ChevronDown className="size-4 transition group-hover/mega:rotate-180 group-focus-within/mega:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-[100] w-[min(48rem,calc(100vw-3rem))] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100">
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#8EEA4D]/25 bg-[#071008]/98 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.64),0_0_40px_rgba(142,234,77,0.08)] backdrop-blur-2xl">
                {[{ title: "Services", copy: "Our end-to-end growth marketing services.", items: serviceMenuItems }, { title: "Industries", copy: "Focused paths for local and service businesses.", items: industryMenuItems }].map((column, columnIndex) => (
                  <div key={column.title} className={columnIndex ? "border-l border-white/10 pl-4" : "pr-4"}>
                    <div className="mb-3 flex items-start gap-3 px-2">
                      <div className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#8EEA4D]/12 text-[#8EEA4D]">
                        {columnIndex ? <Building2 className="size-5" /> : <Sparkles className="size-5" />}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EEA4D]">{column.title}</p>
                        <p className="mt-1 text-xs text-white/45">{column.copy}</p>
                      </div>
                    </div>
                    <div className="grid gap-0.5">
                      {column.items.map((item) => (
                        <Link key={item.href} href={item.href} className={`group/item flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-[#8EEA4D]/10 hover:text-white ${isActive(item.href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"}`}>
                          <item.icon className="size-4 shrink-0 text-[#8EEA4D]" strokeWidth={1.8} />
                          <span>{item.label}</span>
                          <ChevronRight className="ml-auto size-4 text-white/28 transition group-hover/item:translate-x-0.5 group-hover/item:text-[#8EEA4D]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`min-h-12 items-center whitespace-nowrap px-2.5 text-[0.8rem] font-semibold transition hover:text-[#8EEA4D] xl:px-4 xl:text-sm ${item.label === "Blog" || item.label === "Contact" ? "hidden xl:inline-flex" : "inline-flex"} ${isActive(item.href) ? "text-[#8EEA4D]" : "text-white/72"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/free-audit"
          className="magnetic-cta hidden min-h-11 shrink-0 items-center rounded-full bg-[#8EEA4D] px-4 text-sm font-bold text-[#071006] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 lg:inline-flex xl:px-5"
        >
          Book Free Audit
          <ArrowRight className="ml-2 size-4" />
        </Link>

        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:border-[#8EEA4D]/40 hover:text-[#8EEA4D] lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {menuOpen && (
        <div id={menuId} className="fixed inset-0 z-[120] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/72 backdrop-blur-sm"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="mobile-menu-enter absolute right-0 top-0 flex h-dvh w-[min(90vw,26rem)] flex-col border-l border-white/10 bg-[#071006] shadow-[-24px_0_70px_rgba(0,0,0,0.5)]">
            <div className="flex min-h-20 items-center justify-between border-b border-white/10 px-5">
              <Image
                src="/zexa-media-logo-transparent.webp"
                alt="Zexa Media"
                width={300}
                height={97}
                sizes="132px"
                unoptimized
                className="h-auto w-[132px] object-contain"
              />
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.05]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <details className="group rounded-2xl border border-white/10 bg-white/[0.035]" open={servicesActive}>
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 font-bold text-white">
                  Services
                  <ChevronDown className="size-4 transition group-open:rotate-180" />
                </summary>
                <div className="grid gap-1 border-t border-white/8 p-2">
                  {serviceMenuItems.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </details>

              <details className="group mt-3 rounded-2xl border border-white/10 bg-white/[0.035]" open={industriesActive}>
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 font-bold text-white">
                  Industries
                  <ChevronDown className="size-4 transition group-open:rotate-180" />
                </summary>
                <div className="grid grid-cols-2 gap-1 border-t border-white/8 p-2">
                  {industryMenuItems.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </details>

              <div className="mt-4 grid gap-1 border-t border-white/10 pt-4">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.05] hover:text-[#8EEA4D] ${isActive(item.href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 p-5">
              <Link href="/free-audit" onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006]">
                Book Free Audit
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
