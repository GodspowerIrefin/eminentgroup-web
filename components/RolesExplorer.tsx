"use client";

import { useState } from "react";
import Button from "./Button";
import { roles, settings } from "@/lib/site";

export default function RolesExplorer() {
  const [index, setIndex] = useState(0);
  const role = roles[index];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <ul className="border-t border-rule">
        {roles.map((r, i) => (
          <li key={r.name} className="border-b border-rule">
            <button
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIndex(i)}
              onFocus={() => setIndex(i)}
              className={`group flex w-full items-center justify-between gap-4 py-5 text-left transition-[padding,color] duration-300 ${
                i === index ? "pl-4 text-ink" : "text-mut hover:text-ink"
              }`}
            >
              <span className="display text-[clamp(1.4rem,2.6vw,2rem)]">{r.name}</span>
              <span
                className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-bold tracking-widest transition-colors duration-300 ${
                  i === index ? "border-red bg-red text-white" : "border-rule"
                }`}
              >
                {r.short}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div key={role.name} className="card step-in overflow-hidden p-8 sm:p-10">
          <p className="eyebrow">{role.short}</p>
          <h3 className="display mt-4 text-4xl">{role.name}</h3>
          <p className="mt-4 text-lg leading-relaxed text-mut">{role.body}</p>
          <p className="mt-8 text-[13px] font-bold uppercase tracking-[0.16em] text-mut">
            Settings we staff
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {settings.map((s) => (
              <li key={s} className="rounded-full border border-rule px-3.5 py-1.5 text-sm">
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/employers#request" variant="navy">
              Request staff
            </Button>
            {role.href ? (
              <Button href={role.href} variant="ghost">
                About this role
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
