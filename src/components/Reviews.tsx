import { ArrowUpRight, Star } from 'lucide-react';
import { business } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

const reviews = [
  {
    name: 'Sarah Kirsch',
    initials: 'SK',
    rating: 5,
    text: 'Gemütliche kleine Backstube im Familienbetrieb mit unglaublich freundlichen Menschen. Sie interessieren sich sehr für die Meinung ihrer Kunden und sorgen für eine einladende Atmosphäre. Wir wollten spontan Brötchen zum Frühstück holen und sind auf einen sehr leckeren türkischen Tee eingeladen worden, kurzerhand haben wir dazu noch ein Stück Kuchen gegessen der auch ausgezeichnet war. Generell hat bis jetzt alles ausgezeichnet geschmeckt, die Preise sind angemessen, teilweise sogar überraschend preiswert. Das Geschäft ist sauber und ordentlich. Definitiv einen Besuch wert und ich hoffe diese tolle Bäckerei bleibt erhalten! Vielen Dank',
  },
  {
    name: 'Cyde',
    initials: 'C',
    rating: 4,
    text: 'Am Sonntagmorgen perfekt für ein spätes Frühstück. Wir haben das kleine Frühstück zweimal gegessen und waren danach sehr zufrieden. Der Inhaber war sehr gastfreundlich und hat jedem von uns ein Gebäck und einen Tee spendiert! Außerdem gibt es einen ständigen Studentenrabatt von 20 %. Das hat hier wirklich gefehlt; wir kommen auf jeden Fall wieder!',
  },
  {
    name: 'Dilara Doğan',
    initials: 'DD',
    rating: 5,
    text: 'Wir kommen oft hierher. Sehr leckeres Restaurant, das Personal ist sehr freundlich, das Essen kommt schnell und heiß, die Tische und die Umgebung sind sehr sauber. Wir waren als Familie sehr zufrieden. Wer hierher kommen möchte, sollte nicht zögern – einfach großartig!',
  },
  {
    name: 'Katja (Fratztinka)',
    initials: 'KF',
    rating: 5,
    text: 'Fantastische und unglaublich leckere Kekse und Gebäck. Tolle Öffnungszeiten! Das Personal ist freundlich und war bisher unglaublich gastfreundlich. Vielen Dank! Definitiv eine tolle Bereicherung für die Nachbarschaft.',
  },
  {
    name: 'Anonyme',
    initials: 'A',
    rating: 5,
    text: 'Ich war sehr zufrieden mit meinem Besuch in der Ravensburger Backstube. Die Auswahl an frischen Backwaren ist groß, alles war sehr lecker und von guter Qualität. Das Personal war freundlich, aufmerksam und hat mich schnell bedient. Die Atmosphäre ist angenehm und sauber, sodass man sich wohlfühlt. Ich komme gerne wieder und kann die Ravensburger Backstube uneingeschränkt weiterempfehlen!',
  },
  {
    name: 'jens grabowski',
    initials: 'JG',
    rating: 5,
    text: 'Eine wunderbare Bäckerei mit fantastischem Gebäck und Kuchen. Die Mitarbeiter sind sehr sympathisch! Man kann sogar draußen sitzen und die Atmosphäre genießen. Die Donuts sind sehr lecker. Wir freuen uns sehr, dass diese Bäckerei jetzt in unserer Nähe ist. Auch für unsere Feriengäste ist sie bestens geeignet. Man merkt, dass hier alles mit großer Liebe gemacht wird.',
  },
  {
    name: 'Sara Awwad',
    initials: 'SA',
    rating: 5,
    text: 'Ich war zum Frühstück dort. Der Laden war sehr sauber, die Mitarbeiter waren sehr aufmerksam und das Essen war hervorragend. Alles war perfekt. Sehr zu empfehlen.',
  },
  {
    name: 'Sean Ok',
    initials: 'SO',
    rating: 5,
    text: 'Äußerst gastfreundlich und hervorragender Service. Wenn mich mein Weg noch einmal in diese Stadt führt, komme ich definitiv wieder vorbei! Sehr zu empfehlen.',
  },
  {
    name: 'Stefanie X',
    initials: 'SX',
    rating: 5,
    text: 'Ein sehr herzliches Paar betreibt dieses süße Café. Das Frühstück wird frisch nach Wunsch der Kunden zubereitet.',
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sterne`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? 'fill-crust-500 text-crust-500' : 'fill-charcoal-900/10 text-charcoal-900/10'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="mr-5 flex w-[22rem] shrink-0 flex-col justify-between gap-6 rounded-3xl border border-charcoal-900/8 bg-cream-100 p-7 md:w-[26rem]">
      <div>
        <Stars rating={review.rating} />
        <p className="mt-5 line-clamp-[9] text-[15px] leading-relaxed text-charcoal-700">„{review.text}“</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-300/70 text-xs font-600 text-charcoal-700">
          {review.initials}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-700 text-charcoal-900">{review.name}</p>
          <p className="text-xs text-charcoal-700/70">Google-Bewertung</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const { ref, visible } = useReveal();

  // The track holds the list twice and is translated by -50% for a seamless loop.
  const half = reviews;

  return (
    <section id="bewertungen" className="relative overflow-hidden bg-cream-50 py-14 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end md:px-8">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              Kundenstimmen
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 md:text-5xl">
              Was unsere Gäste sagen.
            </h2>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-800 leading-none text-charcoal-900">
                {business.rating}
              </span>
              <Stars />
            </div>
            <p className="mt-2 text-sm text-charcoal-700/80">Bewertungen auf Google</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={business.mapsPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 border-b border-charcoal-900/30 pb-1 text-sm font-600 text-charcoal-900 transition-colors hover:border-crust-500 hover:text-crust-600"
              >
                Alle Bewertungen
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="marquee marquee-mask mt-12 overflow-hidden"
          aria-label="Google Bewertungen"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex" aria-hidden={copy === 1}>
                {half.map((review, i) => (
                  <ReviewCard key={`${copy}-${i}`} review={review} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
