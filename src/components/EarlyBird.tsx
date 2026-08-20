import { Sunrise } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function EarlyBird() {
  const { ref, visible } = useReveal();

  return (
    <section id="fruehstarter" className="relative py-20 md:py-28">
      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-charcoal-900 px-6 py-16 text-center md:px-16 md:py-24">
          {/* warm radial glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-crust-500/25 blur-3xl" />
          </div>
          <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-100/10 px-4 py-2 text-sm font-600 uppercase tracking-[0.14em] text-crust-400 ring-1 ring-cream-100/15">
              <Sunrise className="h-4 w-4" />
              Frühstarter
            </span>

            <h2 className="mx-auto mt-8 max-w-4xl font-display text-4xl font-800 leading-[1.02] tracking-tight text-cream-100 text-balance md:text-6xl">
              Schon ab{' '}
              <span className="relative inline-block text-crust-400">
                05:00 Uhr
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-crust-500/40" />
              </span>{' '}
              für dich da.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream-200/80 md:text-xl">
              Für Frühstarter, Pendler und alle, die den Duft frischer Backwaren
              am Morgen lieben.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {['Montag–Freitag', 'Samstag ab 06:00', 'Sonntag ab 08:00'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cream-100/15 bg-cream-100/5 px-5 py-2.5 text-sm font-500 text-cream-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
