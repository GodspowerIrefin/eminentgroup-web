import Arrow from "@/components/Arrow";
import { actions, footer, site, ui, type Link } from "@/content/content";

// footer.closing: the page's last screen. Row 1 is the dealt close (close-type: the h2, a line and
// the button), row 2 the directory as on the agency's original site (Staffing Services, Careers,
// Who We Are with Insights, For Employers, Get in touch with the quick links), row 3 the logo with
// its tagline and the licence and copyright lines.

type Props = {
  title?: string;
  line?: string;
  action?: Link;
  // film grain on the dark ground (DESIGN-BRIEF.md: subtle grain on dark sections)
  grain?: boolean;
};

export default function Closing({ title = footer.close.title, line = footer.close.line, action = actions.requestStaff, grain = false }: Props) {
  return (
    <footer className={`footer closing footer--dark ground-inverse g2m${grain ? " has-grain" : ""}`} id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">
              {title}
            </h2>
            <p>{line}</p>
          </div>
          <a className="btn btn--primary btn--xl" href={action.href}>
            {action.label}
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="eo-foot">
            {footer.groups.map((g) => (
              <div className="eo-foot__col" key={g.title}>
                <h3>{g.title}</h3>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
                {g.then && (
                  <>
                    <h3 className="eo-foot__then">{g.then.title}</h3>
                    <ul>
                      {g.then.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href}>{l.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
            <div className="eo-foot__col eo-foot__touch">
              <h3>{footer.touch.title}</h3>
              <ul>
                <li className="eo-foot__address">
                  {footer.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </li>
                <li>
                  <a className="eo-foot__phone" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.emailHref}>{site.email}</a>
                </li>
                <li>
                  <a href={site.mapsUrl} rel="noopener">
                    {footer.touch.directions}
                  </a>
                </li>
              </ul>
              <ul className="eo-foot__quick">
                {footer.touch.quick.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="eo-foot__base">
            <a className="eo-foot__brand" href="/" aria-label={ui.logoHomeLabel}>
              <img src="/images/eo-mark-white-120.png" alt="" width={120} height={85} loading="lazy" />
              <span>
                <span className="eo-foot__name">{footer.wordmark}</span>
                <span className="eo-foot__tag">{footer.tagline}</span>
              </span>
            </a>
            <p className="eo-foot__legal">
              <span>{footer.licensed}</span>
              <span>{footer.legal}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
