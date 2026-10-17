import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import CodeStream from "./CodeStream";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ticker = [
  "LLMs", "Microsoft Foundry", "LangGraph", "RAG", "FAISS", "Prompt-injection defenses", "Guardrails", "LLM evaluation",
  "PEFT / LoRA", "Hugging Face", "PyTorch", "Python", "SQL", "Azure Functions", "FastAPI", "Docker",
];

// Agent "nodes" around the portrait. `pos` places the tag; `from`/`to` are connector
// endpoints in % of the portrait box (from the figure to the tag's near edge).
// `short`/`mobile` are the compact pill shown on phones, placed over the shoulders and jacket.
const chips = [
  { tag: "agent.orchestrate", title: "Multi-agent systems", sub: "Foundry · LangGraph · AutoGen", pos: "right-[86%] top-[28%]", from: [38, 30], to: [14, 34], drift: "chip-drift-a", short: "Multi-agent", mobile: "left-[-3%] top-[38%]" },
  { tag: "cert.azure", title: "Azure AI Engineer", sub: "Microsoft Certified", pos: "left-[82%] top-[12%]", from: [61, 20], to: [83, 17], drift: "chip-drift-b", short: "Azure AI Eng.", mobile: "right-[-3%] top-[30%]" },
  { tag: "rag.retrieve", title: "RAG & vector search", sub: "Embeddings · FAISS · rerank", pos: "right-[90%] top-[62%]", from: [27, 63], to: [10, 67], drift: "chip-drift-b", short: "RAG · FAISS", mobile: "left-[-5%] top-[60%]" },
  { tag: "guard.verify", title: "Guardrails & evals", sub: "Injection defense · HITL", pos: "left-[88%] top-[54%]", from: [71, 52], to: [89, 58], drift: "chip-drift-a", short: "Guardrails", mobile: "right-[-5%] top-[52%]" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background layers */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="beam pointer-events-none absolute left-1/2 top-0 h-[85%] w-[140%] -translate-x-1/2" aria-hidden="true" />
      <CodeStream />

      <div className="shell relative pt-28 text-center sm:pt-32">
        <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.role}
          <span className="text-subtle">·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" aria-hidden="true" /> {profile.location}
          </span>
        </p>

        {/* name behind, portrait in front */}
        <div className="relative mx-auto mt-6 max-w-5xl">
          <h1 className="mega animate-rise mx-auto w-fit select-none whitespace-nowrap px-[0.04em] text-[clamp(3.2rem,14vw,10rem)] font-semibold leading-[0.9] tracking-[-0.06em] [animation-delay:80ms]">
            Syam Sundar
          </h1>

          <div className="relative mx-auto -mt-[11%] w-[min(440px,82vw)]">
            {/* spotlight halo behind the head */}
            <div className="absolute left-1/2 top-[4%] h-[46%] w-[70%] -translate-x-1/2 rounded-full bg-white/[0.14] blur-3xl" aria-hidden="true" />
            <img
              src="syam-illustrated.webp"
              alt="Illustrated portrait of Syam Sundar Akina"
              width={1184}
              height={1408}
              decoding="async"
              fetchPriority="high"
              className="portrait-blend animate-rise relative w-full [animation-delay:200ms]"
            />

            {/* connectors from the figure to each agent node */}
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {chips.map(({ tag, from, to }, i) => (
                <line
                  key={tag}
                  x1={from[0]}
                  y1={from[1]}
                  x2={to[0]}
                  y2={to[1]}
                  className="connector"
                  style={{ animationDelay: `${i * -0.7}s` }}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {chips.map(({ tag, title, sub, pos, drift }, i) => (
              <div key={tag} className={`absolute hidden md:block ${pos}`}>
                <div className={`agent-chip hud ${drift}`} style={{ animationDelay: `${i * -2.3}s` }}>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    <span className="status-dot" aria-hidden="true" />
                    {tag}
                  </span>
                  <span className="mt-1 block whitespace-nowrap text-[13px] font-medium text-fg">{title}</span>
                  <span className="block whitespace-nowrap font-mono text-[10.5px] text-subtle">{sub}</span>
                </div>
              </div>
            ))}

            {/* phones: compact agent pills at the portrait's edges */}
            {chips.map(({ tag, short, mobile, drift }, i) => (
              <div key={`${tag}-m`} className={`absolute md:hidden ${mobile}`} aria-hidden="true">
                <span
                  className={`${drift} inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-bg/75 px-2.5 py-1 font-mono text-[10px] text-fg shadow-[0_8px_24px_-10px_rgb(0_0_0/0.9)] backdrop-blur-md`}
                  style={{ animationDelay: `${i * -2.3}s` }}
                >
                  <span className="status-dot" />
                  {short}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -mt-16 sm:-mt-24">
          <p className="animate-rise text-2xl font-semibold tracking-tight [animation-delay:280ms] sm:text-3xl">
            {profile.name}
          </p>
          <p className="animate-rise mt-2 font-mono text-xs text-subtle [animation-delay:320ms] sm:text-sm">{profile.focus}</p>
          <p className="animate-rise mx-auto mt-5 max-w-2xl leading-relaxed text-muted [animation-delay:360ms]">{profile.intro}</p>

          <div className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-3 [animation-delay:420ms]">
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-ghost">
              View projects
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-fg/40 hover:text-fg">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-fg/40 hover:text-fg">
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* skills ticker */}
      <div className="marquee-mask relative mt-14 overflow-hidden border-y border-line py-4" aria-hidden="true">
        <div className="marquee flex w-max gap-10 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
