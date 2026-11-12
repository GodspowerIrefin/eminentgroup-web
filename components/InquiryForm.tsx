"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  wide?: boolean;
  defaultValue?: string;
};

export default function InquiryForm({
  subject,
  fields,
  submitLabel,
  note,
}: {
  subject: string;
  fields: Field[];
  submitLabel: string;
  note?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    for (const field of fields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (field.required && !value) next[field.name] = "Required";
      else if (field.type === "email" && value && !/^\S+@\S+\.\S+$/.test(value))
        next[field.name] = "Enter a valid email";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      const first = event.currentTarget.querySelector<HTMLElement>(
        `[name="${Object.keys(next)[0]}"]`
      );
      first?.focus();
      return;
    }
    const body = fields
      .map((f) => `${f.label}: ${String(data.get(f.name) ?? "").trim() || "-"}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="step-in rounded-2xl bg-canvas p-8 text-[#171a26]">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="display mt-5 text-3xl">Your email is ready to send.</h3>
        <p className="mt-3 leading-relaxed text-[#5b6070]">
          Your email app has opened with these details filled in. Press send there to reach our
          office. If nothing opened, email{" "}
          <a className="font-semibold text-forest underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-forest underline" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-forest underline"
        >
          Edit the form
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((field) => {
        const id = `${subject}-${field.name}`.replace(/\s+/g, "-").toLowerCase();
        const error = errors[field.name];
        const common = {
          id,
          name: field.name,
          defaultValue: field.defaultValue ?? "",
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? `${id}-error` : undefined,
          className: "field",
        };
        return (
          <div
            key={field.name}
            className={field.wide || field.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#171a26]">
              {field.label}
              {field.required ? <span className="text-red"> *</span> : null}
            </label>
            {field.type === "select" ? (
              <select {...common}>
                <option value="">Select</option>
                {field.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea {...common} rows={4} />
            ) : (
              <input {...common} type={field.type ?? "text"} min={field.type === "number" ? 1 : undefined} />
            )}
            {error ? (
              <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-[52px] items-center rounded-full bg-red px-8 font-semibold text-white transition-colors hover:bg-red-600"
        >
          {submitLabel}
        </button>
        <p className="text-sm text-[#5b6070]">{note ?? "Opens your email app with the details filled in."}</p>
      </div>
    </form>
  );
}
