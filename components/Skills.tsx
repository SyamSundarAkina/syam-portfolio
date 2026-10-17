import { Bot, BrainCircuit, Cloud, Gauge, Search, ShieldCheck } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons: Record<SkillGroup["id"], typeof Bot> = {
  agents: Bot,
  rag: Search,
  security: ShieldCheck,
  evals: Gauge,
  ml: BrainCircuit,
  cloud: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-line" aria-hidden="true" />
      <SectionHeader label="Skills" title="The toolkit." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.id];
          return (
            <Reveal key={g.id} delay={(i % 3) * 80} className="h-full">
              <div className="card spot hud group h-full p-6 transition-colors duration-300 hover:border-fg/20">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-shadow duration-300 group-hover:shadow-[0_0_24px_-4px_rgb(var(--accent)/0.5)]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="tag transition-colors duration-300 hover:border-fg/30 hover:text-fg">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
