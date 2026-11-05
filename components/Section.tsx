import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-sky-300">{`// ${eyebrow}`}</p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
