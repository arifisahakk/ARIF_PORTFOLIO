import Section from "./Section";
import { featuredSkills, skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Technical skills">
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {featuredSkills.map((s) => (
          <div key={s} className="rounded-xl bg-slate-900 px-4 py-5 text-center text-sm font-semibold text-white">{s}</div>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-slate-100 p-5 transition hover:border-accent/40 hover:shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-slate-900">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
