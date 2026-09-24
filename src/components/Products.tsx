import { useState } from 'react';
import { ArrowUpRight, Coffee, Heart, Sparkles, Utensils } from 'lucide-react';
import { breakfastMenu, categories } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Products() {
  const [active, setActive] = useState(categories[0].id);
  const { ref, visible } = useReveal();
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="menu" className="relative py-14 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              Unser Menu
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 text-balance md:text-5xl">
              Frisch aus der Backstube – jeden Tag.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-charcoal-700">
            Von knusprigen Brötchen am Morgen bis zum Kaffee am Nachmittag. Ein
            Sortiment für jeden Tag.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] bg-charcoal-900 p-5 text-cream-100 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-600 uppercase tracking-[0.14em] text-crust-400">
                <Coffee className="h-4 w-4" />
                Frühstückskarte
              </p>
              <h3 className="mt-2 font-display text-3xl font-800 tracking-tight md:text-4xl">
                Dein guter Start.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream-200/70">
              Frisch zubereitet in der Backstube. Wähle deinen Lieblingsmoment
              und starte genussvoll in den Tag.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {breakfastMenu.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-2xl border border-cream-100/10 bg-cream-100/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-crust-400/50 hover:bg-cream-100/[0.1] ${
                  index === 1 ? 'ring-1 ring-crust-400/40' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-600 uppercase tracking-[0.12em] text-crust-400">
                      {item.subtitle}
                    </p>
                    <h4 className="mt-1 font-display text-xl font-800 text-cream-100">
                      {item.title}
                    </h4>
                  </div>
                  {index === 0 ? (
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-crust-400" />
                  ) : index === 1 ? (
                    <Heart className="mt-1 h-5 w-5 shrink-0 text-crust-400" />
                  ) : (
                    <Utensils className="mt-1 h-5 w-5 shrink-0 text-cream-200/40" />
                  )}
                </div>

                <ul className="mt-4 space-y-1.5 border-t border-cream-100/10 pt-4">
                  {item.items.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm leading-snug text-cream-200/75">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-crust-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2 border-t border-cream-100/10 pt-4">
                  <div>
                    <p className="font-display text-2xl font-800 text-crust-400">{item.price}</p>
                    {'priceNote' in item && (
                      <p className="text-[11px] text-cream-200/60">{item.priceNote}</p>
                    )}
                  </div>
                  {'secondPrice' in item && (
                    <div>
                      <p className="font-display text-xl font-800 text-cream-100">{item.secondPrice}</p>
                      <p className="text-[11px] text-cream-200/60">{item.secondPriceNote}</p>
                    </div>
                  )}
                  {'extraPrice' in item && (
                    <div className="ml-auto text-right">
                      <p className="text-[11px] uppercase tracking-wide text-cream-200/60">{item.extraLabel}</p>
                      <p className="font-display text-xl font-800 text-crust-400">{item.extraPrice}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* category tabs */}
        <div className="mt-14">
          <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
            Backstube entdecken
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-600 transition-all ${
                active === c.id
                  ? 'bg-charcoal-900 text-cream-100 shadow-lg shadow-charcoal-900/15'
                  : 'bg-cream-50 text-charcoal-700 border border-charcoal-900/8 hover:border-charcoal-900/20'
              }`}
            >
              {c.name}
            </button>
          ))}
          </div>
        </div>

        {/* feature + grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
          {/* big feature card */}
          <div className="group relative col-span-2 overflow-hidden rounded-3xl md:col-span-7 md:row-span-2 min-h-[20rem] md:min-h-[28rem]">
            <img
              src={current.image}
              alt={current.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 md:p-9">
              <h3 className="font-display text-3xl font-800 text-cream-100 md:text-4xl">
                {current.name}
              </h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-cream-200/90">
                {current.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-600 text-crust-400">
                Demnächst mit Online-Sortiment
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* small cards */}
          {categories
            .filter((c) => c.id !== active)
            .slice(0, 4)
            .map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="group relative col-span-1 overflow-hidden rounded-2xl md:rounded-3xl md:col-span-3 min-h-[9rem] md:min-h-[12rem] text-left"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent" />
                <div className="absolute bottom-0 p-4 md:p-5">
                  <h4 className="font-display text-lg font-700 text-cream-100">
                    {c.name}
                  </h4>
                </div>
              </button>
            ))}
        </div>

        <p className="mt-6 text-sm text-charcoal-700/70">
          Alle Frühstücksangebote sind vor Ort erhältlich. Preise und Bestand können sich ändern.
        </p>
      </div>
    </section>
  );
}
