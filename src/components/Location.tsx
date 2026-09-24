import { MapPin, Navigation, Clock } from 'lucide-react';
import { business, hours } from '@/data/site';

const short = (t: string) => t.slice(0, 2);
const range = (i: number) => `${short(hours[i].open)}–${short(hours[i].close)}`;
import { useReveal } from '@/hooks/useReveal';

export default function Location() {
  const { ref, visible } = useReveal();

  return (
    <section id="standort" className="relative py-14 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-stretch">
          {/* info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              Standort
            </p>
            <h2 className="mt-3 font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 text-balance md:text-5xl">
              Du findest uns hier.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal-700">
              Direkt an der Ravensberger Straße – schnell erreichbar, ob zu Fuß,
              mit dem Rad oder auf dem Weg zur Arbeit.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 rounded-2xl bg-cream-50 p-5 border border-charcoal-900/8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal-900 text-crust-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-700 text-charcoal-900">{business.street}</p>
                  <p className="text-charcoal-700">
                    {business.zip} {business.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-cream-50 p-5 border border-charcoal-900/8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal-900 text-crust-400">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-700 text-charcoal-900">7 Tage geöffnet</p>
                  <p className="text-charcoal-700">
                    <span className="whitespace-nowrap">Mo–Fr {range(0)}</span> · <span className="whitespace-nowrap">Sa {range(5)}</span> · <span className="whitespace-nowrap">So {range(6)} Uhr</span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-crust-500 px-7 py-3.5 text-sm font-600 text-cream-100 transition-all hover:bg-crust-600 hover:shadow-xl hover:shadow-crust-500/30"
            >
              <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              Route mit Google Maps
            </a>
          </div>

          {/* map */}
          <div className="relative overflow-hidden rounded-3xl border border-charcoal-900/10 shadow-xl shadow-charcoal-900/10 min-h-[24rem]">
            <iframe
              title="Karte – Ravensberger Backstube"
              src={business.mapsEmbed}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
