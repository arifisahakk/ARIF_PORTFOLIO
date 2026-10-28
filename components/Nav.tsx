const links = ["About", "Skills", "Experience", "Projects", "Leadership", "Contact"];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-slate-900">'Arif Isahak</a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-slate-500 transition hover:text-accent">{l}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
