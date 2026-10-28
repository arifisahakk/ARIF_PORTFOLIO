import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="about" className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          Open to internships
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Hi, I'm {profile.name}.
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-900">{profile.headline}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent">View projects</a>
          <a href={profile.cv} className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-accent hover:text-accent">Download CV</a>
          <a href="#contact" className="rounded-lg px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:text-accent">Contact →</a>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
        <Image src="/arif_gambar.jpg" alt="Portrait of 'Arif Isahak" fill priority sizes="(min-width: 768px) 360px, 80vw" className="object-cover object-top" />
      </div>
    </section>
  );
}
