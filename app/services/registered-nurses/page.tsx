import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { roles, settings, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Registered Nurses",
  description:
    "Registered Nurse (RN) staffing from Eminent One LLC, placing RNs in hospitals, nursing homes, rehab centers, assisted living, and home care in the Baltimore area.",
};

const duties = [
  "Assess, plan, and deliver nursing care to accepted standards.",
  "Give treatments and medications and monitor how patients respond.",
  "Keep detailed records of patient progress.",
  "Coordinate care with other health professionals and answer patient and family questions.",
];

export default function RegisteredNurses() {
  return (
    <>
      <PageHero
        eyebrow="Registered nurses"
        title="Registered nurses for clinical, hospital, home, and residential settings."
        lead="Registered nurses monitor patient health, make sure treatments and medications are given as planned, and keep doctors informed of changes. Duties differ by facility. We match each RN to the setting."
        crumbs={[{ href: "/services", label: "Medical Staffing" }]}
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="display text-4xl">What RNs do</h2>
              <ul className="mt-8 border-t border-rule">
                {duties.map((d, i) => (
                  <li key={d} className="flex gap-6 border-b border-rule py-6 text-lg leading-relaxed">
                    <span className="display numeral text-2xl text-forest/35">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-16">
              <h2 className="display text-4xl">Where we place RNs</h2>
              <ul className="mt-8 flex flex-wrap gap-3">
                {settings.map((s) => (
                  <li key={s} className="rounded-full border border-rule bg-paper px-5 py-2.5 font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-[28px] bg-forest p-9 text-white">
                <h2 className="display text-3xl">Request an RN</h2>
                <p className="mb-7 mt-3 text-white/75">Tell us the shift and start date.</p>
                <Button href="/employers#request" variant="light">
                  Request staff
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-9">
                <h2 className="display text-3xl">RNs: apply for work</h2>
                <p className="mb-7 mt-3 text-mut">Apply for RN openings with our client facilities.</p>
                <Button href="/job-seekers?position=RN#apply">Apply for work</Button>
                <p className="mt-6 text-[15px] text-mut">
                  Or call{" "}
                  <a href={site.phoneHref} className="font-semibold text-forest underline underline-offset-4">
                    {site.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Other roles" title="Other professionals we place." />
          <Reveal className="mt-10 flex flex-wrap gap-3">
            {roles.slice(1).map((r) => (
              <Link
                key={r.name}
                href="/services"
                className="rounded-full border border-rule px-5 py-2.5 font-medium transition-colors hover:border-forest hover:bg-forest hover:text-white"
              >
                {r.name}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
