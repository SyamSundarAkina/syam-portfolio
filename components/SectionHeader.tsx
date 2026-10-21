import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mb-10 pt-16 sm:mb-12 sm:pt-20">
      {/* light cone + outlined number sit behind the heading */}
      <div className="head-beam pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[min(56rem,140vw)] -translate-x-1/2" aria-hidden="true" />
      <span
        className="section-index pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[clamp(5rem,15vw,8.5rem)]"
        aria-hidden="true"
      >
        {index}
      </span>

      <Reveal className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" aria-hidden="true" />
          <span className="text-subtle">{index}</span>
          <span className="text-fg/20" aria-hidden="true">/</span>
          {label}
        </p>
        <h2 className="h2 text-gradient mx-auto mt-5 max-w-3xl">{title}</h2>
        {children && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{children}</p>}
      </Reveal>
    </div>
  );
}
