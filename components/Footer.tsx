import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="shell flex flex-col items-start justify-between gap-4 py-8 text-xs text-subtle sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 transition-colors hover:border-fg/40 hover:text-fg">
          Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
      <p
        className="mega pointer-events-none -mb-[0.22em] select-none whitespace-nowrap text-center text-[17vw] font-semibold leading-none tracking-[-0.06em] opacity-[0.12]"
        aria-hidden="true"
      >
        Syam Sundar
      </p>
    </footer>
  );
}
