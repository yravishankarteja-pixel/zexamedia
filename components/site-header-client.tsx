"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

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
  { label: "Services Overview", href: "/services" },
  { label: "Performance Marketing", href: "/performance-marketing-agency" },
  { label: "Google Ads", href: "/google-ads-agency" },
  { label: "Meta Ads", href: "/meta-ads-agency" },
  { label: "Lead Generation", href: "/lead-generation-agency" },
  { label: "Marketing Automation", href: "/marketing-automation-agency" },
];

const industryMenuItems = [
  { label: "Industries Overview", href: "/industries" },
  { label: "Doctors & Clinics", href: "/industries/doctors-clinics" },
  { label: "Dental Clinics", href: "/industries/dental-clinics" },
  { label: "Fertility & IVF", href: "/industries/fertility-ivf" },
  { label: "Education & Coaching", href: "/industries/education-coaching" },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness" },
  { label: "Spas & Wellness", href: "/industries/spas-wellness" },
  { label: "Salons", href: "/industries/salons" },
  { label: "Real Estate", href: "/industries/real-estate" },
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

        <div className="hidden min-w-0 flex-1 items-stretch justify-center rounded-xl border border-white/12 bg-white/[0.035] shadow-[0_12px_32px_rgba(0,0,0,0.22)] lg:flex">
          <div className="group relative border-r border-white/10">
            <Link
              href="/services"
              aria-current={servicesActive ? "page" : undefined}
              className={`inline-flex min-h-12 items-center gap-1 rounded-l-xl px-3 text-[0.8rem] font-semibold transition hover:bg-white/[0.06] hover:text-white xl:px-4 xl:text-sm ${servicesActive ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"}`}
            >
              Services
              <ChevronDown className="size-4 transition group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-[100] w-[23rem] translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/12 bg-[#09110B]/98 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                <p className="px-3 pb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#8EEA4D]">Services</p>
                <div className="grid grid-cols-2 gap-1">
                  {serviceMenuItems.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative border-r border-white/10">
            <Link
              href="/industries"
              aria-current={industriesActive ? "page" : undefined}
              className={`inline-flex min-h-12 items-center gap-1 px-3 text-[0.8rem] font-semibold transition hover:bg-white/[0.06] hover:text-white xl:px-4 xl:text-sm ${industriesActive ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"}`}
            >
              Industries
              <ChevronDown className="size-4 transition group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-[100] w-[26rem] translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/12 bg-[#09110B]/98 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                <p className="px-3 pb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#8EEA4D]">Industries</p>
                <div className="grid grid-cols-2 gap-1">
                  {industryMenuItems.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {mainNavItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`min-h-12 items-center whitespace-nowrap border-r border-white/10 px-2.5 text-[0.8rem] font-semibold transition hover:bg-white/[0.06] hover:text-white xl:px-4 xl:text-sm ${item.label === "Blog" ? "hidden xl:inline-flex" : "inline-flex"} ${index === mainNavItems.length - 1 ? "rounded-r-xl border-r-0" : ""} ${isActive(item.href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/70"}`}
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
