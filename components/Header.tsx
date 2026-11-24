import { actions, nav, site, ui, type Link } from "@/content/content";

// The header, as on the agency's original site: a thin top bar (the licence on the left; Open
// Positions, Request Staff, Referrals, Contact Us and the phone on the right), then the main bar
// (the EO mark with "EMINENT ONE" and the tagline on the left, the five words and the page's one
// filled button on the right). On scroll the top bar slides away and the main bar stays (eo.css,
// the script in app/layout.tsx). Below 1024px the top bar is hidden and the bar shows the logo, the
// button and the menu; system.js turns the words into a full-screen sheet and flips aria-expanded.

type Current = (typeof nav.words)[number]["key"];

// action: the page's one filled button (the same words as its hero and close). `second` is kept
// for the pages that still pass it; the bar no longer shows a second word.
export default function Header({
  current,
  action = actions.requestStaff,
}: {
  current?: Current;
  action?: Link;
  second?: Link;
}) {
  return (
    <header className="nav nav--eo">
      <div className="nav__top">
        <div className="wrap nav__top-bar">
          <p className="nav__licensed">{nav.top.licensed}</p>
          <ul className="nav__quick">
            {nav.top.links.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav__phone" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          {ui.skipLink}
        </a>
        <div className="nav__brand">
          <a className="nav__logo" href="/" aria-label={ui.logoHomeLabel}>
            <img className="logo-mark" src="/images/eo-mark-120.png" alt="" width={120} height={85} />
            <span className="nav__name">{ui.logoName}</span>
          </a>
          <span className="nav__tag">{nav.tagline}</span>
        </div>
        <nav className="nav__links" aria-label={ui.mainNavLabel}>
          {nav.words.map((w) => (
            <div className="nav__item" key={w.key}>
              <a className="nav__link" href={w.href} aria-current={current === w.key ? "page" : undefined}>
                {w.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary nav__cta" href={action.href}>
            {action.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label={ui.menuButtonLabel}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
