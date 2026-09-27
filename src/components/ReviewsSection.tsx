import React from 'react';
import { Language } from '../types';
import { translations, reviewExcerpts } from '../data/translations';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="reviews" className="py-24 bg-[#0B1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.reviews.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.reviews.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
          <p className="text-sm text-[#EDE7DE]/70">
            {t.reviews.verifiedExcerptNote}
          </p>
        </div>

        {/* Overall Rating Hero Card */}
        <div className="max-w-2xl mx-auto mb-14 p-8 rounded-xl bg-[#101722] border border-[#C89D52]/30 shadow-2xl text-center relative overflow-hidden">
          {/* Subtle gold glow corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFB770]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1D2A3D] text-xs font-semibold text-[#DFB770] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Google Reviews Rating</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="font-serif-luxury text-5xl sm:text-6xl font-bold text-[#FAF8F5] tabular-nums">
              4.1
            </span>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[#DFB770]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#DFB770]" />
                ))}
                <Star className="w-5 h-5 fill-[#DFB770]/40 text-[#DFB770]" />
              </div>
              <span className="text-xs text-[#EDE7DE]/70 font-medium block mt-1">
                81 Google reviews
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#EDE7DE]/80 max-w-md mx-auto">
            {t.reviews.ratingText}
          </p>
        </div>

        {/* 3 Verified Customer Review Excerpt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviewExcerpts.map((review, idx) => (
            <div
              key={review.id}
              className="p-7 rounded-lg bg-[#0E1520] border border-[#C89D52]/20 hover:border-[#DFB770]/40 transition-colors flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#DFB770]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(review.rating)
                            ? 'fill-[#DFB770]'
                            : 'fill-transparent text-[#DFB770]'
                        }`}
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-[#DFB770]/40 group-hover:text-[#DFB770] transition-colors" />
                </div>

                <p className="font-serif-luxury text-lg sm:text-xl text-[#FAF8F5] italic leading-relaxed">
                  &ldquo;{review.quote[currentLang]}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#EDE7DE]/60">
                <span className="font-medium text-[#DFB770]">
                  Google Qonağı #{idx + 1}
                </span>
                <span className="text-[11px] uppercase tracking-wider">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
