import type { Metadata } from "next";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import FormCard from "@/components/FormCard";
import InquiryForm from "@/components/InquiryForm";
import JobList from "@/components/JobList";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { roleOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Apply to work with Eminent One LLC. Healthcare staffing opportunities for RNs, LPNs, CNAs, HHAs, and more with Baltimore-area facilities.",
};

const why = [
  "Temporary, temp-to-perm, and permanent roles",
  "Work in hospitals, nursing homes, rehab centers, assisted living, and home care",
  "Full-time, part-time, and per diem schedules",
  "Follow-up from our office after you start",
];
const verify = [
  "Current license or certification for your role",
  "Employment history",
  "Background check",
];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card h-full p-8 sm:p-10">
      <h2 className="display text-3xl">{title}</h2>
      <ul className="mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-1 shrink-0 text-red">
              <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function JobSeekers({ searchParams }: PageProps<"/job-seekers">) {
  const { position } = await searchParams;
  const preset = typeof position === "string" && roleOptions.includes(position) ? position : "";

  return (
    <>
      <PageHero
        eyebrow="For job seekers"
        title="Nursing and care work in the Baltimore area."
        lead="We place RNs, LPNs, CNAs, home health aides, and other healthcare professionals with facilities in Baltimore County and Baltimore City. Apply and we will match you to openings that fit your license and availability."
      >
        <Button href="#apply">Apply now</Button>
        <Button href="#openings" variant="ghost">
          See openings
        </Button>
      </PageHero>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
          <Reveal>
            <List title="Why work with us" items={why} />
          </Reveal>
          <Reveal delay={0.08}>
            <List title="What we verify" items={verify} />
          </Reveal>
        </div>
      </section>

      <section id="openings" className="bg-paper px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Open positions" title="Current openings." />
          <div className="mt-14">
            <JobList />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-[900px]">
          <FormCard
            id="apply"
            title="Apply to work with us"
            lead="Complete the form and our office will review your application."
          >
            <InquiryForm
              key={preset}
              subject="Job application"
              submitLabel="Submit application"
              note="Opens your email app with the details filled in. Attach your resume there before sending."
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "location", label: "City, State, ZIP" },
                {
                  name: "position",
                  label: "Position applying for",
                  type: "select",
                  options: roleOptions,
                  required: true,
                  defaultValue: preset,
                },
                {
                  name: "license",
                  label: "License or certification held",
                  type: "select",
                  options: ["RN", "LPN", "CNA / GNA", "HHA", "CMT", "None"],
                },
                {
                  name: "availability",
                  label: "Availability",
                  type: "select",
                  options: ["Full-time", "Part-time", "Per diem", "Live-in"],
                },
                {
                  name: "shift",
                  label: "Preferred shift",
                  type: "select",
                  options: ["Days", "Evenings", "Nights", "Any"],
                },
                { name: "experience", label: "Tell us about your experience", type: "textarea" },
                { name: "source", label: "How did you hear about us?", wide: true },
              ]}
            />
          </FormCard>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
