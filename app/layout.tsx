import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { AnimeSiteMotion } from "@/components/animation/anime-site-motion";
import { SiteHeaderClient } from "@/components/site-header-client";
import { phoneHref, SiteFooter, whatsappUrl } from "@/components/site-footer";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Performance Marketing Agency in Visakhapatnam | Zexa Media",
  description:
    "Zexa Media helps Vizag businesses grow with Google Ads, Meta Ads, lead generation, marketing automation, and clear ROI tracking.",
  alternates: {
    canonical: siteUrl,
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  openGraph: {
    title: "Performance Marketing Agency in Visakhapatnam | Zexa Media",
    description:
      "Google Ads, Meta Ads, lead generation, automation, and ROI-focused growth systems for businesses in Visakhapatnam.",
    url: siteUrl,
    siteName: "Zexa Media",
    type: "website",
    images: [
      {
        url: absoluteUrl("/zexa-media-logo.png"),
        width: 1536,
        height: 1024,
        alt: "Zexa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency in Visakhapatnam | Zexa Media",
    description:
      "Google Ads, Meta Ads, lead generation, automation, and ROI-focused growth systems for businesses in Visakhapatnam.",
    images: [absoluteUrl("/zexa-media-logo.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google-provided snippet is kept verbatim for the requested head placement. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTH8PNQW');`,
          }}
        />
      </head>
      <body className="min-h-full bg-[#050806]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NTH8PNQW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SiteHeaderClient />
        <AnimeSiteMotion />
        {children}
        <SiteFooter />
        <Link
          href={phoneHref}
          className="magnetic-cta fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#8EEA4D]/30 bg-[#071006]/90 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition hover:border-[#8EEA4D] hover:text-[#8EEA4D] sm:inline-flex"
        >
          Call for Free Audit
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#8EEA4D] px-4 text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 sm:px-5"
          aria-label="Chat with Zexa Media on WhatsApp"
        >
          <MessageCircle className="size-6" />
          <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
