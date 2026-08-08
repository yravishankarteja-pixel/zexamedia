import { GlobalServicePage } from "@/components/global-service-page";
import { globalServiceMetadata, globalServicePages } from "@/lib/global-commercial-pages";

const config = globalServicePages.googleAds;

export const metadata = globalServiceMetadata(config);

export default function GoogleAdsAgencyPage() {
  return <GlobalServicePage config={config} />;
}
