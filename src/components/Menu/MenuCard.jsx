import { useRef, useCallback } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { menuCardReveal, cardHover } from '../../lib/animations';

/**
 * Menü kartı — 3D tilt + staggered reveal.
 * DS §9.4: NO side-stripe borders.
 * DS §8: micro-interactions via cardHover variant.
 */
export default function MenuCard({ item, index, spanClass = '' }) {
  const { tm } = useLang();
  const cardRef = useRef(null);

  // 3D tilt — direct DOM, sıfır React re-render. Max ±6°.
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transition = 'transform 0.2s ease-out';
    cardRef.current.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateZ(4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={menuCardReveal}
      custom={index}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: '-40px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      }}
      className={`relative bg-[#121714] border border-white/[0.04] rounded-2xl
                  p-6 md:p-7 cursor-pointer
                  shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_32px_-8px_rgba(0,0,0,0.4)]
                  hover:shadow-[0_12px_40px_-4px_rgba(212,168,83,0.06),0_4px_16px_-4px_rgba(0,0,0,0.5)]
                  transition-shadow duration-500 ${spanClass}`}
    >
      <div style={{ transform: 'translateZ(0)' }}>
        {/* Badge */}
        {item.badge && (
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold
                           tracking-wider uppercase mb-3 bg-[#D4A853]/15 text-[#D4A853]">
            {item.badge}
          </span>
        )}

        <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#e8e4db] mb-2">
          {tm[item.id]?.name || item.name}
        </h3>

        <p className="font-sans text-sm leading-relaxed text-[#7d8c7f] mb-4 line-clamp-2">
          {tm[item.id]?.desc || item.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
          <span className="font-serif text-xl font-semibold text-[#d4dcd5]">
            {item.price}
          </span>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-[#1a231d] text-[#b0bab2] flex items-center justify-center
                       hover:bg-[#D4A853] hover:text-[#0f1411] transition-colors duration-300"
            aria-label={`${tm[item.id]?.name || item.name} sepete ekle`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        </div>

        {/* Hover glow — sadece üst köşede hafif altın */}
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity
                        duration-500 pointer-events-none
                        bg-[radial-gradient(ellipse_at_0%_0%,rgba(212,168,83,0.06)_0%,transparent_60%)]"
             aria-hidden="true" />
      </div>
    </motion.div>
  );
}
