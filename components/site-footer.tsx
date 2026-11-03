import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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

const serviceLinks: Array<[string, string]> = [
  ["Services", "/services"],
  ["Performance Marketing", "/performance-marketing-agency"],
  ["Google Ads", "/google-ads-agency"],
  ["Meta Ads", "/meta-ads-agency"],
  ["Lead Generation", "/lead-generation-agency"],
  ["Marketing Automation", "/marketing-automation-agency"],
  ["Digital Marketing Agency Vizag", "/digital-marketing-agency-visakhapatnam"],
];

const industryLinks: Array<[string, string]> = [
  ["Doctors & Clinics", "/industries/doctors-clinics"],
  ["Dental Clinics", "/industries/dental-clinics"],
  ["Fertility & IVF", "/industries/fertility-ivf"],
  ["Education & Coaching", "/industries/education-coaching"],
  ["Gyms & Fitness", "/industries/gyms-fitness"],
  ["Spas & Wellness", "/industries/spas-wellness"],
  ["Salons", "/industries/salons"],
  ["Real Estate", "/industries/real-estate"],
];

const companyLinks: Array<[string, string]> = [
  ["Home", "/"],
  ["About", "/about"],
  ["Industries Overview", "/industries"],
  ["Remote Services", "/remote-marketing-services"],
  ["How We Work", "/how-we-work"],
  ["Growth System", "/growth-system"],
  ["Packages", "/packages"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Free Audit", "/free-audit"],
  ["Contact", "/contact"],
  ["Privacy Policy", "/privacy-policy"],
];

function FooterLinkGroup({
  title,
  links,
}: Readonly<{ title: string; links: Array<[string, string]> }>) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-300">
        {title}
      </h3>
      <nav aria-label={`${title} footer links`} className="mt-4 grid gap-1">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="flex min-h-10 w-fit items-center text-sm font-medium text-white/65 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function BrandMark() {
  return (
    <Image
      src="/images/zexa-logo-trimmed.webp"
      alt="Zexa Media"
      width={600}
      height={199}
      sizes="(max-width: 640px) 150px, 180px"
      loading="lazy"
      className="h-auto w-[150px] object-contain object-left sm:w-[180px]"
    />
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020403] pb-20 pt-14 text-white md:pb-6 lg:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-[1200px] bg-gradient-to-r from-transparent via-[#61E003]/65 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-4 min-[480px]:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[#61E003]/20 bg-[linear-gradient(120deg,rgba(97,224,3,0.12),rgba(10,16,11,0.96)_42%,rgba(10,16,11,0.96))] px-6 py-8 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-300">
              Ready for clearer growth?
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Turn marketing activity into enquiries you can track.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/58">
              More enquiries. Faster follow-up. Clear reporting.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/free-audit"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#61E003] px-6 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#76ef1e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
            >
              Book Free Audit <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 bg-white/[0.04] px-6 text-sm font-semibold transition-colors duration-150 hover:border-[#61E003]/70 hover:text-[#61E003] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
            >
              <MessageCircle className="mr-2 size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-14">
          <div>
            <Link href="/" className="inline-flex" aria-label="Zexa Media home">
              <BrandMark />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Performance marketing and digital growth systems for businesses
              that need qualified leads, dependable tracking and faster
              follow-up.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Zexa Media on ${item.label}`}
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-xs font-bold text-white/62 transition hover:border-[#8EEA4D]/45 hover:text-[#8EEA4D]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Services" links={serviceLinks} />
          <FooterLinkGroup title="Industries" links={industryLinks} />
          <div>
            <FooterLinkGroup title="Company" links={companyLinks} />
            <div className="mt-7 grid gap-2 border-t border-white/10 pt-5 text-sm text-white/65">
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex min-h-10 items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-[#61E003]" />
                  <span className="break-all">{contactEmail}</span>
                </a>
              ) : null}
              <a
                href={phoneHref}
                className="flex min-h-10 items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-[#61E003]" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={secondaryPhoneHref}
                className="flex min-h-10 items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-[#61E003]" />
                <span>{secondaryPhoneNumber}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center gap-3 transition-colors hover:text-white"
              >
                <MessageCircle className="size-4 shrink-0 text-[#61E003]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-start gap-3 leading-6 transition-colors hover:text-white"
              >
                <MapPin className="mt-1 size-4 shrink-0 text-[#61E003]" />
                <span>{fullAddress}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zexa Media. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
