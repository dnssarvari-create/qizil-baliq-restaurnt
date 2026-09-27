import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Clock, Star, ArrowDown, ChevronRight, Navigation } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Cinematic Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_caspian_seafood_1790500115605.jpg"
          alt="Qızıl Balıq Restaurant Caspian Seafood"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in transition-transform duration-1000"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017] via-[#0B1017]/75 to-[#0B1017]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B1017]/40 to-[#0B1017]/90" />
      </div>

      {/* Decorative hairline accents */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#DFB770]/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Location & Status unboxed metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs tracking-widest uppercase font-medium text-[#DFB770] mb-6">
          <div className="flex items-center gap-1.5 bg-[#0B1017]/80 px-3 py-1 rounded-sm border border-[#C89D52]/30 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#DFB770]" />
            <span>{t.hero.locationIndicator}</span>
          </div>
          <span className="text-[#DFB770]/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 bg-[#0B1017]/80 px-3 py-1 rounded-sm border border-[#C89D52]/30 backdrop-blur-sm text-[#EDE7DE]">
            <Clock className="w-3.5 h-3.5 text-[#DFB770]" />
            <span>{t.hero.openUntil}</span>
          </div>
          <span className="text-[#DFB770]/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 bg-[#0B1017]/80 px-3 py-1 rounded-sm border border-[#C89D52]/30 backdrop-blur-sm text-[#EDE7DE]">
            <Star className="w-3.5 h-3.5 fill-[#DFB770] text-[#DFB770]" />
            <span className="tabular-nums">4.1 / 5</span>
            <span className="text-[#EDE7DE]/60 normal-case">(81 Google reviews)</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAF8F5] mb-4 text-balance drop-shadow-lg">
          {t.hero.title}
        </h1>

        {/* Subtitle / Tagline */}
        <div className="inline-block relative mb-6">
          <p className="font-serif-luxury italic text-xl sm:text-2xl md:text-3xl text-[#DFB770] tracking-wide font-normal">
            {t.hero.subtitle}
          </p>
          <div className="w-24 h-[1.5px] bg-[#C89D52]/60 mx-auto mt-2" />
        </div>

        {/* Description quote */}
        <p className="text-base sm:text-lg md:text-xl text-[#EDE7DE]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          &ldquo;{t.hero.quote}&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded text-sm font-semibold uppercase tracking-wider text-[#0B1017] bg-gradient-to-r from-[#DFB770] via-[#C89D52] to-[#DFB770] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#C89D52]/20 cursor-pointer"
          >
            <span>{t.hero.viewMenu}</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded text-sm font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#141E2D]/80 hover:bg-[#1D2A3D] border border-[#C89D52]/40 hover:border-[#DFB770] transition-all cursor-pointer backdrop-blur-sm"
          >
            <Navigation className="w-4 h-4 text-[#DFB770]" />
            <span>{t.hero.getDirections}</span>
          </a>
        </div>

        {/* Price & Highlight strip */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-xl mx-auto flex items-center justify-between text-xs text-[#EDE7DE]/70">
          <div className="text-center sm:text-left">
            <span className="block text-[11px] uppercase tracking-wider text-[#DFB770]/80">Mətbəx / Cuisine</span>
            <span className="text-white font-medium">Xəzər Balıqları & Milli Manqal</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center sm:text-left">
            <span className="block text-[11px] uppercase tracking-wider text-[#DFB770]/80">Orta Çek / Price Range</span>
            <span className="text-white font-medium tabular-nums">₼20–70 nəfər</span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left hidden sm:block">
            <span className="block text-[11px] uppercase tracking-wider text-[#DFB770]/80">Ünvan / Address</span>
            <span className="text-white font-medium">Badamdar şosesi 7</span>
          </div>
        </div>
      </div>

      {/* Down scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#DFB770]/70 hover:text-[#DFB770] transition-colors p-2 cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};
