import { Camera, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const gallery = [
  {
    src: '/Screenshot_2026-08-20_at_02.09.16.png',
    alt: 'Außenansicht der Ravensberger Backstube in Wuppertal',
    label: 'Unsere Backstube',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    src: '/Screenshot_2026-08-20_at_02.10.15.png',
    alt: 'Frische Backwaren und Kuchen in der Verkaufstheke',
    label: 'Frisch aus der Theke',
    className: 'md:col-span-5',
  },
  {
    src: '/Screenshot_2026-08-20_at_02.28.43.png',
    alt: 'Sitzbereich im Garten der Ravensberger Backstube',
    label: 'Unser Garten',
    className: 'md:col-span-5',
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="einblicke" className="relative py-14 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 md:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-600 uppercase tracking-[0.14em] text-crust-600">
              <Camera className="h-4 w-4" />
              Einblicke
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-800 leading-tight tracking-tight text-charcoal-900 md:text-5xl">
              Komm vorbei und fühl dich wohl.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal-700">
            <MapPin className="h-4 w-4 text-crust-500" />
            Ravensberger Str. 72, Wuppertal
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[12rem] gap-4 md:grid-cols-12 md:auto-rows-[13rem]">
          {gallery.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl bg-charcoal-900 ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                <span className="font-display text-lg font-700 text-cream-100">{image.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-100/15 text-cream-100 backdrop-blur-sm transition-transform group-hover:rotate-12">
                  <Camera className="h-4 w-4" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
