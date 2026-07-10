"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050806]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Zexa Media home">
          <span className="relative block h-14 w-48 overflow-hidden sm:h-16 sm:w-56">
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

        <div className="hidden items-center gap-8 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link whitespace-nowrap text-sm font-medium text-white/66 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/free-audit"
          className="magnetic-cta hidden rounded-full bg-[#8EEA4D] px-5 py-3 text-sm font-bold text-[#071006] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 lg:inline-flex"
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
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#071006]/96 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/75 transition hover:bg-white/6 hover:text-[#8EEA4D]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/free-audit"
              className="mt-3 rounded-full bg-[#8EEA4D] px-5 py-4 text-center text-sm font-bold text-[#071006]"
              onClick={() => setMenuOpen(false)}
            >
              Book Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
