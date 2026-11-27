import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Faq } from "@/components/Blocks";
import { actions, pages, pic } from "@/content/content";

const c = pages.roles;

export const metadata: Metadata = c.meta;

// The role list picks the detail card beside it (as on the original page). Without the script every
// card shows, one under the other.
const ROLE_PICK = `(function(){var list=document.querySelector(".eo-rolepick__list");if(!list)return;var btns=[].slice.call(list.querySelectorAll("button[data-role]"));var cards=[].slice.call(document.querySelectorAll(".eo-rolepick__card"));function pick(b){btns.forEach(function(x){x.setAttribute("aria-pressed",String(x===b))});cards.forEach(function(k){k.hidden=k.id!==b.getAttribute("aria-controls")})}document.documentElement.classList.add("rolepick-on");btns.forEach(function(b){b.addEventListener("click",function(){pick(b)})});pick(btns[0])})();`;

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Staffing Services > All Roles We Place. Word for word from the original /services page:
// hero / #what four numbered cards / #roles the role list and its detail card / #audiences two cards /
// #faq / footer.closing
export default function Roles() {
  return (
    <>
      <Header current="services" />
      <main id="top">
        <HeroSplit eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "50% 35%" }} primary={actions.requestStaff} />

        <section className="section tone-paper" id="what" aria-labelledby="what-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.what.eyebrow}</p>
              <h2 id="what-h">{c.what.title}</h2>
            </div>
            <ol className="eo-how__cards eo-how__cards--four">
              {c.what.items.map((x, i) => (
                <li className="card eo-how__card" key={x.name}>
                  <span className="eo-how__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="eo-how__title">{x.name}</h3>
                  <p className="eo-how__body">{x.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section tone-night" id="roles" aria-labelledby="roles-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.list.eyebrow}</p>
              <h2 id="roles-h">{c.list.title}</h2>
              <p>{c.list.lead}</p>
            </div>
            <div className="eo-rolepick">
              <ul className="eo-rolepick__list">
                {c.list.items.map((r, i) => (
                  <li key={r.name}>
                    <button type="button" data-role={slug(r.name)} aria-controls={`role-${slug(r.name)}`} aria-pressed={i === 0}>
                      <span className="eo-rolepick__name">{r.name}</span>
                      <span className="eo-rolepick__short">{r.short}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="eo-rolepick__cards">
                {c.list.items.map((r) => (
                  <article className="card eo-how__card eo-rolepick__card" id={`role-${slug(r.name)}`} key={r.name} aria-labelledby={`role-${slug(r.name)}-h`}>
                    <p className="eo-eyebrow">{r.short}</p>
                    <h3 className="eo-how__title" id={`role-${slug(r.name)}-h`}>{r.name}</h3>
                    <p className="eo-how__body">{r.body}</p>
                    <div className="eo-rolepick__actions">
                      <a className="btn btn--primary" href={actions.requestStaff.href}>{actions.requestStaff.label}</a>
                      {r.href ? <a className="btn btn--secondary" href={r.href}>{c.list.more.label}</a> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section tone-paper" id="audiences" aria-label={c.audiences.map((a) => a.title).join(". ")}>
          <div className="wrap">
            <ul className="eo-how__cards eo-how__cards--two">
              {c.audiences.map((a) => (
                <li className="card eo-how__card" key={a.title}>
                  <h2 className="eo-how__title">{a.title}</h2>
                  <p className="eo-how__body">{a.body}</p>
                  <a className="btn btn--primary" href={a.action.href}>{a.action.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tone-paper" id="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <div className="section-head">
              <p className="eo-eyebrow">{c.faq.eyebrow}</p>
              <h2 id="faq-h">{c.faq.title}</h2>
            </div>
            <Faq items={c.faq.items} accordion />
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} />
      <script dangerouslySetInnerHTML={{ __html: ROLE_PICK }} />
    </>
  );
}
