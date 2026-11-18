"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { megaNav, site } from "@/lib/site";

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 3.5 5 6.5l3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const menuBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setOpen((was) => {
          if (was) menuBtn.current?.focus();
          return false;
        });
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
    timer.current = setTimeout(() => setActive(null), 140);
  };
  const close = () => {
    setActive(null);
    setOpen(false);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={hide}>
      {/* utility bar */}
      <div
        className={`hidden overflow-hidden bg-forest-950 text-white transition-[height] duration-300 lg:block ${
          scrolled ? "h-0" : "h-10"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-[1320px] items-center gap-6 px-8 text-[13px]">
          <Link href="/contact" className="link-underline font-semibold">
            Subscribe
          </Link>
          <span className="ml-auto text-white/75">{site.tagline}</span>
          <a href={site.phoneHref} className="flex items-center gap-2 font-semibold">
            <span className="text-gold">
              <Icon name="phone" size={15} />
            </span>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2">
            <span className="text-gold">
              <Icon name="mail" size={15} />
            </span>
            {site.email}
          </a>
        </div>
      </div>

      {/* main header */}
      <div className="relative mx-auto flex max-w-[1320px] items-start justify-between gap-4 px-0 pr-5 sm:pr-8">
        {/* logo tab */}
        <div className="relative">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            onClick={close}
            className={`slide-curve flex items-center bg-forest-950 pl-5 pr-8 transition-[padding] duration-300 sm:pl-8 ${
              scrolled ? "py-2.5" : "py-4"
            }`}
          >
            <Logo light />
          </Link>
          <svg
            aria-hidden="true"
            viewBox="0 0 240 12"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-6 h-3 w-[78%] text-gold"
          >
            <path d="M0 2c50 0 120 8 240 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* nav bar */}
        <div
          className={`flex items-center gap-3 transition-[margin] duration-300 ${scrolled ? "mt-2" : "mt-3"}`}
        >
          <nav
            aria-label="Main"
            className={`hidden items-center gap-1 rounded-full bg-white pl-4 pr-2 shadow-[0_14px_36px_-18px_rgba(10,42,39,0.55)] transition-[height] duration-300 lg:flex ${
              scrolled ? "h-[60px]" : "h-[68px]"
            }`}
          >
            {megaNav.map((g, i) => {
              const current = isActive(g.href);
              return (
                <div key={g.label} className="relative" onMouseEnter={() => show(i)} onFocus={() => show(i)}>
                  <Link
                    href={g.href}
                    aria-haspopup="true"
                    aria-expanded={active === i}
                    aria-current={current ? "page" : undefined}
                    onClick={close}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14.5px] font-semibold transition-colors hover:text-red ${
                      current || active === i ? "text-red" : "text-ink"
                    }`}
                  >
                    {g.label}
                    <Chevron open={active === i} />
                  </Link>
                  <ul
                    className={`absolute left-0 top-full mt-3 min-w-[240px] border-t-[3px] border-gold bg-white py-2 shadow-[0_30px_60px_-30px_rgba(10,42,39,0.5)] transition-[opacity,transform] duration-200 ${
                      active === i
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <Link
                          href={it.href}
                          onClick={close}
                          tabIndex={active === i ? 0 : -1}
                          className="block px-5 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:bg-sand hover:text-red"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <form action="/services" role="search" className="ml-2 hidden items-center xl:flex">
              <label htmlFor="site-search" className="sr-only">
                Search services
              </label>
              <span className="relative">
                <input
                  id="site-search"
                  name="q"
                  type="search"
                  placeholder="Search"
                  className="h-10 w-[130px] rounded-full border border-rule bg-canvas pl-4 pr-10 text-[14px] text-ink placeholder:text-mut"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full text-forest hover:text-red"
                >
                  <Icon name="find" size={18} />
                </button>
              </span>
            </form>

            <a
              href={site.phoneHref}
              className="group ml-2 flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 hover:bg-sand"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red text-white">
                <Icon name="phone" size={20} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] text-mut">Request</span>
                <span className="text-[13px] font-extrabold tracking-wide text-ink">CONSULT CALL</span>
              </span>
            </a>
          </nav>

          <button
            ref={menuBtn}
            type="button"
            aria-expanded={open}
            aria-controls="offcanvas"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center justify-center border-2 border-white bg-forest-950 text-white transition-colors hover:bg-red ${
              scrolled ? "h-11 w-11" : "h-12 w-12"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M3 6h16M3 11h16M3 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* off-canvas */}
      <div
        className={`fixed inset-0 z-[60] bg-forest-950/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        id="offcanvas"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(92vw,400px)] flex-col overflow-y-auto bg-forest-950 px-7 pb-8 pt-6 text-white transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo light />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => {
              close();
              menuBtn.current?.focus();
            }}
            className="flex h-11 w-11 items-center justify-center border-2 border-white/60 hover:bg-red"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M3 3l12 12M15 3 3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-8">
          {megaNav.map((g, i) => (
            <div key={g.label} className="border-b border-white/15">
              <div className="flex items-center justify-between">
                <Link href={g.href} onClick={close} className="py-4 text-[19px] font-bold">
                  {g.label}
                </Link>
                <button
                  type="button"
                  aria-expanded={expanded === i}
                  aria-label={`${g.label} submenu`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex h-10 w-10 items-center justify-center text-gold"
                >
                  <Chevron open={expanded === i} />
                </button>
              </div>
              {expanded === i && (
                <ul className="mb-3 flex flex-col">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} onClick={close} className="block py-2 pl-3 text-[16px] text-white/75 hover:text-white">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Link href="/employers#request" onClick={close} className="flex h-[52px] items-center justify-center bg-red font-semibold">
            Request staff
          </Link>
          <Link href="/job-seekers#apply" onClick={close} className="flex h-[52px] items-center justify-center border border-white/60 font-semibold">
            Apply for work
          </Link>
          <a href={site.phoneHref} className="mt-2 flex items-center gap-2 text-[15px] font-semibold">
            <span className="text-gold">
              <Icon name="phone" size={18} />
            </span>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-[15px] text-white/80">
            <span className="text-gold">
              <Icon name="mail" size={18} />
            </span>
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
