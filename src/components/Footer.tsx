import { Sunrise, MapPin, Clock } from 'lucide-react';
import { business, hours } from '@/data/site';

const navLinks = [
  { href: '#fruehstarter', label: 'Frühstück' },
  { href: '#menu', label: 'Speisekarte' },
  { href: '#zeiten', label: 'Öffnungszeiten' },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#einblicke', label: 'Einblicke' },
  { href: '#standort', label: 'Standort' },
];

// Mo–Fr share the same hours; Sa and So are listed separately.
const openingRows = [
  { label: 'Montag – Freitag', h: hours[0] },
  { label: 'Samstag', h: hours[5] },
  { label: 'Sonntag', h: hours[6] },
];

const headingClass =
  'text-xs font-700 uppercase tracking-[0.16em] text-crust-400';

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 text-cream-100">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Unternehmen */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crust-500 text-cream-100">
                <Sunrise className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="font-display text-lg font-800 leading-tight">{business.name}</p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-200/70">
              Bäckerei und Frühstück in Wuppertal. Frische Backwaren, täglich
              für Sie zubereitet.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h4 className={headingClass}>Navigation</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-200/80">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-crust-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Öffnungszeiten */}
          <div>
            <h4 className={headingClass}>Öffnungszeiten</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-200/80">
              {openingRows.map((r) => (
                <li key={r.label} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cream-200/40" />
                  <span>
                    <span className="block text-cream-100">{r.label}</span>
                    <span className="text-cream-200/70">
                      {r.h.open} – {r.h.close} Uhr
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Anfahrt */}
          <div>
            <h4 className={headingClass}>Kontakt &amp; Anfahrt</h4>
            <address className="mt-5 flex items-start gap-3 text-sm not-italic leading-relaxed text-cream-200/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream-200/40" />
              <span>
                <span className="block text-cream-100">{business.name}</span>
                {business.street}
                <br />
                {business.zip} {business.city}
              </span>
            </address>
            {business.phone && (
              <p className="mt-3 text-sm text-cream-200/80">
                Tel.{' '}
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-crust-400"
                >
                  {business.phone}
                </a>
              </p>
            )}
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-crust-400/60 pb-0.5 text-sm font-600 text-crust-400 transition-colors hover:border-crust-400"
            >
              Route berechnen
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-6 text-sm text-cream-200/60">
          <p>© {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
