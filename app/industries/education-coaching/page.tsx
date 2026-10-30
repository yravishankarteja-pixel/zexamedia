import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("education-coaching");
export const metadata = industryMetadata(config);
export default function EducationCoachingPage() { return <IndustryPage config={config} />; }
