import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { roles, settings } from "@/lib/site";

// One-line descriptions are plain restatements of what the agency places, no claims.
const descriptions = [
  "Nurses and clinical staff placed in hospitals.",
  "Nursing and care staff for long-term care residents.",
  "Therapy and nursing professionals for rehabilitation.",
  "Care professionals for assisted living communities.",
  "Aides and caregivers for clients in their homes.",
];

// Derived from lib/site.ts; placement types = temporary, temp-to-perm, permanent.
const highlights = [
  { label: "Care settings", value: settings.length },
  { label: "Professional roles", value: roles.length },
  { label: "Placement types", value: 3 },
];

export default function Industries() {
  return (
    <section className="band-dark relative overflow-hidden !bg-forest-950 text-white">
      <div className="mx-auto grid max-w-[1320px] lg:grid-cols-[1fr_1fr]">
        <div className="relative z-10 px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <Eyebrow>Where we place</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
              Hospitals, nursing homes, and home care.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              We place professionals across the settings below, throughout Maryland.
            </p>
          </Reveal>

          <ul className="mt-10 border-t border-white/15">
            {settings.map((name, i) => (
              <li key={name} className="border-b border-white/15">
                <Reveal delay={i * 0.07}>
                  <div className="group flex items-center gap-5 px-3 py-5 transition-colors duration-300 hover:bg-white/[0.06]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/60 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-950">
                      <Icon name={i % 2 ? "stethoscope" : "building"} size={28} />
                    </span>
                    <div>
                      <h3 className="display text-[22px] !font-semibold">{name}</h3>
                      <p className="mt-0.5 text-[15px] text-white/70">{descriptions[i]}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[460px] lg:min-h-full">
          <Image
            src="/images/placeholders/industries-photo.svg"
            alt="Care facility, placeholder"
            fill
            unoptimized
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-forest-950 via-transparent to-forest-950/70 lg:bg-gradient-to-r lg:from-forest-950 lg:via-forest-950/20 lg:to-transparent" />
          <div className="absolute inset-x-5 bottom-8 sm:inset-x-8 lg:bottom-14 lg:left-auto lg:right-8 lg:w-[min(100%,420px)]">
            <p className="display text-[22px]">Highlight:</p>
            <ul className="mt-4 flex flex-col gap-3">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-stretch bg-white text-ink">
                  <span className="flex-1 px-5 py-3.5 text-[15px] font-bold">{h.label}</span>
                  <span className="display flex w-20 items-center justify-center bg-forest-950 text-[26px] text-white">
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/employers#request"
              className="group mt-6 inline-flex h-14 items-center gap-3 border-2 border-gold px-7 text-[14px] font-extrabold uppercase tracking-[0.1em] text-gold transition-colors hover:bg-gold hover:text-forest-950"
            >
              Share what you need
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
