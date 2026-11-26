import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Form } from "@/components/Blocks";
import { forms, pages, pic } from "@/content/content";

const c = pages.applyForWork;
const j = pages.jobSeekers;

export const metadata: Metadata = c.meta;

// a link from a shift ticket (?position=RN) chooses that role in the form; the form works without it
const PRESET = `(function(){var p=new URLSearchParams(location.search).get('position');var s=document.getElementById('apl-position');if(!p||!s)return;for(var o of s.options){if(o.value===p||o.text===p){s.value=o.value;break}}})();`;

// Careers > Apply for Work: hero (band) / #apply the application form / footer.closing
export default function ApplyForWork() {
  return (
    <>
      <Header current="careers" />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "50% 50%" }} primary={{ label: j.action.label, href: "#apply" }} secondary={{ label: pages.openPositions.hero.title, href: "/job-seekers/open-positions/" }} />
        <section className="section tone-paper" id="apply" aria-labelledby="apply-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="apply-h">{j.apply.title}</h2>
              <p>{j.apply.lead}</p>
              <ul className="rows">
                {j.apply.facts.map((f) => (
                  <li key={f.name}>
                    <span className="rows__name">{f.name}</span>
                    <span className="rows__value">{f.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="form-panel span-6 start-7">
              <Form
                id="apl"
                copy={forms.apply}
                fields={[
                  { name: "name", autoComplete: "name", required: true },
                  { name: "email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", type: "tel", autoComplete: "tel", required: true },
                  { name: "position", type: "select", required: true },
                  { name: "availability", type: "select", full: true },
                  { name: "experience", type: "textarea" },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Closing title={j.close.title} line={j.close.line} action={{ label: j.action.label, href: "#apply" }} />
      <script dangerouslySetInnerHTML={{ __html: PRESET }} />
    </>
  );
}
