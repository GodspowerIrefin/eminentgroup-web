import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { actions, pages, pic } from "@/content/content";

const c = pages.resources;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #links nine links in three groups / footer.closing
export default function Resources() {
  const img = pic(c.links.image);
  return (
    <>
      <Header />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "45% 50%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section" id="links" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="links-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="links-h">{c.links.title}</h2>
              <p>{c.links.lead}</p>
            </div>
            <div className="grid grid--top">
              {c.links.groups.map((g) => (
                <div className="span-4 stack-4" key={g.title}>
                  <h3 className="t-label">{g.title}</h3>
                  <ul className="rows">
                    {g.links.map((l) => (
                      <li key={l.url}>
                        <a className="rows__name link" href={`https://${l.url}`} rel="noopener">
                          {l.name}
                        </a>
                        <p>{l.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="frame frame--photo frame--fill fill links__photo">
              <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 639px) 300vw, 100vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} style={{ objectPosition: "50% 70%" }} />
            </div>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
