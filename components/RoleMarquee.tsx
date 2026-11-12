import { roles } from "@/lib/site";

export default function RoleMarquee() {
  const items = [...roles, ...roles];
  return (
    <div className="overflow-hidden border-y border-rule bg-paper py-5" aria-hidden="true">
      <div className="marquee">
        {items.map((r, i) => (
          <span key={i} className="display flex items-center gap-8 pr-8 text-2xl text-ink/70">
            {r.name}
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
