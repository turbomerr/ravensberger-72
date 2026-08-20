import { Sunrise, Instagram, Clock, ShoppingBag, MessageCircle } from 'lucide-react';
import { business } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

const upcoming = [
  { icon: ShoppingBag, label: 'Online-Menü', note: 'Sortiment & Preise digital' },
  { icon: Instagram, label: 'Instagram-Feed', note: 'Tägliche Frische zum Ansehen' },
  { icon: Clock, label: 'Vorbestellung', note: 'Brötchen vorab sichern' },
  { icon: MessageCircle, label: 'WhatsApp-Kontakt', note: 'Schnell & direkt erreichbar' },
];

export default function Footer() {
  const { ref, visible } = useReveal();

  return (
    <footer className="relative bg-charcoal-900 text-cream-100">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />

      {/* upcoming strip */}
      <div
        ref={ref}
        className={`relative border-b border-cream-100/10 px-5 py-14 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-400">
            Bald verfügbar
          </p>
          <h3 className="mt-3 max-w-2xl font-display text-3xl font-800 leading-tight text-cream-100 md:text-4xl">
            Wir wachsen mit dir – neue Funktionen folgen.
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {upcoming.map((u) => (
              <div
                key={u.label}
                className="rounded-2xl border border-cream-100/10 bg-cream-100/5 p-5 transition-colors hover:bg-cream-100/10"
              >
                <u.icon className="h-6 w-6 text-crust-400" />
                <p className="mt-3 font-700 text-cream-100">{u.label}</p>
                <p className="mt-1 text-sm text-cream-200/70">{u.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer base */}
      <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crust-500 text-cream-100">
              <Sunrise className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-800">{business.name}</p>
              <p className="text-sm text-cream-200/70">
                {business.street} · {business.zip} {business.city}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-500 text-cream-200/80">
            <a href="#fruehstarter" className="hover:text-crust-400 transition-colors">Ab 05:00</a>
            <a href="#menu" className="hover:text-crust-400 transition-colors">Menu</a>
            <a href="#zeiten" className="hover:text-crust-400 transition-colors">Öffnungszeiten</a>
            <a href="#standort" className="hover:text-crust-400 transition-colors">Standort</a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream-100/10 pt-6 text-sm text-cream-200/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.</p>
          <p className="font-display italic text-crust-400">„{business.tagline}"</p>
        </div>
      </div>
    </footer>
  );
}
