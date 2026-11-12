import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero eyebrow="Page not found" title="We could not find that page." lead="The link may be out of date.">
      <Button href="/">Back to home</Button>
    </PageHero>
  );
}
