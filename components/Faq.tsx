"use client";

import { useState, type ReactNode } from "react";

export default function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-rule">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-rule">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold sm:text-xl"
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`relative h-9 w-9 shrink-0 rounded-full border border-rule transition-[transform,background-color,color] duration-300 ${
                    isOpen ? "rotate-45 bg-forest text-white" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-3.5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-7 text-[17px] leading-relaxed text-mut">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
