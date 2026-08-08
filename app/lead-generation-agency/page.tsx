import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.leadGeneration;

export const metadata = globalServiceMetadata(config);

export default function LeadGenerationAgencyPage() {
  return <GlobalServicePage config={config} />;
}
