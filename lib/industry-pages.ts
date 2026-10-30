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
  searchIntents?: Array<[string, string]>;
  deliverables?: Array<[string, string]>;
  leadEvents?: Array<[string, string]>;
  proof?: {
    title: string;
    summary: string;
    metrics: Array<[string, string]>;
  } | null;
  timeline?: Array<[string, string, string]>;
  complianceLine?: string;
  relatedIndustries?: Array<[string, string, string]>;
};

export const industryPages: IndustryPageConfig[] = [
  {
    slug: "doctors-clinics",
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
    slug: "spas-wellness",
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
    slug: "salons",
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
    slug: "real-estate",
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
  {
    // TODO: Verify search volume for "dental clinic marketing Visakhapatnam".
    // TODO: Add proof, client names or patient testimonials only with verified data and documented permission.
    slug: "dental-clinics",
    industry: "Dental Clinics",
    eyebrow: "Dental clinic marketing in Visakhapatnam",
    title: "Dental Clinic Marketing in Visakhapatnam: More Trackable Appointment Enquiries",
    description:
      "We help independent dentists, specialist dental practices and multi-chair clinics in Visakhapatnam build a clearer path from local search to an appointment enquiry. Dental marketing often fails when every treatment is placed in one campaign, the clinic page lacks practical trust information, or reception teams cannot identify where calls and WhatsApp messages came from. The focus is accurate service communication, local visibility and measurable enquiry handling.",
    metaTitle: "Dental Clinic Marketing in Vizag | Zexa Media",
    metaDescription:
      "Dental clinic marketing in Visakhapatnam using Google Ads, local SEO, landing pages, call tracking and responsible appointment follow-up.",
    imageSrc: "/images/zexa-dashboard-review.png",
    imageAlt: "Zexa Media reviewing a dental clinic marketing and appointment tracking plan",
    audiences: ["Independent dental clinics", "Specialist dental practices", "Multi-chair clinics", "Dental practices serving local neighbourhoods"],
    challenges: [["Service-specific intent", "Separate preventive, restorative, orthodontic and urgent-care searches instead of sending every visitor to one generic page."], ["Local trust", "Make location, practitioner details, hours and appointment steps easy to understand."], ["Reception attribution", "Give staff a practical way to distinguish campaign enquiries from organic and referral calls."], ["Healthcare compliance", "Use factual service information without promises, fear-based messaging or unsupported outcomes."]],
    channels: [["Google Ads", "Capture treatment and location intent with tightly grouped campaigns and relevant landing pages."], ["Meta Ads", "Use responsible educational creative for awareness and remarketing without before-and-after promises."], ["Local SEO", "Strengthen service pages, location signals and consistent clinic information."], ["WhatsApp follow-up", "Create a clear response path for appointment requests without giving clinical advice through advertising."]],
    process: [["01", "Clarify services", "Document the treatments the clinic can accurately promote, appointment capacity and local service area."], ["02", "Build intent paths", "Match search themes and creative to focused pages and enquiry actions."], ["03", "Launch measurement", "Track calls, WhatsApp clicks, forms and confirmed appointment requests."], ["04", "Improve quality", "Use reception feedback to refine search terms, pages and follow-up."]],
    measurements: ["Tracked phone calls", "WhatsApp enquiry clicks", "Appointment forms", "Appointments marked as booked", "Cost per qualified appointment enquiry"],
    safeguards: ["No success-rate or guaranteed-result claims", "No before-and-after promises", "No patient testimonials without documented consent", "Client approval for all clinical statements"],
    faqs: [
      { question: "What budget should a dental clinic start with?", answer: "The budget should be based on the treatments being promoted, local competition, search demand and the number of appointments the clinic can handle. We review those inputs before recommending a test budget; we do not publish an invented universal figure." },
      { question: "How soon can dental marketing generate useful data?", answer: "Tracking and campaign checks begin after launch, but meaningful patterns require enough real searches, clicks and reception feedback. The first 30 days are normally used to validate search terms, enquiry paths and lead quality rather than promise a fixed result." },
      { question: "How are dental appointment enquiries tracked?", answer: "Defined lead events can include calls from campaign pages, WhatsApp clicks, completed appointment forms and appointments later marked as booked by the clinic. Clinical outcomes are not marketing conversion events." },
      { question: "How do you handle dental advertising compliance?", answer: "We use factual, client-approved service information and avoid guaranteed outcomes, fear-based claims, unsupported comparisons and unconsented patient material. Final clinical accuracy and approvals remain with the clinic." },
    ],
    relatedServices: [["Google Ads management", "/google-ads-agency-visakhapatnam"], ["Local lead generation", "/lead-generation-agency-visakhapatnam"], ["Marketing packages", "/packages"]],
    searchIntents: [["Dentist near me", "People comparing nearby clinics, opening hours, directions and a direct call option."], ["Dental clinic in Vizag", "Broad local discovery where location, services and practitioner context influence the next step."], ["Tooth pain dentist near me", "Urgent-intent searches that need a clear call path without diagnosis or outcome promises."], ["Braces or aligner consultation", "Treatment-research searches focused on suitability questions, consultation availability and clinic access."], ["Root canal dentist Visakhapatnam", "Service-specific searches where a focused factual page is more useful than a generic homepage."], ["పంటి డాక్టర్ దగ్గరలో", "Telugu-language local intent that may lead to a call, map visit or WhatsApp enquiry."]],
    deliverables: [["Google Ads by treatment intent", "Separate campaigns and search themes around approved priority services, local areas and appointment actions."], ["Meta education and remarketing", "Promote responsible service education and clinic familiarity without transformation or success claims."], ["Local SEO foundations", "Improve service-location relevance, internal links and consistent clinic information for nearby discovery."], ["Focused landing pages", "Present the service, clinic context, location and appointment path without overwhelming visitors."], ["WhatsApp response workflow", "Give reception teams a concise enquiry response and source-labelling process."]],
    leadEvents: [["Call", "A tracked call initiated from a campaign or focused landing page."], ["WhatsApp", "A click into the approved clinic WhatsApp enquiry path."], ["Form", "A completed appointment or consultation request form."], ["Appointment booked", "A lead that reception later records as an appointment, without implying a treatment outcome."]],
    proof: null,
    timeline: [["First 30 days", "Foundation and launch", "Confirm approved services, repair tracking, review local search intent, build focused pages and launch controlled campaign tests."], ["Days 31–60", "Quality refinement", "Review search terms, calls, WhatsApp enquiries and reception notes. Exclude irrelevant intent and improve page clarity where users hesitate."], ["Days 61–90", "Measured expansion", "Use verified enquiry quality to decide whether to expand treatments, locations, creative or remarketing. No expansion is based on click volume alone."]],
    complianceLine: "We follow Google Ads healthcare policies and Indian advertising guidelines.",
    relatedIndustries: [["Doctors and clinics", "/industries/doctors-clinics", "The doctors-and-clinics page covers broader medical practice marketing; this page focuses specifically on dental service searches and dental appointment journeys."], ["Case studies", "/case-studies", "Review documented campaign evidence from industries where publishing permission and verified data are available."]],
  },
  {
    // TODO: Verify search volume for "IVF clinic marketing Visakhapatnam".
    // TODO: Add proof, client names or patient testimonials only with verified data and documented permission.
    slug: "fertility-ivf",
    industry: "Fertility & IVF Clinics",
    eyebrow: "IVF clinic marketing in Visakhapatnam",
    title: "IVF Clinic Marketing in Visakhapatnam: Responsible Consultation Enquiries",
    description:
      "We help fertility specialists and IVF clinics in Visakhapatnam make complex services easier to understand while creating a measurable route to a confidential consultation enquiry. Prospective patients may research for weeks, compare doctors and facilities, and move between Google, social content and direct messages. Marketing must support informed discovery without promising pregnancy, treatment success, gender selection or any individual medical outcome.",
    metaTitle: "IVF Clinic Marketing in Vizag | Zexa Media",
    metaDescription:
      "Responsible IVF clinic marketing in Visakhapatnam with search ads, local SEO, consultation pages, tracking and confidential follow-up.",
    imageSrc: "/images/zexa-dashboard-review.png",
    imageAlt: "Zexa Media planning responsible IVF clinic marketing and consultation tracking",
    audiences: ["Fertility specialists", "IVF centres", "Multi-specialty hospitals with fertility services", "Clinics offering approved fertility consultations"],
    challenges: [["Long research journeys", "Support people who compare services, specialists, processes and locations across multiple visits."], ["Sensitive communication", "Keep enquiry handling private, respectful and free from pressure or outcome promises."], ["Complex service language", "Explain approved consultation pathways clearly without turning marketing into medical advice."], ["Incomplete attribution", "Connect calls, forms and messaging actions while protecting sensitive information."]],
    channels: [["Google Ads", "Organise approved fertility-service intent around consultations, clinic location and specialist discovery."], ["Meta Ads", "Use educational, policy-aware creative for awareness and remarketing without personal-attribute pressure."], ["Local SEO", "Build accurate specialist, service and location information for organic research."], ["Consultation pages", "Provide a calm, factual route from questions to a confidential enquiry."]],
    process: [["01", "Approve claims and services", "Confirm terminology, services, locations and clinical review responsibilities."], ["02", "Map the research journey", "Structure content around discovery, consultation questions and practical clinic access."], ["03", "Launch private enquiry paths", "Track approved actions without collecting unnecessary sensitive data."], ["04", "Review consultation quality", "Use authorised staff feedback to improve intent and communication."]],
    measurements: ["Consultation calls", "WhatsApp enquiry clicks", "Consultation forms", "Appointments recorded as booked", "Response time without storing clinical detail in advertising tools"],
    safeguards: ["No pregnancy or treatment success guarantees", "No gender-selection claims or promotion", "No patient stories without documented consent", "No diagnosis or personalised medical advice in advertising"],
    faqs: [
      { question: "How should an IVF clinic set its marketing budget?", answer: "Budget planning should consider approved services, geographic reach, search competition, consultation capacity and the clinic’s ability to respond privately. We recommend a test structure only after reviewing those inputs and never attach guaranteed consultation numbers." },
      { question: "How long does IVF marketing take to evaluate?", answer: "Fertility research journeys can be longer than ordinary local-service searches. Early weeks validate policy compliance, search relevance and enquiry tracking; later decisions should use qualified consultation feedback rather than clicks alone." },
      { question: "What counts as an IVF marketing lead?", answer: "A defined lead may be a tracked call, WhatsApp enquiry, completed consultation form or appointment recorded by authorised clinic staff. A treatment start, pregnancy or clinical outcome must not be presented as a promised advertising result." },
      { question: "What compliance rules apply to fertility advertising?", answer: "Campaigns must avoid guaranteed outcomes, gender-selection promotion, exploitative messaging, unsupported success rates and unconsented patient content. Clinical statements require approval from the clinic." },
    ],
    relatedServices: [["Google Ads management", "/google-ads-agency-visakhapatnam"], ["Landing-page lead generation", "/lead-generation-agency-visakhapatnam"], ["Marketing packages", "/packages"]],
    searchIntents: [["IVF clinic near me", "Local comparison searches involving location, specialist availability and consultation access."], ["IVF specialist in Visakhapatnam", "Doctor-led research where credentials and factual clinic information matter."], ["Fertility consultation Vizag", "People looking for a first conversation rather than an advertised outcome."], ["IUI or ICSI information", "Service-research intent that needs approved educational content and a consultation option."], ["Infertility doctor near me", "Sensitive local intent where privacy, tone and direct contact routes matter."], ["IVF డాక్టర్ విశాఖపట్నం", "Telugu-language discovery that may progress to a confidential call or message."]],
    deliverables: [["Policy-aware Google Search", "Build approved keyword groups around specialist, consultation and service research intent."], ["Responsible Meta education", "Use neutral educational themes without implying knowledge of a person’s health status or promising outcomes."], ["Local organic visibility", "Improve specialist, service and location pages for people researching clinics over time."], ["Consultation landing pages", "Create calm pages with factual information, location details and privacy-conscious enquiry choices."], ["Confidential follow-up design", "Define who receives enquiries, how quickly they respond and what data should not enter advertising systems."]],
    leadEvents: [["Call", "A tracked consultation call from an approved campaign or clinic page."], ["WhatsApp", "A click into the clinic’s approved confidential enquiry channel."], ["Form", "A completed consultation request collecting only necessary contact information."], ["Appointment booked", "A consultation recorded by authorised staff; no clinical result is inferred."]],
    proof: null,
    timeline: [["First 30 days", "Compliance and foundations", "Review approved services and claims, map consultation intent, implement privacy-conscious tracking and prepare focused pages."], ["Days 31–60", "Search and message refinement", "Analyse irrelevant searches, enquiry pathways and authorised consultation feedback while refining content and exclusions."], ["Days 61–90", "Careful scale decisions", "Expand only the services, locations or educational themes supported by compliant demand and qualified consultation evidence."]],
    complianceLine: "We follow Google Ads healthcare policies and Indian advertising guidelines.",
    relatedIndustries: [["Doctors and clinics", "/industries/doctors-clinics", "The doctors-and-clinics page covers general medical appointment marketing; this page addresses the longer, more sensitive fertility research and consultation journey."], ["Case studies", "/case-studies", "Only verified and permission-approved evidence is published; fertility patient outcomes are never used as promised marketing results."]],
  },
  {
    // TODO: Verify search volume for "coaching institute digital marketing Visakhapatnam".
    // TODO: Add proof or client names only with verified data and documented permission.
    slug: "education-coaching",
    industry: "Education & Coaching Institutes",
    eyebrow: "Coaching institute digital marketing in Visakhapatnam",
    title: "Coaching Institute Marketing in Visakhapatnam: More Qualified Course Enquiries",
    description:
      "We help coaching centres, training academies and skill-development institutes in Visakhapatnam turn course discovery into trackable counselling enquiries. Education campaigns often attract broad curiosity but fail to explain who a programme is for, what the learning format includes or how a student should speak with an advisor. The strategy connects search, social content, focused course pages and timely follow-up without guaranteeing admissions, ranks, jobs or placements.",
    metaTitle: "Coaching Institute Marketing Vizag | Zexa Media",
    metaDescription:
      "Digital marketing for coaching institutes in Visakhapatnam using Google Ads, Meta Ads, course pages, counselling tracking and WhatsApp follow-up.",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Zexa Media planning digital marketing for a coaching institute in Visakhapatnam",
    audiences: ["Academic coaching centres", "Professional training institutes", "Language and skill academies", "Exam-preparation programmes"],
    challenges: [["Broad student interest", "Separate genuine course and counselling intent from free-resource or unrelated job searches."], ["Parent and student audiences", "Give each decision-maker the information needed without using pressure or unsupported promises."], ["Course-page gaps", "Explain format, eligibility, schedule and enquiry steps using institute-approved facts."], ["Follow-up delays", "Route leads to counsellors and record whether an enquiry was contacted and qualified."]],
    channels: [["Google Ads", "Capture course, subject, exam and location searches with focused intent groups."], ["Meta Ads", "Build awareness through course explainers, faculty-approved content and upcoming-batch communication."], ["Local SEO", "Strengthen programme and location relevance for students comparing nearby options."], ["WhatsApp counselling", "Create a consistent first response and useful qualification questions."]],
    process: [["01", "Prioritise programmes", "Document approved course facts, schedules, learner fit and counselling capacity."], ["02", "Build discovery paths", "Connect course intent and creative to focused pages and advisor contact options."], ["03", "Track counselling leads", "Measure calls, WhatsApp actions, forms and counselling appointments."], ["04", "Improve lead quality", "Use counsellor feedback to refine targeting, content and response."]],
    measurements: ["Counselling calls", "WhatsApp course enquiries", "Course forms", "Counselling sessions booked", "Qualified enquiry rate by programme"],
    safeguards: ["No guaranteed admissions or ranks", "No guaranteed jobs or placements", "Only institute-approved course and faculty information", "Clear fee, schedule and eligibility context where supplied"],
    faqs: [
      { question: "What budget should a coaching institute use?", answer: "The budget depends on programme value, intake capacity, geography, seasonality and search competition. A focused campaign for one upcoming batch needs a different plan from year-round promotion across several courses, so we review the actual intake before recommending spend." },
      { question: "When should course campaigns begin?", answer: "Planning should begin before the enquiry window becomes urgent. The first month can establish pages, tracking and creative; later phases refine lead quality using counsellor feedback. No timeline can guarantee admissions or filled seats." },
      { question: "How are education leads tracked?", answer: "Tracked events can include calls, WhatsApp clicks, course forms and booked counselling sessions. The institute should separately record contacted, qualified and enrolled stages so marketing reports do not treat every form as an admission." },
      { question: "What claims should education ads avoid?", answer: "Ads should not guarantee admissions, marks, ranks, jobs, salaries or placements. Course details, faculty information and learner outcomes must be accurate, contextual and approved by the institute." },
    ],
    relatedServices: [["Meta Ads management", "/meta-ads-agency-visakhapatnam"], ["Lead generation", "/lead-generation-agency-visakhapatnam"], ["Marketing packages", "/packages"]],
    searchIntents: [["Coaching institute near me", "Local comparison searches involving subject, location, schedule and contact options."], ["Best coaching for [exam] Vizag", "High-consideration searches where factual programme fit matters more than unsupported superlatives."], ["Spoken English classes Visakhapatnam", "Course-specific intent that may involve students, employees or adult learners."], ["Weekend classes near me", "Format and schedule-led intent from working learners or college students."], ["Course fees and batch timings", "Practical research that should lead to clear approved information or a counselling enquiry."], ["విశాఖపట్నంలో కోచింగ్ సెంటర్", "Telugu-language local discovery that may move to WhatsApp or a phone conversation."]],
    deliverables: [["Course-intent Google Ads", "Separate programmes, exams and learning formats so each search reaches relevant approved information."], ["Meta discovery campaigns", "Use course education, upcoming-batch context and institute-approved creative to build awareness."], ["Local SEO for programmes", "Strengthen course and location pages for organic comparison without creating duplicate thin pages."], ["Course landing pages", "Present fit, format, schedule context and counselling actions clearly on mobile."], ["Counsellor follow-up workflow", "Route leads quickly and define useful status labels such as contacted, qualified and counselling booked."]],
    leadEvents: [["Call", "A course or counselling call initiated from a tracked campaign page."], ["WhatsApp", "A click into an approved course-enquiry conversation."], ["Form", "A completed programme or counselling enquiry form."], ["Counselling booked", "An advisor session recorded by the institute; it is not counted as an admission."]],
    proof: null,
    timeline: [["First 30 days", "Programme foundations", "Prioritise approved courses, build tracking, organise keyword intent and improve the mobile counselling journey."], ["Days 31–60", "Lead-quality learning", "Use search-term reviews and counsellor feedback to remove irrelevant intent and clarify course messaging."], ["Days 61–90", "Intake optimisation", "Shift budget and creative toward programmes showing qualified counselling demand while respecting actual batch capacity."]],
    relatedIndustries: [["Doctors and clinics", "/industries/doctors-clinics", "Healthcare pages focus on appointment and policy-sensitive medical intent; education pages focus on programme fit and counselling-stage attribution."], ["Case studies", "/case-studies", "Use documented campaign evidence as methodology context, not as a promise of admissions or student results."]],
  },
  {
    // TODO: Verify search volume for "gym marketing Visakhapatnam".
    // TODO: Add proof or client names only with verified data and documented permission.
    slug: "gyms-fitness",
    industry: "Gyms & Fitness Centres",
    eyebrow: "Gym marketing in Visakhapatnam",
    title: "Gym Marketing in Visakhapatnam: More Trackable Membership Enquiries",
    description:
      "We help gyms, fitness studios and personal-training businesses in Visakhapatnam create a measurable route from local discovery to a membership conversation. Fitness marketing becomes inefficient when every audience receives the same offer, trial enquiries are not followed up, or creative relies on unrealistic body promises. The plan connects local search, authentic facility content, focused membership pages and timely WhatsApp or call handling without guaranteeing weight loss or physical transformation.",
    metaTitle: "Gym Marketing in Visakhapatnam | Zexa Media",
    metaDescription:
      "Gym marketing in Visakhapatnam with Google Ads, Meta Ads, local SEO, membership landing pages, lead tracking and WhatsApp follow-up.",
    imageSrc: "/images/zexa-content-shoot.png",
    imageAlt: "Zexa Media planning local gym marketing and membership enquiry campaigns",
    audiences: ["Neighbourhood gyms", "Premium fitness centres", "Group-class studios", "Personal-training businesses"],
    challenges: [["Short local radius", "Focus campaigns on realistic travel distance, schedule fit and facility access."], ["Offer-only advertising", "Build trust around environment, coaching approach and membership fit instead of constant discounts."], ["Missed trial enquiries", "Give front-desk teams a consistent call and WhatsApp response process."], ["Unrealistic creative", "Avoid guaranteed transformation, weight-loss timelines and misleading before-and-after content."]],
    channels: [["Google Ads", "Capture gym-near-me, membership and class searches around the relevant service area."], ["Meta Ads", "Use authentic facility, trainer and class-format content for discovery and remarketing."], ["Local SEO", "Improve location, facility, programme and opening-hours information for nearby comparison."], ["Membership pages", "Connect each campaign to a clear trial, visit or membership enquiry path."]],
    process: [["01", "Define membership fit", "Document service radius, programmes, schedule, capacity and approved offers."], ["02", "Build local campaigns", "Match search and social creative to relevant membership or trial pages."], ["03", "Track enquiries", "Measure calls, WhatsApp actions, forms and booked facility visits."], ["04", "Use front-desk feedback", "Optimise around qualified conversations rather than cheap clicks."]],
    measurements: ["Membership calls", "WhatsApp enquiries", "Trial or visit forms", "Facility visits booked", "Qualified membership enquiry rate"],
    safeguards: ["No guaranteed weight-loss or body outcomes", "No misleading transformation timelines", "Consent required for identifiable member content", "Clear offer, trial and membership terms"],
    faqs: [
      { question: "What budget should a local gym start with?", answer: "Budget should reflect the gym’s realistic service radius, membership value, available capacity, programme mix and local competition. We review these factors before suggesting a test; a budget cannot guarantee a fixed number of memberships." },
      { question: "How quickly can gym campaigns be evaluated?", answer: "Early weeks show search relevance, creative response and enquiry-path issues. Membership quality takes longer because front-desk contact, trial visits and follow-up matter. Decisions should use qualified enquiry and visit feedback rather than clicks alone." },
      { question: "What counts as a gym marketing lead?", answer: "Defined events can include tracked calls, WhatsApp clicks, membership forms and booked facility visits or trial sessions. A click or video view alone is not treated as a membership lead." },
      { question: "Can fitness ads show transformations?", answer: "Only consented, accurately contextualised material should be considered, and campaigns must not guarantee weight loss, body changes or a fixed timeline. We prefer authentic facility, programme and coaching information." },
    ],
    relatedServices: [["Meta Ads management", "/meta-ads-agency-visakhapatnam"], ["Google Ads management", "/google-ads-agency-visakhapatnam"], ["Marketing packages", "/packages"]],
    searchIntents: [["Gym near me", "High-local-intent searches where distance, opening hours, facilities and a direct call matter."], ["Gym membership fees Vizag", "Price-research intent that should receive approved membership context rather than a misleading teaser."], ["Personal trainer near me", "Coaching-led intent where trainer availability and programme fit need clear explanation."], ["Women’s gym Visakhapatnam", "Audience and environment-specific research that requires accurate facility information."], ["Fitness classes near me", "Schedule and format-led intent for group training, strength, cardio or other approved programmes."], ["నా దగ్గర జిమ్", "Telugu local intent that may progress to a call, WhatsApp enquiry or map visit."]],
    deliverables: [["Local Google Search", "Focus on membership, facility and programme intent within a realistic travel radius."], ["Authentic Meta creative", "Use real facility, coaching and class-format content with approved offers and no transformation guarantees."], ["Local SEO visibility", "Keep location, hours, programmes and contact information consistent across pages and profiles."], ["Membership landing pages", "Make the facility, programme fit, location and trial or visit action clear on mobile."], ["Front-desk follow-up", "Define quick responses and status labels for new, contacted, visit-booked and not-yet-qualified enquiries."]],
    leadEvents: [["Call", "A membership or programme call from a tracked campaign page."], ["WhatsApp", "A click into the gym’s approved enquiry conversation."], ["Form", "A completed membership, trial or facility-visit request."], ["Visit booked", "A facility visit or trial session recorded by staff, without implying a physical result."]],
    proof: null,
    timeline: [["First 30 days", "Local foundation", "Confirm radius, programmes, capacity and offer terms; repair tracking and launch focused search and creative tests."], ["Days 31–60", "Enquiry refinement", "Review search terms, creative response, WhatsApp conversations and front-desk feedback to improve membership fit."], ["Days 61–90", "Programme-level decisions", "Shift attention toward programmes and areas producing qualified conversations or booked visits, without guaranteeing memberships."]],
    relatedIndustries: [["Spas and wellness", "/industries/spas-wellness", "Wellness pages focus on service bookings and experience-led discovery; this page focuses on memberships, trials and recurring fitness participation."], ["Case studies", "/case-studies", "Published evidence is used to explain campaign discipline, not to promise membership or body outcomes."]],
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
