import { motion, useScroll, useTransform } from 'framer-motion';
import { PLACEHOLDER } from '../../config/siteConfig';
const K_IMG = PLACEHOLDER;

export default function Croissant3D({ className = '', sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef || undefined,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 8]);

  return (
    <motion.div style={{ scale, rotate }} className={`flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,168,83,0.07) 0%, transparent 55%)' }} />
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={K_IMG} alt="Hero görseli — site-content.json'dan değiştirin"
          className="w-full h-auto object-contain select-none relative z-10
                     drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          draggable={false} />
      </motion.div>
    </motion.div>
  );
}
