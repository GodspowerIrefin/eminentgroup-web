export default function Logo({ light = false }: { light?: boolean }) {
  const stroke = light ? "#ffffff" : "#14327f";
  return (
    <span className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 44 44" aria-hidden="true">
        <polygon
          points="22,3 39,12.5 39,31.5 22,41 5,31.5 5,12.5"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="22" r="5" fill="#c8102e" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-extrabold tracking-[0.14em] ${light ? "text-white" : "text-navy"}`}
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
