import { useEffect, useState } from 'react';
import { Navigation, Clock } from 'lucide-react';
import { business } from '@/data/site';

export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const buttons = [
    {
      href: business.mapsUrl,
      label: 'Route',
      icon: Navigation,
      external: true,
    },
    {
      href: '#zeiten',
      label: 'Öffnungszeiten',
      icon: Clock,
      external: false,
    },
    // phone CTA intentionally omitted until a real number is supplied
  ];

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-400 md:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-md gap-2 border-t border-charcoal-900/10 bg-cream-100/95 px-3 py-2.5 backdrop-blur-md">
        {buttons.map((b) => (
          <a
            key={b.label}
            href={b.href}
            target={b.external ? '_blank' : undefined}
            rel={b.external ? 'noopener noreferrer' : undefined}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-3 py-2.5 text-sm font-600 text-cream-100 active:scale-95 transition-transform"
          >
            <b.icon className="h-4 w-4 text-crust-400" />
            {b.label}
          </a>
        ))}
      </div>
    </div>
  );
}
