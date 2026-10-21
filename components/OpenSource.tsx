import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { openSource } from "@/lib/data";
import { GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function OpenSource() {
  return (
    <section id="open-source" className="section band">
      <SectionHeader index="04" label="Open Source" title="Open-source contributions.">
        Fixes and improvements contributed upstream to the libraries I build with.
      </SectionHeader>

      <div className="mx-auto grid max-w-4xl gap-5">
        {openSource.map((c) => (
          <Reveal key={c.pr.url}>
            <article className="card spot hud group p-6 transition-colors duration-300 hover:border-fg/20 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://github.com/${c.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-fg"
                >
                  <GithubIcon className="h-4 w-4" /> {c.repo}
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  <span className="status-dot" aria-hidden="true" />
                  {c.status}
                </span>
              </div>

              <p className="eyebrow mt-6">
                {c.project} · {c.context}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{c.summary}</p>

              <ul className="mt-4 space-y-2.5">
                {c.changes.map((ch) => (
                  <li key={ch.slice(0, 32)} className="relative pl-5 text-sm leading-relaxed text-muted">
                    <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rotate-45 border border-accent/70" aria-hidden="true" />
                    {ch}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                  {c.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                  <li className="tag">{c.diff}</li>
                </ul>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {c.issue && (
                    <a href={c.issue.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
                      Issue #{c.issue.number} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  <a href={c.pr.url} target="_blank" rel="noreferrer" className="btn-ghost h-9 px-4">
                    <GitPullRequest className="h-4 w-4" aria-hidden="true" /> View PR #{c.pr.number}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
