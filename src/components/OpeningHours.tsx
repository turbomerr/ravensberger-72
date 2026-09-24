import { Clock } from 'lucide-react';
import { hours } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

function todayIndex() {
  // JS: 0 = Sunday … 6 = Saturday. Our array starts Monday.
  const js = new Date().getDay();
  return js === 0 ? 6 : js - 1;
}

export default function OpeningHours() {
  const { ref, visible } = useReveal();
  const today = todayIndex();

  return (
    <section id="zeiten" className="relative py-14 md:py-28 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              Öffnungszeiten
            </p>
            <h2 className="mt-3 font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 text-balance md:text-5xl">
              7 Tage geöffnet.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal-700">
              Wir sind die ganze Woche für dich da – damit du immer frische
              Backwaren bekommst, genau wenn du sie brauchst.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-crust-500/20 bg-crust-400/10 px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-crust-500 text-cream-100">
                <Clock className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl font-800 text-charcoal-900">
                  Mo–Fr · 07:00 Uhr
                </p>
                <p className="text-sm text-charcoal-700">
                  Frische Backwaren zum Start in den Tag
                </p>
              </div>
            </div>
          </div>

          {/* hours table */}
          <div className="rounded-3xl bg-cream-100 p-6 border border-charcoal-900/8 md:p-8">
            <ul className="divide-y divide-charcoal-900/8">
              {hours.map((h, i) => {
                const isToday = i === today;
                return (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-3.5 px-3 -mx-3 rounded-xl transition-colors ${
                      isToday ? 'bg-crust-400/12' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isToday && (
                        <span className="h-2 w-2 rounded-full bg-crust-500 animate-pulse" />
                      )}
                      <span
                        className={`text-base font-600 ${
                          isToday ? 'text-charcoal-900' : 'text-charcoal-700'
                        }`}
                      >
                        {h.day}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-crust-500 px-2 py-0.5 text-[10px] font-700 uppercase tracking-wide text-cream-100">
                          Heute
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-display text-base font-700 tabular-nums ${
                        isToday ? 'text-crust-600' : 'text-charcoal-800'
                      }`}
                    >
                      {h.open}–{h.close}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
