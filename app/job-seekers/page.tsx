import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroPhoto } from "@/components/Heroes";
import { Form, JobCards } from "@/components/Blocks";
import { actions, forms, pages, pic } from "@/content/content";

const c = pages.jobSeekers;

export const metadata: Metadata = c.meta;

// a link from a shift card (?position=RN) chooses that role in the form; the form works without it
const PRESET = `(function(){var p=new URLSearchParams(location.search).get('position');var s=document.getElementById('apl-position');if(!p||!s)return;for(var o of s.options){if(o.value===p||o.text===p){s.value=o.value;break}}})();`;

// Plan: hero (photo) / #openings the two shift tickets side by side / #checks what we check before
// a first shift, beside a photograph / #apply the application / footer.closing
export default function JobSeekers() {
  const checkImg = pic(c.checks.image);
  return (
    <>
      <Header current="careers" action={c.action} second={actions.requestStaff} />
      <main id="top">
        <HeroPhoto
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "68% 50%", posPhone: "62% 50%" }}
          calm="left"
          primary={c.action}
          secondary={c.seeShifts}
        />

        <section className="section" id="openings" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="openings-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="openings-h">{c.openings.title}</h2>
              <p>{c.openings.lead}</p>
            </div>
            <div className="eo-tickets eo-tickets--wide">
              <JobCards />
            </div>
          </div>
        </section>

        <section className="section tone-night" id="checks" aria-labelledby="checks-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="checks-h">{c.checks.title}</h2>
              <p>{c.checks.lead}</p>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-5">
                {c.checks.items.map((item) => (
                  <li key={item.name}>
                    <span className="rows__name">{item.name}</span>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src={checkImg.src} srcSet={checkImg.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={checkImg.width} height={checkImg.height} alt={checkImg.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={checkImg.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="apply" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="apply-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="apply-h">{c.apply.title}</h2>
              <p>{c.apply.lead}</p>
              <ul className="rows">
                {c.apply.facts.map((f) => (
                  <li key={f.name}>
                    <span className="rows__name">{f.name}</span>
                    <span className="rows__value">{f.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="form-panel span-6 start-7">
              <Form
                id="apl"
                copy={forms.apply}
                fields={[
                  { name: "name", autoComplete: "name", required: true },
                  { name: "email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", type: "tel", autoComplete: "tel", required: true },
                  { name: "position", type: "select", required: true },
                  { name: "availability", type: "select", full: true },
                  { name: "experience", type: "textarea" },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} action={c.action} />
      <script dangerouslySetInnerHTML={{ __html: PRESET }} />
    </>
  );
}
