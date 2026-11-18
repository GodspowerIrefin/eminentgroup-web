"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { settings } from "@/lib/site";

// One entry per setting in lib/site.ts, in the same order.
// Photos are free Pexels stock (pexels.com/license), stored in public/images/settings.
const details: { icon: IconName; text: string; img: string; alt: string }[] = [
  { icon: "building", text: "Nurses and clinical staff placed in hospitals.", img: "/images/settings/hospitals.jpg", alt: "Two nurses reviewing notes in a hospital corridor" },
  { icon: "heart", text: "Nursing and care staff for long-term care residents.", img: "/images/settings/nursing-homes.jpg", alt: "A caregiver serving tea to a resident in her room" },
  { icon: "activity", text: "Therapy and nursing professionals for rehabilitation.", img: "/images/settings/rehabilitation.jpg", alt: "A physiotherapist guiding a patient through an exercise" },
  { icon: "user", text: "Care professionals for assisted living communities.", img: "/images/settings/assisted-living.jpg", alt: "Seniors playing chess together in a lounge" },
  { icon: "home", text: "Aides and caregivers for clients in their homes.", img: "/images/settings/home-care.jpg", alt: "Two caregivers helping an elderly man in bed" },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = settings.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="relative isolate overflow-hidden bg-forest-950 px-5 py-20 text-white sm:px-8 lg:py-28">
      <span aria-hidden="true" className="absolute -left-40 top-10 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.06]" />
      <span aria-hidden="true" className="absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-forest/60 blur-3xl" />

      <div className="mx-auto max-w-[1280px]">
        {/* heading + stats */}
        <Reveal className="grid items-end gap-10">
          <div>
            <Eyebrow className="!text-gold">Where we place</Eyebrow>
            <h2 className="display mt-4 max-w-[20ch] text-[clamp(2rem,3.8vw,3.25rem)]">
              Hospitals, nursing homes, and home care.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
              We place professionals across these care settings throughout Maryland.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* setting tabs */}
          <div role="tablist" aria-orientation="vertical" aria-label="Care settings" onKeyDown={onKey} className="flex flex-col gap-2">
            {settings.map((name, i) => {
              const on = i === active;
              const d = details[i % details.length];
              return (
                <Reveal key={name} delay={i * 0.07}>
                  <button
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`setting-tab-${i}`}
                    aria-selected={on}
                    aria-controls="setting-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`setting-tab group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border px-5 py-4 text-left ${
                      on ? "border-gold/50 bg-white/[0.08]" : "border-transparent hover:bg-white/[0.04]"
                    }`}
                  >
                    <span aria-hidden="true" className={`setting-bar absolute inset-y-3 left-0 w-1 rounded-full bg-gold ${on ? "scale-y-100" : "scale-y-0"}`} />
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        on ? "bg-gold text-forest-950" : "bg-white/[0.07] text-gold"
                      }`}
                    >
                      <Icon name={d.icon} size={24} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[18px] font-semibold">{name}</span>
                      <span className={`block text-[14.5px] transition-colors ${on ? "text-white/80" : "text-white/55"}`}>{d.text}</span>
                    </span>
                    <span className="display text-[14px] text-white/35">{String(i + 1).padStart(2, "0")}</span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* photo stage */}
          <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
            <div
              id="setting-panel"
              role="tabpanel"
              aria-labelledby={`setting-tab-${active}`}
              className="relative aspect-[6/5] overflow-hidden rounded-[28px] bg-forest shadow-[0_50px_90px_-45px_rgba(0,0,0,0.8)]"
            >
              {details.map((d, i) => (
                <Image
                  key={d.img}
                  src={d.img}
                  alt={i === active ? d.alt : ""}
                  aria-hidden={i !== active}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className={`setting-photo object-cover ${i === active ? "is-on" : ""}`}
                />
              ))}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />

              <div key={active} className="step-in absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                    Setting {String(active + 1).padStart(2, "0")} / {String(settings.length).padStart(2, "0")}
                  </p>
                  <p className="display mt-1 text-[clamp(1.6rem,2.8vw,2.25rem)] leading-tight">{settings[active]}</p>
                </div>
                <Link
                  href="/employers#request"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-white px-6 text-[14.5px] font-semibold text-forest-950 transition-colors hover:bg-gold"
                >
                  Request staff
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* progress dots */}
              <div aria-hidden="true" className="absolute right-5 top-5 flex gap-1.5 sm:right-7 sm:top-7">
                {settings.map((s, i) => (
                  <span key={s} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-gold" : "w-1.5 bg-white/50"}`} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
