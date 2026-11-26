import Arrow from "@/components/Arrow";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroDark } from "@/components/Heroes";
import { RoleCards, Tickets } from "@/components/Blocks";
import { actions, footer, pages, photos, pic } from "@/content/content";

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

// The facility photographs as a slideshow (client request): a new one every 3 seconds, the row on
// show marked with a line that fills over the 3 seconds; a row's click or Enter jumps to it. It
// pauses under the pointer, in a hidden tab and with its pause button, and waits paused under reduced
// motion (the button starts it).
const SLIDES = `(function(){var root=document.querySelector("[data-slides]");if(!root)return;var rows=[].slice.call(root.querySelectorAll("[data-slide-to]"));var pics=[].slice.call(root.querySelectorAll("[data-slide]"));var btn=root.querySelector(".eo-slides__pause");var panel=root.querySelector(".eo-slides");var n=pics.length,cur=0,timer=null,paused=false,hover=false,seen=true;var still=matchMedia("(prefers-reduced-motion: reduce)").matches;function show(i){cur=(i+n)%n;pics.forEach(function(p,k){var on=k===cur;p.classList.toggle("is-on",on);if(on)p.removeAttribute("aria-hidden");else p.setAttribute("aria-hidden","true")});rows.forEach(function(r,k){var on=k===cur;r.classList.toggle("is-on",on);r.setAttribute("aria-pressed",String(on));r.classList.remove("is-run");if(on&&running()){void r.offsetWidth;r.classList.add("is-run")}})}function running(){return !paused&&!hover&&seen&&!still}function stop(){clearInterval(timer);timer=null;rows.forEach(function(r){r.classList.remove("is-run")})}function start(){stop();if(!running())return;var r=rows[cur];if(r){void r.offsetWidth;r.classList.add("is-run")}timer=setInterval(function(){show(cur+1)},3000)}rows.forEach(function(r,k){r.addEventListener("click",function(){show(k);start()});r.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();show(k);start()}})});if(btn){if(still){paused=true;btn.setAttribute("aria-pressed","true")}btn.addEventListener("click",function(){paused=!paused;still=false;btn.setAttribute("aria-pressed",String(paused));paused?stop():start()})}panel.addEventListener("pointerenter",function(){hover=true;stop()});panel.addEventListener("pointerleave",function(){hover=false;start()});document.addEventListener("visibilitychange",function(){seen=!document.hidden;seen?start():stop()});show(0);start()})();`;

const shiftsLink = footer.seeShifts;

// one line icon per step, drawn in the card's cobalt disc: send the request, check the papers, start the shift
const STEP_ICONS = [
  <path key="send" d="M21 3 10 14M21 3l-7 18-4-7-7-4z" />,
  <path key="check" d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6zM8.8 12.2l2.2 2.2 4.2-4.4" />,
  <path key="shift" d="M4 6h16v14H4zM4 10h16M8 3v5M16 3v5M9 15.5l2 2 4-4" />,
];

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
          <div className="wrap grid eo-split" data-slides>
            <div className="span-7 eo-split__side">
              <div className="section-head">
                <h2 id="settings-h">{c.settings.title}</h2>
                <p>{c.settings.lead}</p>
              </div>
              <ul className="rows eo-list" role="group" aria-labelledby="settings-h">
                {c.settings.items.map((s, i) => (
                  <li data-slide-to={i} tabIndex={0} role="button" aria-controls="settings-photo" aria-pressed={i === 0} className={i === 0 ? "is-on" : undefined} key={s.key}>
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
              <div className="eo-slides eo-cut eo-panel__photo" id="settings-photo" aria-roledescription="carousel" aria-label={c.settings.title}>
                {c.settings.items.map((s, i) => {
                  const img = photos[s.photo];
                  return (
                    <img
                      className={`eo-slide${i === 0 ? " is-on" : ""}`}
                      data-slide={i}
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes="(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 90vw"
                      loading={i === 0 ? "lazy" : "eager"}
                      width={img.width}
                      height={img.height}
                      alt={img.alt}
                      aria-hidden={i === 0 ? undefined : true}
                      decoding="async"
                      data-source="stand-in"
                      data-subject={s.name}
                      key={s.key}
                    />
                  );
                })}
                <button className="eo-slides__pause" type="button" aria-pressed="false" aria-label={c.settings.pauseLabel}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path className="eo-slides__icon-pause" d="M5 3h2v10H5zM9 3h2v10H9z" />
                    <path className="eo-slides__icon-play" d="M5 3l8 5-8 5z" />
                  </svg>
                </button>
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
              <RoleCards />
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

        {/* the steps as cards on the night ground: a photograph, an icon on its edge, the title and the line */}
        <section className="section tone-night eo-steps" id="steps" aria-labelledby="steps-h">
          <div className="wrap">
            <div className="section-head eo-steps__head">
              <h2 id="steps-h">{c.steps.title}</h2>
            </div>
            <ul className="eo-step-cards fill">
              {c.steps.items.map((step, i) => {
                const img = pic(step.image);
                return (
                  <li className="card eo-step-card" key={step.num}>
                    <div className="eo-step-card__media">
                      <img src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 33vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
                    </div>
                    <span className="eo-step-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">{STEP_ICONS[i]}</svg>
                    </span>
                    <h3 className="eo-step-card__title">{step.title}</h3>
                    <p className="eo-step-card__body">{step.body}</p>
                  </li>
                );
              })}
            </ul>
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
      <script dangerouslySetInnerHTML={{ __html: SLIDES }} />
    </>
  );
}
