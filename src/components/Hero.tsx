import { MapPin, Star, Sunrise, ArrowRight, Navigation } from 'lucide-react';
import { business } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* grain + warm glow */}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-crust-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-crust-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8 md:gap-8">
        {/* text */}
        <div className="animate-fade-up">
          <p className="flex items-center gap-2 text-sm font-500 uppercase tracking-[0.14em] text-crust-600">
            <Sunrise className="h-4 w-4" />
            {business.name} · Wuppertal
          </p>

          <h1 className="mt-5 font-display text-5xl font-800 leading-[0.98] tracking-tight text-charcoal-900 text-balance sm:text-6xl md:text-7xl">
            Dein Morgen
            <span className="block text-crust-500">beginnt hier.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-700">
            Frische Backwaren und guter Geschmack – früh am Morgen und sieben
            Tage die Woche.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#standort"
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-7 py-3.5 text-sm font-600 text-cream-100 transition-all hover:bg-crust-500 hover:shadow-xl hover:shadow-crust-500/30"
            >
              Jetzt vorbeikommen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-900/15 bg-cream-100 px-7 py-3.5 text-sm font-600 text-charcoal-900 transition-all hover:border-charcoal-900/30 hover:bg-cream-50"
            >
              <Navigation className="h-4 w-4" />
              Route planen
            </a>
          </div>

          {/* social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2 border border-charcoal-900/8">
              <Star className="h-4 w-4 fill-crust-400 text-crust-400" />
              <span className="text-sm font-700 text-charcoal-900">{business.rating}</span>
              <span className="text-sm text-charcoal-700">Bewertung auf Google</span>
            </div>
            <span className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              7 Tage geöffnet
            </span>
          </div>
        </div>

        {/* image */}
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[4/4.5] shadow-2xl shadow-charcoal-900/20">
            <img
              src="/Screenshot_2026-08-20_at_02.09.16.png"
              alt="Ravensberger Backstube in Wuppertal – Außenansicht des Geschäfts"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />
          </div>

          {/* floating early-bird badge */}
          <div className="absolute -left-3 top-6 flex items-center gap-2.5 rounded-2xl bg-cream-100 px-4 py-3 shadow-xl shadow-charcoal-900/15 animate-float-slow md:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-crust-500 text-cream-100">
              <Sunrise className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-xl font-800 text-charcoal-900">07:00</p>
              <p className="text-[11px] font-500 uppercase tracking-wide text-charcoal-700">
                frühstück ab
              </p>
            </div>
          </div>

          {/* floating location chip */}
          <div className="absolute -bottom-4 right-3 flex items-center gap-2 rounded-2xl bg-charcoal-900 px-4 py-3 text-cream-100 shadow-xl md:right-6">
            <MapPin className="h-4 w-4 text-crust-400" />
            <span className="text-sm font-600">Ravensberger Str. 72</span>
          </div>
        </div>
      </div>
    </section>
  );
}
