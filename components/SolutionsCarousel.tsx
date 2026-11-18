"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { services } from "@/lib/site";

const media: { icon: IconName; img: string }[] = [
  { icon: "search", img: "/images/placeholders/solution-recruitment.svg" },
  { icon: "shield", img: "/images/placeholders/solution-credentialing.svg" },
  { icon: "calendar", img: "/images/placeholders/solution-staffing.svg" },
  { icon: "chat", img: "/images/placeholders/solution-followup.svg" },
];

export default function SolutionsCarousel() {
  const track = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.children[0] as HTMLElement | undefined;
      if (!card) return;
      const step = card.offsetWidth + 24;
      setActive(Math.min(services.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (n: number) => {
    const el = track.current;
    const card = el?.children[n] as HTMLElement | undefined;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="bg-sand px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            Staffing for healthcare facilities across Maryland.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mut">
            We recruit nurses and care staff, verify their credentials, and place them where they are
            needed.
          </p>
        </Reveal>

        <ul
          ref={track}
          aria-label="Services"
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((s, i) => (
            <li
              key={s.title}
              className="w-full shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
            >
              <Reveal delay={i * 0.08} className="h-full">
                <article className="group zoom-host lift flex h-full flex-col bg-white p-6 pb-7">
                  <h3 className="display min-h-[3.4em] text-[22px] !font-semibold leading-snug">{s.title}</h3>
                  <div className="relative mt-5">
                    <div className="zoom-img relative aspect-[3/2] overflow-hidden bg-forest">
                      <Image
                        src={media[i].img}
                        alt={`${s.title}, placeholder image`}
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute -left-3 -top-3 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-forest shadow-md">
                      <svg aria-hidden="true" viewBox="0 0 60 60" className="absolute inset-0 text-red">
                        <path d="M6 30A24 24 0 0 1 30 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <Icon name={media[i].icon} size={26} />
                    </span>
                    <p className="relative z-10 -mt-10 ml-5 mr-5 bg-white p-5 text-[16px] leading-relaxed text-mut shadow-[0_18px_36px_-22px_rgba(10,42,39,0.45)]">
                      {s.body}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-extrabold uppercase tracking-[0.12em] text-forest hover:text-red"
                  >
                    Explore more
                    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="chev">
                      <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-3" role="group" aria-label="Choose service">
          {services.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Show ${s.title}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className="group flex h-6 items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-300 ${
                  i === active ? "w-10 bg-red" : "w-6 bg-forest/25 group-hover:bg-forest/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
