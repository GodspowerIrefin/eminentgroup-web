import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={light ? "/images/eo-mark-white.png" : "/images/eo-mark.png"}
        alt=""
        width={509}
        height={360}
        className="h-[52px] w-auto sm:h-[60px]"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-bold tracking-[0.14em] ${light ? "text-white" : "text-navy"}`}
        >
          EMINENT ONE
        </span>
        <span
          className={`mt-1.5 text-[11px] font-medium tracking-[0.08em] ${light ? "text-white/70" : "text-mut"}`}
        >
          People. Care. Opportunities.
        </span>
      </span>
    </span>
  );
}
