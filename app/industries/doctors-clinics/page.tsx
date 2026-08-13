import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("doctors-clinics");
export const metadata = industryMetadata(config);

export default function Page() {
  return <IndustryPage config={config} />;
}
