import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Form } from "@/components/Blocks";
import { actions, footer, forms, pages, pic, site } from "@/content/content";

const c = pages.contact;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #message the office's details beside the message form / footer.closing
export default function Contact() {
  return (
    <>
      <Header action={c.action} />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "40% 50%" }}
          primary={c.action}
          secondary={actions.callOffice}
        />

        <section className="section" id="message" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="message-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-5">
              <h2 id="message-h">{c.message.title}</h2>
              <p>{c.message.lead}</p>
              <ul className="rows">
                <li>
                  <span className="rows__name">{c.message.rows.phone}</span>
                  <a className="rows__value link" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="rows__name">{c.message.rows.email}</span>
                  <a className="rows__value link" href={site.emailHref}>
                    {footer.emailLink}
                  </a>
                </li>
                <li>
                  <span className="rows__name">{c.message.rows.office}</span>
                  <a className="rows__value link" href={site.mapsUrl} rel="noopener">
                    {site.address}
                  </a>
                </li>
                <li>
                  <span className="rows__name">{c.message.rows.area}</span>
                  <span className="rows__value">{c.message.rows.areaValue}</span>
                </li>
              </ul>
            </div>
            <div className="form-panel span-6 start-7">
              <Form
                id="msg"
                copy={forms.message}
                fields={[
                  { name: "name", autoComplete: "name", required: true },
                  { name: "email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", type: "tel", autoComplete: "tel" },
                  { name: "about", type: "select" },
                  { name: "message", type: "textarea", required: true },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
