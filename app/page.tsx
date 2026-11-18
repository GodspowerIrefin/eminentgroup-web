import Advantages from "@/components/Advantages";
import Industries from "@/components/Industries";
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

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSplit />
      <SolutionsCarousel />
      <Advantages />
      <CtaBand />
      <Industries />

      <RoleMarquee />

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Staff we place" title="The roles your facility needs filled." />
          <Reveal className="mt-10">
            <RolesExplorer />
          </Reveal>
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

    </>
  );
}
