import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { leaders, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eminent One LLC is a licensed Maryland health care staff agency placing nurses and care staff with facilities across our service area.",
};

const work = [
  ["Credentials first", "We verify licenses, certifications, employment history, and background checks before anyone starts."],
  ["Matched to the setting", "We place each professional by license, experience, and the shift the facility needs."],
  ["Follow-up", "We stay in contact with the facility and the professional after the placement starts."],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A licensed healthcare staffing agency in Maryland."
        lead="Eminent One LLC places nurses and care staff with hospitals, nursing homes, rehabilitation centers, assisted living facilities, and home care agencies across our service area."
      />

      <section className="band-dark px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="About us"
              title="A licensed Maryland healthcare staffing agency."
              lead={`Eminent One LLC is a Maryland agency and holds Maryland Health Care Staff Agency license ${site.license}. We place nurses and care staff with facilities across our service area.`}
            />
            <Reveal className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {leaders.map((p) => (
                <div key={p.name} className="flex items-center gap-4">
                  <span className="display flex h-14 w-14 items-center justify-center rounded-full border border-rule text-lg">
                    {p.initials}
                  </span>
                  <div>
                    <p className="font-bold">{p.name}</p>
                    <p className="text-sm text-mut">{p.title}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {[
              ["Verified credentials", "Licenses, certifications, and background checks confirmed before placement."],
              ["Flexible terms", "Temporary, temp-to-perm, or permanent placements."],
              ["Follow-up", "We stay in touch with facilities and professionals after the placement."],
              ["Local Maryland team", "Based in Maryland and serving our service area."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.07} className="border-t border-rule py-7">
                <dt className="text-lg font-bold">{title}</dt>
                <dd className="mt-2 leading-relaxed text-mut">{body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Reveal>
            <p className="display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25]">
              We operate under Maryland Health Care Staff Agency license {site.license}.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-mut">
              Facilities come to us for temporary coverage, temp-to-perm arrangements, and permanent
              hires. Nurses and caregivers come to us for work that fits their license and schedule.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-forest p-9 text-white sm:p-11">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/60">Our mission</p>
              <p className="display mt-5 text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.2]">
                To connect qualified healthcare professionals with the Maryland facilities that need
                them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How we work" title="What every placement includes." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {work.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className={`card card-hover h-full border-transparent p-8 ${["bg-sand", "bg-mint", "bg-blush"][i]}`}>
                  <span className="display numeral text-5xl text-forest/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-mut">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Leadership" title="The people behind Eminent One." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="card flex h-full items-center gap-7 p-8 sm:p-10">
                  <span className="display flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-forest text-3xl text-white">
                    {p.initials}
                  </span>
                  <div>
                    <h3 className="display text-3xl">{p.name}</h3>
                    <p className="mt-1.5 font-semibold text-red">{p.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-mut">{p.credential}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
