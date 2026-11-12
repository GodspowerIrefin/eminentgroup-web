import type { ReactNode } from "react";

export default function FormCard({
  id,
  title,
  lead,
  children,
}: {
  id?: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="rounded-[28px] border border-[rgba(23,26,38,0.1)] bg-white p-7 text-[#171a26] shadow-[0_40px_80px_-48px_rgba(15,40,36,0.45)] sm:p-10"
    >
      <h2 className="display text-[clamp(1.9rem,3.4vw,2.6rem)]">{title}</h2>
      <p className="mb-8 mt-3 text-[17px] text-[#5b6070]">{lead}</p>
      {children}
    </div>
  );
}
