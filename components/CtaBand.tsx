import Button from "./Button";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[32px] bg-night px-7 py-14 text-white sm:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/35 blur-3xl"
          />
          <span aria-hidden="true" className="deco-ring -bottom-40 -left-20 h-80 w-80 !border-white/10" />
          <div className="relative flex flex-wrap items-end justify-between gap-10">
            <div>
              <h2 className="display max-w-xl text-[clamp(1.875rem,3.6vw,3rem)]">
                Request staff or apply for work.
              </h2>
              <p className="mt-5 text-lg text-white/75">
                Call{" "}
                <a href={site.phoneHref} className="link-underline font-semibold text-white">
                  {site.phone}
                </a>{" "}
                or start online.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/employers#request" variant="light">
                Request staff
              </Button>
              <Button href="/job-seekers#apply">Apply for work</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
