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

// hero-band (inner pages, "The Shift Record"): the headline set across the page in the display face,
// a ruled row with the lead and the two actions, and the photograph as a wide band in the chamfered
// EO frame, all inside the page's margins. `top` puts the band over the words (the photo pages),
// otherwise it runs under them. Both enter once on load and rest under reduced motion.
function HeroBand({
  title,
  lead,
  image,
  primary,
  secondary,
  top = false,
}: {
  title: ReactNode;
  lead: ReactNode;
  image: Img;
  primary: Action;
  secondary?: Action;
  top?: boolean;
}) {
  const style = { "--ly-pos": image.pos ?? "50% 50%", "--ly-pos-phone": image.posPhone ?? image.pos ?? "50% 50%" } as React.CSSProperties;
  return (
    <section className={`hero eo-band${top ? " eo-band--top" : ""}`} data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text eo-band__text">
          <h1 id="hero-h" className="eo-band__title">
            {title}
          </h1>
          <div className="eo-band__foot">
            <p className="hero__lead eo-band__lead">{lead}</p>
            <Buttons primary={primary} secondary={secondary} />
          </div>
          <div className="hero__media eo-band__media">
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes ?? "(max-width: 1023px) 100vw, 90vw"}
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

// hero-photo: the band hero with the photograph over the words
export function HeroPhoto({
  title,
  lead,
  image,
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
  return <HeroBand title={title} lead={lead} image={image} primary={primary} secondary={secondary} top />;
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

// hero-split: the band hero with the photograph under the words
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
  return <HeroBand title={title} lead={lead} image={image} primary={primary} secondary={secondary} />;
}

// hero-cover (home, "The Shift Record"): the headline set as large as a magazine cover on Paper,
// one line in the brand's cobalt; the photograph, in the chamfered EO frame, locks into the space
// the shorter second and third lines leave on the right, inside the page's margins; the lead and the
// two actions under a rule at the foot. It enters once on load (CSS, eo.css); under
// reduced motion it stands still.
export function HeroCover({
  title,
  lines,
  accentLine,
  lead,
  image,
  primary,
  secondary,
}: {
  title: string;
  lines: number[];
  accentLine?: number;
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
    <section className="hero eo-hero" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text eo-hero__text">
          <h1 id="hero-h" className="eo-hero__title">
            {rows.map((row, i) => (
              <span className={`eo-hero__line${i === accentLine ? " is-accent" : ""}`} key={i} style={{ "--i": i } as React.CSSProperties}>
                <span>{row}</span>
                {i < rows.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <div className="eo-hero__foot">
            <p className="eo-hero__lead">{lead}</p>
            <Buttons primary={primary} secondary={secondary} />
          </div>
          <figure className="eo-hero__media">
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
        </div>
      </div>
    </section>
  );
}

// hero-dark (home, on the client's reference structure): night ground, the headline set large on
// the left with one line in cobalt, the lead and the two actions at its foot; the photograph fills
// the right of the page from the header down, in the chamfered EO frame. Enters once on load (eo.css); rests under reduced motion.
export function HeroDark({
  title,
  lines,
  accentLine,
  lead,
  image,
  primary,
  secondary,
}: {
  title: string;
  lines: number[];
  accentLine?: number;
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
    <section className="hero eo-dark tone-night" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text eo-dark__grid">
          <div className="eo-dark__text">
            <h1 id="hero-h" className="eo-hero__title eo-dark__title">
              {rows.map((row, i) => (
                <span className={`eo-hero__line${i === accentLine ? " is-accent" : ""}`} key={i} style={{ "--i": i } as React.CSSProperties}>
                  <span>{row}</span>
                  {i < rows.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            <div className="eo-hero__foot eo-dark__foot">
              <p className="eo-hero__lead">{lead}</p>
              <Buttons primary={primary} secondary={secondary} />
            </div>
          </div>
          <div className="hero__media eo-dark__media">
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
          </div>
        </div>
      </div>
    </section>
  );
}
