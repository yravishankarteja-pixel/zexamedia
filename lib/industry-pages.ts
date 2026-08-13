import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

export type IndustryPageConfig = {
  slug: string;
  industry: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  imageSrc: string;
  imageAlt: string;
  audiences: string[];
  challenges: Array<[string, string]>;
  channels: Array<[string, string]>;
  process: Array<[string, string, string]>;
  measurements: string[];
  safeguards: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<[string, string]>;
};

export const industryPages: IndustryPageConfig[] = [
  {
    slug: "digital-marketing-for-doctors-clinics-vizag",
    industry: "Doctors & Clinics",
    eyebrow: "Healthcare marketing in Visakhapatnam",
    title: "Digital marketing for doctors and clinics in Vizag.",
    description:
      "Build local visibility, patient trust and a measurable appointment enquiry system without using sensational or unsupported healthcare claims.",
    metaTitle: "Digital Marketing for Doctors & Clinics in Vizag | Zexa Media",
    metaDescription:
      "Marketing for doctors and clinics in Visakhapatnam: local search, Google Ads, Meta Ads, landing pages, appointment tracking and responsible patient communication.",
    imageSrc: "/images/zexa-dashboard-review.png",
    imageAlt: "Zexa Media reviewing a measurable digital campaign dashboard",
    audiences: ["Doctors and specialist practices", "Dental and diagnostic clinics", "Fertility and wellness clinics", "Multi-location healthcare practices"],
    challenges: [
      ["High-intent local discovery", "Help nearby patients understand the service, location, appointment path and practical next step."],
      ["Trust before contact", "Use clear practitioner, facility and service information instead of vague promises or fear-based promotion."],
      ["Lost enquiries", "Connect calls, forms and approved messaging channels to a defined response and follow-up process."],
      ["Unclear attribution", "Separate campaign enquiries from organic and referral enquiries so decisions use useful evidence."],
    ],
    channels: [
      ["Local search", "Service and location pages, business-profile consistency and useful answers to patient questions."],
      ["Google Ads", "Intent-led campaigns organised by service, location and appointment goal with conversion tracking."],
      ["Meta Ads", "Educational creative and remarketing designed around awareness and responsible calls to action."],
      ["Landing pages", "Clear service information, doctor or clinic context, location details and simple enquiry routes."],
    ],
    process: [
      ["01", "Audit demand and trust", "Review search intent, existing pages, profiles, tracking and the current appointment journey."],
      ["02", "Define services and areas", "Prioritise the treatments, specialties and local areas the clinic can accurately serve."],
      ["03", "Launch and measure", "Build campaigns and pages around qualified appointment actions, not superficial reach."],
      ["04", "Improve the patient journey", "Use enquiry quality and response data to refine targeting, pages and follow-up."],
    ],
    measurements: ["Qualified appointment enquiries", "Cost per qualified enquiry", "Call and form completion", "Enquiry-to-booking rate", "Response time by channel"],
    safeguards: ["No guaranteed outcomes or unsupported medical claims", "Client approval for clinical service statements", "Consent-aware handling of enquiry information", "Clear separation between marketing information and medical advice"],
    faqs: [
      { question: "Can Zexa Media market individual doctors as well as clinics?", answer: "Yes. The plan can be structured around an individual practitioner, a clinic brand or a multi-location practice, depending on how patients search and book." },
      { question: "Which channel should a clinic start with?", answer: "That depends on demand and trust. Google Search can fit known treatment demand, while local pages, business-profile work and clear clinic information may need to be fixed first." },
      { question: "How are appointment enquiries measured?", answer: "A suitable setup can track calls, forms and campaign-specific actions. The clinic still needs a consistent method to record whether an enquiry became a qualified appointment." },
      { question: "Do you guarantee patient numbers?", answer: "No. Marketing performance depends on demand, competition, offer, reputation, response speed and service capacity. Zexa focuses on measurable improvement rather than guarantees." },
    ],
    relatedServices: [["Google Ads management", "/google-ads-agency-visakhapatnam"], ["Lead generation", "/lead-generation-agency-visakhapatnam"], ["Marketing automation", "/marketing-automation-agency-visakhapatnam"]],
  },
  {
    slug: "digital-marketing-for-spas-vizag",
    industry: "Spas & Wellness",
    eyebrow: "Spa marketing in Visakhapatnam",
    title: "Digital marketing for spas and wellness brands in Vizag.",
    description: "Turn local discovery and visual content into trackable calls, messages and booking enquiries with a clear offer and follow-up system.",
    metaTitle: "Digital Marketing for Spas in Vizag | Zexa Media",
    metaDescription: "Marketing for spas in Visakhapatnam with Meta Ads, Google Ads, local visibility, original content, booking journeys and lead follow-up.",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Zexa Media producing original campaign content for a local brand",
    audiences: ["Day spas", "Wellness studios", "Beauty and body-care centres", "Multi-branch local wellness brands"],
    challenges: [["Offer fatigue", "Build campaigns around a clear reason to book without relying on endless discounting."], ["Generic creative", "Use original, location-relevant visuals that show the experience and set accurate expectations."], ["Message leakage", "Create a response process so enquiries do not sit unanswered in inboxes."], ["Repeat visits", "Plan ethical re-engagement around customer consent and actual service cycles."]],
    channels: [["Meta Ads", "Visual campaigns for discovery, offers and remarketing with trackable booking actions."], ["Google Search", "Capture people already looking for relevant spa and wellness services nearby."], ["Local presence", "Keep service, location, hours and contact information consistent across the website and profiles."], ["Content", "Create useful service explainers, authentic visuals and answers to common pre-booking questions."]],
    process: [["01", "Clarify the offer", "Identify profitable services, capacity, service area and booking constraints."], ["02", "Create the journey", "Connect creative, offer, landing experience and enquiry response."], ["03", "Launch with tracking", "Measure calls, messages and forms by campaign and service."], ["04", "Optimise for bookings", "Review lead quality, response speed and confirmed booking feedback."]],
    measurements: ["Booking enquiries", "Cost per qualified enquiry", "Message response time", "Enquiry-to-booking rate", "Repeat enquiry rate where consented"],
    safeguards: ["No fabricated reviews or before-and-after claims", "Accurate service descriptions", "Consent-aware remarketing and follow-up", "Clear offer terms and availability"],
    faqs: [{ question: "Can you create spa campaign content?", answer: "Zexa Media can plan and produce original campaign assets where included in scope, using the real environment and services rather than generic stock claims." }, { question: "Should a spa use Google Ads or Meta Ads?", answer: "Google can capture existing intent, while Meta can create discovery through visual creative. The right mix depends on service demand, capacity, offer and budget." }, { question: "Can you track WhatsApp enquiries?", answer: "Campaign clicks and defined website actions can be tracked. Confirmed booking quality still needs a consistent record inside the business." }, { question: "Do you guarantee bookings?", answer: "No. Results depend on the offer, demand, competition, reputation, creative and response process. Campaigns are managed toward measurable enquiry quality." }],
    relatedServices: [["Meta Ads management", "/meta-ads-agency-visakhapatnam"], ["Social media management", "/services/social-media-management"], ["Lead generation", "/lead-generation-agency-visakhapatnam"]],
  },
  {
    slug: "digital-marketing-for-salons-vizag",
    industry: "Salons",
    eyebrow: "Salon marketing in Visakhapatnam",
    title: "Digital marketing for salons in Vizag.",
    description: "Create a consistent local brand, promote priority services and build a measurable path from social discovery or search to booking enquiry.",
    metaTitle: "Digital Marketing for Salons in Vizag | Zexa Media",
    metaDescription: "Digital marketing for salons in Visakhapatnam with social content, Meta Ads, Google Ads, local search visibility and booking enquiry tracking.",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Original local-business content production led by Zexa Media",
    audiences: ["Unisex salons", "Beauty salons", "Bridal and makeup studios", "Multi-location salon brands"],
    challenges: [["Inconsistent visibility", "Maintain a clear content and campaign rhythm around the services customers actually book."], ["Weak differentiation", "Clarify experience, location, specialty and brand value without unsupported superlatives."], ["Busy inboxes", "Route and label enquiries so staff can respond quickly and consistently."], ["Unknown campaign value", "Connect promotions to trackable enquiry actions and confirmed booking feedback."]],
    channels: [["Instagram and Facebook", "Original Reels, service education, team context and locally relevant campaigns."], ["Meta Ads", "Targeted discovery and remarketing around priority services and booking windows."], ["Google Search", "Capture nearby customers searching for a salon or specific service."], ["Local landing pages", "Present services, location, hours, proof and enquiry options in one clear journey."]],
    process: [["01", "Choose priority services", "Align campaigns with margin, capacity, seasonality and customer intent."], ["02", "Build content and offer", "Create accurate assets and a clear booking proposition."], ["03", "Track enquiries", "Connect ads and pages to calls, forms or approved messaging actions."], ["04", "Refine with booking data", "Use staff feedback and confirmed outcomes to improve campaign quality."]],
    measurements: ["Qualified booking enquiries", "Cost per enquiry", "Creative response", "Enquiry-to-booking rate", "Response time"],
    safeguards: ["Permission for identifiable customer content", "No fabricated transformations or reviews", "Clear promotional terms", "Consent-aware follow-up"],
    faqs: [{ question: "Can Zexa Media manage salon social media and ads together?", answer: "Yes. Content and paid campaigns can share one service calendar, offer strategy and visual system so customers receive a consistent message." }, { question: "What content works for a salon?", answer: "Useful service education, authentic work, team expertise, location context and clear booking information usually build more trust than generic trend posts alone." }, { question: "Can campaign performance be tied to bookings?", answer: "Enquiry actions can be tracked, but the salon needs to record confirmed bookings and service value consistently for stronger attribution." }, { question: "Is a large ad budget required?", answer: "Not necessarily. The starting budget should reflect local demand, competition, service value and the amount of booking capacity available." }],
    relatedServices: [["Social media management", "/services/social-media-management"], ["Meta Ads management", "/meta-ads-agency-visakhapatnam"], ["Branding and positioning", "/services/branding"]],
  },
  {
    slug: "digital-marketing-for-real-estate-vizag",
    industry: "Real Estate",
    eyebrow: "Real estate marketing in Visakhapatnam",
    title: "Digital marketing for real estate businesses in Vizag.",
    description: "Build project visibility and a trackable lead qualification system for developers, builders and brokers—without disguising raw enquiries as sales.",
    metaTitle: "Digital Marketing for Real Estate in Vizag | Zexa Media",
    metaDescription: "Real estate marketing in Visakhapatnam for builders, developers and brokers using Google Ads, Meta Ads, landing pages, lead qualification and reporting.",
    imageSrc: "/images/zexa-dashboard-review.png",
    imageAlt: "Campaign reporting and lead-quality review at Zexa Media",
    audiences: ["Builders and developers", "Project marketing teams", "Real estate brokers", "Plot and gated-community campaigns"],
    challenges: [["Low-quality volume", "Define location, budget and project-fit signals before treating an enquiry as qualified."], ["Slow follow-up", "Create ownership, alerts and response expectations for every campaign lead."], ["Fragmented project information", "Bring location, configuration, approvals supplied by the client and enquiry path into a clear page."], ["Misleading reporting", "Separate clicks, raw leads, qualified prospects, site visits and bookings."]],
    channels: [["Google Ads", "Capture location, project and property-type intent with focused landing pages."], ["Meta Ads", "Use project creative and audience testing to generate and re-engage relevant interest."], ["Landing pages", "Present the project clearly with client-approved facts, useful qualification and direct next steps."], ["Lead operations", "Route enquiries, track source and create a feedback loop between sales and campaigns."]],
    process: [["01", "Define project fit", "Document inventory, location, buyer profile, budget range and lead-handling capacity."], ["02", "Build campaigns and pages", "Align search and social creative with accurate project information."], ["03", "Qualify and route", "Capture useful intent fields and notify the right sales owner quickly."], ["04", "Optimise beyond CPL", "Use qualification, site-visit and sales feedback rather than raw lead cost alone."]],
    measurements: ["Qualified prospect rate", "Cost per qualified lead", "Lead response time", "Site-visit progression", "Source-to-booking feedback where available"],
    safeguards: ["Only client-approved project and regulatory information", "No guaranteed appreciation or investment returns", "Transparent lead-stage reporting", "Consent-aware enquiry handling"],
    faqs: [{ question: "Does Zexa Media work with builders and brokers?", answer: "Yes. Campaign structure can be adapted for a developer, a specific project or a brokerage, with clear ownership of project facts and lead follow-up." }, { question: "How do you reduce low-quality real estate leads?", answer: "Use clearer project information, focused targeting, useful qualification fields and sales feedback. No targeting method can eliminate every unsuitable enquiry." }, { question: "Which metrics matter beyond cost per lead?", answer: "Qualification rate, response time, contact rate, site-visit progression and eventual booking feedback provide a more useful view than raw lead count." }, { question: "Can you create a project landing page?", answer: "Landing-page planning and improvement can be included, using accurate information and assets approved by the client." }],
    relatedServices: [["Performance marketing", "/performance-marketing-agency-visakhapatnam"], ["Google Ads management", "/google-ads-agency-visakhapatnam"], ["Marketing automation", "/marketing-automation-agency-visakhapatnam"]],
  },
];

export const industryRoutes = industryPages.map((page) => `/industries/${page.slug}`);

export function getIndustryPage(slug: string) {
  const page = industryPages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown industry page: ${slug}`);
  return page;
}

export function industryMetadata(config: IndustryPageConfig): Metadata {
  const url = absoluteUrl(`/industries/${config.slug}`);
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: config.metaTitle, description: config.metaDescription, url, type: "website" },
  };
}
