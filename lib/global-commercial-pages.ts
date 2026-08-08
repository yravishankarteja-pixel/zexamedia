import type { Metadata } from "next";
import {
  BarChart3,
  Bot,
  Camera,
  ClipboardCheck,
  Filter,
  Gem,
  LineChart,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { absoluteUrl } from "@/lib/site-url";

export type GlobalServiceConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceType: string;
  imageSrc: string;
  imageAlt: string;
  metricLabel: string;
  metricValue: string;
  serviceItems: Array<[string, string, LucideIcon]>;
  outcomes: Array<[string, string]>;
  fit: string[];
  process: Array<[string, string, string]>;
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<[string, string]>;
};

export function globalServiceMetadata(config: GlobalServiceConfig): Metadata {
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: absoluteUrl(`/${config.slug}`) },
  };
}

const worldwideFit = [
  "Healthcare, dental, IVF, aesthetics and wellness businesses",
  "Education, coaching, online learning and training brands",
  "Real estate, construction, home improvement and local-service brands",
  "Spas, salons, gyms, clinics and appointment-led businesses",
  "Consultants, B2B service companies and professional firms",
  "Ecommerce, retail and founder-led growth businesses",
];

export const globalServicePages = {
  performanceMarketing: {
    slug: "performance-marketing-agency",
    eyebrow: "Performance marketing agency",
    title: "Performance marketing for businesses that need measurable growth.",
    description:
      "Zexa Media helps businesses anywhere turn Google Ads, Meta Ads, landing pages, tracking and follow-up into one accountable growth system.",
    metaTitle: "Performance Marketing Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a performance marketing agency for Google Ads, Meta Ads, landing pages, tracking, reporting, automation and qualified lead generation.",
    serviceName: "Performance Marketing Agency",
    serviceType: "Performance Marketing",
    imageSrc: "/images/zexa-hero-strategy.png",
    imageAlt: "Zexa Media performance marketing agency reviewing campaigns and tracking",
    metricLabel: "Growth system",
    metricValue: "Ads, landing pages, tracking, automation, and reporting",
    serviceItems: [
      ["Google Ads", "Capture people actively searching for your offer.", Search],
      ["Meta Ads", "Create demand and retarget warm audiences across Instagram and Facebook.", Megaphone],
      ["Landing Pages", "Improve page clarity, proof, CTA structure and mobile conversion paths.", MousePointerClick],
      ["Tracking", "Connect GA4, pixels, tags, calls, forms, WhatsApp clicks and lead sources.", BarChart3],
      ["Lead Follow-Up", "Improve response speed with WhatsApp-first lead handling and simple workflows.", MessageCircle],
      ["Weekly Optimisation", "Use campaign data to improve spend, lead quality and next-step decisions.", Target],
    ],
    outcomes: [
      ["Measurable campaigns", "Every major activity is connected to calls, forms, WhatsApp enquiries or sales conversations."],
      ["Less wasted spend", "Weak audiences, keywords, creatives and pages are identified before budget scales."],
      ["Better lead quality", "Feedback loops help improve who sees the ads and who becomes a serious enquiry."],
      ["Clear reporting", "Business owners see what is working, what is wasting and what should happen next."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Audit", "Review campaigns, offer clarity, page quality, tracking and lead response gaps."],
      ["02", "Strategy", "Choose the right channel mix, message, budget direction and conversion path."],
      ["03", "Launch", "Build campaigns and tracking around measurable lead or revenue actions."],
      ["04", "Optimise", "Improve traffic quality, creative performance, landing pages and follow-up every week."],
    ],
    faqs: [
      {
        question: "Can Zexa Media work with businesses outside Visakhapatnam or India?",
        answer:
          "Yes. Zexa Media can work remotely with businesses in different cities and countries. Strategy calls, campaign planning, tracking, reporting and optimisation can be handled online.",
      },
      {
        question: "What makes performance marketing different from general digital marketing?",
        answer:
          "Performance marketing focuses on measurable outcomes such as qualified leads, calls, enquiries, sales conversations, cost per lead and return on ad spend.",
      },
      {
        question: "Does Zexa Media guarantee fixed results?",
        answer:
          "No. Zexa Media does not guarantee fixed rankings, lead volume or sales. The focus is responsible setup, accurate tracking, practical optimisation and transparent reporting.",
      },
    ],
    relatedLinks: [
      ["Google Ads Agency", "/google-ads-agency"],
      ["Meta Ads Agency", "/meta-ads-agency"],
      ["Lead Generation Agency", "/lead-generation-agency"],
    ],
  },
  digitalMarketing: {
    slug: "digital-marketing-agency",
    eyebrow: "Digital marketing agency",
    title: "Digital marketing built as one connected growth system.",
    description:
      "Zexa Media helps businesses grow through ads, social media, branding, content, SEO, automation, analytics and lead-generation systems.",
    metaTitle: "Digital Marketing Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a digital marketing agency for Google Ads, Meta Ads, social media, branding, automation, SEO, content, analytics and lead generation.",
    serviceName: "Digital Marketing Agency",
    serviceType: "Digital Marketing",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Zexa Media digital marketing agency creating campaign content and strategy",
    metricLabel: "Connected execution",
    metricValue: "Ads, social, branding, content, SEO, automation, and analytics",
    serviceItems: [
      ["Performance Marketing", "Run paid campaigns around measurable enquiries and sales conversations.", LineChart],
      ["Social Media", "Build consistency, trust and visibility across social platforms.", Sparkles],
      ["Branding", "Clarify positioning, visual identity and offer messaging.", Gem],
      ["Content Production", "Create campaign visuals, Reels, posts and landing-page assets.", Camera],
      ["SEO & AI Search", "Improve crawlability, structured content and answer-ready visibility.", Search],
      ["Automation", "Connect leads, reminders, follow-ups and reporting workflows.", Bot],
    ],
    outcomes: [
      ["Stronger visibility", "Show up across paid, organic, social, local and AI-driven discovery paths."],
      ["Sharper positioning", "Make the offer easier to understand, trust and act on."],
      ["Better conversion", "Give visitors and prospects a clearer path from attention to enquiry."],
      ["Connected reporting", "Understand which channels deserve more attention and budget."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Audit", "Review the brand, content, ads, website, tracking and lead flow."],
      ["02", "Prioritise", "Choose the highest-impact channel or bottleneck to fix first."],
      ["03", "Build", "Create connected campaigns, content, pages, automations and reports."],
      ["04", "Improve", "Use performance data and customer feedback to guide the next execution cycle."],
    ],
    faqs: [
      {
        question: "Can Zexa Media manage digital marketing remotely?",
        answer:
          "Yes. Zexa Media can manage strategy, campaigns, content planning, tracking, reporting and optimisation through online workflows and scheduled reviews.",
      },
      {
        question: "Should every business use every digital marketing channel?",
        answer:
          "No. The best channel mix depends on the business model, offer, audience, budget and current bottleneck. Zexa Media starts with the highest-impact priority.",
      },
      {
        question: "Is digital marketing only about posting content?",
        answer:
          "No. Strong digital marketing connects positioning, content, paid campaigns, website conversion, tracking, automation and reporting.",
      },
    ],
    relatedLinks: [
      ["Performance Marketing Agency", "/performance-marketing-agency"],
      ["Marketing Automation Agency", "/marketing-automation-agency"],
      ["Lead Generation Agency", "/lead-generation-agency"],
    ],
  },
  googleAds: {
    slug: "google-ads-agency",
    eyebrow: "Google Ads agency",
    title: "Google Ads campaigns built around high-intent demand.",
    description:
      "Zexa Media helps businesses capture active search demand with keyword planning, search ads, landing page review, conversion tracking and weekly optimisation.",
    metaTitle: "Google Ads Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a Google Ads agency for search ads, keyword planning, lead generation, landing page review, conversion tracking and campaign optimisation.",
    serviceName: "Google Ads Agency",
    serviceType: "Google Ads Management",
    imageSrc: "/images/zexa-hero-strategy.png",
    imageAlt: "Zexa Media Google Ads agency reviewing search campaign performance",
    metricLabel: "Search intent",
    metricValue: "Keywords, search ads, calls, forms, WhatsApp, and tracking",
    serviceItems: [
      ["Search Campaigns", "Capture people already looking for services like yours.", Search],
      ["Keyword Planning", "Structure commercial keywords, match types and negative keyword lists.", Target],
      ["Ad Copy", "Write clearer ads that match search intent and landing page promises.", ClipboardCheck],
      ["Landing Page Review", "Improve CTA placement, page clarity and mobile conversion paths.", MousePointerClick],
      ["Tracking", "Track calls, forms, WhatsApp clicks and important conversion events.", BarChart3],
      ["Waste Reduction", "Cut weak searches, irrelevant traffic and poor-quality spend.", ShieldCheck],
    ],
    outcomes: [
      ["Higher-intent traffic", "Google Ads reaches people when they are actively comparing or ready to act."],
      ["Cleaner spend", "Search terms and negative keywords reveal what to keep, cut or improve."],
      ["Better conversion paths", "Ad traffic performs better when landing pages and follow-up are clear."],
      ["Actionable reporting", "Campaign reports show what needs budget, testing or cleanup."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Search audit", "Review keywords, search terms, campaigns, pages and conversion actions."],
      ["02", "Campaign plan", "Choose structure, budget, match types, negatives and lead destinations."],
      ["03", "Launch", "Set campaigns live with tracking for the right conversion actions."],
      ["04", "Optimise", "Improve search terms, bids, ads, locations, pages and lead quality."],
    ],
    faqs: [
      {
        question: "Can Zexa Media run Google Ads for businesses anywhere?",
        answer:
          "Yes. Google Ads can be managed remotely for local, national or international campaigns as long as the offer, targeting, landing page and tracking setup are clear.",
      },
      {
        question: "Should a business start with Google Ads or Meta Ads?",
        answer:
          "If people are already searching for the service, Google Ads may be the first priority. If demand needs to be created or retargeted, Meta Ads may support it.",
      },
      {
        question: "Does Zexa Media guarantee Google Ads leads?",
        answer:
          "No. Lead volume depends on competition, budget, offer, landing page quality, tracking and follow-up. Zexa Media focuses on improving the system responsibly.",
      },
    ],
    relatedLinks: [
      ["Performance Marketing Agency", "/performance-marketing-agency"],
      ["Lead Generation Agency", "/lead-generation-agency"],
      ["Meta Ads Agency", "/meta-ads-agency"],
    ],
  },
  metaAds: {
    slug: "meta-ads-agency",
    eyebrow: "Meta Ads agency",
    title: "Meta Ads for demand creation, retargeting and enquiries.",
    description:
      "Zexa Media manages Instagram and Facebook campaigns with creative testing, audience targeting, retargeting, WhatsApp lead paths and reporting.",
    metaTitle: "Meta Ads Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a Meta Ads agency for Instagram Ads, Facebook Ads, creative testing, retargeting, WhatsApp enquiries, lead forms and campaign reporting.",
    serviceName: "Meta Ads Agency",
    serviceType: "Meta Ads Management",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Zexa Media Meta Ads agency planning social ad creatives",
    metricLabel: "Meta campaign system",
    metricValue: "Creative, audiences, retargeting, WhatsApp, and reports",
    serviceItems: [
      ["Instagram & Facebook Ads", "Run campaigns across feeds, Reels, Stories and lead forms.", Megaphone],
      ["Audience Targeting", "Test interests, local markets, warm audiences and lookalikes.", Users],
      ["Creative Testing", "Test hooks, short videos, static creatives, captions and offers.", Camera],
      ["WhatsApp Leads", "Move interested prospects into faster message-based conversations.", MessageCircle],
      ["Retargeting", "Reach people who watched, clicked, visited or engaged but did not enquire.", RefreshCw],
      ["Reporting", "Connect campaign metrics with lead quality and next actions.", BarChart3],
    ],
    outcomes: [
      ["Demand creation", "Reach people before they are actively searching and introduce the offer clearly."],
      ["Creative learning", "Find which hooks, visuals and angles make people stop and act."],
      ["Warm retargeting", "Keep showing up to people who already showed interest."],
      ["Lead-path clarity", "Send prospects to WhatsApp, forms or pages depending on the campaign goal."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Creative audit", "Review profile trust, offer, audiences, visuals and current lead path."],
      ["02", "Testing plan", "Map hooks, creatives, audiences, placements and conversion goals."],
      ["03", "Launch", "Run campaigns with tracking, lead forms, WhatsApp or landing page events."],
      ["04", "Optimise", "Improve creative winners, retargeting pools, budgets and lead quality."],
    ],
    faqs: [
      {
        question: "Can Meta Ads work for businesses outside Zexa Media's local area?",
        answer:
          "Yes. Meta Ads can target specific cities, countries, regions or broader audiences depending on the offer and business model.",
      },
      {
        question: "Are Meta Ads only for likes and reach?",
        answer:
          "No. Meta Ads can be built for leads, WhatsApp enquiries, website visits, retargeting and sales conversations when the campaign path is clear.",
      },
      {
        question: "What makes Meta Ads perform better?",
        answer:
          "Strong creative, clear offer, accurate targeting, fast follow-up, retargeting and lead-quality feedback all improve performance.",
      },
    ],
    relatedLinks: [
      ["Google Ads Agency", "/google-ads-agency"],
      ["Lead Generation Agency", "/lead-generation-agency"],
      ["Digital Marketing Agency", "/digital-marketing-agency"],
    ],
  },
  leadGeneration: {
    slug: "lead-generation-agency",
    eyebrow: "Lead generation agency",
    title: "Lead generation built for qualified conversations.",
    description:
      "Zexa Media helps businesses generate better calls, forms and WhatsApp enquiries through ads, landing pages, lead tracking and follow-up systems.",
    metaTitle: "Lead Generation Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a lead generation agency for qualified calls, WhatsApp enquiries, landing pages, ads, tracking, reporting and follow-up systems.",
    serviceName: "Lead Generation Agency",
    serviceType: "Lead Generation",
    imageSrc: "/images/zexa-hero-strategy.png",
    imageAlt: "Zexa Media lead generation agency tracking enquiries and campaign data",
    metricLabel: "Lead system",
    metricValue: "Traffic, landing pages, WhatsApp, tracking, and lead quality",
    serviceItems: [
      ["Lead Funnel Audit", "Find where prospects come from, drop off or fail to convert.", ClipboardCheck],
      ["Paid Campaigns", "Use Google and Meta campaigns to create measurable enquiry flow.", Target],
      ["Landing Pages", "Improve page clarity, forms, CTAs, proof and mobile paths.", MousePointerClick],
      ["Lead Qualification", "Reduce poor-fit enquiries through targeting, copy and form choices.", Filter],
      ["Follow-Up Systems", "Improve WhatsApp handling, reminders and response visibility.", Workflow],
      ["Reporting", "Track CPL, source, quality, response speed and campaign outcomes.", BarChart3],
    ],
    outcomes: [
      ["Better-fit enquiries", "The goal is qualified conversations, not just more names in a spreadsheet."],
      ["Fewer missed leads", "Follow-up systems reduce the gap between enquiry and response."],
      ["Clearer source quality", "Know which channels produce serious prospects and which waste time."],
      ["Smarter scaling", "Increase budget only after the funnel and tracking make sense."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Lead audit", "Review sources, enquiry quality, response speed and tracking gaps."],
      ["02", "Funnel plan", "Choose call, WhatsApp, form, landing page or hybrid lead paths."],
      ["03", "Launch", "Build campaigns and pages with source and conversion tracking."],
      ["04", "Improve", "Use lead feedback to cut weak sources and improve quality."],
    ],
    faqs: [
      {
        question: "Can Zexa Media generate leads for businesses anywhere?",
        answer:
          "Yes. Zexa Media can support remote lead generation for businesses targeting local, national or international audiences, depending on offer clarity and campaign setup.",
      },
      {
        question: "What counts as a quality lead?",
        answer:
          "A quality lead is someone with the right need, location or buying context, budget fit and willingness to speak or take the next step.",
      },
      {
        question: "Does lead generation mean guaranteed sales?",
        answer:
          "No. Leads and sales are different. Zexa Media can improve enquiry systems, but closing depends on offer, follow-up, pricing, trust and sales handling.",
      },
    ],
    relatedLinks: [
      ["Marketing Automation Agency", "/marketing-automation-agency"],
      ["Google Ads Agency", "/google-ads-agency"],
      ["Meta Ads Agency", "/meta-ads-agency"],
    ],
  },
  marketingAutomation: {
    slug: "marketing-automation-agency",
    eyebrow: "Marketing automation agency",
    title: "Marketing automation that helps teams respond faster.",
    description:
      "Zexa Media builds practical automation for WhatsApp follow-up, CRM handoff, lead alerts, reminders, reporting and campaign visibility.",
    metaTitle: "Marketing Automation Agency | Zexa Media",
    metaDescription:
      "Zexa Media is a marketing automation agency for WhatsApp lead follow-up, CRM workflows, lead tracking, reminders, reporting and campaign automation.",
    serviceName: "Marketing Automation Agency",
    serviceType: "Marketing Automation",
    imageSrc: "/images/zexa-dashboard-review.png",
    imageAlt: "Zexa Media marketing automation dashboard for lead follow-up and reporting",
    metricLabel: "Automation focus",
    metricValue: "Lead alerts, WhatsApp, CRM, reminders, and reports",
    serviceItems: [
      ["Lead Alerts", "Notify the right person when a new enquiry arrives.", MessageCircle],
      ["WhatsApp Follow-Up", "Create quick replies, reminders and practical lead handling flows.", Workflow],
      ["CRM Handoff", "Move leads into sheets, CRM tools or owner dashboards where suitable.", Bot],
      ["Source Tracking", "Connect enquiries to campaign, page, source and channel.", BarChart3],
      ["Reminder Systems", "Reduce forgotten callbacks and slow response windows.", RefreshCw],
      ["Reporting Automation", "Summarise campaign and lead information for better decisions.", ClipboardCheck],
    ],
    outcomes: [
      ["Faster response", "Teams can act sooner when lead alerts and ownership are clear."],
      ["Less manual confusion", "Simple workflows reduce scattered messages and missed follow-up."],
      ["Cleaner reporting", "Owners see where leads came from and what happened next."],
      ["Better conversion support", "Automation helps convert more of the enquiries campaigns already create."],
    ],
    fit: worldwideFit,
    process: [
      ["01", "Workflow audit", "Review how leads arrive, who responds and where follow-up breaks."],
      ["02", "Automation map", "Design practical steps for alerts, labels, reminders and reporting."],
      ["03", "Setup", "Connect forms, WhatsApp, sheets, CRM tools or tracking where appropriate."],
      ["04", "Improve", "Refine workflows based on team behaviour and lead outcomes."],
    ],
    faqs: [
      {
        question: "Can marketing automation be set up remotely?",
        answer:
          "Yes. Most lead alerts, forms, CRM workflows, WhatsApp follow-up planning and reports can be configured or guided remotely.",
      },
      {
        question: "Is automation only for large companies?",
        answer:
          "No. Small businesses often benefit most because faster response and cleaner follow-up can improve the value of existing leads.",
      },
      {
        question: "Can automation replace a sales team?",
        answer:
          "No. Automation supports people; it does not replace trust, conversation and sales handling. It helps teams respond and track more consistently.",
      },
    ],
    relatedLinks: [
      ["Lead Generation Agency", "/lead-generation-agency"],
      ["Digital Marketing Agency", "/digital-marketing-agency"],
      ["Performance Marketing Agency", "/performance-marketing-agency"],
    ],
  },
} satisfies Record<string, GlobalServiceConfig>;

export const globalServiceRoutes = Object.values(globalServicePages).map((page) => `/${page.slug}`);
