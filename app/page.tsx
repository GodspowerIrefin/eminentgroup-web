import Arrow from "@/components/Arrow";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroDark } from "@/components/Heroes";
import { Tickets } from "@/components/Blocks";
import { actions, footer, pages, photos, pic, roles } from "@/content/content";

// Home, in "The Shift Record" (DESIGN.md), laid out on the client's reference structure: a dark
// hero with the photograph bled to the edge and a round badge; the facility list beside a light
// panel; the credential statement beside a photograph; the roles as cards beside a
// photograph; the steps as dark rows; the open jobs beside a tile grid; the
// close with three contact cards. Fonts, sizes and every word stay as they were
// (content/content.ts). Each section is one full screen.
//
// deal: hero dark (night), #settings list + panel (paper, peek), #checks photo + statement (cobalt,
// word-highlight moment), #roles role cards beside a photograph (paper, picture-develops moment), #steps dark
// rows (night), #openings tiles (paper), close-type with contact cards (night).

const c = pages.home;

// Rows that swap what a [data-peek] block shows (the design kit's system.js does the swap). This
// keeps each row's pressed state in step for screen readers and lets Enter and Space choose a row.
const PEEK_STATE = `(function(){document.querySelectorAll("[data-peek]").forEach(function(root){var rows=[].slice.call(root.querySelectorAll("[data-peek-to]"));function sync(){var on=root.querySelector("[data-peek-for]:not([hidden])");var k=on&&on.getAttribute("data-peek-for");rows.forEach(function(r){r.setAttribute("aria-pressed",String(r.getAttribute("data-peek-to")===k))})}rows.forEach(function(r){r.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();r.click()}})});sync();new MutationObserver(sync).observe(root,{subtree:true,attributes:true,attributeFilter:["hidden"]})})})();`;

const shiftsLink = footer.seeShifts;

