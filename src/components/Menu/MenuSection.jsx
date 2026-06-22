import { motion } from 'framer-motion';
import { menuItems } from '../../data/menuItems';
import { sectionHeaderReveal, dramaticReveal } from '../../lib/animations';
import { useLang } from '../../i18n/LanguageContext';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';

/**
 * Ana sayfa menü — SADECE İçecekler + "Daha Fazla" linki.
 */
export default function MenuSection() {
  const { t, tm } = useLang();
  const items = menuItems['drinks'] || [];

  return (
    <section id="menu" className="relative section-padding bg-[#0f1411]" aria-labelledby="menu-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={sectionHeaderReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.25em] uppercase">
            {t.menu.subtitle}
          </span>
          <h2 id="menu-heading" className="font-serif text-display text-[#e8e4db] mt-3 mb-4">
            {t.menu.title}
          </h2>
          <p className="font-sans text-[#9dac9f] max-w-lg mx-auto text-balance">
            {t.menu.desc}
          </p>
        </motion.div>

        {/* İçecek grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Daha Fazla */}
        <motion.div
          variants={sectionHeaderReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A853] text-[#0f1411] font-semibold rounded-full
                       hover:bg-[#e0c878] transition-colors duration-300 shadow-[0_4px_20px_rgba(212,168,83,0.2)]"
          >
            <span>{t.menu.more}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="font-sans text-sm text-[#7d8c7f] mt-3">{t.menu.moreSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
