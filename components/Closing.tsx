import Arrow from "@/components/Arrow";
import { actions, footer, site, ui, type Link } from "@/content/content";

// footer.closing: the page's last screen. Row 1 is the dealt close (close-type: the h2, a line and
// the button), row 2 three contact cards (phone, email, address), row 3 the footer-dark directory
// and the legal row.

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
          <ul className="eo-contact">
            <li>
              <a className="eo-contact__card" href={site.phoneHref}>
                <span className="eo-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" /></svg>
                </span>
                <span className="eo-contact__value">{site.phone}</span>
              </a>
            </li>
            <li>
              <a className="eo-contact__card" href={site.emailHref}>
                <span className="eo-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4 7 8 6 8-6" /></svg>
                </span>
                <span className="eo-contact__value">{footer.emailLink}</span>
              </a>
            </li>
            <li>
              <a className="eo-contact__card" href={site.mapsUrl} rel="noopener">
                <span className="eo-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                </span>
                <span className="eo-contact__value">{site.address}</span>
              </a>
            </li>
          </ul>
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__mark" href="/">
                <img className="logo-mark" src="/images/eo-mark-white-120.png" alt="" width={120} height={85} loading="lazy" />
                {ui.logoName}
              </a>
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
