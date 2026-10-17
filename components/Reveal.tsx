import type { ReactNode } from "react";

// Fades children in as they scroll into view. Pure CSS (scroll-driven animation),
// so content is always visible where the browser doesn't support it.
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
