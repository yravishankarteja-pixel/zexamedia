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
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0A100B]/90 ${
        isFull ? "p-5 sm:p-7 lg:p-9" : "p-5 sm:p-6"
      }`}
    >
      <div
        className={`grid gap-7 ${
          isFull
            ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10"
            : "md:grid-cols-[40fr_60fr] md:items-center"
        }`}
      >
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_38%,rgba(97,224,3,0.12),rgba(255,255,255,0.025)_54%,transparent_76%)] ${
            isFull ? "md:min-h-[31rem]" : ""
          }`}
        >
          <Image
            src={founder.photo}
            alt={`${founder.name}, founder of Zexa Media, Visakhapatnam`}
            width={941}
            height={1672}
            sizes={
              isFull
                ? "(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 470px"
                : "(max-width: 767px) 100vw, 360px"
            }
            loading="lazy"
            className="absolute inset-0 size-full object-contain object-bottom px-3 pt-3 sm:px-5 sm:pt-5"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(180deg,transparent,rgba(5,8,6,0.28))]" />
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
          <p
            className={`mt-5 max-w-[65ch] text-white/75 ${isFull ? "text-lg leading-8" : "leading-7"}`}
          >
            {founder.bio}
          </p>

          {founder.experience.length > 0 && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {founder.experience.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-[#8EEA4D]">
                    {item.value}
                  </p>
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
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#61E003] px-6 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#76ef1e]"
            >
              {founder.ctas.audit.label}
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href={founder.ctas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#61E003]/70"
            >
              <MessageCircle className="mr-2 size-4" />
              {founder.ctas.whatsapp.label}
            </a>
            <a
              href={founder.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-semibold text-white/75 transition-colors duration-150 hover:border-[#61E003]/70 hover:text-white"
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
