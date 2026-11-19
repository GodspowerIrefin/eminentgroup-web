import Arrow from "@/components/Arrow";
import { actions, footer, site, ui, type Link } from "@/content/content";

// footer.closing: the page's last screen. Row 1 is the dealt close (close-type: the h2, a line and
// the big button), row 2 the dealt footer-dark directory and the legal row.

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
            <h2 id="close-h" data-reveal="lines">
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
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__mark" href="/">
                <img className="logo-mark" src="/images/eo-mark-white-120.png" alt="" width={120} height={85} loading="lazy" />
                {ui.logoName}
              </a>
              <ul className="footer__contact">
                <li>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <a href={site.emailHref}>{footer.emailLink}</a>
                </li>
                <li>
                  <a href={site.mapsUrl} rel="noopener">
                    {site.address}
                  </a>
                </li>
              </ul>
            </div>
            {footer.columns.map((c) => (
              <div className="span-2 footer__col" key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>{footer.legal}</span>
            <a className="credits" href={footer.credits.href}>
              {footer.credits.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
