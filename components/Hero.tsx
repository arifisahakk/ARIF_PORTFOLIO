import Image from "next/image";
import { profile } from "@/lib/data";
import RoleRotator from "./RoleRotator";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-12 pt-16 md:grid-cols-[1.3fr_1fr] md:pt-24">
      <div>
        <span className="chip inline-flex items-center gap-2 border-emerald-400/30 text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to internships
        </span>
        <p className="mt-6 font-mono text-sm text-sky-300">Hi, I'm</p>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
          <RoleRotator roles={profile.roles} />
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-sky-500/30 hover:brightness-110">See my work →</a>
          <a href={profile.cv} className="btn border border-white/15 text-white hover:bg-white/10">Download CV</a>
          <a href={profile.github} className="btn text-slate-300 hover:text-white">GitHub</a>
          <a href={profile.linkedin} className="btn text-slate-300 hover:text-white">LinkedIn</a>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="glass p-4">
              <dd className="font-display text-3xl font-bold text-gradient">{s.value}</dd>
              <dt className="mt-1 text-xs text-slate-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 animate-shift rounded-[2rem] bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 opacity-60 blur-2xl [background-size:200%_200%]" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20">
          <Image src="/arif_gambar.jpg" alt="Portrait of 'Arif Isahak" fill priority sizes="(min-width: 768px) 380px, 80vw" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
