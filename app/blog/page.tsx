import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Megaphone, Workflow } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/marketing-shell";

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
    category: "Growth Strategy",
    readingTime: "4 min read",
    description:
      "A clear explanation of how growth marketing connects ads, content, tracking, and follow-up.",
    icon: BarChart3,
  },
  {
    title: "How to Run Meta Ads for a Local Business in Vizag",
    href: "/blog/meta-ads-local-business-vizag",
    category: "Meta Ads",
    readingTime: "5 min read",
    description:
      "A practical local-business view of creative, targeting, lead quality, and WhatsApp follow-up.",
    icon: Megaphone,
  },
  {
    title: "5 Marketing Automations Every Small Business in India Should Set Up Today",
    href: "/blog/marketing-automation-small-business",
    category: "Automation",
    readingTime: "5 min read",
    description:
      "Simple automation ideas that help small businesses respond faster and lose fewer leads.",
    icon: Workflow,
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
            <Link
              key={post.href}
              href={post.href}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] transition duration-250 hover:-translate-y-1 hover:border-[#8EEA4D]/35 hover:bg-white/[0.06]"
            >
              <div className="relative overflow-hidden border-b border-white/10 bg-[#071006] p-6">
                <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_20%,rgba(142,234,77,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)] transition duration-250 group-hover:scale-[1.025]" />
                <div className="relative grid min-h-32 place-items-center rounded-[1.25rem] border border-white/10 bg-black/20">
                  <post.icon className="size-11 text-[#8EEA4D]" strokeWidth={1.7} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8EEA4D]">
                  <span>{post.category}</span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/42">{post.readingTime}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-tight">{post.title}</h2>
                <p className="mt-4 leading-7 text-white/58">{post.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-white/72 transition group-hover:text-[#8EEA4D]">
                  Read Article
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
