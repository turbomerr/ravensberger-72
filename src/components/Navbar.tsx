import { useEffect, useState } from 'react';
import { Menu, X, Sunrise } from 'lucide-react';

const links = [
  { href: '#fruehstarter', label: 'Ab 05:00' },
  { href: '#menu', label: 'Menu' },
  { href: '#zeiten', label: 'Öffnungszeiten' },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#einblicke', label: 'Einblicke' },
  { href: '#standort', label: 'Standort' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,26,23,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-900 text-crust-400 transition-transform group-hover:scale-105">
            <Sunrise className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-700 leading-none tracking-tight text-charcoal-900">
            Ravensberger
            <span className="block text-[11px] font-500 tracking-[0.18em] text-crust-600 uppercase">
              Backstube
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-500 text-charcoal-700 transition-colors hover:text-crust-600 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-crust-500 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#standort"
          className="hidden md:inline-flex items-center rounded-full bg-charcoal-900 px-5 py-2.5 text-sm font-600 text-cream-100 transition-all hover:bg-crust-500 hover:shadow-lg hover:shadow-crust-500/25"
        >
          Route planen
        </a>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-cream-100 transition-[max-height] duration-400 ${
          open ? 'max-h-96 border-t border-charcoal-900/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-500 text-charcoal-800 border-b border-charcoal-900/5 last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#standort"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-charcoal-900 px-5 py-3 text-center text-sm font-600 text-cream-100"
            >
              Route planen
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
