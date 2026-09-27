import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Clock, Instagram, Map, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.signature, href: '#signature' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.atmosphere, href: '#atmosphere' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.reserve, href: '#reservation' },
  ];

  return (
    <footer className="bg-[#070B10] text-[#EDE7DE] border-t border-[#C89D52]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif-luxury text-3xl font-bold tracking-wider text-[#FAF8F5]">
              {t.footer.name}
            </h2>
            <p className="font-serif-luxury text-lg italic text-[#DFB770]">
              {t.footer.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#EDE7DE]/70 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            {/* Social & Maps Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#101722] hover:bg-[#C89D52] hover:text-[#0B1017] text-[#EDE7DE] border border-white/10 transition-colors"
                aria-label="Qızıl Balıq Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Badamdar+Shosesi+Baku+Azerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#101722] hover:bg-[#C89D52] hover:text-[#0B1017] text-[#EDE7DE] border border-white/10 transition-colors"
                aria-label="Qızıl Balıq on Google Maps"
              >
                <Map className="w-4 h-4" />
              </a>

              <a
                href="tel:+994504308877"
                className="p-2.5 rounded-lg bg-[#101722] hover:bg-[#C89D52] hover:text-[#0B1017] text-[#EDE7DE] border border-white/10 transition-colors"
                aria-label="Call Qızıl Balıq"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFB770]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-[#EDE7DE]/75 hover:text-[#DFB770] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFB770]">
              {t.footer.contactInfo}
            </h4>

            <div className="space-y-3 text-xs text-[#EDE7DE]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB770] shrink-0 mt-0.5" />
                <span>7 Badamdar Shosesi, Baku, Azerbaijan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB770] shrink-0" />
                <a
                  href="tel:+994504308877"
                  className="hover:text-[#DFB770] transition-colors tabular-nums"
                >
                  +994 50 430 88 77
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DFB770] shrink-0" />
                <span>{t.footer.hours}</span>
              </div>
            </div>

            {/* Language switcher */}
            <div className="pt-2">
              <span className="block text-[11px] text-[#EDE7DE]/50 uppercase tracking-wider mb-1.5">
                Dil seçimi / Language
              </span>
              <div className="flex items-center gap-1.5">
                {(['az', 'ru', 'en'] as Language[]).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => onLanguageChange(lng)}
                    className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer uppercase font-semibold ${
                      currentLang === lng
                        ? 'bg-[#C89D52] text-[#0B1017]'
                        : 'bg-[#141E2D] text-[#EDE7DE]/70 hover:text-white'
                    }`}
                  >
                    {lng}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE7DE]/50">
          <p>
            &copy; {new Date().getFullYear()} Qızıl Balıq Restaurant. {t.footer.rights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#DFB770] hover:text-white transition-colors cursor-pointer"
          >
            <span>Yuxarı qayıt</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
