import React, { useState } from 'react';
import { Language, MenuItem } from '../types';
import { translations } from '../data/translations';
import { menuItems } from '../data/menu';
import { Search, Info, Phone, Utensils, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  currentLang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: t.menu.allCategories },
    { id: 'seafood', label: t.menu.categories.seafood },
    { id: 'kebabs', label: t.menu.categories.kebabs },
    { id: 'sides', label: t.menu.categories.sides },
    { id: 'drinks', label: t.menu.categories.drinks },
    { id: 'tea', label: t.menu.categories.tea },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const nameStr = item.name[currentLang]?.toLowerCase() || '';
    const descStr = item.description[currentLang]?.toLowerCase() || '';
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || nameStr.includes(q) || descStr.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#0B1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.menu.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.menu.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
          <p className="text-sm sm:text-base text-[#DFB770]/90 font-medium">
            {t.menu.subheading}
          </p>
        </div>

        {/* Clear Notice Banner regarding Placeholder Items */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-md bg-[#101722] border border-[#C89D52]/25 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#DFB770] shrink-0 mt-0.5" />
          <div className="text-xs text-[#EDE7DE]/80 leading-relaxed">
            <span className="font-semibold text-[#DFB770] mr-1">
              [Redaktə üçün qeyd / Notice]:
            </span>
            {t.menu.placeholderNotice}
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 bg-[#101722] rounded-lg border border-white/5 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DFB770] to-[#C89D52] text-[#0B1017] shadow-md font-bold'
                      : 'text-[#EDE7DE]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#DFB770]/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'az' ? 'Yemək axtar...' : currentLang === 'ru' ? 'Поиск блюда...' : 'Search dish...'}
              className="w-full bg-[#101722] border border-[#C89D52]/20 rounded-md pl-9 pr-3 py-2 text-xs text-[#EDE7DE] placeholder:text-[#EDE7DE]/40 focus:outline-none focus:border-[#DFB770] transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-lg bg-[#0E1520] border border-[#C89D52]/15 hover:border-[#DFB770]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#FAF8F5] group-hover:text-[#DFB770] transition-colors">
                      {item.name[currentLang]}
                    </h3>
                    {item.isPopular && (
                      <span className="text-[10px] text-[#DFB770] font-semibold tracking-wider uppercase border border-[#DFB770]/40 px-1.5 py-0.5 rounded">
                        Seçim
                      </span>
                    )}
                  </div>

                  {/* Price Note (Clearly marked without inventing fake exact prices) */}
                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold text-[#DFB770] tracking-wide whitespace-nowrap bg-[#141E2D] px-2 py-1 rounded border border-[#C89D52]/30">
                      {item.priceNote ? item.priceNote[currentLang] : 'Menyu üzrə'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#EDE7DE]/75 leading-relaxed mb-4">
                  {item.description[currentLang]}
                </p>
              </div>

              {/* Bottom metadata strip */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#EDE7DE]/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB770]" />
                  <span>{t.menu.placeholderBadge}</span>
                </span>

                <a
                  href="tel:+994504308877"
                  className="text-[#DFB770] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3 h-3" />
                  <span>{t.menu.callForOrder}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#101722] rounded-lg border border-white/5">
            <Utensils className="w-8 h-8 text-[#DFB770]/40 mx-auto mb-3" />
            <p className="text-sm text-[#EDE7DE]/70">
              {currentLang === 'az'
                ? 'Heç bir təam tapılmadı. Zəhmət olmasa başqa axtarış sözü daxil edin.'
                : currentLang === 'ru'
                ? 'Блюда не найдены. Попробуйте изменить параметры поиска.'
                : 'No items found. Please try a different search term.'}
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#EDE7DE]/60 mb-4">
            Ümumi restorandakı qiymət aralığı adambaşına <span className="text-[#DFB770] font-semibold tabular-nums">₼20–70</span> təşkil edir.
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#0B1017] bg-gradient-to-r from-[#DFB770] to-[#C89D52] hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.reservation.heading}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