export default function Home() {
  const roleImg = pic(c.roles.image);
  const checkImg = pic({ photo: "credentialing", subject: "credential checks" });
  const openImg = pic(c.openings.image);
  const openImg2 = pic({ photo: "followUp", subject: "nurse at a bedside" });
  return (
    <>
      <Header />
      <main id="top" className="eo-home">
        <HeroDark
          title={c.hero.title}
          lines={[1, 2, 1]}
          accentLine={2}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), sizes: "(max-width: 1023px) 100vw, 80vw", pos: "34% 50%", posPhone: "40% 45%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        {/* the facility list beside a light panel holding the setting's photograph */}
        <section className="section tone-paper" id="settings" aria-labelledby="settings-h">
          <div className="wrap grid eo-split" data-peek>
            <div className="span-7 eo-split__side">
              <div className="section-head">
                <h2 id="settings-h">{c.settings.title}</h2>
                <p>{c.settings.lead}</p>
              </div>
              <ul className="rows eo-list" role="group" aria-labelledby="settings-h">
                {c.settings.items.map((s, i) => (
                  <li data-peek-to={s.key} tabIndex={0} role="button" aria-controls="settings-photo" aria-pressed={i === 0} key={s.key}>
                    <span className="rows__name">{s.name}</span>
                    <p>{s.body}</p>
                    <span className="eo-list__go" aria-hidden="true">
                      <Arrow />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="eo-panel span-5 start-8 eo-split__tall">
              <div className="frame frame--photo eo-cut eo-panel__photo" id="settings-photo" aria-live="polite">
                {c.settings.items.map((s, i) => {
                  const img = photos[s.photo];
                  return (
                    <img
                      className="frame__img"
                      data-peek-for={s.key}
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes="(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 45vw"
                      loading="lazy"
                      width={img.width}
                      height={img.height}
                      alt={img.alt}
                      hidden={i > 0}
                      decoding="async"
                      data-source="stand-in"
                      data-subject={s.name}
                      key={s.key}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* the credential statement beside a tall photograph, on the one cobalt ground */}
        <section className="section tone-cobalt eo-promise" id="checks" aria-label={c.checks.sectionLabel}>
          <div className="wrap grid eo-split">
            <div className="span-7 eo-promise__text">
              <p className="t-label eo-stamp">{c.checks.label}</p>
              <p className="mo-wh__text" data-moment="word-highlight">
                {c.checks.before}
                <strong>{c.checks.strong}</strong>
                {c.checks.after}
              </p>
            </div>
            <div className="frame frame--photo eo-cut span-5 start-8 eo-split__tall">
              <img className="frame__img" src={checkImg.src} srcSet={checkImg.srcSet} sizes="(max-width: 1023px) 100vw, 40vw" width={checkImg.width} height={checkImg.height} alt={checkImg.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={checkImg.subject} />
            </div>
          </div>
        </section>

        {/* the roles as cards: each one's code, name and line; the photograph on the right */}
        <section className="section tone-paper eo-services" id="roles" aria-labelledby="roles-h">
          <div className="wrap grid eo-split">
            <div className="span-7 eo-split__side">
              <h2 id="roles-h">{c.roles.title}</h2>
              <ul className="eo-role-cards">
                {roles.map((r) => (
                  <li className="card eo-role-card" key={r.name}>
                    <span className="eo-role-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 120 104">
                        <path d="M30 3h60l27 49-27 49H30L3 52z" fill="currentColor" />
                      </svg>
                      {r.code && <span className="eo-role-card__abbr">{r.code.split(",")[0]}</span>}
                    </span>
                    <p className="eo-role-card__name">{r.name}</p>
                    <p className="eo-role-card__body">
                      {r.code && <span className="eo-role-card__code">{r.code} · </span>}
                      {r.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="develop eo-cut span-5 start-8 eo-split__tall eo-services__photo" data-moment="picture-develops">
              <img
                src={roleImg.src}
                srcSet={roleImg.srcSet}
                sizes="(max-width: 639px) 160vw, (max-width: 1023px) 100vw, 40vw"
                width={roleImg.width}
                height={roleImg.height}
                alt={roleImg.alt}
                loading="lazy"
                decoding="async"
                data-source="stand-in"
                data-subject={roleImg.subject}
              />
            </figure>
          </div>
        </section>

        {/* the steps as dark rows: number and title, the line, a photograph */}
        <section className="section tone-night eo-steps" id="steps" aria-labelledby="steps-h">
          <div className="wrap">
            <div className="section-head eo-steps__head">
              <h2 id="steps-h">{c.steps.title}</h2>
            </div>
            <ol className="eo-steps__rows fill">
              {c.steps.items.map((step) => {
                const img = pic(step.image);
                return (
                  <li className="eo-steps__row" key={step.num}>
                    <span className="eo-steps__num">{step.num}</span>
                    <h3 className="eo-steps__title">{step.title}</h3>
                    <p className="eo-steps__body">{step.body}</p>
                    <div className="eo-steps__photo eo-cut eo-cut--sm">
                      <img src={img.src} srcSet={img.srcSet} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 40vw, 16vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* the open jobs: the heading, the lead and the shift tickets beside a grid of photographs */}
        <section className="section tone-paper" id="openings" aria-labelledby="openings-h">
          <div className="wrap grid eo-split">
            <div className="span-7 eo-split__side">
              <div className="section-head">
                <h2 id="openings-h">{c.openings.title}</h2>
              </div>
              <div className="eo-tickets">
                <Tickets />
              </div>
              <a className="link eo-more" href={shiftsLink.href}>
                {shiftsLink.label}
                <Arrow />
              </a>
            </div>
            <div className="eo-tiles span-5 start-8 eo-split__tall">
              <div className="eo-photo eo-cut eo-tiles__a">
                <img src={openImg.src} srcSet={openImg.srcSet} sizes="(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 45vw" width={openImg.width} height={openImg.height} alt={openImg.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={openImg.subject} />
              </div>
              <div className="eo-photo eo-cut eo-tiles__b">
                <img src={openImg2.src} srcSet={openImg2.srcSet} sizes="(max-width: 1023px) 100vw, 45vw" width={openImg2.width} height={openImg2.height} alt={openImg2.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={openImg2.subject} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Closing grain />
      <script dangerouslySetInnerHTML={{ __html: PEEK_STATE }} />
    </>
  );
}
