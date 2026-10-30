import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { founder } from "@/data/founder";

type FounderBlockProps = {
  variant: "compact" | "full";
};

export function FounderBlock({ variant }: Readonly<FounderBlockProps>) {
  const isFull = variant === "full";

  return (
    <section
      aria-labelledby={`founder-heading-${variant}`}
      className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B]/90 ${
        isFull ? "p-5 sm:p-7 lg:p-9" : "p-5 sm:p-6"
      }`}
    >
      <div
        className={`grid gap-7 ${
          isFull
            ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10"
            : "md:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] md:items-center"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] ${
            isFull ? "aspect-[4/5] md:aspect-auto md:min-h-[31rem]" : "aspect-[4/3] min-h-[15rem]"
          }`}
        >
          <Image
            src={founder.photo}
            alt={`${founder.name}, founder of Zexa Media, Visakhapatnam`}
            width={1000}
            height={667}
            sizes={
              isFull
                ? "(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 470px"
                : "(max-width: 767px) 100vw, 360px"
            }
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,8,6,0.42))]" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8EEA4D]">
            Meet the founder
          </p>
          <h2
            id={`founder-heading-${variant}`}
            className={`${isFull ? "mt-5 text-4xl sm:text-5xl" : "mt-4 text-3xl sm:text-4xl"} font-semibold leading-tight text-white`}
          >
            {founder.name}
          </h2>
          <p className="mt-2 font-semibold text-[#CFFFAB]">{founder.title}</p>
          <p className={`mt-5 text-white/64 ${isFull ? "text-lg leading-8" : "leading-7"}`}>
            {founder.bio}
          </p>

          {founder.experience.length > 0 && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {founder.experience.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-[#8EEA4D]">{item.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/42">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {isFull && founder.credentials.length > 0 && (
            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Credentials
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {founder.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="rounded-full border border-[#8EEA4D]/20 bg-[#8EEA4D]/8 px-4 py-2 text-sm font-semibold text-[#CFFFAB]"
                  >
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={founder.ctas.audit.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8EEA4D] px-6 text-sm font-bold text-[#071006] transition hover:-translate-y-0.5"
            >
              {founder.ctas.audit.label}
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href={founder.ctas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 text-sm font-bold text-white transition hover:border-[#8EEA4D]/50 hover:text-[#8EEA4D]"
            >
              <MessageCircle className="mr-2 size-4" />
              {founder.ctas.whatsapp.label}
            </a>
            <a
              href={founder.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-5 text-sm font-semibold text-white/72 transition hover:border-[#8EEA4D]/50 hover:text-[#8EEA4D]"
            >
              <ExternalLink className="mr-2 size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
