import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { JobCards } from "@/components/Blocks";
import { pages, pic } from "@/content/content";

const c = pages.rnRoles;
const rn = pages.registeredNurses;
const j = pages.jobSeekers;

export const metadata: Metadata = c.meta;

// Careers > Registered Nurse Roles: hero (band) / #duties what an RN does on a shift / #openings the open
// shifts / footer.closing (apply)
export default function RnRoles() {
  const img = pic(rn.duties.image);
  const apply = { label: j.action.label, href: "/job-seekers/apply/?position=RN" };
  return (
    <>
      <Header current="careers" />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "42% 50%" }} primary={apply} secondary={{ label: j.seeShifts.label, href: "#openings" }} />
        <section className="section tone-paper" id="duties" aria-labelledby="duties-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="duties-h">{rn.duties.title}</h2>
            </div>
            <div className="grid grid--top fill">
              <ol className="eo-duties span-6">
                {rn.duties.items.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ol>
              <div className="frame frame--photo frame--fill span-5 start-8">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>
        <section className="section tone-paper" id="openings" aria-labelledby="openings-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="openings-h">{j.openings.title}</h2>
            </div>
            <div className="eo-tickets eo-tickets--wide">
              <JobCards />
            </div>
          </div>
        </section>
      </main>
      <Closing title={j.close.title} line={j.close.line} action={apply} />
    </>
  );
}
