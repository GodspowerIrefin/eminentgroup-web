import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { pages, site } from "@/content/content";

const c = pages.portal;

export const metadata: Metadata = c.meta;

// There is no sign-in service yet: system.js checks the two fields, then this script stops the send
// and says so in the status line (after system.js has cleared it).
const SIGN_IN = `(function(){var f=document.getElementById("portal-form");if(!f)return;var s=f.querySelector("[data-form-status]");f.addEventListener("submit",function(e){e.preventDefault();if(!f.checkValidity())return;setTimeout(function(){if(s)s.textContent=${JSON.stringify(c.pending)}},0)})})();`;

// The Portal sign-in page: the heading beside the sign-in panel (email, password, keep me signed in,
// forgot password) / footer.closing
export default function Portal() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="section section--hero tone-paper eo-signin" aria-labelledby="signin-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4 eo-signin__head">
              <p className="eo-eyebrow">{c.eyebrow}</p>
              <h1 id="signin-h">{c.title}</h1>
              <p>{c.lead}</p>
              <p className="eo-signin__help">
                <a href={site.phoneHref}>{c.help}</a>
              </p>
            </div>
            <div className="form-panel span-5 start-8 eo-signin__panel">
              <form className="form" id="portal-form" action="#" method="post" noValidate>
                <div className="field field--full">
                  <label htmlFor="portal-email">{c.form.fields.email.label}</label>
                  <input id="portal-email" name="email" type="email" inputMode="email" autoComplete="username" required aria-describedby="portal-email-err" />
                  <p className="field__error" id="portal-email-err" hidden>
                    {c.form.fields.email.error}
                  </p>
                </div>
                <div className="field field--full">
                  <label htmlFor="portal-password">{c.form.fields.password.label}</label>
                  <input id="portal-password" name="password" type="password" autoComplete="current-password" required aria-describedby="portal-password-err" />
                  <p className="field__error" id="portal-password-err" hidden>
                    {c.form.fields.password.error}
                  </p>
                </div>
                <div className="eo-signin__row field--full">
                  <label className="eo-signin__check">
                    <input type="checkbox" name="remember" />
                    {c.remember}
                  </label>
                  <a className="link" href={c.forgot.href}>
                    {c.forgot.label}
                  </a>
                </div>
                <div className="btn-row field--full">
                  <button className="btn btn--primary eo-signin__submit" type="submit">
                    {c.form.submit}
                    <Arrow />
                  </button>
                </div>
                <p className="form__status field--full" role="status" data-form-status></p>
                <p className="t-small muted field--full">{c.form.note}</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Closing />
      <script dangerouslySetInnerHTML={{ __html: SIGN_IN }} />
    </>
  );
}
