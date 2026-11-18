import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { services } from "@/lib/site";

// One entry per service in lib/site.ts, in the same order.
// Photos are free Pexels stock (pexels.com/license), stored in public/images/services.
const media: { icon: IconName; img: string; href: string }[] = [
  { icon: "search", img: "/images/services/recruitment.jpg", href: "/employers#request" },
  { icon: "shield", img: "/images/services/credentialing.jpg", href: "/employers" },
  { icon: "calendar", img: "/images/services/staffing.jpg", href: "/employers#request" },
  { icon: "chat", img: "/images/services/follow-up.jpg", href: "/contact" },
];

export default function ServiceSteps() {
  return (
    <section className="overflow-hidden px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="display mt-4 text-[clamp(1.875rem,3.6vw,3rem)]">How we staff your facility</h2>
          <p className="mt-4 text-lg leading-relaxed text-mut">
            From the first search to the check-in after the first shift, every candidate is screened and credentialed
            before placement.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const m = media[i % media.length];
            return (
              <Reveal key={s.title} delay={i * 0.14} className="proc">
                <Link
                  href={m.href}
                  className="proc-card group block rounded-[24px] px-2 pb-4 pt-2 text-center outline-none"
                >
                  <div className="relative mx-auto aspect-square w-[78%] max-w-[230px]">
                    {/* outlined diamond behind the photo */}
                    <span aria-hidden="true" className="proc-diamond absolute inset-[-12%] border-[1.5px] border-gold" />

                    <div className="proc-photo relative h-full w-full overflow-hidden rounded-[10px] bg-forest shadow-[0_24px_50px_-28px_rgba(10,42,39,0.6)]">
                      <Image src={m.img} alt="" fill sizes="(min-width:1024px) 230px, 60vw" className="object-cover" />
                      <span className="proc-num display absolute bottom-0 right-0 flex h-16 w-16 items-end justify-end rounded-tl-[44px] bg-forest-950 pb-3 pr-4 text-[22px] text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="proc-icon absolute -left-[16%] -top-[14%] flex h-16 w-16 items-center justify-center rounded-[10px] bg-white text-red shadow-[0_18px_40px_-16px_rgba(10,42,39,0.45)]">
                      <Icon name={m.icon} size={30} />
                    </span>
                  </div>

                  <h3 className="display mt-14 text-[22px] leading-snug transition-colors group-hover:text-red group-focus-visible:text-red">
                    {s.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[30ch] text-[15.5px] leading-relaxed text-mut">{s.body}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
