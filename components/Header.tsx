"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { megaNav, site } from "@/lib/site";

const utility = [
  { label: "Open Positions", href: "/job-seekers#openings" },
  { label: "Request Staff", href: "/employers#request" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const show = (i: number) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(i);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 120);
  };
  const close = () => {
    setActive(null);
    setOpen(false);
  };

  const solid = scrolled || open || active !== null;
  const group = active !== null ? megaNav[active] : null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-canvas shadow-[0_1px_0_rgba(23,26,38,0.08)]" : "bg-transparent"
      }`}
      onMouseLeave={hide}
    >
      <div
        className={`hidden overflow-hidden transition-[height,opacity] duration-300 lg:block ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-[1320px] items-center justify-end gap-7 px-8 text-[13px] font-medium text-[#171a26]">
          <span className="mr-auto text-mut">{site.licenseLabel}</span>
          {utility.map((u) => (
            <Link key={u.label} href={u.href} className="link-underline">
              {u.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="font-bold">
            {site.phone}
          </a>
        </div>
      </div>

      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 ${
          scrolled ? "h-[68px]" : "h-[88px]"
        }`}
      >
        <Link href="/" aria-label={`${site.name} home`} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {megaNav.map((g, i) => (
            <div key={g.label} onMouseEnter={() => show(i)} onFocus={() => show(i)}>
              <Link
                href={g.href}
                aria-expanded={active === i}
                aria-current={pathname.startsWith(g.href) ? "page" : undefined}
                onClick={close}
                className={`py-2 text-[15.5px] font-semibold text-[#171a26] underline-offset-[6px] decoration-2 hover:underline ${
                  active === i || pathname.startsWith(g.href) ? "underline" : ""
                }`}
              >
                {g.label}
              </Link>
            </div>
          ))}
          <Link
            href="/employers#request"
            className="inline-flex h-11 items-center bg-night px-6 text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            Request staff
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative h-11 w-11 text-[#171a26] lg:hidden"
        >
          <span
            className={`absolute left-2.5 right-2.5 h-[2px] bg-current transition-transform duration-300 ${
              open ? "top-[21px] rotate-45" : "top-[15px]"
            }`}
          />
          <span
            className={`absolute left-2.5 right-2.5 h-[2px] bg-current transition-opacity duration-200 ${
              open ? "top-[21px] opacity-0" : "top-[21px]"
            }`}
          />
          <span
            className={`absolute left-2.5 right-2.5 h-[2px] bg-current transition-transform duration-300 ${
              open ? "top-[21px] -rotate-45" : "top-[27px]"
            }`}
          />
        </button>
      </div>

      {/* Desktop mega panel */}
      <div
        onMouseEnter={() => active !== null && show(active)}
        className={`absolute inset-x-0 top-full hidden border-t border-[rgba(23,26,38,0.08)] bg-canvas shadow-[0_30px_60px_-30px_rgba(23,26,38,0.35)] transition-[opacity,transform] duration-200 lg:block ${
          group ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {group && (
          <div className="mx-auto grid max-w-[1320px] grid-cols-[320px_1fr] gap-10 px-8 py-12">
            <div>
              <h2 className="text-[28px] font-bold leading-tight">{group.label}</h2>
              <Link href={group.href} onClick={close} className="link-underline mt-4 inline-block text-[15px] font-semibold text-forest">
                View all
              </Link>
            </div>
            <ul className="mega-rule max-w-[560px] pl-8">
              {group.items.map((it) => (
                <li key={it.label} className="border-b border-[rgba(23,26,38,0.1)] last:border-0">
                  <Link
                    href={it.href}
                    onClick={close}
                    className="display block py-[18px] text-[19px] font-normal transition-colors hover:text-forest"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`grid overflow-hidden bg-canvas text-[#171a26] transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="flex h-[calc(100dvh-68px)] flex-col overflow-y-auto px-5 pb-8 pt-2 sm:px-8">
            {megaNav.map((g, i) => (
              <div key={g.label} className="border-b border-[rgba(23,26,38,0.1)]">
                <button
                  type="button"
                  aria-expanded={expanded === i}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left text-[22px] font-bold"
                >
                  {g.label}
                  <span aria-hidden="true" className={`text-2xl transition-transform ${expanded === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {expanded === i && (
                  <ul className="mb-4 flex flex-col">
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <Link href={it.href} onClick={close} className="display block py-2.5 text-[18px] font-normal text-mut">
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Link href="/employers#request" onClick={close} className="flex h-[52px] items-center justify-center bg-night font-semibold text-white">
                Request staff
              </Link>
              <a href={site.phoneHref} className="flex h-[52px] items-center justify-center border border-night font-semibold">
                Call {site.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
