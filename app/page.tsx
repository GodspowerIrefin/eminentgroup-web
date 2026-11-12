import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import JobList from "@/components/JobList";
import ProcessTabs from "@/components/ProcessTabs";
import Reveal from "@/components/Reveal";
import RoleMarquee from "@/components/RoleMarquee";
import RolesExplorer from "@/components/RolesExplorer";
import SectionHead from "@/components/SectionHead";
import { leaders, services, settings, site } from "@/lib/site";

const tints = ["bg-sand", "bg-mint", "bg-blush", "bg-gold-200/45"];
const serviceIcons: IconName[] = ["search", "shield", "calendar", "chat"];

const assurances = [
  "Licenses and certifications verified",
  "Background checks completed",
  "Temporary, temp-to-perm, permanent",
  "Follow-up after placement",
];

export default function Home() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden">
        <span aria-hidden="true" className="deco-ring -right-32 -top-24 h-[34rem] w-[34rem]" />
        <span aria-hidden="true" className="deco-ring -left-24 bottom-10 h-72 w-72" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-44">
          <div>
            <p className="eyebrow step-in">Healthcare staffing · Windsor Mill, MD</p>
            <h1
              className="display step-in mt-6 text-[clamp(2.4rem,5vw,4.25rem)]"
              style={{ animationDelay: "80ms" }}
            >
              Healthcare staffing with <span className="mark">a personal touch</span> for Maryland
              facilities and care professionals.
            </h1>
            <p
              className="step-in mt-7 max-w-xl text-lg leading-relaxed text-mut"
              style={{ animationDelay: "160ms" }}
            >
              We find, verify, and place RNs, LPNs, CNAs, home health aides, and more in hospitals,
              nursing homes, rehab centers, assisted living, and home care.
            </p>
            <div className="step-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
              <Button href="/employers#request">Request staff</Button>
              <Button href="/job-seekers#apply" variant="ghost">
                Apply for work
              </Button>
            </div>
            <ul className="step-in mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-medium" style={{ animationDelay: "320ms" }}>
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="shrink-0 text-forest">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="step-in relative mx-auto w-full max-w-[460px] lg:max-w-none" style={{ animationDelay: "200ms" }}>
            <span aria-hidden="true" className="absolute -inset-4 -z-0 rounded-[999px_999px_36px_36px] bg-gold/30" />
            <div className="arch relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="/images/hero-team.jpg"
                alt="Three healthcare professionals in scrubs"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="float-slow absolute -left-3 bottom-10 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_48px_-20px_rgba(23,26,38,0.35)] sm:-left-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mut">Maryland licensed</p>
              <p className="mt-1 font-bold">Health Care Staff Agency</p>
              <p className="text-sm text-mut">License # {site.license}</p>
            </div>
            <Link
              href="#openings"
              className="float-slower absolute -right-2 top-14 flex items-center gap-2.5 rounded-full bg-night px-4 py-2.5 text-sm font-semibold text-white shadow-xl sm:-right-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Now hiring RNs and LPNs
            </Link>
          </div>
        </div>
      </section>

      <RoleMarquee />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Our services"
            title={"Staffing for Baltimore\u2011area healthcare facilities."}
            lead="We recruit nurses and care staff, verify their credentials, and place them where they are needed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <article className={`card card-hover h-full border-transparent p-8 sm:p-10 ${tints[i]}`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-forest shadow-sm">
                    <Icon name={serviceIcons[i]} size={28} />
                  </span>
                  <h3 className="mt-7 text-[22px] font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-mut">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Staff we place" title="The roles your facility needs filled." />
          <Reveal className="mt-10">
            <RolesExplorer />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Where we place" title="Hospitals, nursing homes, and home care." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {settings.map((name, i) => (
              <li key={name}>
                <Reveal delay={i * 0.06}>
                  <div className="card card-hover flex h-full min-h-[148px] flex-col justify-between p-6">
                    <span className="text-forest">
                      <Icon name={i % 2 ? "stethoscope" : "building"} size={30} />
                    </span>
                    <span className="mt-6 text-lg font-bold leading-snug">{name}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="From request to first shift." />
          <Reveal className="mt-10">
            <ProcessTabs />
          </Reveal>
        </div>
      </section>

      <section className="band-dark px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="About us"
              title="A licensed Maryland healthcare staffing agency."
              lead={`Eminent One LLC is based in Windsor Mill and holds ${site.licenseLabel}. We place nurses and care staff with facilities in ${site.areas}.`}
            />
            <Reveal className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {leaders.map((p) => (
                <div key={p.name} className="flex items-center gap-4">
                  <span className="display flex h-14 w-14 items-center justify-center rounded-full border border-rule text-lg">
                    {p.initials}
                  </span>
                  <div>
                    <p className="font-bold">{p.name}</p>
                    <p className="text-sm text-mut">{p.title}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-10">
              <Button href="/about" variant="light">
                About Eminent One
              </Button>
            </Reveal>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {[
              ["Verified credentials", "Licenses, certifications, and background checks confirmed before placement."],
              ["Flexible terms", "Temporary, temp-to-perm, or permanent placements."],
              ["Follow-up", "We stay in touch with facilities and professionals after the placement."],
              ["Local Maryland team", `Based in Windsor Mill, serving ${site.areas}.`],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.07} className="border-t border-rule py-7">
                <dt className="text-lg font-bold">{title}</dt>
                <dd className="mt-2 leading-relaxed text-mut">{body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="openings" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Open positions" title="Current openings." />
          <div className="mt-10">
            <JobList />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
