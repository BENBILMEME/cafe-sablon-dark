import { useState } from 'react';
import { motion } from 'framer-motion';
import { dramaticReveal, sectionHeaderReveal, slowStagger } from '../lib/animations';
import { menuItems } from '../data/menuItems';
import { usePageLang } from "../i18n/LanguageContext";
import { Link } from 'react-router-dom';
import siteContent from '../config/site-content.json';

export default function MenuPage() {
  const { t, tm, lang } = usePageLang();
  const C = siteContent;
  const [dietFilter, setDietFilter] = useState(null);

  // site-content.json'dan diyet filtreleri
  const dietFilters = [
    { key: null, label: C.menuPage.dietFilters[lang][0] },
    { key: 'gluten-free', label: C.menuPage.dietFilters[lang][1] },
    { key: 'vegan', label: C.menuPage.dietFilters[lang][2] },
    { key: 'vegetarian', label: C.menuPage.dietFilters[lang][3] },
  ];

  const categories = [
    { id: 'savory', label: t.categories.savory, desc: t.categories.savory },
    { id: 'sweet', label: t.categories.sweet, desc: t.categories.sweet },
    { id: 'drinks', label: t.categories.drinks, desc: t.categories.drinks },
  ];

  return (
    <div className="bg-[#0f1411] min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#0f1411] border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div variants={slowStagger} initial="hidden" animate="visible" className="text-center">
            <motion.span variants={dramaticReveal} className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.3em] uppercase">
              {C.menuPage.subtitle}
            </motion.span>
            <motion.h1 variants={dramaticReveal} className="font-serif text-display text-[#e8e4db] mt-4 mb-4">
              {t.menuPage.title}
            </motion.h1>
            <motion.p variants={dramaticReveal} className="font-sans text-[#9dac9f] max-w-lg mx-auto">
              {t.menuPage.desc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Diyet Filtreleri */}
      <section className="py-6 px-6 bg-[#0f1411] border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto flex justify-center gap-2 flex-wrap">
          {dietFilters.map((f) => (
            <button key={f.key || 'all'} type="button"
              onClick={() => setDietFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                dietFilter === f.key
                  ? 'bg-[#D4A853] text-[#0f1411]'
                  : 'text-[#a3b0a5] border border-[#3d4f41] hover:border-[#D4A853]/40 hover:text-[#b0bab2]'
              }`}>
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Kategoriler */}
      {categories.map((cat, catIdx) => {
        const allItems = menuItems[cat.id] || [];
        const items = dietFilter ? allItems.filter(item => item.dietary?.includes(dietFilter)) : allItems;
        return (
          <section key={cat.id} id={cat.id} className={`py-20 px-6 ${catIdx % 2 === 0 ? 'bg-[#0f1411]' : 'bg-[#121714]'}`}>
            <div className="max-w-[1440px] mx-auto">
              <motion.div
                variants={sectionHeaderReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 mb-14 items-center"
              >
                <div>
                  <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.25em] uppercase">{cat.label}</span>
                  <h2 className="font-serif text-heading text-[#e8e4db] mt-2 mb-3">{cat.label}</h2>
                  <p className="font-sans text-[#9dac9f]">{cat.desc}</p>
                  <p className="font-sans text-sm text-[#a3b0a5] mt-2">{items.length} {t.menuPage.items}</p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <span className="font-serif text-5xl md:text-7xl italic text-[#D4A853]/15 select-none">{C.business.shortName}</span>
                </div>
              </motion.div>

              {/* Ürün grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    variants={dramaticReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-[#1a231d] rounded-2xl border border-white/[0.04] overflow-hidden
                               hover:border-[#D4A853]/20 transition-all duration-500
                               shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.4)]
                               hover:shadow-[0_12px_40px_-4px_rgba(212,168,83,0.06)]"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#0f1411] relative">
                      <img
                        src={item.image}
                        alt={tm[item.id]?.name || item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        style={{ imageRendering: 'auto' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1411]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="p-5">
                      {item.badge && (
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-2 bg-[#D4A853]/15 text-[#D4A853]">
                          {item.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-lg font-semibold text-[#e8e4db] mb-1.5">{tm[item.id]?.name || item.name}</h3>
                      <p className="font-sans text-xs leading-relaxed text-[#a3b0a5] mb-4 line-clamp-2">{tm[item.id]?.desc || item.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                        <span className="font-serif text-xl font-semibold text-[#d4dcd5]">{item.price}</span>
                        <span className="font-sans text-[10px] text-[#5c705f] uppercase tracking-wider">₺</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Alt CTA */}
      <section className="py-20 px-6 bg-[#0f1411] text-center border-t border-white/[0.04]">
        <motion.div variants={sectionHeaderReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-serif text-2xl text-[#e8e4db] italic mb-4">{t.menuPage.quote}</p>
          <p className="font-sans text-sm text-[#a3b0a5] mb-8">{t.menuPage.seasonal}</p>
          <Link to={`/${lang}`} className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4A853]/30 text-[#D4A853] font-medium rounded-full hover:bg-[#D4A853]/10 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {t.menuPage.back}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
