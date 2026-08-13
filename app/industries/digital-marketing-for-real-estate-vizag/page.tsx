import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("digital-marketing-for-real-estate-vizag");
export const metadata = industryMetadata(config);
export default function Page() { return <IndustryPage config={config} />; }
