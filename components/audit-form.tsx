"use client";

import { FormEvent, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  business: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export function AuditForm({ compact = false }: Readonly<{ compact?: boolean }>) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const inputClass =
    "min-h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35 focus:ring-2 focus:ring-[#8EEA4D]/20";

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus("error");
      setError("Please add your name, phone number, and what you are looking for.");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 650);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="Your Name" value={form.name} onChange={(value) => updateField("name", value)} />
        <TextField label="Business Name" value={form.business} onChange={(value) => updateField("business", value)} />
        <TextField
          label="Phone Number / WhatsApp"
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
          type="tel"
        />
        <TextField
          label="Email Address"
          value={form.email}
          onChange={(value) => updateField("email", value)}
          type="email"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label="What are you looking for?"
          value={form.service}
          onChange={(value) => updateField("service", value)}
          options={[
            "Google Ads / Meta Ads",
            "Social media management",
            "Local SEO / Google Business Profile",
            "Landing page + tracking",
            "Marketing automation",
            "Full growth partnership",
          ]}
          inputClass={inputClass}
        />
        <SelectField
          label="Monthly Marketing Budget"
          value={form.budget}
          onChange={(value) => updateField("budget", value)}
          options={["Under \u20B920k", "\u20B920k-\u20B950k", "\u20B950k-\u20B91L", "Above \u20B91L"]}
          inputClass={inputClass}
        />
      </div>
      {!compact && (
        <label className="grid gap-2 text-sm font-semibold text-white/70">
          Tell us about your business
          <textarea
            className="min-h-32 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35 focus:ring-2 focus:ring-[#8EEA4D]/20"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </label>
      )}
      {status === "error" && (
        <p className="rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="rounded-2xl border border-[#8EEA4D]/35 bg-[#8EEA4D]/10 px-4 py-3 text-sm text-[#D9FFC7]">
          Thanks. Your details are ready. Zexa Media will review them and follow up for the free audit.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#8EEA4D] px-6 font-bold text-[#071006] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(142,234,77,0.18)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending request
          </>
        ) : (
          "Book My Free Audit"
        )}
      </button>
    </form>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
}: Readonly<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white/70">
      {label}
      <input
        className="min-h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none transition focus:border-[#8EEA4D] focus:bg-black/35 focus:ring-2 focus:ring-[#8EEA4D]/20"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  inputClass,
  onChange,
}: Readonly<{
  label: string;
  value: string;
  options: string[];
  inputClass: string;
  onChange: (value: string) => void;
}>) {
  return (
    <label className="relative grid gap-2 text-sm font-semibold text-white/70">
      {label}
      <select
        className={`${inputClass} appearance-none pr-10`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select option</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute bottom-4 right-4 size-4 text-white/45" />
    </label>
  );
}
