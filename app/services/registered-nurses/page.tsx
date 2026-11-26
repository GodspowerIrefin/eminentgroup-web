import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { actions, pages, pic, site } from "@/content/content";

const c = pages.registeredNurses;

export const metadata: Metadata = c.meta;

// Word for word from the original page: hero (title, tagline) / #duties intro + "What RNs do" numbered,
// beside a photograph / #where the settings / #next request an RN, RNs apply / #others the other roles /
// footer.closing
export default function RegisteredNurses() {
  const img = pic(c.duties.image);
  return (
    <>
      <Header current="services" />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.tagline}
          image={{ ...pic(c.hero.image), pos: "40% 50%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section" id="duties" aria-labelledby="duties-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-intro">{c.hero.lead}</p>
              <h2 id="duties-h">{c.duties.title}</h2>
            </div>
            <div className="grid grid--top fill">
              <ol className="eo-duties span-6">
                {c.duties.items.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ol>
              <div className="frame frame--photo frame--fill span-5 start-8">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 45vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section tone-night" id="where" aria-labelledby="where-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="where-h">{c.settings.title}</h2>
            </div>
            <ul className="eo-places">
              {c.settings.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tone-paper" id="next" aria-label={`${c.request.title}. ${c.apply.title}`}>
          <div className="wrap">
            <ul className="eo-how__cards eo-how__cards--two">
              <li className="card eo-how__card">
                <h3 className="eo-how__title">{c.request.title}</h3>
                <p className="eo-how__body">{c.request.body}</p>
                <a className="btn btn--primary" href={c.request.action.href}>{c.request.action.label}</a>
              </li>
              <li className="card eo-how__card">
                <h3 className="eo-how__title">{c.apply.title}</h3>
                <p className="eo-how__body">{c.apply.body}</p>
                <a className="btn btn--primary" href={c.apply.action.href}>{c.apply.action.label}</a>
                <p className="eo-how__body">
                  {c.apply.call} <a href={site.phoneHref}>{site.phone}</a>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section tone-paper" id="others" aria-labelledby="others-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="others-h">{c.others.title}</h2>
              <p>{c.others.lead}</p>
            </div>
            <ul className="eo-places eo-places--links">
              {c.others.items.map((r) => (
                <li key={r}>
                  <a href={c.others.href}>{r}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} />
    </>
  );
}
