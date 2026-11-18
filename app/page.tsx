import Icon from "@/components/Icon";
import HomeHero from "@/components/HomeHero";
import IntroSplit from "@/components/IntroSplit";
import SolutionsCarousel from "@/components/SolutionsCarousel";
import CtaBand from "@/components/CtaBand";
import JobList from "@/components/JobList";
import ProcessTabs from "@/components/ProcessTabs";
import Reveal from "@/components/Reveal";
import RoleMarquee from "@/components/RoleMarquee";
import RolesExplorer from "@/components/RolesExplorer";
import SectionHead from "@/components/SectionHead";
import { settings } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSplit />
      <SolutionsCarousel />

      <RoleMarquee />

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
