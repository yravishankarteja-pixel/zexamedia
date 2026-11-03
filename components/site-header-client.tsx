"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Menu,
  Megaphone,
  Palette,
  Phone,
  Search,
  Sparkles,
  Stethoscope,
  Target,
  UserRoundSearch,
  Workflow,
  X,
} from "lucide-react";

type DropdownName = "services" | "industries";
type MenuItem = {
  label: string;
  href: string;
  description?: string;
  icon: LucideIcon;
  exact?: boolean;
};

const desktopNavItems = [
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Contact", href: "/contact" },
];

const serviceMenuItems: MenuItem[] = [
  {
    label: "Services Overview",
    href: "/services",
    description: "Explore our complete digital growth services.",
    icon: Sparkles,
    exact: true,
  },
  {
    label: "Performance Marketing",
    href: "/performance-marketing-agency",
    description: "Paid campaigns focused on leads and conversions.",
    icon: Target,
  },
  {
    label: "Google Ads",
    href: "/google-ads-agency",
    description: "Capture customers already searching for your service.",
    icon: Search,
  },
  {
    label: "Meta Ads",
    href: "/meta-ads-agency",
    description: "Reach audiences across Facebook and Instagram.",
    icon: Megaphone,
  },
  {
    label: "Social Media Growth",
    href: "/services/social-media-management",
    description: "Build visibility and trust with consistent content.",
    icon: Palette,
  },
  {
    label: "Lead Generation",
    href: "/lead-generation-agency",
    description: "Connect campaigns, landing pages and follow-up.",
    icon: UserRoundSearch,
  },
  {
    label: "Marketing Automation",
    href: "/marketing-automation-agency",
    description: "Improve response time with practical lead systems.",
    icon: Workflow,
  },
];

