import React, { useState } from 'react';
import { Language, GalleryPhoto } from '../types';
import { translations } from '../data/translations';
import { galleryPhotos } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface AtmosphereGalleryProps {
  currentLang: Language;
}

export const AtmosphereGallery: React.FC<AtmosphereGalleryProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [filter, setFilter] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filterOptions = [
    { id: 'all', label: t.atmosphere.filterAll },
    { id: 'interior', label: t.atmosphere.filterInterior },
    { id: 'food', label: t.atmosphere.filterFood },
    { id: 'seafood', label: t.atmosphere.filterSeafood },
    { id: 'atmosphere', label: t.atmosphere.filterAtmosphere },
    { id: 'details', label: t.atmosphere.filterDetails },
  ];

  const visiblePhotos = galleryPhotos.filter(
    (photo) => filter === 'all' || photo.category === filter
  );

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % visiblePhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + visiblePhotos.length) % visiblePhotos.length
      );
    }
  };

  return (
    <section id="atmosphere" className="py-24 bg-[#070B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.atmosphere.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.atmosphere.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
          <p className="text-sm sm:text-base text-[#EDE7DE]/75 text-balance">
            {t.atmosphere.description}
          </p>
        </div>

        {/* Disclaimer about photos */}
        <div className="max-w-2xl mx-auto mb-8 px-4 py-2.5 rounded bg-[#101722] border border-[#C89D52]/20 flex items-center justify-center gap-2 text-center text-xs text-[#EDE7DE]/60">
          <Info className="w-3.5 h-3.5 text-[#DFB770] shrink-0" />
          <span>{t.atmosphere.disclaimer}</span>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === opt.id
                  ? 'bg-[#C89D52] text-[#0B1017] font-bold shadow-md'
                  : 'bg-[#101722] text-[#EDE7DE]/70 hover:text-white hover:bg-[#1D2A3D] border border-white/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Modern Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => {
            const isTall = photo.aspect === 'portrait' || index === 1;

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-lg overflow-hidden bg-[#101722] border border-[#C89D52]/20 cursor-pointer shadow-lg transition-all duration-300 hover:border-[#DFB770]/60 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className={`w-full overflow-hidden ${isTall ? 'h-[440px]' : 'h-64'}`}>
                  <img
                    src={photo.image}
                    alt={photo.title[currentLang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Overlaid gradient & captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017]/95 via-[#0B1017]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[11px] uppercase tracking-wider text-[#DFB770] font-medium mb-1">
                    {photo.categoryLabel[currentLang]}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#FAF8F5] leading-snug">
                    {photo.title[currentLang]}
                  </h3>

                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#EDE7DE]/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Tam ölçüdə bax</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#DFB770]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && visiblePhotos[activePhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-black/60 text-white hover:bg-[#C89D52] hover:text-[#0B1017] transition-all cursor-pointer z-50 border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visiblePhotos[activePhotoIndex].image}
              alt={visiblePhotos[activePhotoIndex].title[currentLang]}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold block mb-1">
                {visiblePhotos[activePhotoIndex].categoryLabel[currentLang]}
              </span>
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#FAF8F5] font-bold">
                {visiblePhotos[activePhotoIndex].title[currentLang]}
              </p>
              <span className="text-xs text-[#EDE7DE]/50 mt-1 block">
                {activePhotoIndex + 1} / {visiblePhotos.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-black/60 text-white hover:bg-[#C89D52] hover:text-[#0B1017] transition-all cursor-pointer z-50 border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
