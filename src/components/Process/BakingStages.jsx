import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sectionHeaderReveal, dramaticReveal } from '../../lib/animations';

const STAGES = [
  {
    id: 'lamination', number: '01', title: 'Lamination',
    subtitle: '27 Layers of Handcraft',
    description: 'Premium Swiss butter folded into 48-hour poolish dough at 27-layer thinness. Each layer forms the foundation of that iconic honeycomb texture.',
  },
  {
    id: 'fermentation', number: '02', title: 'Cold Fermentation',
    subtitle: '72 Hours at +4°C',
    description: 'Lamine hamuru +4°C\'de tam 72 saat dinlendiriyoruz. Gluten ağını güçlendirir, tereyağı kristallerini stabilize eder ve o karakteristik hafif ekşi notayı kazandırır.',
  },
  {
    id: 'baking', number: '03', title: 'Golden Bake',
    subtitle: '190°C Stone-Deck Oven',
    description: 'Çift sarılı organik yumurta glaze\'i, 190°C taş taban fırında 18 dakika. Dışı altın çıtır, içi bal peteği dokusunda. Tereyağının cezbedici aroması Moda Caddesi\'ni sarar.',
  },
];

/**
 * Baking Stages — Editoryal dikey sequence.
 * DS §8: büyük serif numaralar, IntersectionObserver stage tespiti.
 * DS §10: kruvasan multiply, NO drop-shadow.
 */
export default function BakingStages() {
  const imageRef = useRef(null);
  const stageRefs = useRef([]);
  const [activeStage, setActiveStage] = useState(0);

  // IntersectionObserver — native, hafif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.stageIndex);
            if (!isNaN(idx)) setActiveStage(idx);
          }
        });
      },
      { root: null, rootMargin: '-15% 0px -40% 0px', threshold: 0 }
    );
    stageRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative section-padding bg-[#0f1411] text-[#e8e4db] overflow-hidden"
             aria-labelledby="process-heading">
      {/* Arka plan atmosfer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[60%] h-[50%]
                        bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,168,83,0.03)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ===== ÜST: Başlık ===== */}
        <div className="mb-24 md:mb-32">
          <motion.div
            variants={sectionHeaderReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-sans text-[11px] font-semibold text-[#D4A853]/80 tracking-[0.3em] uppercase">
              Artisan Process
            </span>
            <h2 id="process-heading" className="font-serif text-display text-[#e8e4db] mt-3 mb-4 leading-[1.06]">
              72-Hour<br />Journey
            </h2>
            <p className="font-sans text-base text-[#9dac9f] leading-relaxed">
              Unlike industrial speed, we dedicate 3 full days to every croissant.
            </p>

            <div className="mt-10 flex items-center gap-2.5" role="tablist" aria-label="Aşamalar">
              {STAGES.map((s, i) => (
                <button
                  type="button"
                  key={s.id}
                  role="tab"
                  aria-selected={i === activeStage}
                  onClick={() => stageRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeStage ? 'w-14 bg-[#D4A853]' : 'w-4 bg-[#3d4f41] hover:bg-[#5c705f]'
                  }`}
                  aria-label={`Aşama ${s.number}: ${s.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== 3 Aşama — Editoryal Stack ===== */}
        <div className="space-y-36 md:space-y-44">
          {STAGES.map((stage, i) => (
            <div
              key={stage.id}
              ref={(el) => { stageRefs.current[i] = el; }}
              data-stage-index={i}
              className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start"
            >
              {/* Büyük serif numara — DS §3 */}
              <div className="hidden md:block pt-2">
                <span className={`font-serif text-[7rem] md:text-[8.5rem] leading-none select-none transition-all duration-700 ${
                  i === activeStage ? 'text-[#D4A853]/15' : 'text-[#3d4f41]/10'
                }`}>
                  {stage.number}
                </span>
              </div>

              {/* Stage içeriği — opacity crossfade */}
              <div className={`transition-all duration-700 ${
                i === activeStage ? 'opacity-100' : 'opacity-35 md:opacity-45'
              }`}>
                <span className="md:hidden font-serif text-4xl text-[#D4A853]/25 mb-3 block">
                  {stage.number}
                </span>
                <span className="font-sans text-[11px] font-semibold text-[#D4A853]/70 tracking-[0.25em] uppercase">
                  Aşama {stage.number}
                </span>
                <h3 className="font-serif text-heading text-[#e8e4db] mt-2 mb-3">
                  {stage.title}
                </h3>
                <p className="font-sans text-lg text-[#D4A853]/60 font-medium mb-3">
                  {stage.subtitle}
                </p>
                <p className="font-sans text-sm leading-relaxed text-[#9dac9f] max-w-lg">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt kapanış */}
        <motion.div
          variants={sectionHeaderReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 md:mt-32 pt-10 border-t border-[#3d4f41]/20 text-center"
        >
          <p className="font-serif text-xl text-[#5c705f] italic">
            "Every croissant is a 72-hour story of patience."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
