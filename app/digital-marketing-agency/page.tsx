import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.digitalMarketing;

export const metadata = globalServiceMetadata(config);

export default function DigitalMarketingAgencyPage() {
  return <GlobalServicePage config={config} />;
}
