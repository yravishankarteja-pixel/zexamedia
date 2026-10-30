import { IndustryPage } from "@/components/industry-page";
import { getIndustryPage, industryMetadata } from "@/lib/industry-pages";

const config = getIndustryPage("dental-clinics");
export const metadata = industryMetadata(config);
export default function DentalClinicsPage() { return <IndustryPage config={config} />; }