const industryMenuItems: MenuItem[] = [
  {
    label: "Doctors & Clinics",
    href: "/industries/doctors-clinics",
    icon: Stethoscope,
  },
  {
    label: "Dental Clinics",
    href: "/industries/dental-clinics",
    icon: Sparkles,
  },
  {
    label: "Fertility & IVF",
    href: "/industries/fertility-ivf",
    icon: HeartPulse,
  },
  {
    label: "Education & Coaching",
    href: "/industries/education-coaching",
    icon: GraduationCap,
  },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness", icon: Dumbbell },
  {
    label: "Spas & Wellness",
    href: "/industries/spas-wellness",
    icon: Sparkles,
  },
  { label: "Salons", href: "/industries/salons", icon: Palette },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

const focusableSelector =
  "a[href],button:not([disabled]),[tabindex]:not([tabindex='-1'])";

export function SiteHeaderClient() {
  const pathname = usePathname();
  const mobileDrawerId = useId();
  const servicesPanelId = useId();
  const industriesPanelId = useId();
  const mobileServicesId = useId();
  const mobileIndustriesId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const industriesTriggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(
    null,
  );
  const [mobileAccordion, setMobileAccordion] = useState<DropdownName | null>(
    null,
  );

  const isLinkActive = useCallback(
    (item: { href: string; exact?: boolean }) =>
      item.exact
        ? pathname === item.href
        : pathname === item.href || pathname.startsWith(`${item.href}/`),
    [pathname],
  );
  const servicesActive = serviceMenuItems.some(isLinkActive);
  const industriesActive =
    pathname === "/industries" || industryMenuItems.some(isLinkActive);
  const clearCloseTimer = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };
  const openDropdown = (name: DropdownName) => {
    clearCloseTimer();
    setActiveDropdown(name);
  };
  const scheduleDropdownClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const closeNavigation = useCallback((restoreFocus = false) => {
    clearCloseTimer();
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileAccordion(null);
    if (restoreFocus)
      requestAnimationFrame(() => mobileTriggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => closeNavigation(), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, closeNavigation]);
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;
    const drawer = drawerRef.current;
    const focusables = Array.from(
      drawer.querySelectorAll<HTMLElement>(focusableSelector),
    );
    focusables[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeNavigation(true);
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables.at(-1)!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeNavigation]);
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      )
        setActiveDropdown(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeDropdown) {
        const trigger =
          activeDropdown === "services"
            ? servicesTriggerRef.current
            : industriesTriggerRef.current;
        setActiveDropdown(null);
        trigger?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearCloseTimer();
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown]);

  const navClass = (active: boolean) =>
    `relative inline-flex h-11 items-center whitespace-nowrap px-3 text-[14px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071006] ${active ? "text-[#61E003] after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-[#61E003]" : "text-white/78 hover:text-white"}`;

  return (
    <header
      ref={headerRef}
      className={`site-header sticky top-0 z-[100] h-[72px] border-b border-white/10 bg-[#071006]/[0.98] backdrop-blur-md transition-shadow duration-150 ${scrolled ? "shadow-[0_8px_22px_rgba(0,0,0,.28)]" : "shadow-none"}`}
    >
      <nav
        className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center gap-2 px-4 min-[480px]:px-6"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex h-12 w-[132px] shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071006]"
          aria-label="Zexa Media home"
        >
          <Image
            src="/images/zexa-logo-trimmed.webp"
            alt="Zexa Media"
            width={600}
            height={199}
            sizes="(max-width: 1023px) 120px, 144px"
            className="h-8 w-auto object-contain lg:h-10"
            priority
          />
        </Link>
        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <DesktopDropdownShell
            name="services"
            label="Services"
            panelId={servicesPanelId}
            open={activeDropdown === "services"}
            active={servicesActive}
            triggerRef={servicesTriggerRef}
            triggerClass={navClass(
              servicesActive || activeDropdown === "services",
            )}
            onOpen={() => openDropdown("services")}
            onClose={scheduleDropdownClose}
            onToggle={() =>
              activeDropdown === "services"
                ? setActiveDropdown(null)
                : openDropdown("services")
            }
            panelClass="w-[680px] -left-28"
          >
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-[#0C150E] p-3 shadow-lg">
              {serviceMenuItems.map((item) => (
                <DesktopMenuItem
                  key={item.href}
                  item={item}
                  active={isLinkActive(item)}
                  onClick={() => closeNavigation()}
                />
              ))}
            </div>
          </DesktopDropdownShell>
          <DesktopDropdownShell
            name="industries"
            label="Industries"
            panelId={industriesPanelId}
            open={activeDropdown === "industries"}
            active={industriesActive}
            triggerRef={industriesTriggerRef}
            triggerClass={navClass(
              industriesActive || activeDropdown === "industries",
            )}
            onOpen={() => openDropdown("industries")}
            onClose={scheduleDropdownClose}
            onToggle={() =>
              activeDropdown === "industries"
                ? setActiveDropdown(null)
                : openDropdown("industries")
            }
            panelClass="w-[560px] -left-40"
          >
            <div className="rounded-xl border border-white/10 bg-[#0C150E] p-3 shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                {industryMenuItems.map((item) => (
                  <DesktopMenuItem
                    key={item.href}
                    item={item}
                    active={isLinkActive(item)}
                    compact
                    onClick={() => closeNavigation()}
                  />
                ))}
              </div>
              <div className="mt-3 border-t border-white/10 pt-3">
                <Link
                  href="/industries"
                  role="menuitem"
                  onClick={() => closeNavigation()}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold text-[#61E003] hover:bg-[#61E003]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
                >
                  All Industries <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </DesktopDropdownShell>
          {desktopNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isLinkActive(item) ? "page" : undefined}
              className={navClass(isLinkActive(item))}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href="tel:+919515256630"
            aria-label="Call Zexa Media at +91 95152 56630"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-150 hover:border-[#61E003]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] min-[1280px]:w-auto min-[1280px]:gap-2 min-[1280px]:px-4"
          >
            <Phone className="size-4 text-[#61E003]" />
            <span className="hidden text-sm font-semibold min-[1280px]:inline">
              +91 95152 56630
            </span>
          </a>
          <Link
            href="/free-audit"
            className="magnetic-cta inline-flex h-10 items-center rounded-lg bg-[#61E003] px-4 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#76ef1e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071006]"
          >
            Book Free Audit
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
        <button
          ref={mobileTriggerRef}
          type="button"
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-lg border border-white/30 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls={mobileDrawerId}
        >
          <Menu className="size-5" />
        </button>
      </nav>
      <MobileNav
        ref={drawerRef}
        open={mobileOpen}
        drawerId={mobileDrawerId}
        servicesId={mobileServicesId}
        industriesId={mobileIndustriesId}
        accordion={mobileAccordion}
        pathname={pathname}
        onAccordion={setMobileAccordion}
        onClose={closeNavigation}
        isActive={isLinkActive}
      />
    </header>
  );
}

function DesktopMenuItem({
  item,
  active,
  compact = false,
  onClick,
}: {
  item: MenuItem;
  active: boolean;
  compact?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      role="menuitem"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`flex items-start gap-3 rounded-lg px-3 py-3 text-white transition-colors duration-150 hover:bg-[#61E003]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] ${active ? "bg-[#61E003]/10" : ""}`}
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#61E003]/10 text-[#61E003]">
        <item.icon className="size-4" />
      </span>
      <span>
        <span className="block text-sm font-semibold leading-5">
          {item.label}
        </span>
        {!compact && item.description && (
          <span className="mt-1 block text-[13px] leading-[18px] text-white/60">
            {item.description}
          </span>
        )}
      </span>
    </Link>
  );
}

