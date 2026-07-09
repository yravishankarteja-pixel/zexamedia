import { BarChart3, Bot, LineChart, Search, ShieldCheck, UserRound, Zap } from "lucide-react";

export function GrowthCircuitVisual() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
      <div className="absolute inset-0 animated-grid opacity-45" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" aria-hidden="true">
        <path d="M40 250C160 90 250 310 380 150S560 90 610 130" fill="none" stroke="#8EEA4D" strokeOpacity=".55" strokeWidth="2" />
        <path d="M40 290H600" stroke="white" strokeOpacity=".08" />
        <path d="M120 300V210M230 300V170M340 300V230M450 300V130M560 300V180" stroke="#8EEA4D" strokeOpacity=".28" strokeWidth="10" />
      </svg>
      <div className="relative grid h-full content-between gap-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#CFFFAB]">
            Growth signal
          </span>
          <LineChart className="size-7 text-[#8EEA4D]" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Ads", "SEO", "Automation"].map((item) => (
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
    { label: "Ad efficiency", Icon: BarChart3, value: "3.8x" },
    { label: "Lead response", Icon: Bot, value: "60s" },
    { label: "Scale trigger", Icon: Zap, value: "Ready" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071006]/80 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(142,234,77,.14),transparent_45%)]" />
      <div className="relative grid gap-4">
        {signals.map(({ label, Icon, value }) => (
          <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <span className="flex items-center gap-3 text-sm text-white/68">
              <Icon className="size-5 text-[#8EEA4D]" />
              {label}
            </span>
            <span className="font-semibold text-[#8EEA4D]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HumanStrategyVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
      <div className="absolute inset-0 animated-grid opacity-25" />
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-[#8EEA4D]/20 bg-[#8EEA4D]/10" />
      <div className="relative grid h-full gap-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#8EEA4D]/25 bg-[#8EEA4D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#CFFFAB]">
            Human-led strategy
          </span>
          <UserRound className="size-7 text-[#8EEA4D]" />
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
                  <span className="text-sm font-semibold text-[#8EEA4D]">0{index + 1}</span>
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
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071006]/90 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(142,234,77,.16),transparent_44%),radial-gradient(circle_at_80%_20%,rgba(142,234,77,.12),transparent_28%)]" />
      <div className="relative grid gap-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
            Automation map
          </span>
          <ShieldCheck className="size-6 text-[#8EEA4D]" />
        </div>
        <div className="grid gap-3">
          {[
            ["Lead captured", "Meta / Google"],
            ["Instant WhatsApp", "60 sec response"],
            ["CRM updated", "No manual entry"],
            ["Report sent", "Weekly snapshot"],
          ].map(([step, note]) => (
            <div key={step} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <span className="mt-1 size-3 rounded-full bg-[#8EEA4D] shadow-[0_0_16px_rgba(142,234,77,.7)]" />
              <span>
                <span className="block font-semibold text-white">{step}</span>
                <span className="mt-1 block text-sm text-white/45">{note}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
