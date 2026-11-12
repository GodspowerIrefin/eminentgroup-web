const paths = {
  search: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm9.5 3-4.8-4.8M8 10.5h5M10.5 8v5",
  shield: "M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Zm-3 9 2.2 2.2L15.5 10",
  calendar: "M5 6.5h14a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1ZM4 10.5h16M8 4v4M16 4v4M8.5 15h3",
  chat: "M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6l-4.5 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3.5 4.5h7M8.5 12.5h4.5",
  building: "M5 20V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15M15 10h3a1 1 0 0 1 1 1v9M3 20h18M8.5 8h3M8.5 12h3M8.5 16h3",
  stethoscope: "M6 4v5a4 4 0 0 0 8 0V4M10 13v2.5a4.5 4.5 0 0 0 9 0V14m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 4h2M13 4h2",
};

export type IconName = keyof typeof paths;

export default function Icon({ name, size = 26 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
