import Section from "./Section";
import Reveal from "./Reveal";
import { experience as e, education } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="work & education" title="Experience">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <article className="glass p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="chip mb-3 inline-block border-sky-400/30 text-sky-300">Aviation security · Penang International Airport</p>
                <h3 className="font-display text-2xl font-bold text-white">{e.role}</h3>
                <p className="text-sky-300">{e.company}</p>
              </div>
              <p className="font-mono text-xs text-slate-400">{e.period}</p>
            </div>
            <div className="mt-6 space-y-5 border-l border-sky-400/30 pl-6">
              {e.points.map((p) => (
                <div key={p.title} className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-400 ring-4 ring-ink" />
                  <h4 className="font-semibold text-white">{p.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">{e.stack.map((s) => (<li key={s} className="chip">{s}</li>))}</ul>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass p-6">
            <h3 className="mb-5 font-display text-lg font-bold text-white">Education</h3>
            <ul className="space-y-5">
              {education.map((x) => (
                <li key={x.school}>
                  <p className="font-mono text-xs text-sky-300">{x.period}</p>
                  <p className="font-semibold text-white">{x.degree}</p>
                  <p className="text-sm text-slate-400">{x.school}</p>
                  <p className="text-xs text-slate-500">{x.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
