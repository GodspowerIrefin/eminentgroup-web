import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { actions, pages, pic } from "@/content/content";

const c = pages.terms;

export const metadata: Metadata = c.meta;

// Staffing Services > Temporary and Permanent Staffing: hero (band) / #terms the three terms as cards /
// #schedules the three schedules / footer.closing
export default function Terms() {
  return (
    <>
      <Header current="services" />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "50% 40%" }} primary={actions.requestStaff} secondary={actions.applyForWork} />
        <section className="section tone-paper" id="terms" aria-labelledby="terms-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="terms-h">{c.options.title}</h2>
            </div>
            <ul className="eo-how__cards">
              {c.options.items.map((t) => (
                <li className="card eo-how__card" key={t.name}>
                  <h3 className="eo-how__title">{t.name}</h3>
                  <p className="eo-how__body">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="section tone-paper" id="schedules" aria-labelledby="schedules-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="schedules-h">{c.schedules.title}</h2>
            </div>
            <ul className="rows">
              {c.schedules.items.map((t) => (
                <li key={t.name}>
                  <span className="rows__name">{t.name}</span>
                  <p>{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
