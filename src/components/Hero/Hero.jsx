import { useRef } from 'react';
import { motion } from 'framer-motion';
import { slowStagger, dramaticReveal, sectionHeaderReveal, buttonHover } from '../../lib/animations';
import Croissant3D from './Croissant3D';
import { useLang } from '../../i18n/LanguageContext';

export default function Hero() {
  const sectionRef = useRef(null);
  const { t } = useLang();

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1411]" aria-labelledby="hero-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[radial-gradient(ellipse_at_70%_35%,rgba(212,168,83,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-20 items-center min-h-[80vh]">
          {/* SOL — Metin */}
          <div className="flex flex-col justify-center lg:pr-8">
            <motion.div variants={sectionHeaderReveal} initial="hidden" animate="visible" className="mb-10 md:mb-12 flex flex-col items-center lg:items-start -mt-6 lg:ml-4">
              <img src="/images/brekkie-logo.jpg" alt="Brekkie Breakfast Club" className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover mb-6 border-2 border-[#D4A853]/20 shadow-[0_8px_40px_rgba(212,168,83,0.15)]" />
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-[#D4A853]/40" aria-hidden="true" />
                <span className="font-sans text-[11px] font-semibold text-[#D4A853]/80 tracking-[0.3em] uppercase">{t.hero.location}</span>
              </div>
            </motion.div>

            <motion.h1 id="hero-heading" variants={slowStagger} initial="hidden" animate="visible" className="font-serif text-hero text-[#e8e4db] mb-10 leading-[1.02]">
              <motion.span variants={dramaticReveal} className="block">{t.hero.tagline}</motion.span>
              <motion.span variants={dramaticReveal} className="block">{t.hero.tagline2}</motion.span>
              <motion.span variants={dramaticReveal} className="block italic text-[#D4A853]">{t.hero.tagline3}</motion.span>
            </motion.h1>

            <motion.p variants={dramaticReveal} initial="hidden" animate="visible" className="font-sans text-lg md:text-xl text-[#9dac9f] leading-[1.9] max-w-xs mb-12">
              {t.hero.desc.split('\n').map((l,i) => <span key={i}>{l}<br/></span>)}
            </motion.p>

            <motion.div variants={dramaticReveal} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-4">
              <motion.a href="/menu" variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#D4A853] text-[#0f1411] font-semibold rounded-full hover:bg-[#e0c878] transition-colors duration-300 shadow-[0_4px_20px_rgba(212,168,83,0.2)]">
                <span>{t.hero.cta}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
              <motion.a href="https://www.google.com/maps/place/Brekkie+Breakfast+Club/@40.9862377,29.0330656,15z/data=!4m15!1m8!3m7!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!2sBrekkie+Breakfast+Club!8m2!3d40.9862377!4d29.0330656!10e1!16s%2Fg%2F11gjhdwtbk!3m5!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!8m2!3d40.9862377!4d29.0330656!16s%2Fg%2F11gjhdwtbk" target="_blank" rel="noopener noreferrer"
                variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#5c705f]/40 text-[#c4cdc5] font-medium rounded-full hover:border-[#D4A853]/50 hover:text-[#D4A853] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {t.hero.cta2}
              </motion.a>
            </motion.div>

            <motion.div variants={dramaticReveal} initial="hidden" animate="visible" className="mt-14 flex items-center gap-5 text-sm text-[#7d8c7f]">
              <span><strong className="text-[#c4cdc5] font-semibold">4.8 ★</strong> Google</span>
              <span className="w-px h-3 bg-[#5c705f]/30" aria-hidden="true" />
              <span>Her gün 08:00 — 19:00</span>
            </motion.div>
          </div>

          {/* SAĞ — CSS 3D Kruvasan */}
          <motion.div variants={dramaticReveal} initial="hidden" animate="visible" className="relative flex items-center justify-center lg:-ml-8">
            <Croissant3D className="max-w-[500px]" sectionRef={sectionRef} />
            <motion.div variants={dramaticReveal} initial="hidden" animate="visible"
              className="absolute top-[5%] right-[3%] bg-[#121714]/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#D4A853]/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-20">
              <p className="font-serif text-sm font-semibold text-[#e8e4db] italic whitespace-nowrap">72 Saat Fermente</p>
              <p className="font-sans text-[11px] text-[#7d8c7f] mt-0.5">Soğuk dinlendirme</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <span className="font-sans text-[10px] font-medium text-[#7d8c7f] tracking-[0.3em] uppercase">Keşfet</span>
        <motion.svg animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-4 h-4 text-[#7d8c7f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></motion.svg>
      </motion.div>
    </section>
  );
}
