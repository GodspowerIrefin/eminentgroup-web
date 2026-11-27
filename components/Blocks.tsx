import Arrow from "@/components/Arrow";
import Rich from "@/components/Rich";
import { jobCopy, jobs, jobShift, mailto, pages, roles, ui, type FormCopy, type Rich as RichValue } from "@/content/content";

// The open shifts on Careers, in the same shift-ticket form as the home page: the title and the
// facts (where, shift) on the left; the stub on the right, torn off along a perforation, is the
// link to apply for that shift.
export function JobCards({ span = "" }: { span?: string }) {
  return (
    <ul className={`eo-ticket-list eo-ticket-list--facts ${span}`.trim()}>
      {jobs.map((job) => (
        <li className="eo-ticket card" key={job.code}>
          <div className="eo-ticket__body">
            <h3 className="eo-ticket__title">{job.title}</h3>
            <dl className="eo-ticket__facts">
              <div className="eo-ticket__fact eo-ticket__fact--where">
                <dt>{jobCopy.where}</dt>
                <dd>{job.location}</dd>
              </div>
              <div className="eo-ticket__fact eo-ticket__fact--shift">
                <dt>{jobCopy.shift}</dt>
                <dd>{jobShift(job)}</dd>
              </div>
            </dl>
          </div>
          <a className="eo-ticket__stub eo-ticket__go" href={jobCopy.applyHref(job.code)} aria-label={jobCopy.applyShift(job.code)}>
            <span>{jobCopy.apply}</span>
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

// The role wall (home #roles): each role's code set large in the display face, its name under it
// in the text face. Caregivers have no code, so their tile carries the EO hexagon instead.
export function RoleWall() {
  return (
    <ul className="eo-wall">
      {roles.map((r, i) => (
        <li className="eo-wall__tile" key={r.name} style={{ "--i": i } as React.CSSProperties}>
          {r.code ? (
            <span className={`eo-wall__code${r.code.length > 4 ? " eo-wall__code--long" : ""}`}>{r.code}</span>
          ) : (
            <svg className="eo-wall__hex" viewBox="0 0 120 104" aria-hidden="true">
              <path d="M30 2h60l28 50-28 50H30L2 52z" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          )}
          <span className="eo-wall__name">{r.name}</span>
        </li>
      ))}
    </ul>
  );
}

// The open jobs as shift tickets (home #openings): the title and the shift, and the stub torn off
// along a perforation on the right is the link to apply for that job.
export function Tickets() {
  return (
    <ul className="eo-ticket-list">
      {jobs.map((job) => (
        <li className="eo-ticket card" key={job.code}>
          <div className="eo-ticket__body">
            <h3 className="eo-ticket__title">{job.title}</h3>
            <p className="eo-ticket__shift">{jobShift(job)}.</p>
          </div>
          <a className="eo-ticket__stub eo-ticket__go" href={jobCopy.applyHref(job.code)} aria-label={jobCopy.applyJob(job.code)}>
            <span>{jobCopy.apply}</span>
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

// FAQ: every answer open (no accordion)
// `accordion`: each question opens its answer (details/summary, no script); the first starts closed.
export function Faq({ items, accordion = false }: { items: { q: string; a: RichValue }[]; accordion?: boolean }) {
  if (accordion)
    return (
      <div className="eo-accordion">
        {items.map((item) => (
          <details className="eo-accordion__item" key={item.q}>
            <summary>
              <h3 className="eo-accordion__q">{item.q}</h3>
              <span className="eo-accordion__icon" aria-hidden="true" />
            </summary>
            <p className="eo-accordion__a">
              <Rich value={item.a} />
            </p>
          </details>
        ))}
      </div>
    );
  return (
    <div className="faq">
      {items.map((item) => (
        <div className="faq__item" key={item.q}>
          <h3>{item.q}</h3>
          <p>
            <Rich value={item.a} />
          </p>
        </div>
      ))}
    </div>
  );
}

// The kit's booking-form recipe (system.md, Forms), run by system.js: labels you can see, each
// error under its field, six fields at most. There is no form service yet, so the form opens the
// visitor's mail app addressed to the office (a mailto: action) and shows no "sent" line.
// `copy` holds the words (content/content.ts, forms); `fields` the order, types and widths.
export type Field = {
  name: string;
  type?: "text" | "email" | "tel" | "select" | "textarea" | "number" | "date";
  autoComplete?: string;
  required?: boolean;
  full?: boolean;
};

export function Form({ id, copy, fields }: { id: string; copy: FormCopy; fields: Field[] }) {
  return (
    <form className="form" action={mailto(copy.subject)} method="post" encType="text/plain" data-endpoint="" noValidate>
      {fields.map((f) => {
        const words = copy.fields[f.name];
        const fid = `${id}-${f.name}`;
        const err = `${fid}-err`;
        const common = {
          id: fid,
          name: f.name,
          required: f.required,
          "aria-describedby": f.required ? err : undefined,
        };
        return (
          <div className={`field${f.full || f.type === "textarea" ? " field--full" : ""}`} key={f.name}>
            <label htmlFor={fid}>
              {words.label}
              {copy.star && f.required ? <span className="field__star" aria-hidden="true"> *</span> : null}
            </label>
            {f.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>
                  {copy.prompt ?? ui.selectPrompt}
                </option>
                {words.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea {...common} rows={4} />
            ) : (
              <input
                {...common}
                type={f.type ?? "text"}
                autoComplete={f.autoComplete ?? "off"}
                inputMode={f.type === "email" ? "email" : f.type === "tel" ? "tel" : f.type === "number" ? "numeric" : undefined}
                min={f.type === "number" ? 1 : undefined}
              />
            )}
            {f.required && (
              <p className="field__error" id={err} hidden>
                {words.error}
              </p>
            )}
          </div>
        );
      })}
      <div className="btn-row">
        <button className="btn btn--primary" type="submit">
          {copy.submit}
          <Arrow />
        </button>
      </div>
      <p className="form__status" role="status" data-form-status></p>
      <p className="t-small muted">{copy.note}</p>
    </form>
  );
}

// The roles as cards (home #roles, the All roles page): each card the role's name and its line.
export function RoleCards({ wide = false }: { wide?: boolean }) {
  return (
    <ul className={`eo-role-cards${wide ? " eo-role-cards--wide" : ""}`}>
      {roles.map((r) => (
        <li className="card eo-role-card" key={r.name}>
          <p className="eo-role-card__name">{r.name}</p>
          <p className="eo-role-card__body">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

// How it works (Employers, Employer services): two tabs, three numbered step cards under each.
// A click or the arrow keys choose a tab; Home and End jump to the ends (WAI-ARIA tabs).
const HOW_TABS = `(function(){var list=document.querySelector(".eo-how__tabs");if(!list)return;var tabs=[].slice.call(list.querySelectorAll("[role=tab]"));function pick(t,focus){tabs.forEach(function(x){var on=x===t;x.setAttribute("aria-selected",String(on));x.tabIndex=on?0:-1;var p=document.getElementById(x.getAttribute("aria-controls"));if(p)p.hidden=!on});if(focus)t.focus()}tabs.forEach(function(t,i){t.addEventListener("click",function(){pick(t)});t.addEventListener("keydown",function(e){var k=e.key,j=-1;if(k==="ArrowRight")j=(i+1)%tabs.length;else if(k==="ArrowLeft")j=(i-1+tabs.length)%tabs.length;else if(k==="Home")j=0;else if(k==="End")j=tabs.length-1;if(j>-1){e.preventDefault();pick(tabs[j],true)}})})})();`;

export function HowItWorks() {
  const c = pages.employers.how;
  return (
    <section className="section tone-paper eo-how" id="how" aria-labelledby="how-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="how-h">{c.title}</h2>
        </div>
        <div className="eo-how__tabs" role="tablist" aria-labelledby="how-h">
          {c.tabs.map((t, i) => (
            <button className="eo-how__tab" type="button" role="tab" id={`how-tab-${t.key}`} aria-controls={`how-panel-${t.key}`} aria-selected={i === 0} tabIndex={i === 0 ? 0 : -1} key={t.key}>
              {t.label}
            </button>
          ))}
        </div>
        {c.tabs.map((t, i) => (
          <div className="eo-how__panel" role="tabpanel" id={`how-panel-${t.key}`} aria-labelledby={`how-tab-${t.key}`} hidden={i > 0} key={t.key}>
            <ol className="eo-how__cards">
              {t.steps.map((st, k) => (
                <li className="card eo-how__card" key={st.title}>
                  <span className="eo-how__num" aria-hidden="true">{String(k + 1).padStart(2, "0")}</span>
                  <h3 className="eo-how__title">{st.title}</h3>
                  <p className="eo-how__body">{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <script dangerouslySetInnerHTML={{ __html: HOW_TABS }} />
    </section>
  );
}
