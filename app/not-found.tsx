import Closing from "@/components/Closing";
import Header from "@/components/Header";
import { HeroSplit } from "@/components/Heroes";
import { actions, pages, pic } from "@/content/content";

const c = pages.notFound;

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSplit
          title={c.hero.title}
          lead={c.hero.lead}
          image={pic(c.hero.image)}
          primary={actions.requestStaff}
          secondary={actions.applyForWork}
        />
      </main>
      <Closing />
    </>
  );
}
