import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Form } from "@/components/Blocks";
import { actions, forms, pages, pic } from "@/content/content";

const c = pages.referrals;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #refer the referral form / footer.closing
export default function Referrals() {
  return (
    <>
      <Header action={c.action} second={actions.requestStaff} />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "50% 50%" }} primary={c.action} />

        <section className="section" id="refer" aria-labelledby="refer-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="refer-h">{c.refer.title}</h2>
              <p>{c.refer.lead}</p>
            </div>
            <div className="form-panel span-6 start-7">
              <Form
                id="ref"
                copy={forms.referral}
                fields={[
                  { name: "name", autoComplete: "name", required: true },
                  { name: "email", type: "email", autoComplete: "email", required: true },
                  { name: "referred", required: true },
                  { name: "contact", required: true },
                  { name: "type", type: "select", full: true },
                  { name: "notes", type: "textarea" },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Closing title={c.close.title} line={c.close.line} action={c.action} />
    </>
  );
}
