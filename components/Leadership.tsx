import Section from "./Section";
import { leadership as l, awards } from "@/lib/data";

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Beyond code" title="Leadership & recognition">
      <div className="rounded-2xl bg-slate-900 p-6 text-slate-300 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">{l.role}</h3>
            <p className="text-indigo-300">{l.org}</p>
          </div>
          <p className="text-sm text-slate-400">{l.period}</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {l.pillars.map((p) => (
            <div key={p.title}>
              <h4 className="mb-2 text-sm font-semibold text-white">{p.title}</h4>
              <p className="text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 border-t border-slate-700 pt-5 text-sm leading-relaxed text-slate-400">{l.also}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a) => (
          <div key={a.title} className="rounded-xl border border-slate-100 p-4">
            <p className="text-sm font-semibold text-slate-900">{a.title}</p>
            <p className="mt-1 text-xs text-slate-500">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
