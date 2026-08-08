import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.performanceMarketing;

export const metadata = globalServiceMetadata(config);

export default function PerformanceMarketingAgencyPage() {
  return <GlobalServicePage config={config} />;
}
