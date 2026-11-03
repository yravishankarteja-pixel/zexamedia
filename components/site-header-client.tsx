"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, Building2, ChevronDown, Dumbbell, GraduationCap, HeartPulse,
  Menu, Megaphone, MessageCircle, Palette, Phone, Search, Sparkles,
  Stethoscope, Target, UserRoundSearch, Workflow, X,
} from "lucide-react";

type DropdownName = "services" | "industries";
type MenuItem = { label: string; href: string; description?: string; icon: LucideIcon; exact?: boolean };

const desktopNavItems = [
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Contact", href: "/contact" },
];

const serviceMenuItems: MenuItem[] = [
  { label: "Services Overview", href: "/services", description: "Explore our complete digital growth services.", icon: Sparkles, exact: true },
  { label: "Performance Marketing", href: "/performance-marketing-agency", description: "Paid campaigns focused on leads and conversions.", icon: Target },
  { label: "Google Ads", href: "/google-ads-agency", description: "Capture customers already searching for your service.", icon: Search },
  { label: "Meta Ads", href: "/meta-ads-agency", description: "Reach audiences across Facebook and Instagram.", icon: Megaphone },
  { label: "Social Media Growth", href: "/services/social-media-management", description: "Build visibility and trust with consistent content.", icon: Palette },
  { label: "Lead Generation", href: "/lead-generation-agency", description: "Connect campaigns, landing pages and follow-up.", icon: UserRoundSearch },
  { label: "Marketing Automation", href: "/marketing-automation-agency", description: "Improve response time with practical lead systems.", icon: Workflow },
];

