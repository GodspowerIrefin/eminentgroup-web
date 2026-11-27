import { actions, nav, site, ui, type Link } from "@/content/content";

// The header, as on the agency's original site: a thin top bar (the licence on the left; Open
// Positions, Request Staff, Referrals, Contact Us and the phone on the right), then the main bar
// (the EO mark with "EMINENT ONE" and the tagline on the left, the five words and the page's one
// filled button on the right). Each word opens a dropdown of its pages on hover or keyboard focus. On scroll the top bar slides away and the main bar stays (eo.css,
// the script in app/layout.tsx). Below 1024px the top bar is hidden and the bar shows the logo, the
// button and the menu; system.js turns the words into a full-screen sheet and flips aria-expanded.

type Current = (typeof nav.words)[number]["key"];

// the phone menu: open and close (the button, the cross, Escape, a link, a tap outside the card),
// focus kept inside while open, the page held still behind it
const MNAV = `(function(){var m=document.getElementById("eo-mnav"),o=document.querySelector(".eo-mnav__open");if(!m||!o)return;var c=m.querySelector(".eo-mnav__close"),h=document.documentElement;function set(v){m.hidden=!v;o.setAttribute("aria-expanded",String(v));h.classList.toggle("eo-mnav-on",v);if(v)c.focus();else o.focus()}o.addEventListener("click",function(){set(true)});c.addEventListener("click",function(){set(false)});m.addEventListener("click",function(e){if(e.target===m)set(false);else if(e.target.closest("a[href]"))set(false)});document.addEventListener("keydown",function(e){if(m.hidden)return;if(e.key==="Escape"){set(false);return}if(e.key==="Tab"){var f=[].slice.call(m.querySelectorAll("a[href],button,summary")).filter(function(x){return x.offsetParent!==null});var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}})})();`;

// The bar's one button is "Request Staff" on every page; "Portal" (the sign-in page) is a link in the
// top bar, and in the phone menu after the five words. `action` and `second` are kept for the pages
// that still pass them; the bar no longer shows either.
export default function Header({
  current,
}: {
  current?: Current;
  action?: Link;
  second?: Link;
}) {
  return (
    <>
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
            <div className="nav__item eo-drop-item" key={w.key}>
              <a className="nav__link" href={w.href} aria-current={current === w.key ? "page" : undefined}>
                {w.label}
                <svg className="eo-drop__chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <ul className="eo-drop">
                {w.menu.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary nav__cta" href={actions.requestStaff.href}>
            {actions.requestStaff.label}
          </a>
        </div>
        <button className="eo-mnav__open" type="button" aria-expanded="false" aria-controls="eo-mnav" aria-label={ui.menuButtonLabel}>
          <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true">
            <path d="M2 3h22M2 10h22M2 17h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
    {/* the phone menu (below 1024px): a card over the page with the logo and a close button, the five
        words as an accordion (one open at a time) with their pages, Portal, then Request staff and
        the phone. It sits outside the header, whose slide on scroll would otherwise carry it. */}
    <div className="eo-mnav" id="eo-mnav" role="dialog" aria-modal="true" aria-label={ui.menuButtonLabel} hidden>
      <div className="eo-mnav__panel">
        <div className="eo-mnav__head">
          <a className="eo-mnav__logo" href="/" aria-label={ui.logoHomeLabel}>
            <img src="/images/eo-mark-120.png" alt="" width={120} height={85} />
            <span>
              <span className="eo-mnav__name">{ui.logoName}</span>
              <span className="eo-mnav__tag">{nav.tagline}</span>
            </span>
          </a>
          <button className="eo-mnav__close" type="button" aria-label={nav.mobile.close}>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="eo-mnav__list" aria-label={ui.mainNavLabel}>
          {nav.words.map((w, i) => (
            <details className="eo-mnav__group" name="eo-mnav" key={w.key} open={current ? current === w.key : i === 0}>
              <summary>
                <span>{w.label}</span>
                <span className="eo-mnav__plus" aria-hidden="true" />
              </summary>
              <ul>
                {w.menu.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <a className="eo-mnav__row" href={nav.portal.href}>
            {nav.portal.label}
          </a>
        </nav>
        <div className="eo-mnav__actions">
          <a className="eo-mnav__btn eo-mnav__btn--primary" href={actions.requestStaff.href}>
            {actions.requestStaff.label}
          </a>
          <a className="eo-mnav__btn eo-mnav__btn--line" href={site.phoneHref}>
            {nav.mobile.call} {site.phone}
          </a>
        </div>
      </div>
    </div>
    <script dangerouslySetInnerHTML={{ __html: MNAV }} />
    </>
  );
}
