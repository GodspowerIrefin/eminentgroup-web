import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Form } from "@/components/Blocks";
import { actions, forms, pages, pic } from "@/content/content";

const c = pages.requestStaff;

export const metadata: Metadata = c.meta;

// For Employers > Request Staff. Word for word from the original /employers page:
// hero (label, h1, lead) / #request "What to expect" numbered beside the staffing request form /
// footer.closing
export default function RequestStaff() {
  const here = { label: actions.requestStaff.label, href: "#request" };
  return (
    <>
      <Header current="employers" />
      <main id="top">
        <HeroSplit eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "35% 50%" }} primary={here} />
        <section className="section tone-paper" id="request" aria-labelledby="request-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <p className="eo-eyebrow">{c.expect.eyebrow}</p>
              <ol className="eo-duties eo-duties--tight">
                {c.expect.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>
            <div className="span-6 start-7 stack-4">
              <h2 id="request-h">{c.form.title}</h2>
              <p>{c.form.lead}</p>
              <div className="form-panel">
                <Form
                  id="staffing-request"
                  copy={forms.requestExact}
                  fields={[
                    { name: "facility", autoComplete: "organization", required: true },
                    { name: "contact", autoComplete: "name", required: true },
                    { name: "email", type: "email", autoComplete: "email", required: true },
                    { name: "phone", type: "tel", autoComplete: "tel", required: true },
                    { name: "role", type: "select" },
                    { name: "count", type: "number" },
                    { name: "terms", type: "select" },
                    { name: "start", type: "date" },
                    { name: "details", type: "textarea" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} action={here} />
    </>
  );
}
