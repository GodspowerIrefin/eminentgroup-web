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
import { leaders, roles, services, settings, site } from "@/lib/site";

const tints = ["bg-sand", "bg-mint", "bg-blush", "bg-gold-200/45"];
const serviceIcons: IconName[] = ["search", "shield", "calendar", "chat"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-canvas">
        <div className="mx-auto max-w-[1100px] px-5 pb-14 pt-36 text-center sm:px-8 lg:pb-20 lg:pt-52">
          <h1 className="display step-in text-[clamp(2.75rem,7.2vw,6rem)] !leading-[1.04]">
            Staffing healthcare <span className="text-gold-600">with a personal touch</span>
          </h1>
          <p
            className="step-in mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mut sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            A licensed Maryland agency connecting nurses and care professionals with hospitals,
            nursing homes, rehab centers, assisted living, and home care.
          </p>
        </div>

        <div className="step-in relative mx-auto max-w-[1360px] px-3 sm:px-6" style={{ animationDelay: "220ms" }}>
          <div className="hero-curve relative h-[360px] overflow-hidden sm:h-[520px] lg:h-[620px]">
            <Image
              src="/images/hero-team.jpg"
              alt="Three healthcare professionals in scrubs"
              fill
              priority
              sizes="(min-width: 1360px) 1360px, 100vw"
              className="object-cover object-[50%_30%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-forest/55 via-transparent to-gold/45 mix-blend-multiply" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-80 w-[28rem] rotate-12 bg-gold/55 [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-72 w-[26rem] -rotate-6 bg-forest/60 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
          </div>
          <div className="float-slow absolute bottom-10 left-6 hidden rounded-md bg-white px-5 py-4 shadow-[0_24px_48px_-20px_rgba(23,26,38,0.4)] sm:block lg:left-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mut">Maryland licensed</p>
            <p className="mt-1 font-bold">Health Care Staff Agency</p>
            <p className="text-sm text-mut">License # {site.license}</p>
          </div>
        </div>

        <div className="mx-auto max-w-[900px] px-5 pb-20 pt-16 text-center sm:px-8 lg:pb-28 lg:pt-24">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.6vw,3.75rem)] !font-semibold">
              Filling shifts and careers across the Baltimore area
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mut">
              We recruit, verify, and place RNs, LPNs, CNAs, home health aides, and more, then stay
              in touch after the placement starts.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/employers#request" className="sq-btn sq-btn-solid">
                Request Staff
              </Link>
              <Link href="/job-seekers#apply" className="sq-btn sq-btn-line">
                Explore Careers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rule bg-sand">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-8 px-5 py-12 text-center sm:px-8 lg:grid-cols-4">
          {[
            [String(roles.length), "Healthcare roles placed"],
            [String(settings.length), "Care settings served"],
            ["3", "Placement types"],
            [site.license, "Maryland agency license"],
          ].map(([n, label]) => (
            <div key={label}>
              <dt className="display whitespace-nowrap text-[clamp(1.75rem,3.3vw,2.75rem)] !font-semibold text-forest">{n}</dt>
              <dd className="mt-2 text-[15px] font-medium text-mut">{label}</dd>
            </div>
          ))}
        </dl>
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
