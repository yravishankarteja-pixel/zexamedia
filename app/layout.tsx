import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { MessageCircle } from "lucide-react";
import Script from "next/script";
import { SiteHeaderClient } from "@/components/site-header-client";
import { SiteFooter, whatsappUrl } from "@/components/site-footer";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});


const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zexa Media | Digital Marketing & Performance Marketing Agency",
  description:
    "Zexa Media helps businesses grow with Google Ads, Meta Ads, SEO, lead generation and marketing automation from Visakhapatnam, India.",
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
    title: "Zexa Media | Digital Marketing & Performance Marketing Agency",
    description:
      "Google Ads, Meta Ads, SEO, lead generation and marketing automation from Zexa Media in Visakhapatnam, India.",
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
    title: "Zexa Media | Digital Marketing & Performance Marketing Agency",
    description:
      "Google Ads, Meta Ads, SEO, lead generation and marketing automation from Zexa Media in Visakhapatnam, India.",
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
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050806]">
        <Script
          id="google-analytics-library"
          src="https://www.googletagmanager.com/gtag/js?id=G-TSY10BW7VW"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());


gtag('config', 'G-TSY10BW7VW');`,
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTH8PNQW');`,
          }}
        />
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
        {children}
        <SiteFooter />
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
