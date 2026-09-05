/* Editorial Utility direction — custom Lumina symbols use a soft, geometric SVG vocabulary instead of a generic icon font. */
import type { ReactNode, SVGProps } from "react";

type IconName = "spark" | "grid" | "layers" | "code" | "palette" | "motion" | "accessibility" | "arrow" | "check" | "menu" | "close" | "sun" | "moon";

const paths: Record<IconName, ReactNode> = {
  spark: <><path d="M12 2.5 14.2 9l6.3 3-6.3 3-2.2 6.5L9.8 15 3.5 12l6.3-3Z" /><path d="m18.5 3 .6 2.1L21 6l-1.9.9-.6 2.1-.7-2.1L16 6l1.8-.9Z" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
  layers: <><path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" /><path d="m5 11.5-1.5 1L12 17l8.5-4.5-1.5-1" /><path d="m5 16-1.5 1L12 21.5l8.5-4.5-1.5-1" /></>,
  code: <><path d="m8.5 7-5 5 5 5" /><path d="m15.5 7 5 5-5 5" /><path d="m13.5 4.5-3 15" /></>,
  palette: <><path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.3a1.7 1.7 0 0 0 0-3.4h-.8a1.6 1.6 0 0 1 0-3.2H15a5.5 5.5 0 0 0 5.5-5.5C20.5 5.6 16.7 3.5 12 3.5Z" /><circle cx="7.5" cy="10" r=".8" /><circle cx="9.5" cy="6.5" r=".8" /><circle cx="14" cy="6" r=".8" /><circle cx="17" cy="9" r=".8" /></>,
  motion: <><path d="M4 12h16" /><path d="m12 4 8 8-8 8" /><path d="M4 7v10" /></>,
  accessibility: <><circle cx="12" cy="4.5" r="2" /><path d="M5 8.5c4.5 1.5 9.5 1.5 14 0" /><path d="m9 10 3 3 3-3" /><path d="m10 13-2 7" /><path d="m14 13 2 7" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
};

export function LuminaIcon({ name, size = 18, className = "", ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`lu-icon-drawn ${className}`} {...props}>{paths[name]}</svg>;
}

export type { IconName };
