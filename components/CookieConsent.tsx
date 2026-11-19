"use client";

import { useEffect, useState } from "react";
import { cookies } from "@/content/content";

// First-visit banner. The choice lives in localStorage, so it shows once per browser and returns only
// if site storage is cleared. Analytics loads only after the visitor accepts it. Set
// NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXX) to wire Google Analytics; with no ID nothing is ever loaded.
const KEY = "eg-cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = { essential: true; analytics: boolean };

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function loadAnalytics() {
  if (!GA_ID || document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(["js", new Date()]);
  w.dataLayer.push(["config", GA_ID]);
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = read();
    if (saved) {
      if (saved.analytics) loadAnalytics();
    } else {
      setOpen(true);
    }
    // a choice made in another tab closes this banner too
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY && e.newValue) setOpen(false);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const save = (allowAnalytics: boolean) => {
    const consent: Consent = { essential: true, analytics: allowAnalytics };
    try {
      localStorage.setItem(KEY, JSON.stringify(consent));
    } catch {}
    if (allowAnalytics) loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-labelledby="cookie-h" aria-describedby="cookie-p">
      <div className="cookie__text">
        <h2 id="cookie-h" className="cookie__title">{cookies.title}</h2>
        <p id="cookie-p">
          {cookies.line}
        </p>
        {manage && (
          <div className="cookie__prefs">
            <label className="cookie__row">
              <input type="checkbox" checked disabled />
              <span><strong>{cookies.essential.label}</strong> {cookies.essential.line}</span>
            </label>
            <label className="cookie__row">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span><strong>{cookies.analytics.label}</strong> {cookies.analytics.line}</span>
            </label>
          </div>
        )}
      </div>
      <div className="cookie__actions">
        {manage ? (
          <button type="button" className="btn btn--primary" onClick={() => save(analytics)}>
            {cookies.save}
          </button>
        ) : (
          <>
            <button type="button" className="btn btn--text" onClick={() => setManage(true)}>
              {cookies.manage}
            </button>
            <button type="button" className="btn btn--secondary" onClick={() => save(false)}>
              {cookies.reject}
            </button>
            <button type="button" className="btn btn--primary" onClick={() => save(true)}>
              {cookies.accept}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
