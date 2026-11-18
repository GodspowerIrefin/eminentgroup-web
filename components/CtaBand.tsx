import Link from "next/link";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const types: { label: string; icon: IconName }[] = [
  { label: "Temporary staffing", icon: "clock" },
  { label: "Temp-to-perm staffing", icon: "repeat" },
  { label: "Permanent staffing", icon: "user" },
];

export default function CtaBand() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <Reveal className="relative mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[32px] bg-forest-950 px-7 pb-10 pt-14 text-white sm:px-14 lg:pt-20">
          <span aria-hidden="true" className="deco-ring -bottom-40 -left-20 h-80 w-80 !border-white/10" />
          <span aria-hidden="true" className="deco-ring -right-24 -top-24 h-80 w-80 !border-white/10" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="display text-[clamp(1.875rem,3.8vw,3.25rem)]">Request staff or apply for work.</h2>
            <p className="mt-5 text-lg text-white/75">
              Call{" "}
              <a href={site.phoneHref} className="link-underline font-semibold text-white">
                {site.phone}
              </a>{" "}
              or start online.
            </p>
          </div>

          <ul className="relative mt-9 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {types.map((t) => (
              <li key={t.label} className="flex items-center gap-3 text-[15.5px] font-semibold">
                <span className="text-gold">
                  <Icon name={t.icon} size={26} />
                </span>
                {t.label}
              </li>
            ))}
          </ul>

          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/employers#request" variant="light">
              Request staff
            </Button>
            <Button href="/job-seekers#apply">Apply for work</Button>
          </div>

          <div className="relative mt-12 grid items-center gap-6 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto_1fr]">
            <div className="text-center sm:text-left">
              <p className="display text-[22px]">Have a question?</p>
              <Link href="/services#faq" className="link-underline mt-1 inline-block text-[15px] text-white/80 hover:text-white">
                Read our FAQ
              </Link>
            </div>
            <div className="flex justify-center" aria-hidden="false">
              <Link
                href="/services#faq"
                aria-label="Read our FAQ"
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-forest-950 shadow-lg transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <Icon name="question" size={26} />
              </Link>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className="-ml-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red shadow-lg ring-4 ring-forest-950 transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <Icon name="mail" size={26} />
              </a>
            </div>
            <div className="text-center sm:text-right">
              <p className="display text-[22px]">Email us</p>
              <a href={`mailto:${site.email}`} className="link-underline mt-1 inline-block break-all text-[15px] text-white/80 hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
