import type { ReactNode } from "react";
import Arrow from "@/components/Arrow";

// The two dealt heroes (assets/layout/hero-photo.html and hero-split.html), each exactly the first
// screen, entering once on load (data-enter). Photographs are stand-ins until the client's own are
// shot; data-source and data-subject say so for the checker and the report.

type Action = { label: string; href: string };

type Img = {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  pos?: string; // object-position on desktop
  posPhone?: string;
  subject: string;
};

function Buttons({ primary, secondary }: { primary: Action; secondary?: Action }) {
  return (
    <div className="btn-row">
      <a className="btn btn--primary" href={primary.href}>
        {primary.label}
        <Arrow />
      </a>
      {secondary && (
        <a className="btn btn--secondary" href={secondary.href}>
          {secondary.label}
        </a>
      )}
    </div>
  );
}

// hero-photo: the photograph over the whole first screen, the words in a solid box on its calm side
export function HeroPhoto({
  title,
  lead,
  image,
  calm = "left",
  primary,
  secondary,
}: {
  title: ReactNode;
  lead: ReactNode;
  image: Img;
  calm?: "left" | "right";
  primary: Action;
  secondary?: Action;
}) {
  const style = { "--ly-pos": image.pos ?? "50% 50%", "--ly-pos-phone": image.posPhone ?? image.pos ?? "50% 50%" } as React.CSSProperties;
  return (
    <section className="hero hero--photo" data-enter data-calm={calm} aria-labelledby="hero-h">
      <img
        className="hero__bg"
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes ?? "(max-width: 639px) 188vw, 100vw"}
        width={image.width}
        height={image.height}
        alt={image.alt}
        style={style}
        fetchPriority="high"
        decoding="async"
        data-source="stand-in"
        data-subject={image.subject}
      />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h">{title}</h1>
            <p className="hero__lead">{lead}</p>
            <Buttons primary={primary} secondary={secondary} />
          </div>
        </div>
      </div>
    </section>
  );
}

// hero-editorial (DESIGN-BRIEF.md): warm off-white ground, a serif headline that rises line by line,
// a thin rule over the lead and buttons, the photograph bled to the right edge with a rounded mask
// that settles from 1.08 to 1. The motion is CSS (public/site.css, "editorial hero"), so it runs
// without script and rests under reduced motion. `lines` says how many words of the title go on
// each line, so the reveal steps by line; the words themselves come from the content file.
export function HeroEditorial({
  title,
  lines,
  lead,
  image,
  primary,
  secondary,
}: {
  title: string;
  lines: number[];
  lead: ReactNode;
  image: Img;
  primary: Action;
  secondary?: Action;
}) {
  const words = title.split(" ");
  const rows: string[] = [];
  let at = 0;
  for (const n of lines) {
    rows.push(words.slice(at, at + n).join(" "));
    at += n;
  }
  if (at < words.length) rows.push(words.slice(at).join(" "));
  const style = { "--ly-pos": image.pos ?? "50% 50%", "--ly-pos-phone": image.posPhone ?? image.pos ?? "50% 50%" } as React.CSSProperties;
  return (
    <section className="hero ed-hero" aria-labelledby="hero-h">
      <figure className="ed-hero__media">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          width={image.width}
          height={image.height}
          alt={image.alt}
          style={style}
          fetchPriority="high"
          decoding="async"
          data-source="stand-in"
          data-subject={image.subject}
        />
      </figure>
      <div className="wrap">
        <div className="hero-text ed-hero__text">
          <h1 id="hero-h" className="ed-hero__title">
            {rows.map((row, i) => (
              <span className="ed-hero__line" key={i} style={{ "--i": i } as React.CSSProperties}>
                <span>{row}</span>
                {i < rows.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <div className="ed-hero__foot">
            <p className="ed-hero__lead">{lead}</p>
            <Buttons primary={primary} secondary={secondary} />
          </div>
        </div>
      </div>
    </section>
  );
}

// hero-split: the words on span-5, the photograph on span-6 start-7, as tall as the hero's box
export function HeroSplit({
  title,
  lead,
  image,
  primary,
  secondary,
}: {
  title: ReactNode;
  lead: ReactNode;
  image: Img;
  primary: Action;
  secondary?: Action;
}) {
  const style = { "--ly-pos": image.pos ?? "50% 50%", "--ly-pos-phone": image.posPhone ?? image.pos ?? "50% 50%" } as React.CSSProperties;
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">{title}</h1>
            <p className="hero__lead">{lead}</p>
            <Buttons primary={primary} secondary={secondary} />
          </div>
          <div className="hero__media span-6 start-7">
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes ?? "(max-width: 1023px) 100vw, 50vw"}
              width={image.width}
              height={image.height}
              alt={image.alt}
              style={style}
              fetchPriority="high"
              decoding="async"
              data-source="stand-in"
              data-subject={image.subject}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
