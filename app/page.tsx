import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroEditorial } from "@/components/Heroes";
import { actions, jobCopy, jobs, jobShift, pages, photos, pic, roles } from "@/content/content";

// Home, in the editorial system (DESIGN.md, DESIGN-BRIEF.md). The grounds alternate for rhythm:
// hero on Paper / #roles on Forest / #steps on Paper (a timeline that draws as you scroll) /
// #settings on Night / #checks on Forest with grain (the word-highlight statement) / #openings on
// Paper / footer on Night with grain. Headlines rise line by line, photographs settle in
// (public/reveal.js). Every word comes from content/content.ts (pages.home).

const c = pages.home;

// The facility rows swap the photograph (the design kit's system.js does the swap). This keeps their
// pressed state in step for screen readers and lets Enter and Space choose a row like a button.
const PEEK_STATE = `(function(){var f=document.getElementById("settings-photo");if(!f)return;var rows=[].slice.call(document.querySelectorAll("[data-peek-to]"));function sync(){var on=f.querySelector("img:not([hidden])");var k=on&&on.getAttribute("data-peek-for");rows.forEach(function(r){r.setAttribute("aria-pressed",String(r.getAttribute("data-peek-to")===k))})}rows.forEach(function(r){r.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();r.click()}})});sync();new MutationObserver(sync).observe(f,{subtree:true,attributes:true,attributeFilter:["hidden"]})})();`;

// a landscape photograph shown in a tall frame (cover) is drawn wider than its frame, so its sizes
// say so and the browser fetches a file wide enough
const FILL_SIZES = "(max-width: 639px) 400vw, (max-width: 1023px) 100vw, 70vw";

export default function Home() {
  const roleImg = pic(c.roles.image);
  const openImg = pic(c.openings.image);
  return (
    <>
      <Header />
      <main id="top">
        <HeroEditorial
          title={c.hero.title}
          lines={[1, 2, 1]}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), sizes: "(max-width: 639px) 130vw, (max-width: 1023px) 100vw, 86vw", pos: "34% 50%", posPhone: "40% 45%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section tone-forest g2m" id="roles" aria-labelledby="roles-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <div className="section-head">
                <h2 id="roles-h" data-reveal="lines">
                  {c.roles.title}
                </h2>
              </div>
              <ul className="rows rows--stagger" data-reveal="up">
                {roles.map((r, i) => (
                  <li key={r.name} style={{ "--i": i } as React.CSSProperties}>
                    <span className="rows__name">{r.name}</span>
                    {r.code && <span className="rows__value">{r.code}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="develop span-6 start-7" data-moment="picture-develops">
              <img
                src={roleImg.src}
                srcSet={roleImg.srcSet}
                sizes="(max-width: 1023px) 100vw, 50vw"
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

        <section className="section tone-paper" id="steps" aria-labelledby="steps-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="steps-h" data-reveal="lines">
                {c.steps.title}
              </h2>
            </div>
            <div className="timeline">
              <div className="timeline__rail" data-draw aria-hidden="true">
                <span className="timeline__line" />
              </div>
              <ol className="timeline__steps">
                {c.steps.items.map((step, i) => {
                  const img = pic(step.image);
                  // the square office photographs fill a third of the row; the wide one up to 40%
                  const sizes = i === 1 ? "(max-width: 1023px) 100vw, 40vw" : "(max-width: 1023px) 100vw, 33vw";
                  return (
                    <li className="step" key={step.num} data-reveal="up" style={{ "--i": i } as React.CSSProperties}>
                      <span className="step__num">{step.num}</span>
                      <h3 className="step__title">{step.title}</h3>
                      <p className="step__body">{step.body}</p>
                      <div className="step__media" data-reveal="img">
                        <img src={img.src} srcSet={img.srcSet} sizes={sizes} width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="section tone-night" id="settings" aria-labelledby="settings-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="settings-h" data-reveal="lines">
                {c.settings.title}
              </h2>
              <p data-reveal="up">{c.settings.lead}</p>
            </div>
            <div className="grid grid--top fill" data-peek>
              <ul className="rows span-5" role="group" aria-labelledby="settings-h">
                {c.settings.items.map((s) => (
                  <li data-peek-to={s.key} tabIndex={0} role="button" aria-controls="settings-photo" aria-pressed={s === c.settings.items[0]} key={s.key}>
                    <span className="rows__name">{s.name}</span>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7 settings__photo" id="settings-photo" aria-live="polite" data-reveal="img">
                {c.settings.items.map((s, i) => {
                  const img = photos[s.photo];
                  return (
                    <img
                      className="frame__img"
                      data-peek-for={s.key}
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes="(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 60vw"
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

        <section className="section statement tone-forest has-grain" id="checks" data-moment="word-highlight" aria-label={c.checks.sectionLabel}>
          <div className="wrap">
            <p className="t-label">{c.checks.label}</p>
            <p className="mo-wh__text">
              {c.checks.before}
              <strong>{c.checks.strong}</strong>
              {c.checks.after}
            </p>
          </div>
        </section>

        <section className="section tone-paper" id="openings" aria-labelledby="openings-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="openings-h" data-reveal="lines">
                {c.openings.title}
              </h2>
              <p data-reveal="up">{c.openings.lead}</p>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-5 jobs" data-reveal="up">
                {jobs.map((job) => (
                  <li key={job.code}>
                    <span className="rows__name">{job.title}</span>
                    <span className="rows__value">{jobCopy.perHour(job.pay)}</span>
                    <p>{jobShift(job)}.</p>
                    <a className="link" href={jobCopy.applyHref(job.code)}>
                      {jobCopy.applyJob(job.code)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7 openings__photo" data-reveal="img">
                <img className="frame__img" src={openImg.src} srcSet={openImg.srcSet} sizes={FILL_SIZES} width={openImg.width} height={openImg.height} alt={openImg.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={openImg.subject} />
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
