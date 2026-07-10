"use client";

import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { easeOutExpo } from "@/components/animation/motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
      <nav className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Zexa Media home">
          <span className="relative block h-14 w-48 overflow-hidden lg:w-44 xl:h-16 xl:w-56">
            <Image
              src="/zexa-media-logo-transparent.png"
              alt="Zexa Media"
              fill
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link whitespace-nowrap text-sm font-medium transition hover:text-white ${
                isActive(item.href) ? "text-[#8EEA4D]" : "text-white/66"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/free-audit"
          className="magnetic-cta hidden rounded-full bg-[#8EEA4D] px-4 py-3 text-sm font-bold text-[#071006] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 lg:inline-flex xl:px-5"
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
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: index * 0.05, ease: easeOutExpo }}
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
