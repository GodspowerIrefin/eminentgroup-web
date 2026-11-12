import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="band-dark">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-mut">
              Licensed healthcare staffing for facilities in {site.areas}.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-rule px-4 py-2 text-[12.5px] font-semibold tracking-wide text-white/90">
              MD License # {site.license}
            </p>
          </div>
          <div>
            <h2 className="eyebrow">Office</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-mut">
              {site.street}
              <br />
              {site.city}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-3 inline-block text-[15px] font-semibold"
            >
              Get directions
            </a>
          </div>
          <div>
            <h2 className="eyebrow">Contact</h2>
            <p className="mt-5 flex flex-col gap-2 text-[15px]">
              <a href={site.phoneHref} className="link-underline w-fit font-semibold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="link-underline w-fit text-mut">
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-5 flex flex-col gap-2 text-[15px] text-mut">
              {[...nav, { href: "/referrals", label: "Referrals" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-rule pt-6 text-[13px] text-mut">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.licenseLabel}</span>
        </div>
      </div>
    </footer>
  );
}
