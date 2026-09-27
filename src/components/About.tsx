import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Fish, Flame, HeartHandshake, Coffee, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const icons = [Fish, Flame, HeartHandshake, Coffee];

  return (
    <section id="about" className="py-24 bg-[#0B1017] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89D52]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
                {t.about.kicker}
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight text-balance">
                {t.about.heading}
              </h2>
              <div className="w-16 h-[2px] bg-[#C89D52]" />
            </div>

            <p className="text-[#EDE7DE]/90 text-base sm:text-lg leading-relaxed font-light">
              {t.about.text1}
            </p>

            <p className="text-[#EDE7DE]/75 text-sm sm:text-base leading-relaxed">
              {t.about.text2}
            </p>

            {/* Clean feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {t.about.features.map((feature, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={feature.title}
                    className="p-4 rounded bg-[#101722] border border-[#C89D52]/15 hover:border-[#C89D52]/35 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded bg-[#1D2A3D] text-[#DFB770]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#FAF8F5]">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#EDE7DE]/70 leading-normal">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href="#signature"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#DFB770] hover:text-[#FAF8F5] transition-colors group cursor-pointer"
              >
                <span>{t.nav.signature}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative border */}
              <div className="absolute -inset-2 rounded-lg border border-[#C89D52]/20 -rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />

              <div className="relative rounded-lg overflow-hidden bg-[#101722] shadow-2xl border border-[#C89D52]/20">
                <img
                  src="/src/assets/images/hero_caspian_seafood_1790500115605.jpg"
                  alt="Qızıl Balıq Restaurant Atmosphere"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017] via-transparent to-transparent opacity-80" />

                {/* Overlaid location & badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0B1017]/90 backdrop-blur-md border border-[#C89D52]/30 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#FAF8F5]">
                      Qızıl Balıq Restaurant
                    </h3>
                    <p className="text-xs text-[#DFB770] tracking-wider uppercase">
                      Badamdar şosesi 7, Bakı
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-[#EDE7DE]/60 uppercase">Açıqdır</span>
                    <span className="text-xs font-semibold text-emerald-400">23:00-a qədər</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
