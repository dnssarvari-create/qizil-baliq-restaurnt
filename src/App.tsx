import { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('az');

  return (
    <div className="min-h-screen bg-[#0B1017] text-[#EDE7DE] selection:bg-[#C89D52]/30 selection:text-[#DFB770] flex flex-col justify-between">
      {/* Navigation */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 2. About Section */}
        <About currentLang={currentLang} />

        {/* 3. Signature Dishes */}
        <SignatureDishes currentLang={currentLang} />

        {/* 4. Menu Section */}
        <MenuSection currentLang={currentLang} />

        {/* 5. Atmosphere Gallery */}
        <AtmosphereGallery currentLang={currentLang} />

        {/* 6. Customer Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* 7. Location & Map */}
        <LocationSection currentLang={currentLang} />

        {/* 8. Reservation Form */}
        <ReservationSection currentLang={currentLang} />
      </main>

      {/* 9. Footer */}
      <Footer currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Mobile Floating Quick Action Pills (within 15% sticky cap) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:hidden">
        <a
          href="https://wa.me/994504308877?text=Salam%2C%20Q%C4%B1z%C4%B1l%20Bal%C4%B1q%20Restaurant!%20Masa%20rezerv%20etm%C9%99k%20ist%C9%99yir%C9%99m."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#25D366] text-[#0B1017] shadow-xl hover:scale-105 active:scale-95 transition-transform"
          aria-label="WhatsApp ilə əlaqə"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="tel:+994504308877"
          className="p-3 rounded-full bg-[#DFB770] text-[#0B1017] shadow-xl hover:scale-105 active:scale-95 transition-transform"
          aria-label="Restorana zəng et"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
