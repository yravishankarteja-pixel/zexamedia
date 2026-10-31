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

function FooterLinkGroup({ title, links }: Readonly<{ title: string; links: Array<[string, string]> }>) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-[0.22em] text-[#8EEA4D]">{title}</h3>
      <nav aria-label={`${title} footer links`} className="mt-5 grid gap-3">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="w-fit text-sm font-medium leading-6 text-white/62 transition hover:translate-x-0.5 hover:text-white">
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
      src="/zexa-media-logo-transparent.webp"
      alt="Zexa Media"
      width={300}
      height={97}
      sizes="(max-width: 640px) 180px, 210px"
      loading="lazy"
      unoptimized
      className="h-auto w-[180px] object-contain object-left sm:w-[210px]"
    />
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#020403] px-5 pb-6 pt-14 text-white sm:px-8 lg:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#8EEA4D]/65 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#8EEA4D]/18 bg-[linear-gradient(120deg,rgba(142,234,77,0.14),rgba(10,16,11,0.96)_42%,rgba(10,16,11,0.96))] px-6 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.32)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-9">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8EEA4D]">Ready for clearer growth?</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">Turn marketing activity into enquiries you can track.</h2>
            <p className="mt-3 text-sm leading-7 text-white/58">More enquiries. Faster follow-up. Clear reporting.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link href="/free-audit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-6 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5">
              Book Free Audit <ArrowRight className="ml-2 size-4" />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 text-sm font-bold transition hover:border-[#8EEA4D]/55 hover:text-[#8EEA4D]">
              <MessageCircle className="mr-2 size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 px-1 py-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12 xl:py-14">
          <div>
            <Link href="/" className="inline-flex" aria-label="Zexa Media home"><BrandMark /></Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">Performance marketing and digital growth systems for businesses that need qualified leads, dependable tracking and faster follow-up.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Zexa Media on ${item.label}`} className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-xs font-bold text-white/62 transition hover:border-[#8EEA4D]/45 hover:text-[#8EEA4D]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Services" links={serviceLinks} />
          <FooterLinkGroup title="Industries" links={industryLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
        </div>

        <div className="grid gap-5 border-t border-white/8 py-7 text-sm text-white/62 md:grid-cols-[auto_auto_1fr] md:items-start md:gap-8">
          {contactEmail ? <a href={`mailto:${contactEmail}`} className="flex gap-3 transition hover:text-white"><Mail className="mt-0.5 size-4 shrink-0 text-[#8EEA4D]" /><span className="break-all">{contactEmail}</span></a> : null}
          <div className="grid gap-3">
            <a href={phoneHref} className="flex gap-3 transition hover:text-white"><Phone className="mt-0.5 size-4 shrink-0 text-[#8EEA4D]" /><span>{phoneNumber}</span></a>
            <a href={secondaryPhoneHref} className="flex gap-3 transition hover:text-white"><Phone className="mt-0.5 size-4 shrink-0 text-[#8EEA4D]" /><span>{secondaryPhoneNumber}</span></a>
          </div>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 leading-6 transition hover:text-white md:justify-self-end md:text-right"><MapPin className="mt-1 size-4 shrink-0 text-[#8EEA4D]" /><span className="max-w-xl">{fullAddress}</span></a>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/8 py-5 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zexa Media. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Serving {serviceAreaLabel}</span>
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
