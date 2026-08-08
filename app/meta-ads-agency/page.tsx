import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.metaAds;

export const metadata = globalServiceMetadata(config);

export default function MetaAdsAgencyPage() {
  return <GlobalServicePage config={config} />;
}
