"use client";

import { useState } from "react";
import Button from "./Button";
import { process } from "@/lib/site";

type Key = keyof typeof process;

export default function ProcessTabs() {
  const [active, setActive] = useState<Key>("facilities");
  const current = process[active];
  const keys = Object.keys(process) as Key[];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Who are you?"
        className="relative inline-grid grid-cols-2 rounded-full border border-rule bg-paper p-1.5"
      >
        <span
          aria-hidden="true"
          className={`absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-6px)] rounded-full bg-forest transition-transform duration-500 ease-out-soft ${
            active === "professionals" ? "translate-x-full" : ""
          }`}
        />
        {keys.map((key) => (
          <button
            key={key}
            role="tab"
            type="button"
            id={`tab-${key}`}
            aria-selected={active === key}
            aria-controls="process-panel"
            onClick={() => setActive(key)}
            className={`relative z-10 h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-300 sm:px-7 ${
              active === key ? "text-white" : "text-mut hover:text-ink"
            }`}
          >
            {process[key].label}
          </button>
        ))}
      </div>

      <div id="process-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-12">
        <ol key={active} className="grid gap-5 md:grid-cols-3">
          {current.steps.map((step, i) => (
            <li
              key={step.title}
              className="card step-in p-8"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="display numeral text-6xl text-forest/25">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-mut">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href={current.cta.href} variant={active === "facilities" ? "navy" : "primary"}>
            {current.cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
