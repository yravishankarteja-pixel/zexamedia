import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, GlassCard, PageHero, PageShell, Section } from "@/components/marketing-shell";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Social Media Management Agency Vizag | Zexa Media",
  description:
    "Zexa Media manages Instagram, Facebook, Reels, content calendars and Telugu social media campaigns for businesses in Vizag.",
  alternates: { canonical: absoluteUrl("/services/social-media-management") },
};

const pageUrl = absoluteUrl("/services/social-media-management");

const socialMediaFaqs = [
  {
    question: "What does a social media management agency do?",
    answer:
      "A social media management agency plans content strategy, creates posts and Reels, writes captions, schedules content, manages community responses and reports performance. The goal is to build trust, improve consistency and turn attention into real business enquiries.",
  },
  {
    question: "How many Instagram posts should a business publish per week?",
    answer:
      "Businesses should aim for 4 to 5 posts per week on Instagram: 2 to 3 static posts or carousels, 1 to 2 Reels, and 4 to 5 Stories. Consistency matters more than volume because a reliable posting schedule builds audience trust over time.",
  },
  {
    question: "What types of content work best for local business marketing in India?",
    answer:
      "For local businesses in India, short-form videos, customer testimonials, before-and-after posts, offers, promotions and educational content in regional languages such as Telugu and Hindi work well on Instagram and Facebook.",
  },
  {
    question: "Can Zexa Media create Telugu content for Vizag audiences?",
    answer:
      "Yes. Zexa Media can create bilingual English and Telugu social media content for businesses targeting Visakhapatnam and Andhra Pradesh audiences. Local-language content can make posts, Reels and ads feel more relevant to nearby customers.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Social Media Management Agency in Visakhapatnam",
  serviceType: "Social Media Management",
  url: pageUrl,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Zexa Media",
    url: siteUrl,
  },
  areaServed: ["Visakhapatnam", "Vizag", "Andhra Pradesh", "India"],
  description:
    "Instagram management, Facebook page management, Reels strategy, social media content calendars and bilingual content creation for businesses in Visakhapatnam.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: socialMediaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SocialMediaPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Social media management agency in Vizag"
        title="Social Media Management Agency in Visakhapatnam"
        description="Zexa Media manages Instagram, Facebook, Reels and social media content strategy for Vizag businesses that need consistent brand presence, stronger local trust and more qualified enquiries."
      />

      <Section eyebrow="What we do" title="Content that educates, entertains, and converts.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Monthly Content Calendar",
              "Plan posts, Reels, stories and campaigns around your offers, audience questions and seasonal business priorities.",
            ],
            [
              "Creative Design",
              "Create branded static posts, carousels, story graphics and Reel covers that look consistent across Instagram and Facebook.",
            ],
            [
              "Reel Production",
              "Script, direct and edit short videos that improve reach, explain your service and make the brand feel active.",
            ],
            [
              "Photoshoot Coordination",
              "Help plan monthly content shoots so your social media uses real people, real work and real business environments.",
            ],
            [
              "Community Management",
              "Support timely responses, comment handling and enquiry routing so interested users are not left waiting.",
            ],
            [
              "Monthly Reporting",
              "Track reach, engagement, follower growth, content performance and enquiry signals so the next month gets sharper.",
            ],
          ].map(([item, copy]) => (
            <GlassCard key={item}>
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-white/62">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local strategy" title="Social content built for Vizag and Andhra Pradesh audiences.">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <GlassCard>
            <h2 className="text-2xl font-semibold">Your audience needs more than regular posting.</h2>
            <p className="mt-4 leading-8 text-white/62">
              We do not post for the sake of posting. Every content piece has a role:
              education for trust, Reels for reach, carousels for clarity, stories for
              daily touchpoints and testimonials for social proof.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold">Local language makes the brand feel closer.</h2>
            <p className="mt-4 leading-8 text-white/62">
              For businesses serving Vizag and Andhra Pradesh, bilingual English and Telugu
              content can make social media feel more familiar, relevant and useful to the
              people most likely to visit, enquire or book.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Social media management answers.">
        <div className="grid gap-5 lg:grid-cols-2">
          {socialMediaFaqs.map((faq) => (
            <GlassCard key={faq.question}>
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-4 leading-8 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="Need a stronger Instagram and Facebook presence?">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <CheckList
            items={[
              "We review your current profiles, content quality, posting frequency and audience fit.",
              "You get a practical content direction before committing to a monthly plan.",
              "We connect content ideas with offers, local relevance and lead-generation goals.",
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/free-audit"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-7 text-base font-bold text-[#071006] transition hover:-translate-y-1"
            >
              Start Social Growth
            </Link>
            <Link
              href="/services/performance-marketing"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/7 px-7 text-base font-semibold text-white/86 transition hover:border-[#8EEA4D]/60"
            >
              See Paid Ads
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