const industryMenuItems: MenuItem[] = [
  { label: "Doctors & Clinics", href: "/industries/doctors-clinics", icon: Stethoscope },
  { label: "Dental Clinics", href: "/industries/dental-clinics", icon: Sparkles },
  { label: "Fertility & IVF", href: "/industries/fertility-ivf", icon: HeartPulse },
  { label: "Education & Coaching", href: "/industries/education-coaching", icon: GraduationCap },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness", icon: Dumbbell },
  { label: "Spas & Wellness", href: "/industries/spas-wellness", icon: Sparkles },
  { label: "Salons", href: "/industries/salons", icon: Palette },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

const whatsappUrl = "https://wa.me/919515256630?text=Hi%20Zexa%20Media%2C%20I%20want%20to%20book%20a%20free%20marketing%20audit.";

export function SiteHeaderClient() {
  const pathname = usePathname();
  const mobileDrawerId = useId();
  const servicesPanelId = useId();
  const industriesPanelId = useId();
  const mobileServicesId = useId();
  const mobileIndustriesId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const industriesTriggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownName | null>(null);

  const isLinkActive = (item: { href: string; exact?: boolean }) => {
    if (item.href === "/") return pathname === "/";
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };
  const servicesActive = serviceMenuItems.some(isLinkActive);
  const industriesActive = pathname === "/industries" || industryMenuItems.some(isLinkActive);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };
  const openDropdown = (name: DropdownName) => { clearCloseTimer(); setActiveDropdown(name); };
  const scheduleDropdownClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const closeNavigation = () => {
    clearCloseTimer();
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const routeCloseTimer = window.setTimeout(() => {
      setActiveDropdown(null);
      setMobileOpen(false);
      setMobileAccordion(null);
    }, 0);
    return () => window.clearTimeout(routeCloseTimer);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setActiveDropdown(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (activeDropdown) {
        const trigger = activeDropdown === "services" ? servicesTriggerRef.current : industriesTriggerRef.current;
        setActiveDropdown(null);
        trigger?.focus();
      }
      setMobileOpen(false);
      setMobileAccordion(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearCloseTimer();
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown]);

  const menuTriggerClass = (active: boolean) =>
    `inline-flex h-11 items-center gap-1 rounded-lg px-2 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] focus-visible:ring-offset-2 xl:px-3 ${active ? "bg-[#eaf8e2] text-[#347d18]" : "text-[#263129] hover:bg-[#f2f6f1] hover:text-[#347d18]"}`;

  return (
    <header ref={headerRef} className={`site-header sticky top-0 z-[100] h-[72px] border-b border-[#dfe6df] bg-white transition-shadow duration-150 ${scrolled ? "shadow-[0_8px_24px_rgba(21,42,27,0.10)]" : "shadow-none"}`}>
      <nav className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center gap-2 px-3 sm:px-5 lg:px-4 xl:gap-4 xl:px-8" aria-label="Primary navigation">
        <Link href="/" className="flex h-12 w-[116px] shrink-0 items-center justify-center rounded-lg bg-[#061008] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] focus-visible:ring-offset-2 xl:w-[156px]" aria-label="Zexa Media home">
          <Image src="/zexa-media-logo-transparent.webp" alt="Zexa Media" width={300} height={97} sizes="(max-width: 1023px) 132px, (max-width: 1279px) 108px, 144px" className="h-auto w-[108px] object-contain xl:w-[144px]" priority />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <DesktopDropdownShell
            name="services" label="Services" panelId={servicesPanelId}
            open={activeDropdown === "services"} active={servicesActive}
            triggerRef={servicesTriggerRef} triggerClass={menuTriggerClass(servicesActive || activeDropdown === "services")}
            onOpen={() => openDropdown("services")} onClose={scheduleDropdownClose}
            onToggle={() => activeDropdown === "services" ? setActiveDropdown(null) : openDropdown("services")}
            panelClass="w-[min(680px,calc(100vw-32px))]"
          >
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#d8e3d8] bg-white p-3 shadow-[0_22px_60px_rgba(19,43,25,0.18)]">
              {serviceMenuItems.map((item) => {
                const active = isLinkActive(item);
                return (
                  <Link key={item.href} href={item.href} role="menuitem" aria-current={active ? "page" : undefined} onClick={closeNavigation} className={`flex min-h-[76px] items-start gap-3 rounded-lg p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] ${active ? "bg-[#eaf8e2] text-[#245b11]" : "text-[#18251c] hover:bg-[#f1f7ef]"}`}>
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-[#e6f7dc] text-[#3f941d]"><item.icon className="size-[18px]" strokeWidth={1.9} /></span>
                    <span className="min-w-0"><span className="block text-[15px] font-bold leading-5">{item.label}</span><span className="mt-1 block text-[13px] leading-[18px] text-[#59665c]">{item.description}</span></span>
                  </Link>
                );
              })}
            </div>
          </DesktopDropdownShell>

          <DesktopDropdownShell
            name="industries" label="Industries" panelId={industriesPanelId}
            open={activeDropdown === "industries"} active={industriesActive}
            triggerRef={industriesTriggerRef} triggerClass={menuTriggerClass(industriesActive || activeDropdown === "industries")}
            onOpen={() => openDropdown("industries")} onClose={scheduleDropdownClose}
            onToggle={() => activeDropdown === "industries" ? setActiveDropdown(null) : openDropdown("industries")}
            panelClass="w-[min(520px,calc(100vw-32px))]"
          >
            <div className="rounded-xl border border-[#d8e3d8] bg-white p-3 shadow-[0_22px_60px_rgba(19,43,25,0.18)]">
              <div className="grid grid-cols-2 gap-2">
                {industryMenuItems.map((item) => {
                  const active = isLinkActive(item);
                  return (
                    <Link key={item.href} href={item.href} role="menuitem" aria-current={active ? "page" : undefined} onClick={closeNavigation} className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] ${active ? "bg-[#eaf8e2] text-[#245b11]" : "text-[#263129] hover:bg-[#f1f7ef] hover:text-[#347d18]"}`}>
                      <item.icon className="size-[18px] shrink-0 text-[#4ba625]" strokeWidth={1.9} /><span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3 border-t border-[#dfe6df] pt-3">
                <Link href="/industries" role="menuitem" aria-current={pathname === "/industries" ? "page" : undefined} onClick={closeNavigation} className={`flex min-h-11 items-center justify-center gap-2 rounded-lg text-[15px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] ${pathname === "/industries" ? "bg-[#eaf8e2] text-[#245b11]" : "bg-[#f2f6f1] text-[#347d18] hover:bg-[#e6f7dc]"}`}>
                  All Industries <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </DesktopDropdownShell>

          {desktopNavItems.map((item) => {
            const active = isLinkActive(item);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`inline-flex h-11 items-center whitespace-nowrap rounded-lg px-2 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] focus-visible:ring-offset-2 xl:px-3 ${active ? "bg-[#eaf8e2] text-[#347d18]" : "text-[#263129] hover:bg-[#f2f6f1] hover:text-[#347d18]"}`}>{item.label}</Link>;
          })}
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a href="tel:+919515256630" aria-label="Call Zexa Media at +91 95152 56630" className="inline-flex h-11 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#cad6ca] px-3 text-[14px] font-bold text-[#263129] transition-colors hover:border-[#63c52d] hover:bg-[#f1f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] focus-visible:ring-offset-2 xl:px-4 xl:text-[15px]"><Phone className="size-4 text-[#4ba625]" />+91 95152 56630</a>
          <Link href="/free-audit" className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-[#86e83e] px-3 text-[14px] font-bold text-[#10220b] shadow-sm transition hover:bg-[#76d832] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d8b1e] focus-visible:ring-offset-2 xl:px-5 xl:text-[15px]">Book Free Audit<ArrowRight className="ml-1.5 size-4" /></Link>
        </div>

        <button type="button" className="ml-auto grid size-11 shrink-0 place-items-center rounded-lg border border-[#cad6ca] text-[#16221a] transition-colors hover:border-[#63c52d] hover:bg-[#f1f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls={mobileDrawerId}><Menu className="size-5" /></button>
      </nav>

      <div className={`fixed inset-0 z-[120] lg:hidden ${mobileOpen ? "visible" : "invisible pointer-events-none"}`} aria-hidden={!mobileOpen}>
        <button type="button" className={`absolute inset-0 bg-[#071006]/65 transition-opacity duration-200 motion-reduce:transition-none ${mobileOpen ? "opacity-100" : "opacity-0"}`} aria-label="Close navigation menu" tabIndex={mobileOpen ? 0 : -1} onClick={closeNavigation} />
        <div id={mobileDrawerId} role="dialog" aria-modal="true" aria-label="Navigation menu" className={`absolute right-0 top-0 flex h-dvh w-[min(92vw,420px)] flex-col overflow-hidden bg-white shadow-[-18px_0_50px_rgba(16,34,20,0.22)] transition-transform duration-200 motion-reduce:transition-none ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#dfe6df] px-4">
            <Link href="/" onClick={closeNavigation} className="flex h-12 w-[132px] items-center justify-center rounded-lg bg-[#061008] px-2"><Image src="/zexa-media-logo-transparent.webp" alt="Zexa Media" width={300} height={97} sizes="120px" className="h-auto w-[120px] object-contain" /></Link>
            <button type="button" className="grid size-11 place-items-center rounded-lg border border-[#cad6ca] text-[#16221a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d]" onClick={closeNavigation} aria-label="Close navigation menu"><X className="size-5" /></button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            <MobileAccordion name="services" label="Services" panelId={mobileServicesId} open={mobileAccordion === "services"} onToggle={() => setMobileAccordion((value) => value === "services" ? null : "services")}>
              {serviceMenuItems.map((item) => <MobileMenuLink key={item.href} item={item} active={isLinkActive(item)} onClick={closeNavigation} />)}
            </MobileAccordion>
            <MobileAccordion name="industries" label="Industries" panelId={mobileIndustriesId} open={mobileAccordion === "industries"} onToggle={() => setMobileAccordion((value) => value === "industries" ? null : "industries")}>
              {industryMenuItems.map((item) => <MobileMenuLink key={item.href} item={item} active={isLinkActive(item)} onClick={closeNavigation} />)}
              <MobileMenuLink item={{ label: "All Industries", href: "/industries", icon: ArrowRight, exact: true }} active={pathname === "/industries"} onClick={closeNavigation} />
            </MobileAccordion>
            <div className="mt-3 border-t border-[#dfe6df] pt-3">
              {desktopNavItems.map((item) => {
                const active = isLinkActive(item);
                return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={closeNavigation} className={`flex min-h-11 items-center rounded-lg px-3 text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] ${active ? "bg-[#eaf8e2] text-[#245b11]" : "text-[#263129] hover:bg-[#f1f7ef]"}`}>{item.label}</Link>;
              })}
            </div>
          </div>
          <div className="shrink-0 border-t border-[#dfe6df] bg-white p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
            <div className="grid grid-cols-2 gap-2">
              <Link href="/free-audit" onClick={closeNavigation} className="flex min-h-12 items-center justify-center rounded-full bg-[#86e83e] px-3 text-center text-[14px] font-bold text-[#10220b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d8b1e]">Book Free Audit</Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cad6ca] px-3 text-[14px] font-bold text-[#263129] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d]"><MessageCircle className="size-4 text-[#4ba625]" />WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

type DesktopDropdownShellProps = {
  name: DropdownName; label: string; panelId: string; open: boolean; active: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>; triggerClass: string;
  onOpen: () => void; onClose: () => void; onToggle: () => void; panelClass: string; children: ReactNode;
};

function DesktopDropdownShell({ name, label, panelId, open, active, triggerRef, triggerClass, onOpen, onClose, onToggle, panelClass, children }: DesktopDropdownShellProps) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button ref={triggerRef} type="button" className={triggerClass} aria-haspopup="menu" aria-expanded={open} aria-controls={panelId} aria-current={active ? "page" : undefined} onClick={onToggle} data-menu={name}>
        {label}<ChevronDown className={`size-4 transition-transform duration-150 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={panelId} role="menu" aria-label={label} onMouseEnter={onOpen} onMouseLeave={onClose} className={`absolute left-0 top-full pt-2 transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none ${panelClass} ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}>
        {children}
      </div>
    </div>
  );
}

type MobileAccordionProps = { name: DropdownName; label: string; panelId: string; open: boolean; onToggle: () => void; children: ReactNode };
function MobileAccordion({ name, label, panelId, open, onToggle, children }: MobileAccordionProps) {
  return <div className="mb-2 overflow-hidden rounded-xl border border-[#dfe6df] bg-[#fafcfa]">
    <button type="button" className="flex min-h-12 w-full items-center justify-between px-4 text-left text-[15px] font-bold text-[#18251c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#63c52d]" aria-expanded={open} aria-controls={panelId} data-accordion={name} onClick={onToggle}>{label}<ChevronDown className={`size-4 transition-transform duration-150 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} /></button>
    <div id={panelId} hidden={!open} className="border-t border-[#dfe6df] p-2">{children}</div>
  </div>;
}

function MobileMenuLink({ item, active, onClick }: { item: MenuItem; active: boolean; onClick: () => void }) {
  return <Link href={item.href} aria-current={active ? "page" : undefined} onClick={onClick} className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63c52d] ${active ? "bg-[#eaf8e2] text-[#245b11]" : "text-[#263129] hover:bg-[#f1f7ef]"}`}><item.icon className="size-[18px] shrink-0 text-[#4ba625]" strokeWidth={1.9} /><span>{item.label}</span></Link>;
}
