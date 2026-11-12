import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary: "bg-red text-white hover:bg-red-600 shadow-[0_10px_30px_-12px_rgba(200,16,46,0.7)]",
  navy: "bg-navy text-white hover:bg-navy-900",
  light: "bg-white text-navy hover:bg-white/90",
  ghost: "border border-rule text-ink hover:border-current",
};

export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}
