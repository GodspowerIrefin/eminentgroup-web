import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Button";
import { jobs } from "@/lib/site";

export default function JobList() {
  return (
    <div>
      <ul className="grid gap-5 lg:grid-cols-2">
        {jobs.map((job, i) => (
          <li key={job.code}>
            <Reveal delay={i * 0.08}>
              <Link
                href={`/job-seekers?position=${job.code}#apply`}
                className="card card-hover group block p-8 sm:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-navy/8 px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-red" />
                    Open
                  </span>
                  <p className="text-right">
                    <span className="display text-3xl">{job.pay}</span>
                    <span className="block text-sm text-mut">per hour</span>
                  </p>
                </div>
                <h3 className="display mt-6 text-[clamp(1.6rem,2.6vw,2.1rem)]">{job.title}</h3>
                <dl className="mt-6 grid gap-3 border-t border-rule pt-6 text-[15px]">
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-mut">Location</dt>
                    <dd className="font-semibold">{job.location}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-mut">Shift</dt>
                    <dd className="font-semibold">
                      {job.shift}
                      {job.extra ? <span className="block font-normal text-mut">{job.extra}</span> : null}
                    </dd>
                  </div>
                </dl>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-red">
                  Apply for this role <Arrow />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-8">
        <p className="text-[17px] text-mut">
          Also hiring CNAs and GNAs, home health aides, medical assistants, therapists, social
          workers, and caregivers.{" "}
          <Link href="/job-seekers#apply" className="font-semibold text-navy underline underline-offset-4">
            Apply
          </Link>
        </p>
      </Reveal>
    </div>
  );
}
