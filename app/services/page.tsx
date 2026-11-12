import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import RolesExplorer from "@/components/RolesExplorer";
import SectionHead from "@/components/SectionHead";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Staffing",
  description:
    "Medical staffing services from Eminent One LLC: recruitment, credentialing, and placement of RNs, LPNs, CNAs, HHAs, and other healthcare professionals in the Baltimore area.",
};

const link = "font-semibold text-navy underline underline-offset-4";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Medical staffing"
        title="Nurses and care staff for Maryland healthcare facilities."
        lead="We staff nurses and other healthcare professionals on temporary, temp-to-perm, and permanent terms. Every candidate is screened and credentialed before placement."
      >
        <Button href="/employers#request">Request staff</Button>
      </PageHero>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="What we do" title="How we staff your facility." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <article className="card card-hover h-full p-8 sm:p-10">
                  <span className="display numeral text-5xl text-navy/25">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-[22px] font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-mut">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Roles we place"
            title="Healthcare professionals we supply."
            lead="Need a role that is not listed? Tell us the role you need filled."
          />
          <Reveal className="mt-10">
            <RolesExplorer />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] bg-navy p-9 text-white sm:p-12">
              <h2 className="display text-4xl">For healthcare facilities</h2>
              <p className="mb-9 mt-4 text-lg leading-relaxed text-white/75">
                Tell us the roles, shifts, and start date. We recruit, verify, and place the staff.
              </p>
              <Button href="/employers#request" variant="light">
                Request staff
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[28px] bg-red p-9 text-white sm:p-12">
              <h2 className="display text-4xl">For healthcare professionals</h2>
              <p className="mb-9 mt-4 text-lg leading-relaxed text-white/85">
                Apply once. We match you with facilities that fit your license and schedule.
              </p>
              <Button href="/job-seekers#apply" variant="light">
                Apply for work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow="Questions" title="Frequently asked questions." />
          <Reveal>
            <Faq
              items={[
                {
                  q: "What settings do you staff?",
                  a: "Hospitals, nursing homes, rehabilitation centers, assisted living facilities, home care agencies, and other healthcare settings.",
                },
                {
                  q: "Do you place professionals looking for work?",
                  a: (
                    <>
                      Yes. Apply on the{" "}
                      <Link href="/job-seekers" className={link}>
                        For Job Seekers
                      </Link>{" "}
                      page and we will match you to openings that fit your license and availability.
                    </>
                  ),
                },
                {
                  q: "Where do you operate?",
                  a: `Our office is in Windsor Mill. We staff facilities in ${site.areas}.`,
                },
                {
                  q: "How do we get started?",
                  a: (
                    <>
                      Send a{" "}
                      <Link href="/employers#request" className={link}>
                        staffing request
                      </Link>{" "}
                      or call {site.phone}. Tell us the role, shift, and start date.
                    </>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
