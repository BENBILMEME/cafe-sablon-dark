import { useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const K_IMG = '/images/kruvasan_46656.png';

export default function Croissant3D({ className = '', sectionRef }) {
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef || undefined,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 8]);

  const handleMove = useCallback((e) => {
    if (!imgRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    imgRef.current.style.transition = 'transform 0.2s ease-out';
    imgRef.current.style.transform = `perspective(1500px) rotateY(${x*28}deg) rotateX(${-y*20}deg) scale3d(1.06,1.06,1) translateZ(10px)`;
  }, []);
  const handleLeave = useCallback(() => {
    if (!imgRef.current) return;
    imgRef.current.style.transition = 'transform 0.8s cubic-bezier(0.23,1,0.32,1)';
    imgRef.current.style.transform = 'perspective(1500px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1) translateZ(0px)';
  }, []);

  return (
    <motion.div style={{ scale, rotate }} className={`flex items-center justify-center ${className}`}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,168,83,0.07) 0%, transparent 55%)' }} />
      <img ref={imgRef} src={K_IMG} alt="Brekkie kruvasan"
        className="w-full h-auto object-contain select-none animate-float relative z-10
                   drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        style={{ transform: 'perspective(1500px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1) translateZ(0px)', backfaceVisibility: 'hidden' }}
        draggable={false} />
    </motion.div>
  );
}
