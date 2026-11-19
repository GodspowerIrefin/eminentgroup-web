import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { actions, pages, pic } from "@/content/content";

const c = pages.registeredNurses;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #duties what an RN does, beside a photograph / footer.closing
export default function RegisteredNurses() {
  const img = pic(c.duties.image);
  return (
    <>
      <Header current="services" />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "40% 50%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section" id="duties" aria-labelledby="duties-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="duties-h">{c.duties.title}</h2>
              <p>{c.duties.lead}</p>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-5">
                {c.duties.items.map((d) => (
                  <li key={d.name}>
                    <span className="rows__name">{d.name}</span>
                    <p>{d.body}</p>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} />
    </>
  );
}
