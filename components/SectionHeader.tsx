import Reveal from "./Reveal";

export default function SectionHeader({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="mb-10 text-center sm:mb-12">
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" aria-hidden="true" />
        {label}
      </p>
      <h2 className="h2 text-gradient mx-auto mt-5 max-w-3xl">{title}</h2>
      {children && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{children}</p>}
    </Reveal>
  );
}
