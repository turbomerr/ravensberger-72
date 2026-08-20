import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EarlyBird from '@/components/EarlyBird';
import Products from '@/components/Products';
import OpeningHours from '@/components/OpeningHours';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <EarlyBird />
        <Products />
        <OpeningHours />
        <Reviews />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
