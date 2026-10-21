import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section band">
      <SectionHeader index="02" label="Experience" title="Building production AI, end to end." />

      <div className="relative mx-auto max-w-4xl">
        {/* rail + scroll-linked glow */}
        <div className="timeline-rail absolute bottom-0 left-[7px] top-2 w-px sm:left-[11px]" aria-hidden="true" />
        <div className="timeline-fill absolute bottom-0 left-[7px] top-2 w-px sm:left-[11px]" aria-hidden="true" />

        <ol className="space-y-5">
          {experience.map((r, i) => (
            <li key={r.company + r.period} className="relative pl-8 sm:pl-12">
              {/* node */}
              <span className="absolute left-0 top-7 grid h-[15px] w-[15px] place-items-center sm:h-[23px] sm:w-[23px]" aria-hidden="true">
                {i === 0 && <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />}
                <span className={`relative h-[9px] w-[9px] rounded-full border ${i === 0 ? "border-accent bg-accent shadow-[0_0_12px_rgb(var(--accent))]" : "border-fg/40 bg-bg"}`} />
              </span>

              <Reveal className="card spot hud p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {r.title} <span className="font-normal text-muted">· {r.company}</span>
                  </h3>
                  <p className={`font-mono text-xs ${i === 0 ? "text-accent" : "text-subtle"}`}>{r.period}</p>
                </div>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{r.location}</p>

                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{r.overview}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                  {r.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>

                {r.highlights.length > 0 && (
                  <details className="exp-details group/details mt-5 border-t border-line pt-4">
                    <summary className="inline-flex cursor-pointer select-none list-none items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-fg/40 hover:text-fg [&::-webkit-details-marker]:hidden">
                      <span className="group-open/details:hidden">Show details</span>
                      <span className="hidden group-open/details:inline">Hide details</span>
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open/details:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="mt-4 space-y-2.5">
                      {r.highlights.map((h) => (
                        <li key={h.slice(0, 32)} className="relative pl-5 text-sm leading-relaxed text-muted">
                          <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rotate-45 border border-accent/70" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
