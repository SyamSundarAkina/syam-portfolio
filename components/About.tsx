import { ArrowUpRight, Award, Bot, BrainCircuit, Gauge, GraduationCap, Search, ShieldCheck } from "lucide-react";
import { about, type AreaId } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const areaIcons: Record<AreaId, typeof Bot> = {
  agents: Bot,
  rag: Search,
  security: ShieldCheck,
  evals: Gauge,
  ml: BrainCircuit,
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-line" aria-hidden="true" />
      <SectionHeader label="About" title={about.title} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card spot hud p-6 sm:p-8">
          <div className="space-y-5 text-[16.5px] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={90} className="card spot p-5">
            <p className="eyebrow flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Currently
            </p>
            <p className="mt-3 text-base font-semibold tracking-tight">
              {about.current.role} <span className="font-normal text-muted">· {about.current.company}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{about.current.note}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{about.current.place}</p>
          </Reveal>

          <Reveal delay={180} className="card spot p-5">
            <p className="eyebrow">Core areas</p>
            <ul className="mt-4 space-y-1">
              {about.areas.map(({ id, label }) => {
                const Icon = areaIcons[id];
                return (
                  <li key={id} className="flex items-center gap-3 rounded-lg px-1 py-1.5 text-sm text-muted transition-colors hover:text-fg">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Reveal className="card spot p-6">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
          </p>
          <ul className="space-y-4">
            {about.education.map((e) => (
              <li key={e.title} className="border-l border-line pl-4">
                <p className="text-sm font-medium">{e.title}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {e.org} · <span className="font-mono text-xs text-subtle">{e.period}</span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={90} className="card spot p-6">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" /> Certifications
          </p>
          <ul className="space-y-4">
            {about.certifications.map((c) => (
              <li key={c.title} className="border-l border-line pl-4">
                <p className="text-sm font-medium">{c.title}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {c.org}
                  {c.url && (
                    <>
                      {" · "}
                      <a href={c.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-fg transition-colors hover:text-accent">
                        View credential <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
