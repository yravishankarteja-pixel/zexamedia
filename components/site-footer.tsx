import Image from "next/image";
import Link from "next/link";
import {
  contactEmail,
  fullAddress,
  mapUrl,
  phoneHref,
  phoneNumber,
  secondaryPhoneHref,
  secondaryPhoneNumber,
  serviceAreaLabel,
  socialLinks,
  whatsappUrl,
} from "@/lib/business-info";

export {
  contactEmail,
  fullAddress,
  mapUrl,
  phoneHref,
  phoneNumber,
  secondaryPhoneHref,
  secondaryPhoneNumber,
  serviceAreaLabel,
  socialLinks,
  whatsappUrl,
};

function BrandMark() {
  return (
    <span className="relative block h-16 w-56 overflow-hidden">
      <Image
        src="/zexa-media-logo-transparent.png"
        alt="Zexa Media"
        fill
        sizes="224px"
        className="object-contain object-left"
      />
    </span>
  );
}

function FooterColumn({
  title,
  links,
}: Readonly<{ title: string; links: Array<[string, string]> }>) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm">
        {links.map(([label, href]) => (
          <Link key={href} className="text-white/78 transition hover:text-[#8EEA4D]" href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#8EEA4D]/18 bg-[#030604] px-5 py-8 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8EEA4D]/60 to-transparent" />
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(142,234,77,0.08),rgba(255,255,255,0.035)_32%,rgba(0,0,0,0.2))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_90px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col gap-4 border-b border-white/10 bg-black/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8EEA4D]">
              Zexa Media
            </p>
            <p className="mt-2 text-sm text-white/66">
              Growth marketing, tracking, automation, and lead follow-up for serious local brands.
            </p>
          </div>
          <Link
            href="/free-audit"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
          >
            Book Free Audit
          </Link>
        </div>
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.65fr_0.95fr] lg:p-10">
          <div>
            <Link href="/" className="inline-flex flex-col gap-3" aria-label="Zexa Media home">
              <BrandMark />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8EEA4D]">
                Rank higher. Convert faster. Grow stronger.
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
              Zexa Media is a growth marketing agency in Visakhapatnam helping businesses grow with
              ads, content, landing pages, automation, and analytics.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Google Ads", "Meta Ads", "Automation", "Analytics"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-audit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-5 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
              >
                Book Free Audit
              </Link>
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

          <FooterColumn
            title="Explore"
            links={[
              ["Home", "/"],
              ["Services", "/services"],
              ["Remote Services", "/remote-marketing-services"],
              ["How We Work", "/how-we-work"],
              ["Growth System", "/growth-system"],
              ["Packages", "/packages"],
              ["Case Studies", "/case-studies"],
              ["Blog", "/blog"],
              ["Free Audit", "/free-audit"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy-policy"],
            ]}
          />

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/54">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
              <a className="transition hover:text-[#8EEA4D]" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <a className="transition hover:text-[#8EEA4D]" href={phoneHref}>
                Phone: {phoneNumber}
              </a>
              <a className="transition hover:text-[#8EEA4D]" href={secondaryPhoneHref}>
                Alternate: {secondaryPhoneNumber}
              </a>
              <a
                className="transition hover:text-[#8EEA4D]"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {phoneNumber}
              </a>
              <a
                className="transition hover:text-[#8EEA4D]"
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {fullAddress}
              </a>
              <span>Serving {serviceAreaLabel}.</span>
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
        <div className="flex flex-col gap-4 border-t border-white/10 bg-black/20 px-6 py-5 text-sm text-white/48 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>Copyright {year} Zexa Media. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="transition hover:text-[#8EEA4D]" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-[#8EEA4D]" href="/contact">
              Contact
            </Link>
            <span>zexamedia.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
