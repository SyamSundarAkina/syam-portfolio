"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.75rem)",
        paddingLeft: "max(0.75rem, env(safe-area-inset-left, 0px))",
        paddingRight: "max(0.75rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-2 pl-4 transition duration-300 ${
          scrolled || open ? "border-line bg-bg/75 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-fg/30 text-[11px]">SA</span>
        </a>

        <ul className="hidden items-center gap-1.5 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`block rounded-full border px-4 py-1.5 text-sm transition duration-300 ${
                  active === id
                    ? "border-fg bg-fg text-bg shadow-[0_0_24px_-6px_rgba(255,255,255,0.5)]"
                    : "border-line text-muted hover:border-fg/40 hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <a href="#contact" className="btn-primary hidden h-10 md:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl border border-line bg-bg/90 p-2 backdrop-blur-md md:hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-full px-4 py-3 text-sm text-fg hover:bg-white/5">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
