const links = ["Skills", "Experience", "Projects", "Leadership", "Certifications", "Contact"];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-bold text-white">
        'Arif <span className="text-gradient">Isahak</span>
        </a>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-slate-400 transition hover:text-white">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn bg-white/10 py-2 text-white hover:bg-white/20">Hire me</a>
      </nav>
    </header>
  );
}
