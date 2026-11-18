import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type Person = {
  label: string;
  src: string;
  // Framing inside the circle, in units of the circle's diameter:
  // w = rendered image width, ar = image height / width,
  // fx / fy = where the face centre sits in the photo (0-1).
  w: number;
  ar: number;
  fx: number;
  fy: number;
  badge: string;
  // position + size on large screens
  pos: string;
  size: string;
  float: "float-slow" | "float-slower";
};

// Free stock photos from Pexels (pexels.com/license), stored in public/images/hero.
// Swap in real staff photos when available, then adjust w / fx / fy to frame the face.
const people: Person[] = [
  { label: "Registered Nurse", src: "/images/hero/nurse-rn.jpg", w: 1.9, ar: 1.498, fx: 0.44, fy: 0.23, badge: "bg-[#9be7b5] text-forest-950", pos: "left-[7%] top-[20%]", size: "h-28 w-28", float: "float-slow" },
  { label: "CNA", src: "/images/hero/cna.jpg", w: 2.8, ar: 0.75, fx: 0.5, fy: 0.37, badge: "bg-[#7fe0ef] text-forest-950", pos: "left-[15%] top-[48%]", size: "h-24 w-24", float: "float-slower" },
  { label: "Home Health Aide", src: "/images/hero/home-health-aide.jpg", w: 1.5, ar: 1.777, fx: 0.43, fy: 0.19, badge: "bg-white text-forest-950", pos: "left-[9%] top-[72%]", size: "h-20 w-20", float: "float-slow" },
  { label: "LPN", src: "/images/hero/nurse-lpn.jpg", w: 1.75, ar: 1.5, fx: 0.51, fy: 0.27, badge: "bg-gold-200 text-forest-950", pos: "right-[10%] top-[22%]", size: "h-24 w-24", float: "float-slower" },
  { label: "Therapist", src: "/images/hero/therapist.jpg", w: 3.2, ar: 0.667, fx: 0.39, fy: 0.27, badge: "bg-[#f5a97f] text-forest-950", pos: "right-[17%] top-[50%]", size: "h-20 w-20", float: "float-slow" },
  { label: "Medical Assistant", src: "/images/hero/medical-assistant.jpg", w: 1.75, ar: 1.5, fx: 0.5, fy: 0.23, badge: "bg-[#c9b5f5] text-forest-950", pos: "right-[7%] top-[72%]", size: "h-28 w-28", float: "float-slower" },
];

const delayVar = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function Bubble({ p, delay = 0, className = "" }: { p: Person; delay?: number; className?: string }) {
  return (
    <div className={`pop-in flex flex-col items-center ${className}`} style={delayVar(delay)}>
      <div className={`${p.size} relative`}>
        {/* two soft rings that ripple outward, offset in time */}
        <span className="ripple" style={delayVar(delay + 0.8)} />
        <span className="ripple" style={delayVar(delay + 2.4)} />
        <div className="relative h-full w-full overflow-hidden rounded-full bg-forest shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] ring-4 ring-white/15">
          <Image
            src={p.src}
            alt=""
            width={900}
            height={Math.round(900 * p.ar)}
            sizes={`${Math.round(p.w * 112)}px`}
            className="absolute max-w-none"
            style={{
              width: `${p.w * 100}%`,
              left: `${(0.5 - p.fx * p.w) * 100}%`,
              top: `${(0.45 - p.fy * p.w * p.ar) * 100}%`,
            }}
          />
        </div>
      </div>
      <span className={`relative -mt-3 whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-semibold ${p.badge}`}>
        {p.label}
      </span>
    </div>
  );
}

function Contours() {
  // faint topographic lines, like the reference background
  const rings = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800">
      <g fill="none" stroke="#fff" strokeWidth="1.4" className="contour-drift">
        {rings.map((r) => (
          <path
            key={`a${r}`}
            d={`M${180 - r * 34} ${260} C ${180 - r * 34} ${120 - r * 30}, ${520 + r * 40} ${90 - r * 26}, ${560 + r * 38} ${250} S ${300 + r * 10} ${470 + r * 34}, ${180 - r * 34} ${260} Z`}
          />
        ))}
        {rings.map((r) => (
          <path
            key={`b${r}`}
            d={`M${1060 - r * 36} ${560} C ${1040 - r * 36} ${400 - r * 30}, ${1380 + r * 34} ${380 - r * 32}, ${1400 + r * 36} ${560} S ${1160 + r * 12} ${760 + r * 30}, ${1060 - r * 36} ${560} Z`}
          />
        ))}
        {rings.slice(0, 5).map((r) => (
          <path key={`c${r}`} d={`M0 ${640 + r * 40} C 300 ${560 + r * 40}, 520 ${760 + r * 40}, 820 ${680 + r * 40}`} />
        ))}
        {rings.slice(0, 5).map((r) => (
          <path key={`d${r}`} d={`M760 ${40 + r * 36} C 980 ${-20 + r * 36}, 1180 ${140 + r * 36}, 1440 ${60 + r * 36}`} />
        ))}
      </g>
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-forest-950 text-white">
      <Contours />

      {/* floating portraits, large screens */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {people.map((p, n) => (
          <div key={p.label} className={`absolute ${p.pos} ${p.float}`}>
            <Bubble p={p} delay={0.3 + n * 0.12} />
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-[1320px] flex-col items-center px-5 pb-36 pt-36 text-center sm:px-8 lg:pb-48 lg:pt-52">
        <h1 className="display fade-up max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] !leading-[1.08] sm:max-w-none">
          Healthcare Staffing
          <br />
          <span className="shimmer-text">With a Personal Touch</span>
        </h1>

        <p className="fade-up mt-6 max-w-[38rem] text-[17px] leading-relaxed text-white/85 [--d:0.12s]">
          A licensed Maryland agency connecting nurses and care professionals with hospitals, nursing homes, rehab
          centers, assisted living, and home care.
        </p>

        <div className="fade-up mt-9 flex flex-wrap items-center justify-center gap-4 [--d:0.24s]">
          <Link
            href="/employers#request"
            className="btn-shine group inline-flex h-14 items-center gap-2.5 rounded-full bg-red px-8 text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(200,16,46,0.8)] transition-colors hover:bg-red-600"
          >
            Request Staff
            <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" className="nudge">
              <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/job-seekers#apply"
            className="inline-flex h-14 items-center rounded-full bg-white px-8 text-[15px] font-semibold text-forest-950 transition-colors hover:bg-gold-200"
          >
            Find Work Now
          </Link>
        </div>

        {/* portraits as a row on small screens */}
        <div aria-hidden="true" className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-6 lg:hidden">
          {people.slice(0, 4).map((p, n) => (
            <Bubble key={p.label} p={{ ...p, size: "h-16 w-16" }} delay={0.4 + n * 0.1} />
          ))}
        </div>
      </div>

      {/* curved bottom edge into the next section */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-10 w-full text-canvas sm:h-16 lg:h-20"
      >
        <path d="M0 80V0C360 70 1080 70 1440 0V80Z" fill="currentColor" />
      </svg>
    </section>
  );
}
