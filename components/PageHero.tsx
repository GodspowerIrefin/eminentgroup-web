import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: { href: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="band-dark hero-grid">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-32 sm:px-8 lg:pb-20 lg:pt-40">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-[13px] text-mut">
          <Link href="/" className="link-underline">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex gap-2">
              <span aria-hidden="true">/</span>
              <Link href={c.href} className="link-underline">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.25rem,4.6vw,3.75rem)]">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mut">{lead}</p> : null}
        {children ? <div className="mt-10 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
