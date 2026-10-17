"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import CodeStream from "./CodeStream";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: "LinkedIn", sub: "syam-sundar-akina", href: profile.linkedin, icon: LinkedinIcon },
    { label: "GitHub", sub: "SyamSundarAkina", href: profile.github, icon: GithubIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="shell relative pt-14 sm:pt-20">
        <div className="section-line" aria-hidden="true" />
      </div>
      {/* same light treatment as the hero */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="beam pointer-events-none absolute left-1/2 top-0 h-full w-[140%] -translate-x-1/2 opacity-70" aria-hidden="true" />
      <CodeStream />

      <Reveal className="shell relative pb-20 text-center sm:pb-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" aria-hidden="true" />
          Contact
        </p>
        <h2 className="text-gradient mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          Let’s build AI that works in production.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
          Hiring for AI engineering or data science, or have an LLM workflow that needs to be reliable? Send a note and I’ll get back to you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="btn-primary h-12 px-6">
            <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
          </a>
          <button type="button" onClick={copyEmail} className="btn-ghost h-12 bg-bg/60 backdrop-blur" aria-live="polite">
            {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <ul className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-2">
          {links.map(({ label, sub, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" className="card spot hud group flex items-center justify-between bg-bg/70 p-5 backdrop-blur transition-colors hover:border-fg/20">
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-fg">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block font-mono text-[11px] text-subtle">{sub}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
