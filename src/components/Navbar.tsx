import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, Phone, UtensilsCrossed, Globe } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.signature, href: '#signature' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.atmosphere, href: '#atmosphere' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.location, href: '#location' },
  ];

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'az', label: 'Azərbaycan dili', short: 'AZE' },
    { code: 'ru', label: 'Русский', short: 'РУС' },
    { code: 'en', label: 'English', short: 'ENG' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1017]/95 backdrop-blur-md border-b border-[#C89D52]/20 py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-[#0B1017]/90 via-[#0B1017]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Qızıl Balıq Restaurant Homepage"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wider text-[#F4EFE6] group-hover:text-[#DFB770] transition-colors whitespace-nowrap">
              QIZIL BALIQ
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#EDE7DE]/80 hover:text-[#DFB770] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#DFB770] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language selector + primary action */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-semibold tracking-wider text-[#EDE7DE]/90 hover:text-[#DFB770] bg-[#141E2D]/70 hover:bg-[#1D2A3D] border border-[#C89D52]/25 transition-colors cursor-pointer"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-[#DFB770]" />
                <span>{languages.find((l) => l.code === currentLang)?.short}</span>
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-44 rounded-md bg-[#101722] border border-[#C89D52]/30 shadow-2xl py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                          currentLang === lang.code
                            ? 'bg-[#C89D52]/20 text-[#DFB770] font-semibold'
                            : 'text-[#EDE7DE]/80 hover:bg-[#1A2536] hover:text-[#F4EFE6]'
                        }`}
                      >
                        <span>{lang.label}</span>
                        <span className="text-[10px] opacity-60 uppercase">{lang.short}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Direct Call Button (Quick connect) */}
            <a
              href="tel:+994504308877"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-[#EDE7DE] hover:text-white bg-[#141E2D]/80 hover:bg-[#1D2A3D] border border-white/10 transition-colors"
              title="+994 50 430 88 77"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB770]" />
              <span className="tabular-nums">+994 50 430 88 77</span>
            </a>

            {/* Primary Action Button */}
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider text-[#0B1017] bg-gradient-to-r from-[#DFB770] via-[#C89D52] to-[#DFB770] hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#C89D52]/20 cursor-pointer whitespace-nowrap"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>{t.nav.reserve}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-[#EDE7DE] hover:text-[#DFB770] hover:bg-[#141E2D] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1017]/98 backdrop-blur-xl border-b border-[#C89D52]/20 px-6 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-center text-xs font-medium rounded transition-colors ${
                  currentLang === lang.code
                    ? 'bg-[#C89D52] text-[#0B1017] font-bold'
                    : 'bg-[#141E2D] text-[#EDE7DE]/80 hover:text-white'
                }`}
              >
                {lang.short}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#EDE7DE] hover:text-[#DFB770] py-1 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="tel:+994504308877"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#141E2D] text-sm text-[#EDE7DE] border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#DFB770]" />
              <span>+994 50 430 88 77</span>
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded bg-gradient-to-r from-[#DFB770] via-[#C89D52] to-[#DFB770] text-[#0B1017] font-semibold text-sm uppercase tracking-wider"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>{t.nav.reserve}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
