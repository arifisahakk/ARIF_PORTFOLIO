import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col rounded-2xl border border-slate-100 p-6 transition hover:border-accent/40 hover:shadow-md">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">{p.type}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-3 leading-relaxed">{p.summary}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2"><span className="text-accent">→</span>{pt}</li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {p.stack.map((s) => (
                <li key={s} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
