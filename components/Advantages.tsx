import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { roles, settings, site } from "@/lib/site";

// Every point below restates content already on the site (lib/site.ts).
const items: { title: string; body: string; icon: IconName }[] = [
  { title: "Maryland licensed", body: `Health Care Staff Agency, license # ${site.license}.`, icon: "badge" },
  { title: "Credentials verified", body: "Licenses, certifications, work history, and background checks.", icon: "shield" },
  { title: "Flexible staffing", body: "Temporary, temp-to-perm, and permanent placements.", icon: "repeat" },
  { title: "Follow-up after placement", body: "We stay in contact with the facility and the professional.", icon: "chat" },
  { title: "Roles across care", body: `${roles.length} kinds of professionals, from RNs to caregivers.`, icon: "stethoscope" },
  { title: "Settings we serve", body: `${settings.length} settings, from hospitals to home care.`, icon: "building" },
];

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Why Eminent One</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3.25rem)]">Advantages of working with us</h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-mut">
            {site.tagline} A licensed Maryland agency that stays involved after the placement starts.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex h-12 items-center gap-2.5 rounded-full border border-forest px-6 text-[14.5px] font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            About Eminent One
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="chev">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <ol className="grid list-none gap-5 sm:grid-cols-2">
          {items.map((it, n) => (
            <li key={it.title}>
              <Reveal delay={(n % 2) * 0.08 + Math.floor(n / 2) * 0.06} className="h-full">
                <div className="adv-card group relative h-full overflow-hidden rounded-[22px] border border-rule bg-white p-7">
                  <span aria-hidden="true" className="adv-bar absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold" />
                  <div className="flex items-start justify-between">
                    <span className="adv-icon flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-red">
                      <Icon name={it.icon} size={24} />
                    </span>
                    <span aria-hidden="true" className="display text-[32px] font-light leading-none text-forest/15">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[18px] font-bold leading-snug">{it.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mut">{it.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
