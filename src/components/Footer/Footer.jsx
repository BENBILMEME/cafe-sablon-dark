import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePageLang } from '../../i18n/LanguageContext';
import siteContent from '../../config/site-content.json';

export default function Footer() {
  const { t, lang } = usePageLang();
  const C = siteContent;
  const [year] = useState(() => new Date().getFullYear());

  // site-content.json'dan link gruplarını oluştur
  const FOOTER_LINKS = {
    [C.footer.linkGroups.menu.label[lang]]: C.footer.linkGroups.menu.links.map(l => ({
      label: l.label[lang] || l.label,
      href: l.href
    })),
    [C.footer.linkGroups.about.label[lang]]: C.footer.linkGroups.about.links.map(l => ({
      label: l.label[lang] || l.label,
      href: l.href
    })),
    [C.footer.linkGroups.social.label[lang]]: C.footer.linkGroups.social.links.map(l => ({
      label: l.label,
      href: l.href
    })),
  };

  return (
    <footer id="contact" className="bg-sage-900 text-cream-200">
      <div className="container-premium pt-16 md:pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-serif text-2xl font-semibold text-cream-100">
                {C.business.shortName}
              </span>
              <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sage-400 mt-1">
                {C.business.tagline}
              </span>
              <p className="font-sans text-sm text-sage-400 mt-4 leading-relaxed max-w-xs">
                {t.footer.desc}
              </p>
            </motion.div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links], groupIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <h4 className="font-sans text-xs font-semibold text-cream-100 tracking-[0.2em] uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-sans text-sm text-sage-400 hover:text-gold-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-sage-700/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href={`/${lang}/privacy`} className="font-sans text-xs text-sage-500 hover:text-[#D4A853] transition-colors">{t.footer.privacy}</a>
            <a href={`/${lang}/terms`} className="font-sans text-xs text-sage-500 hover:text-[#D4A853] transition-colors">{t.footer.terms}</a>
          </div>
          <p className="font-sans text-xs text-sage-500">
            © {year} {C.business.name}. {t.footer.rights}
          </p>
          <p className="font-sans text-xs text-sage-500">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
