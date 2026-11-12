import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import JobList from "@/components/JobList";
import ProcessTabs from "@/components/ProcessTabs";
import Reveal from "@/components/Reveal";
import RoleMarquee from "@/components/RoleMarquee";
import RolesExplorer from "@/components/RolesExplorer";
import SectionHead from "@/components/SectionHead";
import { leaders, services, site } from "@/lib/site";

const assurances = [
  "Licenses and certifications verified",
  "Background checks completed",
  "Temporary, temp-to-perm, permanent",
  "Follow-up after placement",
];

export default function Home() {
  return (
    <>
      <section className="band-dark hero-grid overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-44">
          <div>
            <p className="eyebrow step-in">Healthcare staffing · Windsor Mill, MD</p>
            <h1
              className="display step-in mt-6 text-[clamp(2.75rem,6.4vw,5.25rem)]"
              style={{ animationDelay: "80ms" }}
            >
              Healthcare staffing for Maryland facilities and care professionals.
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
          </div>

          <div className="step-in relative" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[5/5] lg:aspect-[4/5]">
              <Image
                src="/images/hero-team.jpg"
                alt="Three healthcare professionals in scrubs"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent" />
            </div>
            <div className="absolute -left-3 bottom-8 rounded-2xl bg-white px-5 py-4 text-[#0d1736] shadow-2xl sm:-left-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#56607b]">
                Maryland licensed
              </p>
              <p className="mt-1 font-bold">Health Care Staff Agency</p>
              <p className="text-sm text-[#56607b]">License # {site.license}</p>
            </div>
            <Link
              href="#openings"
              className="absolute -right-2 top-8 flex items-center gap-2.5 rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-white shadow-xl sm:-right-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Now hiring RNs and LPNs
            </Link>
          </div>
        </div>

        <div className="border-t border-rule">
          <ul className="mx-auto grid max-w-[1200px] gap-x-8 gap-y-4 px-5 py-7 text-[15px] font-medium sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="shrink-0 text-[#ff8fa1]">
                  <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RoleMarquee />

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Our services"
            title="Staffing for Baltimore-area healthcare facilities."
            lead="We recruit nurses and care staff, verify their credentials, and place them where they are needed."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <article className="card card-hover h-full p-8 sm:p-10">
                  <span className="display text-5xl text-navy/25">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-[22px] font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-mut">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Staff we place" title="The roles your facility needs filled." />
          <Reveal className="mt-14">
            <RolesExplorer />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="From request to first shift." />
          <Reveal className="mt-10">
            <ProcessTabs />
          </Reveal>
        </div>
      </section>

      <section className="band-dark px-5 py-24 sm:px-8 lg:py-32">
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

      <section id="openings" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Open positions" title="Current openings." />
          <div className="mt-14">
            <JobList />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
