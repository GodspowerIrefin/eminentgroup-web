import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { Faq } from "@/components/Blocks";
import Rich from "@/components/Rich";
import { actions, pages, pic, roles, type PhotoRef } from "@/content/content";

const c = pages.services;

export const metadata: Metadata = c.meta;

// Plan: hero (split) / #roles the eight roles in two groups beside a photograph each (two screens) /
// #faq / footer.closing

function RoleRows({ from, to }: { from: number; to: number }) {
  return (
    <ul className="rows span-5">
      {roles.slice(from, to).map((r) => (
        <li key={r.name}>
          <span className="rows__name">{r.name}</span>
          {r.code && <span className="rows__value">{r.code}</span>}
          <p>{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

function FillPhoto({ image }: { image: PhotoRef }) {
  const img = pic(image);
  return (
    <div className="frame frame--photo frame--fill span-6 start-7">
      <img className="frame__img" src={img.src} srcSet={img.srcSet} sizes="(max-width: 1023px) 100vw, 50vw" width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" data-source="stand-in" data-subject={img.subject} />
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Header current="services" />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={{ ...pic(c.hero.image), pos: "50% 50%" }}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />

        <section className="section g2" id="roles" aria-labelledby="roles-h">
          <div className="wrap">
            <div className="group">
              <div className="section-head">
                <h2 id="roles-h">{c.roles.title}</h2>
                <p>{c.roles.lead}</p>
              </div>
              <div className="grid grid--top fill">
                <RoleRows from={0} to={4} />
                <FillPhoto image={c.roles.images[0]} />
              </div>
            </div>
            <div className="grid grid--top fill">
              <RoleRows from={4} to={8} />
              <FillPhoto image={c.roles.images[1]} />
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <h2 id="faq-h">{c.faq.title}</h2>
              <p>
                <Rich value={c.faq.lead} />
              </p>
            </div>
            <div className="span-6 start-7">
              <Faq items={c.faq.items} />
            </div>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
