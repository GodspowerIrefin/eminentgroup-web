"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";
import { roles, settings } from "@/lib/site";

const slides = [
  {
    lines: ["Staffing healthcare", "with a personal touch"],
    body: "A licensed Maryland agency connecting nurses and care professionals with hospitals, nursing homes, rehab centers, assisted living, and home care.",
    cta: { href: "/employers#request", label: "Request Staff" },
  },
  {
    lines: ["Filling shifts and careers", "across our service area"],
    body: "We recruit, verify, and place RNs, LPNs, CNAs, home health aides, and more, then stay in touch after the placement starts.",
    cta: { href: "/job-seekers#apply", label: "Explore Careers" },
  },
];

// Both figures come straight from lib/site.ts, so they stay true as content changes.
const stats = [
  { value: roles.length, label: "Professional roles" },
  { value: settings.length, label: "Care settings" },
];

function SquareArrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={dir === "prev" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((n) => (n + d + slides.length) % slides.length);
  const btn =
    "flex h-12 w-12 items-center justify-center bg-forest-950/90 text-white transition-colors hover:bg-red";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-forest-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Image
        src="/images/hero-team.jpg"
        alt="Three healthcare professionals in scrubs"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_30%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/55" />

      <div className="mx-auto max-w-[1320px] px-5 pb-12 pt-40 sm:px-8 lg:pb-16 lg:pt-56">
        {/* slides */}
        <div className="relative min-h-[300px] pl-0 sm:min-h-[340px] lg:min-h-[380px] lg:pl-20">
          {slides.map((s, n) => (
            <div
              key={s.lines[0]}
              role="group"
              aria-roledescription="slide"
              aria-label={`${n + 1} of ${slides.length}`}
              aria-hidden={n !== i}
              className={`hero-slide absolute inset-0 ${n === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              {n === i && (
                <h1 className="display fade-up text-[clamp(2.5rem,6.6vw,5.75rem)] !leading-[1.04]">
                  {s.lines[0]}
                  <br />
                  <span className="text-gold">{s.lines[1]}</span>
                </h1>
              )}
            </div>
          ))}
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
            <button type="button" aria-label="Previous slide" onClick={() => go(-1)} className={btn}>
              <SquareArrow dir="prev" />
            </button>
            <button type="button" aria-label="Next slide" onClick={() => go(1)} className={btn}>
              <SquareArrow dir="next" />
            </button>
          </div>
        </div>

        <div className="mt-2 flex gap-2 lg:hidden">
          <button type="button" aria-label="Previous slide" onClick={() => go(-1)} className={btn}>
            <SquareArrow dir="prev" />
          </button>
          <button type="button" aria-label="Next slide" onClick={() => go(1)} className={btn}>
            <SquareArrow dir="next" />
          </button>
        </div>

        <hr className="mt-10 border-white/25" />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <dl className="flex flex-wrap items-center gap-x-0 gap-y-6">
            {stats.map((s, n) => (
              <div
                key={s.label}
                className={`flex items-center gap-4 ${n > 0 ? "ml-8 border-l border-white/25 pl-8" : ""}`}
              >
                <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gold" />
                <dd className="display order-2 text-5xl font-light sm:text-6xl">
                  <CountUp to={s.value} />
                </dd>
                <dt className="order-3 max-w-[8rem] text-[13px] font-extrabold uppercase leading-tight tracking-[0.1em]">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:justify-end">
            <p aria-live="polite" className="max-w-lg text-[17px] leading-relaxed text-white/85">
              {slides[i].body}
            </p>
            <Link
              href={slides[i].cta.href}
              className="group inline-flex h-14 shrink-0 items-center gap-3 bg-red px-8 text-[14px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-red-600"
            >
              {slides[i].cta.label}
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
