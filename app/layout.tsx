import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zexamedia.in"),
  title: "Zexa Media | Growth Marketing Agency Vizag",
  description:
    "Zexa Media helps Vizag businesses grow with Google Ads, Meta Ads, branding & automation. ROI-focused. Results-driven. Get a free audit today.",
  alternates: {
    canonical: "https://zexamedia.in",
  },
  openGraph: {
    title: "Zexa Media | Growth Marketing Agency Vizag",
    description:
      "ROI-focused growth marketing for Vizag businesses using Google Ads, Meta Ads, branding, social media, and automation.",
    url: "https://zexamedia.in",
    siteName: "Zexa Media",
    type: "website",
    images: [
      {
        url: "https://zexamedia.in/zexa-media-logo.png",
        width: 1536,
        height: 1024,
        alt: "Zexa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zexa Media | Growth Marketing Agency Vizag",
    description:
      "ROI-focused growth marketing for Vizag businesses using Google Ads, Meta Ads, branding, social media, and automation.",
    images: ["https://zexamedia.in/zexa-media-logo.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
