import {
  BarChart3,
  Bot,
  LineChart,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  UserRound,
  Users,
} from "lucide-react";

export function GrowthCircuitVisual() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B]/90 p-6">
      <div className="absolute inset-0 animated-grid opacity-20" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" aria-hidden="true">
        <path d="M40 250C160 130 250 286 380 170S560 120 610 145" fill="none" stroke="#8EEA4D" strokeOpacity=".42" strokeWidth="2" />
        <path d="M40 290H600" stroke="white" strokeOpacity=".08" />
        <path d="M120 300V220M230 300V184M340 300V238M450 300V156M560 300V190" stroke="#8EEA4D" strokeOpacity=".18" strokeWidth="10" />
      </svg>
      <div className="relative grid h-full content-between gap-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            Growth signal
          </span>
          <LineChart className="size-7 text-white/70" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Google Ads", "Local SEO", "Lead Flow"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{item}</p>
              <p className="mt-2 text-xs text-white/45">Live optimisation</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MarketingOpsVisual() {
  const signals = [
    { label: "Search demand", Icon: Search, value: "92%" },
    { label: "Ad efficiency", Icon: BarChart3, value: "3.2x" },
    { label: "Lead response", Icon: Bot, value: "60s" },
    { label: "Audience fit", Icon: Users, value: "Ready" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B]/90 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(142,234,77,.08),transparent_45%)]" />
      <div className="relative grid gap-4">
        {signals.map(({ label, Icon, value }) => (
          <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <span className="flex items-center gap-3 text-sm text-white/68">
              <Icon className="size-5 text-white/62" strokeWidth={1.8} />
              {label}
            </span>
            <span className="font-semibold text-[#CFFFAB]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HumanStrategyVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B]/90 p-6">
      <div className="absolute inset-0 animated-grid opacity-15" />
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/10 bg-white/[0.035]" />
      <div className="relative grid h-full gap-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            Human-led strategy
          </span>
          <UserRound className="size-7 text-white/70" />
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr]">
          <div className="relative min-h-56 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
            <div className="mx-auto mt-4 size-24 rounded-full border border-[#8EEA4D]/30 bg-[radial-gradient(circle_at_50%_36%,rgba(142,234,77,.22),transparent_55%)]" />
            <div className="mx-auto mt-4 h-20 w-36 rounded-t-[3rem] border border-white/10 bg-white/[0.06]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-center text-sm text-white/62">
              Strategy partner
            </div>
          </div>

          <div className="grid content-center gap-3">
            {["Audience insight", "Offer clarity", "Lead quality", "Follow-up speed"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-4"
                >
                  <span className="text-sm text-white/66">{item}</span>
                  <span className="text-sm font-semibold text-[#CFFFAB]">0{index + 1}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutomationAnalyticsVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A100B]/90 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(142,234,77,.08),transparent_44%)]" />
      <div className="relative grid gap-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
            Automation map
          </span>
          <ShieldCheck className="size-6 text-white/70" />
        </div>
        <div className="grid gap-3">
          {[
            ["Google Ads lead", "Search campaign"],
            ["Meta lead form", "Audience campaign"],
            ["WhatsApp alert", "60 sec response"],
            ["Campaign report", "Weekly snapshot"],
          ].map(([step, note], index) => {
            const icons = [Target, Users, MessageCircle, MapPin];
            const Icon = icons[index];
            return (
            <div key={step} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <Icon className="mt-1 size-5 text-white/62" strokeWidth={1.8} />
              <span>
                <span className="block font-semibold text-white">{step}</span>
                <span className="mt-1 block text-sm text-white/45">{note}</span>
              </span>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}
