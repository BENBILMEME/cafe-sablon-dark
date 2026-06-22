import { motion } from 'framer-motion';
import { dramaticReveal, sectionHeaderReveal, slowStagger } from '../lib/animations';
import { menuItems } from '../data/menuItems';
import { Link } from 'react-router-dom';

// Her kategori için Unsplash yemek fotoğrafları

const categories = [
  { id: 'savory', label: 'Tuzlular', desc: 'English Breakfast, Danish Boat, Croissant Sandwich, Fresh Bowl' },
  { id: 'sweet', label: 'Tatlılar', desc: 'Pistachio Croissant, Nutella Ganache, Blueberry Lemon' },
  { id: 'drinks', label: 'İçecekler', desc: 'Filter Coffee, Americano, Cappuccino' },
];

export default function MenuPage() {
  return (
    <div className="bg-[#0f1411] min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#0f1411] border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div variants={slowStagger} initial="hidden" animate="visible" className="text-center">
            <motion.span variants={dramaticReveal} className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.3em] uppercase">
              Brekkie Selections
            </motion.span>
            <motion.h1 variants={dramaticReveal} className="font-serif text-display text-[#e8e4db] mt-4 mb-4">
              Menü
            </motion.h1>
            <motion.p variants={dramaticReveal} className="font-sans text-[#9dac9f] max-w-lg mx-auto">
              72 saatlik soğuk fermentasyon sürecinden geçen el yapımı lezzetler. Her biri Moda'nın kalbinde, sıfırdan hazırlanır.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Kategoriler */}
      {categories.map((cat, catIdx) => {
        const items = menuItems[cat.id] || [];
        return (
          <section key={cat.id} id={cat.id} className={`py-20 px-6 ${catIdx % 2 === 0 ? 'bg-[#0f1411]' : 'bg-[#121714]'}`}>
            <div className="max-w-[1440px] mx-auto">
              {/* Kategori başlığı + resim */}
              <motion.div
                variants={sectionHeaderReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 mb-14 items-center"
              >
                <div>
                  <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.25em] uppercase">{cat.label}</span>
                  <h2 className="font-serif text-heading text-[#e8e4db] mt-2 mb-3">{cat.label}</h2>
                  <p className="font-sans text-[#9dac9f]">{cat.desc}</p>
                  <p className="font-sans text-sm text-[#7d8c7f] mt-2">{items.length} çeşit</p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <span className="font-serif text-5xl md:text-7xl italic text-[#D4A853]/15 select-none">Brekkie</span>
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
                    {/* Ürün resmi — piksel azaltma: koyu overlay + smooth rendering */}
                    <div className="aspect-[4/3] overflow-hidden bg-[#0f1411] relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        style={{ imageRendering: 'auto' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1411]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                    {/* Ürün detay */}
                    <div className="p-5">
                      {item.badge && (
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-2 bg-[#D4A853]/15 text-[#D4A853]">
                          {item.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-lg font-semibold text-[#e8e4db] mb-1.5">{item.name}</h3>
                      <p className="font-sans text-xs leading-relaxed text-[#7d8c7f] mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                        <span className="font-serif text-xl font-semibold text-[#d4dcd5]">{item.price}</span>
                        <span className="font-sans text-[10px] text-[#5c705f] uppercase tracking-wider">₺ TRY</span>
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
          <p className="font-serif text-2xl text-[#e8e4db] italic mb-4">"Her sipariş, taze hazırlanır."</p>
          <p className="font-sans text-sm text-[#7d8c7f] mb-8">Menümüz mevsime göre güncellenmektedir</p>
          <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4A853]/30 text-[#D4A853] font-medium rounded-full hover:bg-[#D4A853]/10 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Ana Sayfaya Dön
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
