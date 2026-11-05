import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="selected work" title="Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="group relative h-full rounded-2xl bg-gradient-to-br from-sky-500/40 via-white/10 to-blue-500/40 p-px transition duration-300 hover:-translate-y-1">
              <div className="flex h-full flex-col rounded-2xl bg-panel p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-sky-300">{p.tag}</p>
                  <p className="text-xs text-slate-500">{p.period}</p>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2"><span className="text-blue-400">▹</span>{pt}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => (<li key={s} className="chip">{s}</li>))}</ul>
                <a href={p.repo} className="mt-auto pt-6 text-sm font-semibold text-sky-300 transition group-hover:text-white">View on GitHub →</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
