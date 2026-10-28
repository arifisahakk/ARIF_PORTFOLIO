export default function Section({
  id, title, eyebrow, children,
}: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      {eyebrow && <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>}
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      {children}
    </section>
  );
}
