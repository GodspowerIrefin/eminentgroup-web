import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroPhoto } from "@/components/Heroes";
import { actions, leaders, pages, photos, pic } from "@/content/content";

const c = pages.about;

export const metadata: Metadata = c.meta;

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("");

// Word for word from the original /about page: hero (label, h1, lead) / #agency about us, the two
// leaders and four points, beside a photograph / #statement the licence, who comes to us, the
// mission / #work three numbered tiles / #leadership the two leaders / footer.closing
export default function About() {
  const img = pic(c.agency.image);
  return (
    <>
      <Header current="about" />
      <main id="top">
        <HeroPhoto
          eyebrow={c.hero.eyebrow}
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "40% 50%" }}
          calm="right"
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section tone-night" id="agency" aria-labelledby="agency-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.agency.eyebrow}</p>
              <h2 id="agency-h">{c.agency.title}</h2>
              <p>{c.agency.lead}</p>
            </div>
            <div className="grid grid--top fill">
              <div className="span-6 eo-about__side">
                <ul className="eo-people">
                  {leaders.map((p) => (
                    <li key={p.name}>
                      <span className="eo-people__avatar" aria-hidden="true">{initials(p.name)}</span>
                      <span>
                        <span className="eo-people__name">{p.name}</span>
                        <span className="eo-people__title">{p.title}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <dl className="eo-points">
                  {c.agency.points.map((x) => (
                    <div key={x.name}>
                      <dt>{x.name}</dt>
                      <dd>{x.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="frame frame--photo frame--fill span-5 start-8">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 45vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section tone-cobalt" id="statement" aria-labelledby="mission-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4 eo-statement__side">
              <p className="eo-statement__license">{c.statement.license}</p>
              <p>{c.statement.body}</p>
            </div>
            <div className="span-6 start-7">
              <p className="eo-eyebrow" id="mission-h">{c.statement.missionLabel}</p>
              <p className="eo-statement__mission">{c.statement.mission}</p>
            </div>
          </div>
        </section>

        <section className="section tone-paper" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.work.eyebrow}</p>
              <h2 id="work-h">{c.work.title}</h2>
            </div>
            <div className="grid">
              {c.work.items.map((w, i) => {
                const tile = photos[w.photo];
                return (
                  <article className="tile span-4" key={w.title}>
                    <div className="tile__media">
                      <img src={tile.src} srcSet={tile.srcSet} sizes="(max-width: 1023px) 50vw, 33vw" width={tile.width} height={tile.height} alt={tile.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={w.title} />
                    </div>
                    <div className="tile__head">
                      <span className="eo-tile__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                      <h3>{w.title}</h3>
                    </div>
                    <p>{w.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section tone-paper" id="leadership" aria-labelledby="leadership-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.leadership.eyebrow}</p>
              <h2 id="leadership-h">{c.leadership.title}</h2>
            </div>
            <ul className="eo-how__cards eo-how__cards--two">
              {leaders.map((p) => (
                <li className="card eo-how__card eo-leader" key={p.name}>
                  <span className="eo-people__avatar eo-people__avatar--lg" aria-hidden="true">{initials(p.name)}</span>
                  <h3 className="eo-how__title">{p.name}</h3>
                  <p className="eo-how__body">{p.title}</p>
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
