import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroPhoto } from "@/components/Heroes";
import { actions, leaders, pages, photos, pic, site } from "@/content/content";

const c = pages.about;

export const metadata: Metadata = c.meta;

// Plan: hero (photo) / #agency who runs it and who it serves, beside a photograph / #work three
// photographed tiles on what each placement includes / footer.closing
export default function About() {
  const img = pic(c.agency.image);
  return (
    <>
      <Header current="about" />
      <main id="top">
        <HeroPhoto
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
              <h2 id="agency-h">{c.agency.title}</h2>
              <p>{c.agency.lead}</p>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-5">
                {leaders.map((p) => (
                  <li key={p.name}>
                    <span className="rows__name">{p.name}</span>
                    <span className="rows__value">{p.title}</span>
                  </li>
                ))}
                <li>
                  <span className="rows__name">{c.agency.officeLabel}</span>
                  <span className="rows__value">{site.address}</span>
                </li>
                <li>
                  <span className="rows__name">{c.agency.licenseLabel}</span>
                  <span className="rows__value">{site.license}</span>
                </li>
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="work-h">{c.work.title}</h2>
            </div>
            <div className="grid">
              {c.work.items.map((w) => {
                const tile = photos[w.photo];
                return (
                  <article className="tile span-4" key={w.title}>
                    <div className="tile__media">
                      <img src={tile.src} srcSet={tile.srcSet} sizes="(max-width: 1023px) 50vw, 33vw" width={tile.width} height={tile.height} alt={tile.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={w.title} />
                    </div>
                    <div className="tile__head">
                      <h3>{w.title}</h3>
                    </div>
                    <p>{w.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
