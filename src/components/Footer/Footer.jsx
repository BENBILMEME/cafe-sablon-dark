import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FOOTER_LINKS = {
  Menü: [
    { label: 'Tuzlular', href: '#menu' },
    { label: 'Tatlılar', href: '#menu' },
    { label: 'Pastane', href: '#menu' },
    { label: 'İçecekler', href: '#menu' },
  ],
  Brekkie: [
    { label: 'Hikayemiz', href: '#' },
    { label: 'Sürecimiz', href: '#process' },
    { label: 'Konum', href: '#location' },
    { label: 'İletişim', href: '#contact' },
  ],
  'Bizi Takip Et': [
    { label: 'Instagram', href: 'https://instagram.com/brekkiebreakfastclub' },
    { label: 'Google Maps', href: 'https://www.google.com/maps/place/Brekkie+Breakfast+Club/@40.9862377,29.0330656,15z/data=!4m15!1m8!3m7!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!2sBrekkie+Breakfast+Club!8m2!3d40.9862377!4d29.0330656!10e1!16s%2Fg%2F11gjhdwtbk!3m5!1s0x14cab9c52f2f90f5:0xac947cd211a1406a!8m2!3d40.9862377!4d29.0330656!16s%2Fg%2F11gjhdwtbk' },
    { label: 'TripAdvisor', href: '#' },
  ],
};

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  return (
    <footer id="contact" className="bg-sage-900 text-cream-200">
      <div className="container-premium pt-16 md:pt-20 pb-8">
        {/* Üst Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-serif text-2xl font-semibold text-cream-100">
                Brekkie
              </span>
              <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sage-400 mt-1">
                Breakfast Club
              </span>
              <p className="font-sans text-sm text-sage-400 mt-4 leading-relaxed max-w-xs">
                Moda'nın kalbinde, 72 saatlik el emeği kruvasanlar ve butik kahve deneyimi.
                Her sabah, sıfırdan.
              </p>
            </motion.div>
          </div>

          {/* Link Grupları */}
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

        {/* Alt çizgi */}
        <div className="border-t border-sage-700/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="/privacy" className="font-sans text-xs text-sage-500 hover:text-[#D4A853] transition-colors">Gizlilik Politikası</a>
            <a href="/terms" className="font-sans text-xs text-sage-500 hover:text-[#D4A853] transition-colors">Kullanım Koşulları</a>
          </div>
          <p className="font-sans text-xs text-sage-500">
            © {year} Brekkie Breakfast Club. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-xs text-sage-500">
            Caferağa Mah. Moda Cad. No:42/B, Kadıköy — İstanbul
          </p>
        </div>
      </div>
    </footer>
  );
}