type DesktopDropdownShellProps = {
  name: DropdownName;
  label: string;
  panelId: string;
  open: boolean;
  active: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  triggerClass: string;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  panelClass: string;
  children: ReactNode;
};
function DesktopDropdownShell({
  name,
  label,
  panelId,
  open,
  active,
  triggerRef,
  triggerClass,
  onOpen,
  onClose,
  onToggle,
  panelClass,
  children,
}: DesktopDropdownShellProps) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        aria-current={active ? "page" : undefined}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
        data-menu={name}
      >
        {label}
        <ChevronDown
          className={`ml-1 size-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        role="menu"
        aria-label={label}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        className={`absolute top-full z-[130] transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none ${panelClass} ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
      >
        {children}
      </div>
    </div>
  );
}

const MobileNav = ({
  ref,
  open,
  drawerId,
  servicesId,
  industriesId,
  accordion,
  pathname,
  onAccordion,
  onClose,
  isActive,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  drawerId: string;
  servicesId: string;
  industriesId: string;
  accordion: DropdownName | null;
  pathname: string;
  onAccordion: (name: DropdownName | null) => void;
  onClose: (restoreFocus?: boolean) => void;
  isActive: (item: { href: string; exact?: boolean }) => boolean;
}) => (
  <div
    className={`fixed inset-0 z-[120] lg:hidden ${open ? "visible" : "invisible pointer-events-none"}`}
    aria-hidden={!open}
  >
    <button
      type="button"
      className={`absolute inset-0 bg-black/70 transition-opacity duration-150 ${open ? "opacity-100" : "opacity-0"}`}
      aria-label="Close navigation menu"
      tabIndex={open ? 0 : -1}
      onClick={() => onClose(true)}
    />
    <div
      ref={ref}
      id={drawerId}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`absolute right-0 top-0 flex h-dvh w-[min(92vw,420px)] flex-col overflow-hidden border-l border-white/10 bg-[#071006] transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
        <Link href="/" onClick={() => onClose()}>
          <Image
            src="/images/zexa-logo-trimmed.webp"
            alt="Zexa Media"
            width={600}
            height={199}
            sizes="120px"
            className="h-8 w-auto"
          />
        </Link>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/20 text-white focus-visible:ring-2 focus-visible:ring-[#61E003]"
          onClick={() => onClose(true)}
          aria-label="Close navigation menu"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <MobileAccordion
          label="Services"
          panelId={servicesId}
          open={accordion === "services"}
          onToggle={() =>
            onAccordion(accordion === "services" ? null : "services")
          }
        >
          {serviceMenuItems.map((item) => (
            <MobileMenuLink
              key={item.href}
              item={item}
              active={isActive(item)}
              onClick={() => onClose()}
            />
          ))}
        </MobileAccordion>
        <MobileAccordion
          label="Industries"
          panelId={industriesId}
          open={accordion === "industries"}
          onToggle={() =>
            onAccordion(accordion === "industries" ? null : "industries")
          }
        >
          {industryMenuItems.map((item) => (
            <MobileMenuLink
              key={item.href}
              item={item}
              active={isActive(item)}
              onClick={() => onClose()}
            />
          ))}
          <MobileMenuLink
            item={{
              label: "All Industries",
              href: "/industries",
              icon: ArrowRight,
              exact: true,
            }}
            active={pathname === "/industries"}
            onClick={() => onClose()}
          />
        </MobileAccordion>
        <div className="mt-3 border-t border-white/10 pt-3">
          {desktopNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onClose()}
              className={`flex min-h-12 items-center rounded-lg px-3 text-[15px] font-semibold focus-visible:ring-2 focus-visible:ring-[#61E003] ${isActive(item) ? "text-[#61E003]" : "text-white/78"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-white/10 p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
        <Link
          href="/free-audit"
          onClick={() => onClose()}
          className="flex min-h-12 items-center justify-center rounded-lg bg-[#61E003] px-3 text-center text-sm font-semibold text-black"
        >
          Book Free Audit
        </Link>
        <a
          href="tel:+919515256630"
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-3 text-sm font-semibold text-white"
        >
          <Phone className="size-4 text-[#61E003]" />
          +91 95152 56630
        </a>
      </div>
    </div>
  </div>
);

function MobileAccordion({
  label,
  panelId,
  open,
  onToggle,
  children,
}: {
  label: string;
  panelId: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mb-2 overflow-hidden rounded-xl border border-white/10">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between px-4 text-left text-[15px] font-semibold text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#61E003]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div id={panelId} hidden={!open} className="border-t border-white/10 p-2">
        {children}
      </div>
    </div>
  );
}
function MobileMenuLink({
  item,
  active,
  onClick,
}: {
  item: MenuItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`flex min-h-12 items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-semibold focus-visible:ring-2 focus-visible:ring-[#61E003] ${active ? "bg-[#61E003]/10 text-[#61E003]" : "text-white/75 hover:bg-white/5"}`}
    >
      <item.icon className="size-[18px] shrink-0 text-[#61E003]" />
      <span>{item.label}</span>
    </Link>
  );
}
