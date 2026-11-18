import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { services, site } from "@/lib/site";

const media: { icon: IconName; img: string }[] = [
  { icon: "search", img: "/images/placeholders/solution-recruitment.svg" },
  { icon: "shield", img: "/images/placeholders/solution-credentialing.svg" },
  { icon: "calendar", img: "/images/placeholders/solution-staffing.svg" },
  { icon: "chat", img: "/images/placeholders/solution-followup.svg" },
];

const links = [
  { label: "Request staff", href: "/employers#request" },
  { label: "Apply for work", href: "/job-seekers#apply" },
];

export default function IntroSplit() {
  return (
    <section className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.75rem)]">
              Staffing for facilities. Work for professionals.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-mut lg:ml-auto">{site.description}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((sv, i) => (
              <Reveal key={sv.title} delay={i * 0.1}>
                <Link href="/services" className="group zoom-host lift relative block overflow-hidden">
                  <div className="zoom-img relative aspect-[4/5] overflow-hidden bg-forest">
                    <Image
                      src={media[i].img}
                      alt={`${sv.title}, placeholder image`}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-950/95 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest shadow-md">
                    <Icon name={media[i].icon} size={24} />
                  </span>
                  <div className="absolute inset-x-4 bottom-4 bg-white/15 px-4 py-4 text-white backdrop-blur-md">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="display text-[19px] leading-snug">{sv.title}</h3>
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev mt-1.5 shrink-0">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="mt-2 text-[14px] leading-snug text-white/85">{sv.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative flex flex-col justify-center" delay={0.2}>
            <span aria-hidden="true" className="deco-ring -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2" />
            <div className="relative">
              <p className="eyebrow">How it works</p>
              <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)]">From request to first shift.</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-mut">
                We recruit, verify credentials, and place staff, then follow up once the shift starts.
              </p>
              <ul className="mt-7 border-t border-rule">
                {links.map((l) => (
                  <li key={l.label} className="border-b border-rule">
                    <Link href={l.href} className="group flex items-center gap-3 py-4 text-[17px] font-bold hover:text-red">
                      <span aria-hidden="true" className="h-3 w-3 rounded-full border-2 border-red" />
                      {l.label}
                      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="chev ml-auto">
                        <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-forest/30 text-forest">
                <Icon name="stethoscope" size={30} />
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="inline-flex items-center gap-4 border-l-4 border-gold bg-white px-5 py-4 shadow-[0_24px_48px_-28px_rgba(23,26,38,0.4)]">
            <span className="text-forest">
              <Icon name="badge" size={30} />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mut">Maryland licensed</p>
              <p className="font-bold">Health Care Staff Agency</p>
              <p className="text-sm text-mut">License # {site.license}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
