import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Clock, Wallet, ExternalLink, Copy, Check, Navigation } from 'lucide-react';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=7+Badamdar+Shosesi+Baku+Azerbaijan';

  const handleCopy = () => {
    navigator.clipboard.writeText('7 Badamdar Shosesi, Baku, Azerbaijan');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#070B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.location.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.location.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
        </div>

        {/* 2-Column Location & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-xl bg-[#0E1520] border border-[#C89D52]/25 shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#DFB770] font-semibold block mb-1">
                  Seafood & Azerbaijani Cuisine
                </span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#FAF8F5]">
                  Qızıl Balıq Restaurant
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#1D2A3D] text-[#DFB770] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#EDE7DE]/60 uppercase tracking-wider block">
                      {t.location.addressTitle}
                    </span>
                    <p className="text-sm font-semibold text-[#FAF8F5]">
                      {t.location.addressValue}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#DFB770] hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{t.location.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{t.location.copyAddress}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#1D2A3D] text-[#DFB770] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#EDE7DE]/60 uppercase tracking-wider block">
                      {t.location.phoneTitle}
                    </span>
                    <a
                      href="tel:+994504308877"
                      className="text-base font-bold text-[#FAF8F5] hover:text-[#DFB770] transition-colors tabular-nums"
                    >
                      {t.location.phoneValue}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#1D2A3D] text-[#DFB770] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#EDE7DE]/60 uppercase tracking-wider block">
                      {t.location.hoursTitle}
                    </span>
                    <p className="text-sm font-semibold text-[#FAF8F5]">
                      {t.location.hoursValue}
                    </p>
                  </div>
                </div>

                {/* Price range */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#1D2A3D] text-[#DFB770] shrink-0 mt-0.5">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#EDE7DE]/60 uppercase tracking-wider block">
                      {t.location.priceTitle}
                    </span>
                    <p className="text-sm font-semibold text-[#FAF8F5] tabular-nums">
                      {t.location.priceValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+994504308877"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#0B1017] bg-gradient-to-r from-[#DFB770] via-[#C89D52] to-[#DFB770] hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.location.callBtn}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#141E2D] hover:bg-[#1D2A3D] border border-[#C89D52]/40 transition-all cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-[#DFB770]" />
                <span>{t.location.directionsBtn}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#101722] border border-[#C89D52]/25 shadow-2xl relative min-h-[380px] flex flex-col">
            {/* Embedded OpenStreetMap / Google Maps View for Badamdar Shosesi 7, Baku */}
            <div className="relative flex-1 w-full h-full min-h-[320px] bg-[#0E1520]">
              <iframe
                title="Qızıl Balıq Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12160.309062369678!2d49.8055!3d40.3545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9f78326e13%3A0x8e82ef45b53d5a44!2sBadamdar%2C%20Baku!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
                className="w-full h-full border-0 absolute inset-0 filter invert-[0.88] hue-rotate-[180deg] contrast-[1.1] opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded bg-[#0B1017]/95 backdrop-blur-md border border-[#C89D52]/40 shadow-xl pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#DFB770]" />
                  <span className="font-serif-luxury font-bold text-[#FAF8F5] text-sm">
                    Qızıl Balıq Restaurant
                  </span>
                </div>
                <p className="text-xs text-[#EDE7DE]/80">
                  7 Badamdar Shosesi, Baku
                </p>
                <span className="text-[11px] text-[#DFB770] font-medium mt-1 block">
                  Açıqdır: 23:00-a qədər
                </span>
              </div>

              {/* Fullscreen Map Open Link */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0B1017]/90 text-xs font-semibold text-[#DFB770] hover:text-white border border-[#C89D52]/40 backdrop-blur-sm transition-colors cursor-pointer shadow-lg"
              >
                <span>Google Maps-də aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Sub-bar with quick neighborhood directions */}
            <div className="p-4 bg-[#0B1017] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#EDE7DE]/70">
              <div className="flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#DFB770]" />
                <span>Badamdar şosesi mərkəzində, rahat avtomobil parkinqi mövcuddur.</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFB770] hover:underline font-medium"
              >
                {t.location.mapTooltip} &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
