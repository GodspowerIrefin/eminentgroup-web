import Advantages from "@/components/Advantages";
import Industries from "@/components/Industries";
import HomeHero from "@/components/HomeHero";
import IntroSplit from "@/components/IntroSplit";
import CtaBand from "@/components/CtaBand";
import JobList from "@/components/JobList";
import HowItWorks from "@/components/HowItWorks";
import Reveal from "@/components/Reveal";
import RolesExplorer from "@/components/RolesExplorer";
import SectionHead from "@/components/SectionHead";

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSplit />

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHead
            eyebrow="Staff we place"
            title="The roles your facility needs filled."
            lead="Pick a role to see what they do and where we place them. Need a role that is not listed? Tell us what you need."
          />
          <Reveal className="mt-12">
            <RolesExplorer />
          </Reveal>
        </div>
      </section>

      <Industries />
      <HowItWorks />

      <section id="openings" className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Open positions"
            title="Current openings."
            lead="Pay is per hour. Apply to an opening below, or send a general application for any role."
          />
          <div className="mt-10">
            <JobList />
          </div>
        </div>
      </section>

      <CtaBand />
      <Advantages />
    </>
  );
}
