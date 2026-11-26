import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { HowItWorks } from "@/components/Blocks";
import { actions, pages, pic } from "@/content/content";

const c = pages.employerServices;
const e = pages.employers;

export const metadata: Metadata = c.meta;

// For Employers > Employer Services: hero (band) / #how the two tabs of steps / #expect what follows a
// staffing request / footer.closing
export default function EmployerServices() {
  const img = pic(e.expect.image);
  return (
    <>
      <Header current="employers" />
      <main id="top">
        <HeroSplit title={c.hero.title} lead={c.hero.lead} image={{ ...pic(c.hero.image), pos: "50% 50%" }} primary={actions.requestStaff} secondary={actions.callOffice} />
        <HowItWorks />
        <section className="section tone-paper" id="expect" aria-labelledby="expect-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="expect-h">{e.expect.title}</h2>
            </div>
            <div className="grid grid--top fill">
              <ol className="rows span-5">
                {e.expect.items.map((x) => (
                  <li key={x.name}>
                    <span className="rows__name">{x.name}</span>
                    <p>{x.body}</p>
                  </li>
                ))}
              </ol>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
