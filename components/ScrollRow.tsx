"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Horizontal snap-scrolling row. Arrows and edge fades only appear when the content overflows.
export default function ScrollRow({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ prev: false, next: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdges({ prev: el.scrollLeft > 4, next: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const overflow = edges.prev || edges.next;
  const fade = `${edges.prev ? "transparent, #000 6%" : "#000"}, ${edges.next ? "#000 94%, transparent" : "#000"}`;

  return (
    <div className="min-w-0">
      {overflow && (
        <div className="mb-3 flex justify-end gap-2">
          {([-1, 1] as const).map((dir) => {
            const Icon = dir < 0 ? ChevronLeft : ChevronRight;
            const enabled = dir < 0 ? edges.prev : edges.next;
            return (
              <button
                key={dir}
                type="button"
                onClick={() => step(dir)}
                disabled={!enabled}
                aria-label={dir < 0 ? "Previous" : "Next"}
                className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg/40 hover:text-fg disabled:opacity-30 disabled:hover:border-line disabled:hover:text-muted"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}
      <ol
        ref={ref}
        aria-label={label}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 [scrollbar-width:thin]"
        style={{ maskImage: `linear-gradient(90deg, ${fade})` }}
      >
        {children}
      </ol>
    </div>
  );
}
