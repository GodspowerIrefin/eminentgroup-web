import Arrow from "@/components/Arrow";
import Rich from "@/components/Rich";
import { jobCopy, jobs, jobShift, mailto, ui, type FormCopy, type Rich as RichValue } from "@/content/content";

// The open shifts, one card each: the facts as given, pay per hour, one link to apply.
export function JobCards({ span = "span-3" }: { span?: string }) {
  return (
    <>
      {jobs.map((job) => (
        <article className={`card job ${span}`} key={job.code}>
          <h3 className="t-card">{job.title}</h3>
          <dl className="job__facts">
            <div>
              <dt>{jobCopy.where}</dt>
              <dd>{job.location}</dd>
            </div>
            <div>
              <dt>{jobCopy.shift}</dt>
              <dd>{jobShift(job)}</dd>
            </div>
            <div>
              <dt>{jobCopy.pay}</dt>
              <dd className="job__pay">{jobCopy.perHour(job.pay)}</dd>
            </div>
          </dl>
          <a className="link job__apply" href={jobCopy.applyHref(job.code)}>
            {jobCopy.applyShift(job.code)}
            <Arrow />
          </a>
        </article>
      ))}
    </>
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
