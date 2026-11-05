import Section from "./Section";
import Reveal from "./Reveal";
import { leadership, awards } from "@/lib/data";

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="beyond code" title="Leadership & recognition">
      <div className="space-y-6">
        {leadership.map((l, i) => (
          <Reveal key={l.role} delay={i * 90}>
            <article className="glass p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{l.role}</h3>
                  <p className="text-sky-300">{l.org}</p>
                </div>
                <p className="font-mono text-xs text-slate-400">{l.period}</p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {l.pillars.map((p) => (
                  <div key={p.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-sky-400/40">
                    <h4 className="mb-2 text-sm font-semibold text-gradient">{p.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-400">{p.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}>
            <div className="glass glass-hover h-full p-5">
              <p className="mt-3 font-semibold text-white">{a.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
