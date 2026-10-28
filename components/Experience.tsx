import Section from "./Section";
import { experience as e } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Work" title="Experience">
      <article className="rounded-2xl border border-slate-100 p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{e.role}</h3>
            <p className="text-accent">{e.company}</p>
          </div>
          <p className="text-sm text-slate-500">{e.period}</p>
        </div>
        <ul className="mt-5 space-y-3 leading-relaxed">
          {e.points.map((p) => (
            <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{p}</li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {e.stack.map((s) => (
            <li key={s} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{s}</li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
