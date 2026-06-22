# Brekkie Breakfast Club — Design System Master

> **Single Source of Truth.** Her bileşen bu dosyadan okur. Hardcoded renk/boşluk/font YASAK.

---

## 1. Brand Identity

| Token | Value |
|-------|-------|
| **Brand** | Brekkie Breakfast Club |
| **Location** | Caferağa Mah. Moda Cad. No:42/B, Kadıköy / İstanbul |
| **Tagline** | Moda'nın Kruvasan Kültürü |
| **Vibe** | Artisan, premium, samimi, editoryal |
| **Audience** | Kadıköy/Moda high-end brunch kitlesi |

---

## 2. Color Palette

### Primary — Dark Sage Green
```
--color-sage-950:  #0f1411   →  En koyu (body bg, footer)
--color-sage-900:  #121714   →  Section bg koyu
--color-sage-800:  #1a231d   →  Kart bg, yüzey
--color-sage-700:  #253228   →  Hafif yüzey
--color-sage-600:  #2a352d   →  Tab active bg
--color-sage-500:  #3d4f41   →  Border, muted
--color-sage-400:  #5c705f   →  Muted text
--color-sage-300:  #7d8c7f   →  Secondary text
--color-sage-200:  #9dac9f   →  Subtitle text
--color-sage-100:  #b0bab2   →  Light text
```

### Accent — Golden Pastry
```
--color-gold-500:  #9a7b2c   →  Koyu altın (hover)
--color-gold-400:  #D4A853   →  Ana altın (CTA, vurgu)
--color-gold-300:  #e0c878   →  Açık altın (glow)
--color-gold-200:  #eedc9a   →  En açık altın
```

### Text on Dark
```
--color-text-primary:    #e8e4db   →  Ana metin (cream-beyaz)
--color-text-secondary:  #b0bab2   →  İkincil metin
--color-text-muted:      #7d8c7f   →  Soluk metin
--color-text-accent:     #D4A853   →  Vurgu metin (altın)
```

### Gradients (Background ONLY — NEVER text)
```css
/* Hero */
--gradient-hero: linear-gradient(170deg, #1e2a22 0%, #19251d 30%, #121714 100%);

/* Menu / Mid sections */
--gradient-mid: linear-gradient(180deg, #121714 0%, #181f1a 50%, #121714 100%);

/* Process — en derin */
--gradient-deep: linear-gradient(180deg, #1a231d 0%, #121714 40%, #0f1411 100%);

/* Queue — sade */
--gradient-surface: linear-gradient(180deg, #121714 0%, #151c17 100%);
```

---

## 3. Typography

### Serif — Headers
```
Font: 'Playfair Display', Georgia, 'Times New Roman', serif
Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
Style: italic available
Usage: h1, h2, h3, hero, section titles, editorial numbers, quotes
```

### Sans — Body / UI / Menu
```
Font: 'DM Sans', 'Geist', system-ui, sans-serif
Weights: 400 (regular), 500 (medium), 600 (semibold)
Usage: body text, buttons, menu items, labels, badges, nav
```

### Font Scale (clamp-based, fluid)
```
--text-hero:    clamp(3.5rem, 8vw, 7rem)       → h1, hero titles
--text-display: clamp(2.5rem, 5vw, 4.5rem)     → h2, section headers
--text-heading: clamp(1.75rem, 3vw, 2.75rem)   → h3, card titles
--text-subhead: clamp(1.25rem, 2vw, 1.75rem)   → h4, subtitles
--text-body:    1rem / 16px                     → body
--text-sm:      0.875rem / 14px                 → small, labels
--text-xs:      0.6875rem / 11px                → badges, overline
```

---

## 4. Spacing & Grid

### Section Padding
```
--space-section:    clamp(4rem, 8vw, 8rem)     → py for sections
--space-section-lg: clamp(6rem, 12vw, 12rem)   → py for hero
```

### Internal Spacing Scale
```
--space-2xs:  0.25rem  (4px)
--space-xs:   0.5rem   (8px)
--space-sm:   0.75rem  (12px)
--space-md:   1rem     (16px)
--space-lg:   1.5rem   (24px)
--space-xl:   2rem     (32px)
--space-2xl:  3rem     (48px)
--space-3xl:  4rem     (64px)
--space-4xl:  6rem     (96px)
```

### Editorial Whitespace (Dramatik nefes alanı)
```
Editorial section gap:  space-y-36 md:space-y-44  (stage'ler arası)
Hero text gap:           gap-14 md:gap-20          (hero grid)
Card grid gap:           gap-5 md:gap-6            (menü grid)
```

