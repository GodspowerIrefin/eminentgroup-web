import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { services, site } from "@/lib/site";

// One entry per service in lib/site.ts, in the same order.
// Photos are free Pexels stock (pexels.com/license), stored in public/images/services.
const media: { icon: IconName; img: string; alt: string }[] = [
  { icon: "search", img: "/images/services/recruitment.jpg", alt: "A recruiter reviewing a candidate's résumé" },
  { icon: "shield", img: "/images/services/credentialing.jpg", alt: "Hands reviewing paperwork at a desk" },
  { icon: "calendar", img: "/images/services/staffing.jpg", alt: "Two nurses in scrubs at a nurses' station" },
  { icon: "chat", img: "/images/services/follow-up.jpg", alt: "A nurse holding a patient's hand" },
];

const steps = ["Request", "Verify", "Place", "Follow up"];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={`chev shrink-0 ${className}`}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function IntroSplit() {
  return (
    <section className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* heading */}
        <Reveal className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 className="display mt-4 max-w-[22ch] text-[clamp(2rem,3.8vw,3.25rem)]">
              Staffing for healthcare facilities across Maryland.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-[17px] leading-relaxed text-mut">{site.description}</p>
          </div>
        </Reveal>

        {/* service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((sv, i) => {
            const m = media[i % media.length];
            return (
              <Reveal key={sv.title} delay={i * 0.1} className="h-full">
                <Link
                  href="/services"
                  className="svc-card group zoom-host relative flex h-full flex-col overflow-hidden rounded-[20px] border border-rule bg-white"
                >
                  <div className="relative">
                    <div className="zoom-img relative aspect-[4/3] overflow-hidden bg-forest">
                      <Image
                        src={m.img}
                        alt={m.alt}
                        fill
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
                      <span className="display absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[14px] text-forest-950 backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="svc-icon absolute bottom-0 left-6 z-10 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-full bg-red text-white ring-[5px] ring-white">
                      <Icon name={m.icon} size={26} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6 pt-11">
                    <h3 className="display text-[21px] leading-snug transition-colors group-hover:text-red">{sv.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-mut">{sv.body}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-[14px] font-bold text-forest group-hover:text-red">
                      Learn more <Arrow />
                    </span>
                  </div>

                  {/* gold bar that grows on hover / focus */}
                  <span aria-hidden="true" className="svc-bar absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* call to action band */}
        <Reveal className="mt-14">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-forest-950 px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-12">
            <span aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" />
            <span aria-hidden="true" className="absolute -right-6 -top-10 -z-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
              <div>
                <p className="eyebrow !text-gold">Getting started</p>
                <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)]">Need staff, or looking for work?</h3>
                <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-white/80">
                  {steps.map((s, n) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[12px] font-bold text-forest-950">
                          {n + 1}
                        </span>
                        {s}
                      </span>
                      {n < steps.length - 1 && <span aria-hidden="true" className="h-px w-6 bg-white/30" />}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/employers#request"
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-red px-7 text-[15px] font-semibold transition-colors hover:bg-red-600"
                >
                  Request staff <Arrow />
                </Link>
                <Link
                  href="/job-seekers#apply"
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/40 px-7 text-[15px] font-semibold transition-colors hover:border-white hover:bg-white hover:text-forest-950"
                >
                  Apply for work <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
