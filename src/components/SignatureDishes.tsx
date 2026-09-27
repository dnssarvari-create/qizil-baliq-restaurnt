import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Utensils, Sparkles, ChevronRight, Phone } from 'lucide-react';

interface SignatureDishesProps {
  currentLang: Language;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeDishId, setActiveDishId] = useState<string | null>(null);

  const imagesMap: Record<string, string> = {
    kutum: '/src/assets/images/grilled_kutum_dish_1790500129519.jpg',
    trout: '/src/assets/images/grilled_trout_dish_1790500140894.jpg',
    shapalaq: '/src/assets/images/shapalaq_kabab_dish_1790500152537.jpg',
    seafood: '/src/assets/images/hero_caspian_seafood_1790500115605.jpg',
    tea: '/src/assets/images/azerbaijani_tea_service_1790500165102.jpg',
  };

  return (
    <section id="signature" className="py-24 bg-[#070B10] relative">
      {/* Hairline subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89D52]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.signature.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.signature.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
          <p className="text-sm sm:text-base text-[#EDE7DE]/75 text-balance">
            {t.signature.description}
          </p>
        </div>

        {/* 5 Signature Dish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.signature.items.map((dish, index) => {
            const imgSrc = imagesMap[dish.id] || imagesMap.kutum;
            const isFeatured = index === 0;

            return (
              <div
                key={dish.id}
                onMouseEnter={() => setActiveDishId(dish.id)}
                onMouseLeave={() => setActiveDishId(null)}
                className={`group relative rounded-lg bg-[#0E1520] border border-[#C89D52]/20 hover:border-[#DFB770]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 flex-col sm:flex-row' : ''
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-[#141E2D] ${
                    isFeatured ? 'sm:w-1/2 h-64 sm:h-auto min-h-[260px]' : 'h-64'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520] via-transparent to-transparent opacity-60" />

                  {/* Unboxed Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DFB770] bg-[#0B1017]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C89D52]/30">
                      {dish.tag}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div
                  className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
                    isFeatured ? 'sm:w-1/2' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#FAF8F5] group-hover:text-[#DFB770] transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-[#EDE7DE]/50 font-medium tracking-wide">
                          {dish.enName}
                        </p>
                      </div>
                      <span className="text-xs text-[#DFB770]/70 font-mono">0{index + 1}</span>
                    </div>

                    <p className="text-sm text-[#EDE7DE]/80 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#EDE7DE]/60">
                      Mətbəx: Xəzər & Manqal
                    </span>

                    <a
                      href="#reservation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFB770] group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Sifariş / Rezerv</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-lg bg-[#101722] border border-[#C89D52]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded bg-[#1D2A3D] text-[#DFB770] hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#FAF8F5]">
                {t.signature.heading}
              </h4>
              <p className="text-xs text-[#EDE7DE]/70">
                Günün xüsusi dəniz ovu və mövsümi balıq çeşidləri üçün öncədən əlaqə saxlaya bilərsiniz.
              </p>
            </div>
          </div>

          <a
            href="tel:+994504308877"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1D2A3D] hover:bg-[#C89D52] hover:text-[#0B1017] text-xs font-semibold text-[#EDE7DE] border border-[#C89D52]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+994 50 430 88 77</span>
          </a>
        </div>
      </div>
    </section>
  );
};
