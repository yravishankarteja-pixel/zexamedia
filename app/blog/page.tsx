import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Marketing Blog | Growth Tips by Zexa Media",
  description:
    "Practical digital marketing tips and strategies from Zexa Media on Google Ads, Meta Ads, branding, automation and growth marketing.",
  alternates: { canonical: "https://zexamedia.in/blog" },
};

const posts = [
  {
    title: "What Is Growth Marketing? And Why Every Vizag Business Needs It",
    href: "/blog/what-is-growth-marketing",
    keyword: "growth marketing agency",
  },
  {
    title: "How to Run Meta Ads for a Local Business in Vizag",
    href: "/blog/meta-ads-local-business-vizag",
    keyword: "Meta Ads for local business Vizag",
  },
  {
    title: "5 Marketing Automations Every Small Business in India Should Set Up Today",
    href: "/blog/marketing-automation-small-business",
    keyword: "marketing automation small business India",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Growth marketing insights for ambitious local businesses."
        description="Practical guides on paid ads, automation, branding, social media, and measurable growth."
      />
      <Section eyebrow="Articles" title="Start with the core growth topics.">
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.href} href={post.href}>
              <GlassCard>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8EEA4D]">
                  {post.keyword}
                </p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight">{post.title}</h2>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
