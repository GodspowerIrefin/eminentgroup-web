import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { roles, settings, site } from "@/lib/site";

// Every point below restates content already on the site (lib/site.ts).
const items = [
  { title: "Maryland licensed", body: `Health Care Staff Agency, license # ${site.license}.` },
  { title: "Credentials verified", body: "Licenses, certifications, work history, and background checks." },
  { title: "Flexible staffing", body: "Temporary, temp-to-perm, and permanent placements." },
  { title: "Follow-up after placement", body: "We stay in contact with the facility and the professional." },
  { title: "Roles across care", body: `${roles.length} kinds of professionals, from RNs to caregivers.` },
  { title: "Settings we serve", body: `${settings.length} settings, from hospitals to home care.` },
];

// pointer rotation (degrees, 0 = pointing right) so every arrow aims at the centre
const leftAngle = [45, 0, -45];
const rightAngle = [135, 180, 225];

function Tag({ n, side, angle }: { n: number; side: "left" | "right"; angle: number }) {
  const item = items[n];
  const left = side === "left";
  return (
    <div
      className={`group flex items-center gap-4 rounded-full border border-rule bg-white py-3 shadow-[0_18px_38px_-28px_rgba(10,42,39,0.5)] transition-shadow hover:shadow-[0_24px_44px_-24px_rgba(10,42,39,0.55)] ${
        left ? "pl-6 pr-3 lg:flex-row" : "pl-6 pr-3 lg:flex-row-reverse lg:pl-3 lg:pr-6"
      }`}
    >
      <span aria-hidden="true" className="display text-[44px] font-light leading-none text-forest/15">
        {String(n + 1).padStart(2, "0")}
      </span>
      <div className={`min-w-0 flex-1 ${left ? "" : "lg:text-right"}`}>
        <h3 className="text-[16.5px] font-bold leading-snug">{item.title}</h3>
        <p className="mt-0.5 text-[14px] leading-snug text-mut">{item.body}</p>
      </div>
      <span
        aria-hidden="true"
        className={`flex h-11 w-11 shrink-0 items-center justify-center bg-forest-950 text-white transition-[transform,background-color] duration-300 group-hover:bg-red motion-reduce:transition-none ${
          left ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"
        } motion-reduce:group-hover:transform-none`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="hidden lg:block"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" className="lg:hidden">
          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Eminent One</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">Advantages of working with us</h2>
          <p className="mt-5 text-lg leading-relaxed text-mut">{site.tagline} A licensed Maryland agency that stays involved after the placement starts.</p>
        </Reveal>

        <ol className="relative mt-14 grid list-none gap-4 lg:grid-cols-[1fr_440px_1fr] lg:grid-rows-3 lg:gap-x-10 lg:gap-y-6">
          <li aria-hidden="true" className="relative hidden items-center justify-center lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:flex">
            <span className="deco-ring left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2" />
            <span className="deco-ring left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 !border-red/20" />
            <Image
              src="/images/placeholders/advantages-center.svg"
              alt=""
              width={560}
              height={560}
              unoptimized
              className="relative h-[330px] w-[330px] rounded-full object-cover"
            />
          </li>
          {items.map((it, n) => {
            const left = n < 3;
            const row = n % 3;
            return (
              <li
                key={it.title}
                className={`${left ? "lg:col-start-1" : "lg:col-start-3"} ${["lg:row-start-1", "lg:row-start-2", "lg:row-start-3"][row]}`}
              >
                <Reveal
                  className={left ? "slide-in-left" : "slide-in-right"}
                  delay={row * 0.1}
                >
                  <Tag n={n} side={left ? "left" : "right"} angle={left ? leftAngle[row] : rightAngle[row]} />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
