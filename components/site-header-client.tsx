"use client";

import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { easeOutExpo } from "@/components/animation/motion";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceMenuItems = [
  { label: "Services Overview", href: "/services" },
  { label: "Remote Services", href: "/remote-marketing-services" },
  { label: "Performance Marketing", href: "/performance-marketing-agency" },
  { label: "Google Ads", href: "/google-ads-agency" },
  { label: "Meta Ads", href: "/meta-ads-agency" },
  { label: "Lead Generation", href: "/lead-generation-agency" },
  { label: "Marketing Automation", href: "/marketing-automation-agency" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Packages", href: "/packages" },
];

export function SiteHeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = serviceMenuItems.some((item) => isActive(item.href));

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOutExpo }}
      className={`sticky top-0 z-[80] border-b transition duration-[250ms] ${
        scrolled
          ? "border-white/12 bg-[#050806]/88 shadow-[0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
          : "border-white/8 bg-[#050806]/78 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:min-h-[5.5rem]">
        <Link href="/" className="flex items-center gap-3" aria-label="Zexa Media home">
          <span className="relative block h-12 w-40 overflow-hidden sm:w-44 lg:w-40 xl:h-14 xl:w-48">
            <Image
              src="/zexa-media-logo-transparent.png"
              alt="Zexa Media"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] px-2 py-2 lg:flex">
          <div className="group relative">
            <Link
              href="/services"
              aria-current={servicesActive ? "page" : undefined}
              className={`nav-link inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition hover:bg-white/[0.055] hover:text-white ${
                servicesActive ? "text-[#8EEA4D]" : "text-white/68"
              }`}
            >
              Services
              <ChevronDown className="size-4 transition group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-[100] w-[24rem] translate-y-3 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#071006]/96 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EEA4D]">
                    Service paths
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/56">
                    Choose by channel, buyer need or growth stage.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {serviceMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-3 py-2.5 text-sm font-semibold leading-tight transition hover:bg-[#8EEA4D]/10 hover:text-[#8EEA4D] ${
                        isActive(item.href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link inline-flex min-h-10 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition hover:bg-white/[0.055] hover:text-white ${
                isActive(item.href) ? "text-[#8EEA4D]" : "text-white/66"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/free-audit"
          className="magnetic-cta hidden min-h-11 items-center rounded-full bg-[#8EEA4D] px-4 text-sm font-bold text-[#071006] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 lg:inline-flex xl:px-5"
        >
          Book Free Audit
          <ArrowRight className="ml-2 size-4" />
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/5 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          id={menuId}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          className="relative z-[90] border-t border-white/10 bg-[#071006]/98 px-5 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <div className="grid gap-2">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: index * 0.04, ease: easeOutExpo }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium transition hover:bg-white/6 hover:text-[#8EEA4D] ${
                      isActive(item.href) ? "text-[#8EEA4D]" : "text-white/75"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-3">
              <p className="px-1 pb-2 text-xs font-black uppercase tracking-[0.2em] text-[#8EEA4D]">
                Services
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {serviceMenuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, delay: 0.14 + index * 0.03, ease: easeOutExpo }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white/6 hover:text-[#8EEA4D] ${
                        isActive(item.href) ? "bg-[#8EEA4D]/10 text-[#8EEA4D]" : "text-white/72"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/free-audit"
              className="mt-3 rounded-full bg-[#8EEA4D] px-5 py-4 text-center text-sm font-bold text-[#071006]"
              onClick={() => setMenuOpen(false)}
            >
              Book Free Audit
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
