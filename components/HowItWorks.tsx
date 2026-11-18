"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { process } from "@/lib/site";

type Key = keyof typeof process;

// Per-audience extras; step text itself comes from lib/site.ts.
const extra: Record<Key, { lead: string; icons: IconName[]; img: string; alt: string; pos: string }> = {
  facilities: {
    lead: "Tell us the role and the shift. We handle recruiting, credential checks, and the follow-up.",
    icons: ["chat", "shield", "calendar"],
    img: "/images/services/staffing.jpg",
    alt: "Two nurses in scrubs at a nurses' station",
    pos: "50% 40%",
  },
  professionals: {
    lead: "Apply once. We verify your credentials and match you with facilities that fit your license and schedule.",
    icons: ["user", "shield", "building"],
    img: "/images/hero/nurse-rn.jpg",
    alt: "A smiling nurse in blue scrubs with a stethoscope",
    pos: "50% 20%",
  },
};

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowItWorks() {
  const keys = Object.keys(process) as Key[];
  const [active, setActive] = useState<Key>("facilities");
  const current = process[active];
  const x = extra[active];

  return (
    <section className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 lg:py-28">
      <span aria-hidden="true" className="deco-ring -right-40 -top-40 h-[30rem] w-[30rem]" />

      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* left: heading, switch, photo */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3.25rem)]">From request to first shift.</h2>
          <p key={active} className="step-in mt-5 max-w-lg text-[17px] leading-relaxed text-mut">
            {x.lead}
          </p>

          <div
            role="tablist"
            aria-label="Who are you?"
            className="relative mt-8 inline-grid grid-cols-2 rounded-full border border-rule bg-white p-1.5 shadow-[0_14px_30px_-20px_rgba(10,42,39,0.4)]"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-6px)] rounded-full bg-forest-950 transition-transform duration-500 ease-out-soft ${
                active === "professionals" ? "translate-x-full" : ""
              }`}
            />
            {keys.map((key) => (
              <button
                key={key}
                role="tab"
                type="button"
                id={`how-tab-${key}`}
                aria-selected={active === key}
                aria-controls="how-panel"
                onClick={() => setActive(key)}
                className={`relative z-10 h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-300 sm:px-7 ${
                  active === key ? "text-white" : "text-mut hover:text-ink"
                }`}
              >
                {process[key].label}
              </button>
            ))}
          </div>

          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[28px] bg-forest shadow-[0_40px_80px_-40px_rgba(10,42,39,0.55)] lg:block">
            {keys.map((key) => (
              <Image
                key={key}
                src={extra[key].img}
                alt={key === active ? extra[key].alt : ""}
                aria-hidden={key !== active}
                fill
                sizes="560px"
                className={`setting-photo object-cover ${key === active ? "is-on" : ""}`}
                style={{ objectPosition: extra[key].pos }}
              />
            ))}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-lg backdrop-blur">
              <span className="display flex h-10 w-10 items-center justify-center rounded-full bg-red text-[18px] text-white">
                {current.steps.length}
              </span>
              <span className="text-[14px] font-semibold text-ink">simple steps to get started</span>
            </div>
          </div>
        </Reveal>

        {/* right: timeline */}
        <div id="how-panel" role="tabpanel" aria-labelledby={`how-tab-${active}`}>
          <Reveal className="how-steps relative">
            {/* track + gold fill that draws down on reveal */}
            <span aria-hidden="true" className="absolute bottom-10 left-[27px] top-10 w-[2px] bg-rule" />
            <span aria-hidden="true" className="how-line absolute bottom-10 left-[27px] top-10 w-[2px] bg-gold" />

            <ol key={active} className="relative flex flex-col gap-6">
              {current.steps.map((step, i) => (
                <li key={step.title} className="how-step step-in grid grid-cols-[56px_1fr] gap-5 sm:gap-7" style={{ animationDelay: `${i * 110}ms` }}>
                  <span className="how-num display relative z-10 mt-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-canvas text-[20px] text-forest-950">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="how-card rounded-[22px] border border-rule bg-white p-6 sm:p-8">
                    <div className="flex items-start gap-5">
                      <span className="how-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand text-red">
                        <Icon name={x.icons[i % x.icons.length]} size={24} />
                      </span>
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-mut">Step {i + 1}</p>
                        <h3 className="display mt-1 text-[22px] leading-snug sm:text-[24px]">{step.title}</h3>
                        <p className="mt-2 text-[16px] leading-relaxed text-mut">{step.body}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-4 pl-[76px] sm:pl-[84px]">
            <Link
              href={current.cta.href}
              className="group inline-flex h-14 items-center gap-2.5 rounded-full bg-red px-8 text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(200,16,46,0.7)] transition-colors hover:bg-red-600"
            >
              {current.cta.label}
              <Arrow />
            </Link>
            <Link href="/contact" className="link-underline text-[15px] font-semibold text-forest">
              Have a question? Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
