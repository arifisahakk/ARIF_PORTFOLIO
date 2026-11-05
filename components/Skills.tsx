import Section from "./Section";
import Reveal from "./Reveal";
import { featuredSkills, skillGroups } from "@/lib/data";

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const loop = [...all, ...all];
  return (
    <>
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
        <div className="flex w-max animate-marquee gap-3">
          {loop.map((s, i) => (<span key={i} className="chip whitespace-nowrap">{s}</span>))}
        </div>
      </div>
      <Section id="skills" eyebrow="toolkit" title="Technical skills">
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {featuredSkills.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="glass glass-hover bg-gradient-to-br from-sky-500/20 to-blue-500/10 p-5 text-center">
                <p className="font-display text-xl font-bold text-white">{s.name}</p>
                <p className="mt-1 text-xs text-slate-400">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 70}>
              <div className="glass glass-hover h-full p-5">
                <h3 className="mb-3 text-sm font-semibold text-white">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((x) => (<li key={x} className="chip">{x}</li>))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
