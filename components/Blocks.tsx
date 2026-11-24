import Arrow from "@/components/Arrow";
import Rich from "@/components/Rich";
import { jobCopy, jobs, jobShift, mailto, roles, ui, type FormCopy, type Rich as RichValue } from "@/content/content";

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
          <a className="eo-ticket__stub eo-ticket__go" href={jobCopy.applyHref(job.code)}>
            <span>{jobCopy.applyShift(job.code)}</span>
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
          <a className="eo-ticket__stub eo-ticket__go" href={jobCopy.applyHref(job.code)}>
            <span>{jobCopy.applyJob(job.code)}</span>
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

// FAQ: every answer open (no accordion)
export function Faq({ items }: { items: { q: string; a: RichValue }[] }) {
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
  type?: "text" | "email" | "tel" | "select" | "textarea";
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
            <label htmlFor={fid}>{words.label}</label>
            {f.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>
                  {ui.selectPrompt}
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
                inputMode={f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined}
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
