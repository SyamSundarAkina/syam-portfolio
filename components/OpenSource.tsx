import { ArrowUpRight, ChevronDown, GitPullRequest } from "lucide-react";
import { openSource } from "@/lib/data";
import { GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import ScrollRow from "./ScrollRow";
import SectionHeader from "./SectionHeader";

export default function OpenSource() {
  return (
    <section id="open-source" className="section band">
      <SectionHeader index="04" label="Open Source" title="Open-source contributions.">
        Fixes contributed upstream to a large codebase: tracing bugs, writing focused regression tests, and working through maintainer code review.
      </SectionHeader>

      <div className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)] gap-5">
        {openSource.map((c) => {
          const count = (status: string) => c.prs.filter((p) => p.status === status).length;
          const statusSummary = (["Merged", "Approved", "In review"] as const)
            .map((s) => count(s) && `${count(s)} ${s.toLowerCase()}`)
            .filter(Boolean)
            .join(" · ");
          return (
            <Reveal key={c.repo}>
              <article className="card spot hud p-6 transition-colors duration-300 hover:border-fg/20 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://github.com/${c.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-fg"
                  >
                    <GithubIcon className="h-4 w-4" /> {c.repo}
                  </a>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    <GitPullRequest className="h-3.5 w-3.5" aria-hidden="true" />
                    {c.prs.length} PRs · {statusSummary}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">{c.project}</h3>
                <p className="mt-1 text-sm text-muted">{c.context}</p>

                {/* compact PR cards, newest first, in a snap-scrolling row */}
                <div className="mt-6">
                  <ScrollRow label={`${c.project} pull requests`}>
                    {c.prs.map((p) => (
                      <li
                        key={p.pr.number}
                        className="flex w-[min(20rem,78vw)] shrink-0 snap-start flex-col rounded-xl border border-line bg-bg/50 p-4 transition-colors duration-300 hover:border-fg/25"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                            #{p.pr.number} · {p.kind}
                          </p>
                          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10.5px] text-accent">
                            <span className="status-dot" aria-hidden="true" />
                            {p.status}
                          </span>
                        </div>
                        <h4 className="mt-2.5 text-sm font-semibold leading-snug tracking-tight">{p.title}</h4>
                        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted">{p.summary}</p>

                        <details className="exp-details group/details mt-3">
                          <summary className="inline-flex cursor-pointer select-none list-none items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
                            <span className="group-open/details:hidden">What changed</span>
                            <span className="hidden group-open/details:inline">Hide</span>
                            <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open/details:rotate-180" aria-hidden="true" />
                          </summary>
                          <ul className="mt-2.5 space-y-2">
                            {p.changes.map((ch) => (
                              <li key={ch.slice(0, 32)} className="relative pl-4 text-[13px] leading-relaxed text-muted">
                                <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45 border border-accent/70" aria-hidden="true" />
                                {ch}
                              </li>
                            ))}
                          </ul>
                        </details>

                        <div className="min-h-4 flex-1" aria-hidden="true" />
                        <div className="flex items-center justify-between gap-2 border-t border-line pt-3">
                          <span className="font-mono text-[11px] text-subtle">{p.diff}</span>
                          <div className="flex items-center gap-3 text-xs">
                            {p.issue && (
                              <a href={p.issue.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-muted transition-colors hover:text-fg">
                                Issue #{p.issue.number} <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                              </a>
                            )}
                            <a href={p.pr.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent">
                              <GitPullRequest className="h-3.5 w-3.5" aria-hidden="true" /> PR
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ScrollRow>
                </div>

                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
                  {c.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
