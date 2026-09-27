import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check, Send, Sparkles, X, MessageCircle } from 'lucide-react';

interface ReservationSectionProps {
  currentLang: Language;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 nəfər / 2 persons',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate WhatsApp prefilled link with all details
  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Salam, Qızıl Balıq Restaurant!\nMasa rezervasiyası etmək istəyirəm:\n\n` +
      `👤 Ad: ${formData.name || 'Qonaq'}\n` +
      `📞 Tel: ${formData.phone || 'Göstərilməyib'}\n` +
      `👥 Qonaq sayı: ${formData.guests}\n` +
      `📅 Tarix: ${formData.date}\n` +
      `⏰ Saat: ${formData.time}\n` +
      (formData.message ? `📝 Xüsusi istək: ${formData.message}\n` : '')
    );
    return `https://wa.me/994504308877?text=${text}`;
  };

  return (
    <section id="reservation" className="py-24 bg-[#0B1017] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#DFB770] font-semibold">
            {t.reservation.kicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] text-balance">
            {t.reservation.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C89D52] mx-auto" />
          <p className="text-sm sm:text-base text-[#EDE7DE]/75 text-balance">
            {t.reservation.description}
          </p>
        </div>

        {/* Reservation Card Form */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E1520] border border-[#C89D52]/30 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{t.reservation.nameLabel} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.reservation.namePlaceholder}
                  className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF8F5] placeholder:text-[#EDE7DE]/40 focus:outline-none focus:border-[#DFB770] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.reservation.phoneLabel} *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.reservation.phonePlaceholder}
                  className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF8F5] placeholder:text-[#EDE7DE]/40 focus:outline-none focus:border-[#DFB770] transition-colors tabular-nums"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>{t.reservation.guestsLabel}</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#DFB770] transition-colors cursor-pointer"
                >
                  {t.reservation.guestsOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#101722] text-[#EDE7DE]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time grouped */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.reservation.dateLabel}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-3 py-3 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#DFB770] transition-colors cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.reservation.timeLabel}</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-3 py-3 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#DFB770] transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFB770] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.reservation.messageLabel}</span>
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.reservation.messagePlaceholder}
                className="w-full bg-[#141E2D] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF8F5] placeholder:text-[#EDE7DE]/40 focus:outline-none focus:border-[#DFB770] transition-colors resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 py-4 px-6 rounded-lg text-sm font-bold uppercase tracking-wider text-[#0B1017] bg-gradient-to-r from-[#DFB770] via-[#C89D52] to-[#DFB770] hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#C89D52]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.reservation.submitBtn}</span>
              </button>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-sm font-semibold text-[#25D366] bg-[#141E2D] hover:bg-[#1D2A3D] border border-[#25D366]/40 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.reservation.whatsappBtn}</span>
              </a>
            </div>
          </form>

          {/* Backend / WhatsApp connection explanation */}
          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-[#EDE7DE]/60 max-w-xl mx-auto leading-relaxed">
              {t.reservation.adminNote}
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal when form submitted */}
      {submitted && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#101722] border border-[#C89D52]/40 rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-center text-[#FAF8F5] mb-2">
              {t.reservation.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#EDE7DE]/80 text-center mb-6">
              {t.reservation.successDesc}
            </p>

            <div className="bg-[#0B1017] p-4 rounded-lg border border-white/10 text-xs space-y-1.5 mb-6 text-[#EDE7DE]/90">
              <p><span className="text-[#DFB770] font-semibold">Qonaq:</span> {formData.name}</p>
              <p><span className="text-[#DFB770] font-semibold">Telefon:</span> {formData.phone}</p>
              <p><span className="text-[#DFB770] font-semibold">Say:</span> {formData.guests}</p>
              <p><span className="text-[#DFB770] font-semibold">Tarix & Saat:</span> {formData.date} - {formData.time}</p>
              {formData.message && (
                <p><span className="text-[#DFB770] font-semibold">Qeyd:</span> {formData.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-[#0B1017] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.reservation.sendWhatsAppNow}</span>
              </a>

              <a
                href="tel:+994504308877"
                className="w-full py-2.5 px-4 rounded-lg bg-[#141E2D] hover:bg-[#1D2A3D] text-[#EDE7DE] text-xs font-semibold flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#DFB770]" />
                <span>Zənglə təsdiqlə (+994 50 430 88 77)</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full py-2 text-xs text-[#EDE7DE]/60 hover:text-white cursor-pointer"
              >
                {t.reservation.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
