import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-4 text-[clamp(2rem,4.2vw,3.25rem)]">{title}</h2>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-mut">{lead}</p> : null}
    </Reveal>
  );
}