### Container
```
max-width: 1440px
padding-x: 1.5rem (mobile) / 3rem (md) / 4rem (lg)
```

---

## 5. Shadows & Depth

```css
/* Kart gölgesi */
--shadow-card: 0 1px 3px rgba(0,0,0,0.2), 0 8px 32px -8px rgba(0,0,0,0.3);

/* Kart hover */
--shadow-card-hover: 0 12px 40px -4px rgba(212,168,83,0.06), 0 4px 16px -4px rgba(0,0,0,0.4);

/* Altın glow */
--shadow-gold: 0 4px 20px rgba(212,168,83,0.2);

/* Navbar */
--shadow-nav: 0 1px 0 rgba(255,255,255,0.04);
```

---

## 6. Border Radius

```
--radius-sm:  0.5rem   (8px)   → small elements
--radius-md:  0.75rem  (12px)  → buttons, inputs
--radius-lg:  1rem     (16px)  → cards
--radius-xl:  1.5rem   (24px)  → large cards
--radius-full: 9999px          → pills, CTA buttons
```

---

## 7. Transitions & Easing

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-spring:   cubic-bezier(0.175, 0.885, 0.32, 1.275);

--duration-fast:   150ms;
--duration-normal: 300ms;
--duration-slow:   600ms;
--duration-page:   800ms;
```

---

## 8. Animation Rules

### Entry Animation (Jakub Krehel Formula — ZORUNLU)
```
initial={{ opacity: 0, translateY: 8, filter: "blur(4px)" }}
animate={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
transition={{ type: "spring", duration: 0.45, bounce: 0 }}
```

### Micro-Interactions (ZORUNLU)
```
Tüm kartlar:   whileHover={{ y: -4, transition: { type: "spring", duration: 0.35, bounce: 0 } }}
Tüm butonlar:  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
```

### Floating Animation (Hero Croissant)
```
@keyframes float: 6s ease-in-out infinite
0/100%: translateY(0px)
50%:    translateY(-10px)
```

### Reduced Motion
```
@media (prefers-reduced-motion: reduce) → TÜM animasyonlar 0.01ms
```

---

## 9. Absolute Bans (Kesin Yasaklar)

| # | Yasak | Sebep |
|---|-------|-------|
| 1 | `gradient-text` / `bg-clip-text` | AI slop, amatör |
| 2 | Glassmorphism (`backdrop-blur` kartlarda) | AI slop — sadece navbar'da izinli |
| 3 | Identical card grid (eşit boyutlu grid) | Görsel monotonluk |
| 4 | Side-stripe border on cards | AI slop pattern |
| 5 | Purple/pink gradients | Brekkie brand değil |
| 6 | `bg-white` veya `bg-opacity-*` wrapper'lar | Karanlık temayı bozar |
| 7 | `drop-shadow` on croissant `<img>` | Beyaz bounding-box outline |
| 8 | Emoji (🥐☕ vb.) | SVG ikon kullan |
| 9 | Pure black `#000` veya pure white `#fff` | Premium palette'ten sapma |
| 10 | Inter, Roboto, Arial font'ları | Karakter yok |
| 11 | `will-change` on section-level | Memory leak |
| 12 | GSAP ScrollTrigger `pin: true` | Scroll'u kırar |

---

## 10. Image Treatment

### Kruvasan PNG (src/assets/kruvasan.png)
```css
/* Koyu arka planda — beyaz bounding-box yok edilir */
.kruvasan-dark {
  mix-blend-mode: multiply;
  filter: brightness(0.92);
}

/* Açık arka planda — normal render */
.kruvasan-light {
  mix-blend-mode: normal;
  filter: none;
}
```

---

## 11. Component Checklist (Her bileşen before merge)

- [ ] Tüm renkler bu dosyadaki palette'ten
- [ ] Font'lar sadece Playfair Display + DM Sans
- [ ] `mix-blend-mode: multiply` kruvasan img'de (dark bg)
- [ ] Jakub Krehel enter recipe uygulanmış
- [ ] `whileHover` / `whileTap` etkileşimli elementlerde
- [ ] `prefers-reduced-motion` saygılı
- [ ] Yasak listesinden hiçbir şey yok
- [ ] Semantik HTML + ARIA label'lar
- [ ] Mobil responsive (320, 768, 1024, 1440)
- [ ] `will-change` sadece animasyonlu elementlerde, section-level DEĞİL
