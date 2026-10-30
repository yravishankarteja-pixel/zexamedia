import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("fertility-ivf");
export const metadata = industryMetadata(config);
export default function FertilityIvfPage() { return <IndustryPage config={config} />; }
