import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { Arrow } from "./Button";
import { jobs } from "@/lib/site";

const alsoHiring = ["CNAs & GNAs", "Home health aides", "Medical assistants", "Therapists", "Social workers", "Caregivers"];

export default function JobList() {
  return (
    <div>
      <ul className="grid gap-6 lg:grid-cols-2">
        {jobs.map((job, i) => (
          <li key={job.code}>
            <Reveal delay={i * 0.08} className="h-full">
              <Link
                href={`/job-seekers?position=${job.code}#apply`}
                className="job-card group flex h-full flex-col overflow-hidden rounded-[22px] border border-rule bg-white"
              >
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <div className="flex items-start gap-5">
                    <span className="job-code display flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest-950 text-[18px] text-gold">
                      {job.code}
                    </span>
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-forest">
                        <span className="live-dot relative h-2 w-2 rounded-full bg-[#2fae6b]" />
                        Now hiring
                      </span>
                      <h3 className="display mt-1 text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight">{job.title}</h3>
                    </div>
                  </div>

                  <ul className="mt-7 flex flex-col gap-3 text-[15px]">
                    <li className="flex items-center gap-3">
                      <span className="text-red"><Icon name="pin" size={18} /></span>
                      {job.location}
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-red"><Icon name="clock" size={18} /></span>
                      <span>
                        {job.shift}
                        {job.extra ? (
                          <span className="ml-2 inline-block rounded-full bg-gold-200 px-2.5 py-0.5 text-[12px] font-semibold text-forest-950">
                            {job.extra}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-rule bg-sand/60 px-7 py-5 sm:px-9">
                  <p>
                    <span className="display text-[26px] leading-none">{job.pay}</span>
                    <span className="ml-1.5 text-[14px] text-mut">/ hour</span>
                  </p>
                  <span className="job-apply inline-flex h-11 items-center gap-2 rounded-full bg-red px-5 text-[14px] font-semibold text-white">
                    Apply <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-8">
        <div className="flex flex-col gap-4 rounded-[22px] border border-dashed border-forest/25 p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex-1">
            <p className="font-semibold">Also hiring</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {alsoHiring.map((r) => (
                <li key={r} className="rounded-full bg-white px-3.5 py-1.5 text-[13.5px] text-ink shadow-[0_1px_0_rgba(23,26,38,0.08)]">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/job-seekers#apply"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-forest px-6 text-[14.5px] font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            Apply for work <Arrow />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
