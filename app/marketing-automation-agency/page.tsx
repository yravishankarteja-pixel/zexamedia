import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.marketingAutomation;

export const metadata = globalServiceMetadata(config);

export default function MarketingAutomationAgencyPage() {
  return <GlobalServicePage config={config} />;
}
