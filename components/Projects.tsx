import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-line" aria-hidden="true" />
      <SectionHeader label="Projects" title="Built on my own time.">
        Retrieval systems, multi-agent workflows, and fine-tuned models, all on GitHub.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 90} className="h-full">
            <article className="card spot hud group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-fg/20">
              {/* pipeline visual */}
              <div className="relative flex min-h-[5.5rem] items-center border-b border-line bg-white/[0.015] px-5 py-4">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                <ol className="relative flex w-full flex-wrap items-center gap-x-2 gap-y-2" aria-label="How it works">
                  {p.flow.map((step, j) => (
                    <li key={step} className={`flex min-w-0 items-center gap-2 ${j > 0 ? "flex-1" : ""}`}>
                      {j > 0 && <span className="pipe min-w-3 flex-1" aria-hidden="true" />}
                      <span
                        className={`max-w-[7rem] shrink-0 rounded-md border px-2 py-1 text-center font-mono text-[10.5px] leading-snug [text-wrap:balance] sm:text-[11px] ${
                          j === p.flow.length - 1 ? "border-accent/40 bg-accent/10 text-accent" : "border-line bg-bg text-muted"
                        }`}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{p.kind}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h3>
                  </div>
                  <a
                    href={p.repo ?? profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition duration-300 group-hover:border-fg/40 group-hover:text-fg"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                  <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                    {p.stack.map((s) => (
                      <li key={s} className="tag">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 text-sm">
                    <a href={p.repo ?? profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                      <GithubIcon className="h-4 w-4" /> Code
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
                        Live demo <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
          <GithubIcon className="h-4 w-4" /> More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
