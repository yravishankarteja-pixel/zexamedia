import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("spas-wellness");
export const metadata = industryMetadata(config);

export default function Page() {
  return <IndustryPage config={config} />;
}
