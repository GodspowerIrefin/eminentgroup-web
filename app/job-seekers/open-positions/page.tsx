import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { JobCards } from "@/components/Blocks";
import { actions, pages, pic } from "@/content/content";

const c = pages.openPositions;
const j = pages.jobSeekers;

export const metadata: Metadata = c.meta;

// Careers > Open Positions: hero (band) / #openings the shift tickets / #checks what we check before a
// first shift / footer.closing
export default function OpenPositions() {
  return (
    <>
      <Header current="careers" />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "68% 50%" }} primary={{ label: j.seeShifts.label, href: "#openings" }} secondary={actions.applyForWork} />
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
        <section className="section tone-paper" id="checks" aria-labelledby="checks-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="checks-h">{j.checks.title}</h2>
              <p>{j.checks.lead}</p>
            </div>
            <ul className="rows">
              {j.checks.items.map((item) => (
                <li key={item.name}>
                  <span className="rows__name">{item.name}</span>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Closing title={j.close.title} line={j.close.line} action={j.action} />
    </>
  );
}
