import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePageLang } from '../../i18n/LanguageContext';
import { sectionHeaderReveal, dramaticReveal } from '../../lib/animations';
import { PLACEHOLDER } from '../../config/siteConfig';
import siteContent from '../../config/site-content.json';

const C = siteContent;
const OPEN_HOUR = C.hours.openHour;
const CLOSE_HOUR = C.hours.closeHour;

function isOpen() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const current = h + m / 60;
  return current >= OPEN_HOUR && current < CLOSE_HOUR;
}

function getLiveWait() {
  if (!isOpen()) return { time: 0, label: 'Kapalı — Yarın Görüşelim!', dot: 'bg-gray-500', open: false };
  const h = new Date().getHours();
  const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6;
  const isRush = (h >= 9 && h <= 12) || (h >= 14 && h <= 16);
  let time;
  if (isWeekend && isRush) time = Math.floor(Math.random() * 20) + 18;
  else if (isRush) time = Math.floor(Math.random() * 18) + 10;
  else time = Math.floor(Math.random() * 12) + 3;

  const label = time <= 8 ? 'Sakin — Hemen Gel!' : time <= 18 ? 'Orta Yoğunluk' : 'Yoğun — Biraz Beklenir';
  const dot = time <= 8 ? 'bg-emerald-400' : time <= 18 ? 'bg-amber-400' : 'bg-orange-400';
  return { time, label, dot, open: true };
}

export default function QueueStatus() {
  const { t, lang } = usePageLang();
  const L = t.queue;
  const [live, setLive] = useState(getLiveWait);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLive(getLiveWait());
      setNow(new Date());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  const transport = C.transportation;

  return (
    <section id="location" className="relative section-padding bg-[#0f1411]" aria-labelledby="location-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div variants={sectionHeaderReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12 md:mb-16">
          <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.25em] uppercase">{t.queue.title}</span>
          <h2 id="location-heading" className="font-serif text-display text-[#e8e4db] mt-3 mb-4">{t.queue.heading}</h2>
          <p className="font-sans text-[#9dac9f] max-w-lg mx-auto text-balance">{t.queue.desc}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sol — Canlı Kuyruk + Açık/Kapalı */}
          <div className="space-y-6">
            <motion.div variants={dramaticReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#121714] border border-white/[0.04] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className={`relative flex h-2.5 w-2.5 ${live.open ? live.dot : 'bg-gray-500'} rounded-full`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full ${live.open ? live.dot : 'bg-gray-500'} opacity-75 ${live.open ? 'animate-ping' : ''}`} />
                  </span>
                  <span className={`font-sans text-sm font-semibold ${live.open ? 'text-[#e8e4db]' : 'text-gray-500'}`}>
                    {live.open ? L.open : L.closed}
                  </span>
                </div>
                <span className="font-sans text-xs text-[#a3b0a5]">{timeStr}</span>
              </div>

              {live.open ? (
                <>
                  <div className="flex items-end gap-3 mb-2">
                    <motion.span key={live.time} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      className="font-serif text-5xl md:text-6xl font-bold text-[#e8e4db]">~{live.time}</motion.span>
                    <span className="font-sans text-lg text-[#a3b0a5] mb-1">{L.wait}</span>
                  </div>
                  <span className="font-sans text-sm text-[#b0bab2]">{live.label}</span>
                  <div className="mt-5 h-2 bg-[#1a231d] rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400 rounded-full"
                      initial={{ width: 0 }} animate={{ width: `${Math.min((live.time / 40) * 100, 100)}%` }}
                      transition={{ duration: 0.8 }} />
                  </div>
                </>
              ) : (
                <div className="py-4 text-center">
                  <p className="font-serif text-xl text-gray-500 italic">{t.queue.closedMsg}</p>
                </div>
              )}
            </motion.div>

            {/* Çalışma Saatleri */}
            <motion.div variants={dramaticReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#121714] border border-white/[0.04] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.4)]">
              <h3 className="font-serif text-2xl font-semibold text-[#e8e4db] mb-4">{L.hours}</h3>
              <p className="font-sans text-sm text-[#D4A853] mb-4">{t.queue.everyDay} {OPEN_HOUR}:00 — {CLOSE_HOUR}:00</p>
              <p className="font-sans text-xs text-[#a3b0a5]">{L.hoursNote}</p>
            </motion.div>
          </div>

          {/* Sağ — Harita + Ulaşım */}
          <motion.div variants={dramaticReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#121714] border border-white/[0.04] rounded-2xl p-8 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.4)]">
            <h3 className="font-serif text-2xl font-semibold text-[#e8e4db] mb-1">{C.queue.mapTitle[lang]}</h3>
            <p className="font-sans text-sm text-[#a3b0a5] mb-5">{C.queue.mapAddress}</p>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0f1411] mb-5">
              <iframe title={`${C.business.name} — Google Maps`}
                src={C.contact.googleMapsEmbedUrl}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"
                sandbox="allow-scripts allow-popups allow-presentation" />
            </div>

            {/* QR + Ulaşım */}
            <div className="flex gap-4 mb-5">
              <div className="shrink-0 bg-white rounded-xl p-2 w-24 h-24 flex items-center justify-center">
                <img src={PLACEHOLDER} alt={C.queue.qrImage.alt} className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                {transport.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0f1411]">
                    <svg className="w-4 h-4 text-[#D4A853] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <div><p className="font-sans text-xs font-semibold text-[#d4dcd5]">{item.label[lang]}</p><p className="font-sans text-[10px] text-[#a3b0a5]">{item.distance[lang]}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <motion.a whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
              href={C.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#D4A853] text-[#0f1411] font-semibold rounded-2xl hover:bg-[#e0c878] transition-colors duration-300 shadow-[0_4px_20px_rgba(212,168,83,0.2)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              {C.queue.directionsLabel[lang]}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
