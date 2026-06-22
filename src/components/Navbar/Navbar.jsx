import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { navbarEntry, mobileMenu, buttonHover, snapTransition } from '../../lib/animations';
import { translations } from '../../i18n/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { lang: urlLang } = useParams();
  const lang = urlLang === 'en' ? 'en' : 'tr';
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NAV_LINKS = [
    { label: t.nav.menu, href: `/${lang}/menu` },
    { label: t.nav.process, href: `/${lang}#process` },
    { label: t.nav.location, href: `/${lang}#location` },
  ];

  const handleNavClick = useCallback((e, href) => {
    if (href.includes('#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const base = href.split('#')[0];
      if (window.location.pathname === base || window.location.pathname === base + '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(base);
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
      navigate(href);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header variants={navbarEntry} initial="hidden" animate="visible"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0f1411]/92 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
      }`}>
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-16" aria-label="Navigation">
        <a href={`/${lang}`} className="flex items-center gap-2.5">
          <span className="font-serif text-xl md:text-2xl font-semibold text-[#e8e4db] tracking-tight">Brekkie</span>
          <span className="hidden sm:block w-px h-4 bg-[#D4A853]/30" aria-hidden="true" />
          <span className="hidden sm:block font-sans text-[10px] font-medium text-[#7d8c7f] tracking-[0.2em] uppercase">Breakfast Club</span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-[#b0bab2] hover:text-[#e8e4db] cursor-pointer transition-colors duration-200 rounded-lg hover:bg-white/[0.04]">{link.label}</a>
            </li>
          ))}
          <li className="ml-4">
            <motion.a variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap"
              href="https://www.google.com/maps/place/Brekkie+Breakfast+Club/@40.9862377,29.0330656,15z/data=!4m15!1m8!3m7!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!2sBrekkie+Breakfast+Club!8m2!3d40.9862377!4d29.0330656!10e1!16s%2Fg%2F11gjhdwtbk!3m5!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!8m2!3d40.9862377!4d29.0330656!16s%2Fg%2F11gjhdwtbk"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#D4A853] text-[#0f1411] text-sm font-semibold rounded-full hover:bg-[#e0c878] transition-colors duration-300 shadow-[0_4px_20px_rgba(212,168,83,0.2)]">{t.nav.directions}</motion.a>
          </li>
          <li className="ml-1">
            <a href={lang === 'tr' ? '/en' : '/tr'}
              className="px-3 py-2 text-xs font-semibold text-[#D4A853] border border-[#D4A853]/30 rounded-full hover:bg-[#D4A853]/10 transition-all">
              {lang === 'tr' ? 'EN' : 'TR'}
            </a>
          </li>
        </ul>

        <button type="button" className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen((p) => !p)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
          <div className="w-5 h-3 relative flex flex-col justify-between">
            <span className={`block h-px bg-[#d4dcd5] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block h-px bg-[#d4dcd5] transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px bg-[#d4dcd5] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div variants={mobileMenu} initial="hidden" animate="visible" exit="exit"
            className="md:hidden bg-[#0f1411]/98 backdrop-blur-xl border-t border-white/[0.04] overflow-hidden">
            <ul className="px-6 py-6 space-y-1 max-w-[1440px] mx-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, ...snapTransition }}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-3 font-serif text-xl text-[#b0bab2] hover:text-[#e8e4db] cursor-pointer transition-colors duration-200">{link.label}</a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.06, ...snapTransition }}>
                <a href="https://www.google.com/maps/place/Brekkie+Breakfast+Club/@40.9862377,29.0330656,15z" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                  className="inline-block mt-4 px-6 py-3 bg-[#D4A853] text-[#0f1411] font-semibold rounded-full hover:bg-[#e0c878] transition-colors duration-300">Google Maps'te Aç</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
