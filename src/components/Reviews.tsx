import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reviews = [
  {
    name: 'Julia M.',
    initials: 'JM',
    date: 'vor 2 Wochen',
    text: 'Super leckeres Frühstück und sehr freundlicher Service. Die Brötchen sind frisch und der Kaffee richtig gut. Wir kommen gerne wieder!',
  },
  {
    name: 'Daniel K.',
    initials: 'DK',
    date: 'vor 1 Monat',
    text: 'Endlich eine Backstube, die so früh aufhat. Perfekt für den Weg zur Arbeit – und die Auswahl sieht einfach fantastisch aus.',
  },
  {
    name: 'Sabrina W.',
    initials: 'SW',
    date: 'vor 1 Monat',
    text: 'Sehr schönes Café und eine tolle Atmosphäre. Das Frühstück war liebevoll angerichtet und alles hat frisch geschmeckt.',
  },
  {
    name: 'Michael R.',
    initials: 'MR',
    date: 'vor 2 Monaten',
    text: 'Tolle Auswahl, faire Preise und ein nettes Team. Besonders die mediterrane Morgenfreude ist mein neuer Favorit.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 von 5 Sterne">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-crust-400 text-crust-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, visible } = useReveal();

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  const goTo = (index: number) => setActive((index + reviews.length) % reviews.length);
  const currentReview = reviews[active];

  return (
    <section id="bewertungen" className="relative bg-cream-50 py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              Google Bewertungen
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 md:text-5xl">
              Was unsere Gäste sagen.
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-charcoal-900/10 bg-cream-100 px-5 py-4">
            <div>
              <p className="font-display text-4xl font-800 leading-none text-charcoal-900">4,9</p>
              <p className="mt-1 text-xs font-600 uppercase tracking-wide text-charcoal-700">Bewertung</p>
            </div>
            <div className="border-l border-charcoal-900/10 pl-4">
              <Stars />
              <p className="mt-1 text-xs text-charcoal-700">auf Google</p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-charcoal-900 p-6 md:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-crust-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div key={active} className="animate-fade-in">
              <Quote className="h-10 w-10 text-crust-400" fill="currentColor" strokeWidth={1} />
              <blockquote className="mt-5 max-w-3xl font-display text-2xl font-600 leading-snug text-cream-100 md:text-4xl">
                „{currentReview.text}“
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crust-500 font-display font-800 text-cream-100">
                  {currentReview.initials}
                </span>
                <div>
                  <p className="font-700 text-cream-100">{currentReview.name}</p>
                  <p className="text-sm text-cream-200/60">{currentReview.date} · Google</p>
                </div>
                <span className="ml-2"><Stars /></span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:flex-col">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Vorherige Bewertung"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-crust-400 hover:bg-crust-500"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Nächste Bewertung"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-crust-400 hover:bg-crust-500"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative mt-8 flex items-center justify-between border-t border-cream-100/10 pt-5">
            <span className="text-xs text-cream-200/50">
              {paused ? 'Pausiert' : 'Automatisch wechselnd'}
            </span>
            <div className="flex gap-2" aria-label="Bewertung auswählen">
              {reviews.map((review, index) => (
                <button
                  type="button"
                  key={review.name}
                  onClick={() => goTo(index)}
                  aria-label={`${review.name} anzeigen`}
                  className={`h-2 rounded-full transition-all ${
                    active === index ? 'w-8 bg-crust-400' : 'w-2 bg-cream-100/30 hover:bg-cream-100/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-charcoal-700/60">
          Beispielhafte Darstellung für die Website – echte Google Bewertungen werden später verbunden.
        </p>
      </div>
    </section>
  );
}
