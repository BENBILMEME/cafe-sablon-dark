import type { Variants, Transition } from "framer-motion";

// ============================================================
// Brekkie Breakfast Club — Animation Architecture
// Jakub Krehel Formula: opacity + translateY + blur spring
// Tüm variant'lar buradan import edilir. Hardcoded YASAK.
// ============================================================

// --- Base Transition Presets ---

/**
 * Jakub Krehel enter recipe — ZORUNLU default.
 * opacity: 0→1, translateY: 8→0px, filter: blur(4px)→0
 * spring, 0.45s, bounce: 0
 */
export const krehelTransition: Transition = {
  type: "spring",
  duration: 0.45,
  bounce: 0,
};

/** Daha yavaş, dramatik giriş — hero başlıkları için */
export const dramaticTransition: Transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0,
};

/** Hızlı micro-interaction — hover/tap için */
export const microTransition: Transition = {
  type: "spring",
  duration: 0.35,
  bounce: 0,
};

/** Extra hızlı — toggle, tab switch */
export const snapTransition: Transition = {
  type: "spring",
  duration: 0.2,
  bounce: 0,
};

// --- Base Variant Objects (Jakub Krehel) ---

/** Standart fade-up + blur reveal */
export const krehelReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    translateY: 0,
    filter: "blur(0px)",
  },
};

/** Dramatik reveal — daha fazla translateY, hero için */
export const dramaticReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    translateY: 0,
    filter: "blur(0px)",
  },
};

/** Soldan reveal — editoryal asimetrik layout için */
export const slideLeftReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
};

/** Sağdan reveal */
export const slideRightReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
};

// --- Stagger Helpers ---

/** Stagger children — container'a uygulanır */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Slow stagger — hero kelime reveal için */
export const slowStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

// --- Micro-Interaction Variants ---

/** Kart hover — premium lift */
export const cardHover: Variants = {
  rest: {
    y: 0,
    transition: microTransition,
  },
  hover: {
    y: -4,
    transition: microTransition,
  },
  tap: {
    y: 0,
    scale: 0.98,
    transition: snapTransition,
  },
};

/** Buton hover/tap */
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: microTransition,
  },
  tap: {
    scale: 0.97,
    transition: snapTransition,
  },
};

// --- Section-Specific Variants ---

/** Hero başlık — dramatik, staggered kelime reveal */
export const heroTitleReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 32,
    filter: "blur(8px)",
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    translateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
      delay: 0.1 + i * 0.15,
    },
  }),
};

/** Menü kartı — grid reveal */
export const menuCardReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 16,
    filter: "blur(4px)",
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    translateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0,
      delay: i * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: snapTransition,
  },
};

/** Section başlığı — fade-up reveal (viewport trigger) */
export const sectionHeaderReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 12,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    translateY: 0,
    filter: "blur(0px)",
    transition: krehelTransition,
  },
};

/** Process stage — opacity crossfade */
export const stageFadeReveal: Variants = {
  hidden: {
    opacity: 0,
    translateY: 8,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

/** Navbar — slide down entry */
export const navbarEntry: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0,
    },
  },
};

/** Mobile menu — expand */
export const mobileMenu: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: snapTransition,
  },
};

/** Floating element — infinite gentle bob */
export const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// --- Viewport Config (IntersectionObserver threshold via Framer Motion) ---

/** Standart viewport — once: true, margin: -80px */
export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const;

/** Geç tetiklenen — daha derin margin */
export const viewportDeep = {
  once: true,
  margin: "-120px",
} as const;

// --- Reduced Motion Check ---

/** Client-side reduced motion kontrolü */
export function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reduced motion varsa animasyonu disable et.
 * Kullanım: variants={getReducedMotion() ? {} : krehelReveal}
 */
export function safeVariants(variants: Variants): Variants {
  return getReducedMotion() ? {} : variants;
}

/**
 * Reduced motion varsa transition'ı anlık yap.
 */
export function safeTransition(t: Transition): Transition {
  return getReducedMotion() ? { duration: 0.01 } : t;
}
