"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "bg-white/90 shadow-[0_1px_0_rgba(13,23,54,0.08),0_12px_32px_-20px_rgba(13,23,54,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 ${
          scrolled ? "h-[68px]" : "h-[84px]"
        }`}
      >
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo light={!solid} />
        </Link>

        <nav
          aria-label="Main"
          className={`hidden items-center gap-7 text-[14.5px] font-semibold lg:flex ${
            solid ? "text-[#0d1736]" : "text-white"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="link-underline py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/employers#request"
            className="inline-flex h-11 items-center rounded-full bg-red px-5 text-white transition-colors hover:bg-red-600"
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
          className={`relative h-11 w-11 rounded-full border lg:hidden ${
            solid ? "border-[rgba(13,23,54,0.18)] text-[#0d1736]" : "border-white/30 text-white"
          }`}
        >
          <span
            className={`absolute left-3 right-3 h-[2px] bg-current transition-transform duration-300 ${
              open ? "top-[21px] rotate-45" : "top-[16px]"
            }`}
          />
          <span
            className={`absolute left-3 right-3 h-[2px] bg-current transition-transform duration-300 ${
              open ? "top-[21px] -rotate-45" : "top-[25px]"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden bg-white text-[#0d1736] transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="flex h-[calc(100dvh-68px)] flex-col px-5 pb-8 pt-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-b border-[rgba(13,23,54,0.1)] py-4 text-[28px]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/employers#request"
                onClick={() => setOpen(false)}
                className="flex h-[52px] items-center justify-center rounded-full bg-red font-semibold text-white"
              >
                Request staff
              </Link>
              <a
                href={site.phoneHref}
                className="flex h-[52px] items-center justify-center rounded-full border border-[rgba(13,23,54,0.18)] font-semibold"
              >
                Call {site.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
