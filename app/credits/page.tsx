import type { Metadata } from "next";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { pages } from "@/content/content";

const c = pages.credits;

export const metadata: Metadata = c.meta;

export default function Credits() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="section" id="credits" aria-labelledby="credits-h">
          <div className="wrap">
            <div className="section-head">
              <h1 id="credits-h">{c.title}</h1>
            </div>
            <ul className="rows measure">
              {c.commons.map((p) => (
                <li key={p.file}>
                  <a className="rows__name" href={c.commonsUrl(p.file)} rel="noopener">
                    {p.title}
                  </a>
                  <span className="rows__value">
                    {c.author}
                    <a href={c.license.href} rel="noopener">
                      {c.license.label}
                    </a>
                  </span>
                  <p>{c.viaCommons}</p>
                </li>
              ))}
              <li>
                <span className="rows__name">{c.pexels.title}</span>
                <span className="rows__value">
                  <a href={c.pexels.license.href} rel="noopener">
                    {c.pexels.license.label}
                  </a>
                </span>
                <p>{c.pexels.via}</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Closing />
    </>
  );
}
