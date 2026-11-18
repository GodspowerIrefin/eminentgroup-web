import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const audiences = [
  {
    label: "Employers",
    href: "/employers",
    img: "/images/placeholders/intro-employers.svg",
    alt: "Healthcare facility team, placeholder",
  },
  {
    label: "Job Seekers",
    href: "/job-seekers",
    img: "/images/placeholders/intro-job-seekers.svg",
    alt: "Healthcare professional, placeholder",
  },
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
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.75rem)]">
              Staffing for facilities. Work for professionals.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-mut lg:ml-auto">{site.description}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.12}>
                <Link
                  href={a.href}
                  className="group zoom-host lift relative block overflow-hidden"
                >
                  <div className="zoom-img relative aspect-[3/4] overflow-hidden bg-forest">
                    <Image
                      src={a.img}
                      alt={a.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-950/90 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-center justify-between bg-white/20 px-5 py-4 text-white backdrop-blur-md">
                    <span className="display text-[22px]">{a.label}</span>
                    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" className="chev">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
