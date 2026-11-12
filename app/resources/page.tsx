import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Licensing, regulatory, and industry links for healthcare professionals and facilities, collected by Eminent One LLC.",
};

const groups = [
  {
    title: "Licensing and regulators",
    links: [
      ["Maryland Board of Nursing", "Nursing licenses and practice rules in Maryland.", "mbon.maryland.gov"],
      ["MDH Office of Health Care Quality", "Licensing and oversight of health care facilities and agencies.", "health.maryland.gov/ohcq"],
      ["National Council of State Boards of Nursing", "Nurse licensure information across states.", "ncsbn.org"],
    ],
  },
  {
    title: "Industry associations",
    links: [
      ["American Staffing Association", "The national trade association for the staffing industry.", "americanstaffing.net"],
      ["American Health Care Association", "Long-term and post-acute care provider association.", "ahcancal.org"],
      ["American Public Health Association", "Public health news and practice resources.", "apha.org"],
    ],
  },
  {
    title: "Government and labor",
    links: [
      ["US Dept. of Health and Human Services", "Federal health policy and programs.", "hhs.gov"],
      ["US Department of Labor", "Employment and wage rules.", "dol.gov"],
      ["US Bureau of Labor Statistics", "Jobs and pay data for healthcare occupations.", "bls.gov"],
    ],
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Helpful links"
        title="Licensing, regulatory, and industry references."
      />
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-[1fr_2.4fr]">
              <Reveal>
                <h2 className="display text-3xl lg:sticky lg:top-28">{group.title}</h2>
              </Reveal>
              <ul className="border-t border-rule">
                {group.links.map(([name, body, url], i) => (
                  <li key={url} className="border-b border-rule">
                    <Reveal delay={i * 0.06}>
                      <a
                        href={`https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-7 transition-[padding] duration-300 hover:pl-3"
                      >
                        <span>
                          <span className="block text-xl font-bold transition-colors group-hover:text-navy">
                            {name}
                          </span>
                          <span className="mt-1 block text-mut">{body}</span>
                        </span>
                        <span className="flex items-center gap-2 text-[15px] font-semibold text-navy">
                          {url}
                          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <path d="M4 10l6-6M5 4h5v5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
