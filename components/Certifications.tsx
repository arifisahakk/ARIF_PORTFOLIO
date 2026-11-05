import Section from "./Section";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="credentials" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <div className="glass glass-hover flex h-full flex-col p-5">
              <span className="chip w-fit border-sky-400/30 text-sky-300">{c.issuer}</span>
              <p className="mt-4 font-semibold leading-snug text-white">{c.title}</p>
              <p className="mt-auto pt-4 font-mono text-xs text-slate-500">Issued {c.date}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">Full licences and certificates are listed on my LinkedIn profile.</p>
    </Section>
  );
}
