import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Form } from "@/components/Blocks";
import Rich from "@/components/Rich";
import { actions, forms, pages, pic } from "@/content/content";

const c = pages.employers;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #expect what follows a request, beside a photograph / #request the form /
// footer.closing
export default function Employers() {
  const img = pic(c.expect.image);
  return (
    <>
      <Header current="employers" action={actions.requestStaff} />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "35% 50%" }}
          primary={c.action}
          secondary={actions.callOffice}
        />

        <section className="section tone-night" id="expect" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="expect-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="expect-h">{c.expect.title}</h2>
            </div>
            <div className="grid grid--top fill">
              <ol className="rows span-5">
                {c.expect.items.map((e) => (
                  <li key={e.name}>
                    <span className="rows__name">{e.name}</span>
                    <p>{e.body}</p>
                  </li>
                ))}
              </ol>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 33vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="request" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="request-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="request-h">{c.request.title}</h2>
              <p>
                <Rich value={c.request.lead} />
              </p>
            </div>
            <div className="form-panel span-6 start-7">
              <Form
                id="req"
                copy={forms.request}
                fields={[
                  { name: "facility", autoComplete: "organization", required: true },
                  { name: "name", autoComplete: "name", required: true },
                  { name: "email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", type: "tel", autoComplete: "tel" },
                  { name: "role", type: "select", required: true, full: true },
                  { name: "details", type: "textarea" },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Closing action={c.action} />
    </>
  );
}
