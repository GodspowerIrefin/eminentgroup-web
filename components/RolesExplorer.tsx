"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { roles, settings } from "@/lib/site";

// Photo per role, in the same order as `roles` in lib/site.ts (free Pexels stock).
// Roles without a dedicated photo reuse the closest service photo.
const photos = [
  { src: "/images/hero/nurse-rn.jpg", pos: "50% 18%" },
  { src: "/images/hero/nurse-lpn.jpg", pos: "50% 22%" },
  { src: "/images/hero/cna.jpg", pos: "50% 30%" },
  { src: "/images/hero/home-health-aide.jpg", pos: "45% 16%" },
  { src: "/images/hero/medical-assistant.jpg", pos: "50% 20%" },
  { src: "/images/hero/therapist.jpg", pos: "40% 25%" },
  { src: "/images/services/recruitment.jpg", pos: "50% 35%" },
  { src: "/images/services/follow-up.jpg", pos: "50% 40%" },
];

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-gold">
      <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RolesExplorer() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = roles[index];
  const photo = photos[index % photos.length];

  // vertical tablist: arrow keys / Home / End move between roles
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = roles.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? index === last ? 0 : index + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? index === 0 ? last : index - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div role="tablist" aria-orientation="vertical" aria-label="Roles we place" onKeyDown={onKey} className="flex flex-col gap-1.5">
        {roles.map((r, i) => {
          const on = i === index;
          return (
            <button
              key={r.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`role-tab-${i}`}
              aria-selected={on}
              aria-controls="role-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`role-tab group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left ${
                on ? "bg-forest-950 text-white shadow-[0_20px_40px_-24px_rgba(10,42,39,0.7)]" : "text-ink hover:bg-sand"
              }`}
            >
              <span className={`display w-7 shrink-0 text-[15px] ${on ? "text-gold" : "text-mut"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[17px] font-semibold sm:text-[18px]">{r.name}</span>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest ${
                  on ? "bg-gold text-forest-950" : "border border-rule text-mut"
                }`}
              >
                {r.short}
              </span>
              <span
                aria-hidden="true"
                className={`hidden transition-[opacity,transform] duration-300 sm:block ${
                  on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                }`}
              >
                <Arrow />
              </span>
            </button>
          );
        })}
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div
          id="role-panel"
          role="tabpanel"
          aria-labelledby={`role-tab-${index}`}
          className="relative overflow-hidden rounded-[28px] bg-forest-950 text-white shadow-[0_40px_80px_-40px_rgba(10,42,39,0.7)]"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-forest">
            <Image
              key={photo.src}
              src={photo.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="role-photo object-cover"
              style={{ objectPosition: photo.pos }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
            <span
              key={role.short}
              aria-hidden="true"
              className="role-code display absolute bottom-2 right-6 text-[clamp(3.5rem,8vw,6rem)] leading-none text-white/15"
            >
              {role.short}
            </span>
          </div>

          <div key={role.name} className="step-in relative px-7 pb-9 pt-2 sm:px-10">
            <p className="eyebrow !text-gold">
              Role {String(index + 1).padStart(2, "0")} of {String(roles.length).padStart(2, "0")}
            </p>
            <h3 className="display mt-3 text-[clamp(1.9rem,3.2vw,2.6rem)]">{role.name}</h3>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-white/75">{role.body}</p>

            <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em] text-white/55">Settings we staff</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {settings.map((s) => (
                <li key={s} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[13.5px]">
                  <Check />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/employers#request"
                className="group inline-flex h-[52px] items-center gap-2.5 rounded-full bg-red px-7 text-[15px] font-semibold transition-colors hover:bg-red-600"
              >
                Request staff
                <Arrow />
              </Link>
              {role.href ? (
                <Link
                  href={role.href}
                  className="group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-white/35 px-7 text-[15px] font-semibold transition-colors hover:bg-white hover:text-forest-950"
                >
                  About this role
                  <Arrow />
                </Link>
              ) : (
                <Link
                  href="/job-seekers#apply"
                  className="group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-white/35 px-7 text-[15px] font-semibold transition-colors hover:bg-white hover:text-forest-950"
                >
                  Apply for work
                  <Arrow />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
