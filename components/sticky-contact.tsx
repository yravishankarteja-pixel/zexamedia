import { MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappUrl } from "@/lib/business-info";

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-2 gap-2 border-t border-white/10 bg-[#071006] p-2 pb-[max(8px,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={phoneHref}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
        aria-label="Call for Free Audit"
      >
        <Phone className="size-4 text-[#61E003]" />
        Call for Free Audit
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#61E003] px-3 text-sm font-semibold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003]"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#61E003] text-black transition-transform duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61E003] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050806] md:inline-flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
