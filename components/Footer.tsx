import Link from "next/link";
import Logo from "./Logo";
import { megaNav, roles, site } from "@/lib/site";

const quick = [
  { label: "Request Staff", href: "/employers#request" },
  { label: "Open Positions", href: "/job-seekers#openings" },
  { label: "Apply for Work", href: "/job-seekers#apply" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const colHead = "text-[17px] font-bold";
  const link = "link-underline w-fit text-[15.5px] text-white/75 hover:text-white";
  return (
    <footer className="band-dark band-night">
      <div className="mx-auto max-w-[1320px] px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <h2 className={colHead}>Staffing Services</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {roles.map((r) => (
                <li key={r.name}>
                  <Link href={r.href ?? "/services"} className={link}>
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {[megaNav[2], megaNav[3]].map((g) => (
            <div key={g.label}>
              <h2 className={colHead}>{g.label}</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {g.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className={link}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {g.label === "Who We Are" && (
                <>
                  <h2 className={`${colHead} mt-10`}>Insights</h2>
                  <ul className="mt-6 flex flex-col gap-3">
                    <li>
                      <Link href="/resources" className={link}>
                        Resources
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          ))}

          <div>
            <h2 className={colHead}>For Employers</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {megaNav[1].items.map((it) => (
                <li key={it.label}>
                  <Link href={it.href} className={link}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={colHead}>Get in touch</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/75">
              {site.street}
              <br />
              {site.city}
            </p>
            <p className="mt-4 flex flex-col gap-2 text-[15.5px]">
              <a href={site.phoneHref} className="link-underline w-fit font-semibold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="link-underline w-fit text-white/75">
                {site.email}
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline w-fit text-white/75">
                Get directions
              </a>
            </p>
            <ul className="mt-8 flex flex-col gap-3 border-t border-rule pt-6">
              {quick.map((q) => (
                <li key={q.label}>
                  <Link href={q.href} className="link-underline text-[15px] font-semibold">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-rule pt-8">
          <Logo light />
          <div className="text-right text-[13px] text-white/60">
            <p>{site.licenseLabel}</p>
            <p className="mt-1">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
