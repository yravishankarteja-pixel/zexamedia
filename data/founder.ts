export type FounderExperienceStat = {
  value: string;
  label: string;
};

export const founder = {
  // TODO: Confirm the founder's preferred public display name before final approval.
  name: "Ravi Shankar Teja",
  title: "Founder, Zexa Media",
  photo: "/images/founder.jpg",
  // TODO: Founder to review and approve this 92-word first-person bio.
  bio: "I’m Ravi Shankar Teja, founder of Zexa Media in Visakhapatnam. I work with businesses that need a clearer connection between marketing activity and measurable enquiries. My focus is bringing Google Ads, Meta Ads, landing pages, conversion tracking, local SEO and follow-up systems into one practical growth process. Being based in Vizag helps me stay close to the realities of local service businesses while supporting clients beyond the city as well. I believe business owners should understand where their budget goes, what is being tested and which actions are contributing to leads and conversions.",
  // TODO: Add only verified founder-level figures, such as years of experience, clients served or ad spend managed.
  experience: [] as FounderExperienceStat[],
  // TODO: Add verified credentials only, including the exact certification name and issuing body.
  credentials: [] as string[],
  // TODO: Replace the company-page URL with Ravi's verified personal LinkedIn profile when provided.
  linkedinUrl: "https://www.linkedin.com/company/zexamedia-official/",
  ctas: {
    audit: {
      label: "Book Free Audit",
      href: "/free-audit",
    },
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/919515256630?text=Hi%20Zexa%20Media%2C%20I%20want%20to%20book%20a%20free%20marketing%20audit.",
    },
  },
} as const;

