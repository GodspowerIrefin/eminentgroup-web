import { actions, nav, ui, type Link } from "@/content/content";

// nav-split (dealt): the words on the left, the EO logo and name in the middle, the actions on the
// right. "Services" opens a full-width panel of plain link columns. system.js turns the bar into
// a full-screen sheet on a phone and flips aria-expanded on the menu button.

type Current = (typeof nav.words)[number]["key"];

// action: the page's one filled button (the same words as its hero and close); second: a plain word
export default function Header({
  current,
  action = actions.requestStaff,
  second = actions.applyForWork,
}: {
  current?: Current;
  action?: Link;
  second?: Link;
}) {
  return (
    <header className="nav nav--split">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          {ui.skipLink}
        </a>
        <a className="nav__logo" href="/" aria-label={ui.logoHomeLabel}>
          <img className="logo-mark" src="/images/eo-mark-120.png" alt="" width={120} height={85} />
          {ui.logoName}
        </a>
        <nav className="nav__links" aria-label={ui.mainNavLabel}>
          {nav.words.map((w) =>
            w.key === "services" ? (
              <div className="nav__item" key={w.key}>
                <a className="nav__link" href={w.href} aria-current={current === w.key ? "page" : undefined}>
                  {w.label}{" "}
                  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="nav__menu">
                  <div className="wrap grid">
                    {nav.menu.map((col) => (
                      <div className="menu-col span-3" key={col.group}>
                        <p className="t-label">{col.group}</p>
                        {col.links.map((l) => (
                          <a href={l.href} key={l.href}>
                            {l.label}
                            <span>{l.line}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="nav__item" key={w.key}>
                <a className="nav__link" href={w.href} aria-current={current === w.key ? "page" : undefined}>
                  {w.label}
                </a>
              </div>
            ),
          )}
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={second.href}>
            {second.label}
          </a>
          <a className="btn btn--primary" href={action.href}>
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
