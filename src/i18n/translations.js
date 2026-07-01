/**
 * Çeviri sistemi — site-content.json'dan beslenir.
 * Eski translations.js yapısını korur, veriyi siteConfig'ten çeker.
 * Yeni işletme için site-content.json'u güncelleyin.
 */
import siteContent from '../config/site-content.json';

const C = siteContent;

function buildTranslations() {
  const L = C.languages || ['tr', 'en'];
  const result = {};

  for (const lang of L) {
    const isTR = lang === 'tr';

    result[lang] = {
      nav: {
        menu: C.nav.links[lang]?.[0]?.label || 'Menü',
        process: C.nav.links[lang]?.[1]?.label || 'Sürecimiz',
        location: C.nav.links[lang]?.[2]?.label || C.business.neighborhood,
        contact: isTR ? 'İletişim' : 'Contact',
        directions: C.nav.directionsLabel[lang],
      },
      hero: {
        location: C.business.neighborhood,
        tagline: C.hero.tagline[lang].line1,
        tagline2: C.hero.tagline[lang].line2,
        tagline3: C.hero.tagline[lang].line3,
        desc: C.hero.description[lang],
        cta: C.hero.cta.primary[lang],
        cta2: C.hero.cta.secondary[lang],
        rating: C.business.ratingPlatform,
        hours: C.hours.displayText[lang],
        badge: C.hero.badge[lang].main,
        badgeSub: C.hero.badge[lang].sub,
        scroll: isTR ? 'Keşfet' : 'Discover',
      },
      menu: {
        title: C.menuSection.title[lang],
        subtitle: C.menuSection.subtitle[lang],
        desc: C.menuSection.description[lang],
        more: C.menuSection.moreButton[lang],
        moreSub: C.menuSection.moreSubtext[lang],
      },
      process: {
        title: C.process.sectionTitle[lang],
        heading: C.process.heading[lang],
        desc: C.process.description[lang],
        stage: C.process.stageLabel[lang],
      },
      queue: {
        title: C.queue.sectionTitle[lang],
        heading: C.queue.heading[lang],
        desc: C.queue.description[lang],
        walk8: C.transportation[0]?.distance[lang] || '',
        walk10: C.transportation[1]?.distance[lang] || '',
        walk1: C.transportation[2]?.distance[lang] || '',
        walk3: C.transportation[3]?.distance[lang] || '',
        open: isTR ? 'Açık' : 'Open',
        closed: isTR ? 'Kapalı' : 'Closed',
        wait: isTR ? 'dk bekleme' : 'min wait',
        closedMsg: isTR ? "Yarın 09:00'da tekrar bekleriz!" : 'See you tomorrow at 9:00 AM!',
        hours: isTR ? 'Çalışma Saatleri' : 'Opening Hours',
        hoursNote: C.hours.note[lang],
        everyDay: C.hours.daysLabel[lang],
      },
      aboutSections: C.about.sections.map(s => ({
        title: s.title[lang],
        items: s.items[lang],
      })),
      about: {
        title: C.about.title[lang],
        heading: C.about.heading[lang],
        desc: C.about.description[lang],
      },
      footer: {
        desc: C.footer.description[lang],
        rights: C.footer.rights[lang],
        privacy: C.footer.privacy[lang],
        terms: C.footer.terms[lang],
        location: C.business.address,
      },
      menuPage: {
        title: C.menuPage.title[lang],
        subtitle: C.menuPage.subtitle,
        desc: C.menuPage.description[lang],
        back: C.menuPage.backButton[lang],
        quote: C.menuPage.quote[lang],
        seasonal: C.menuPage.seasonalNote[lang],
        allMenu: isTR ? 'Tüm Menü' : 'Full Menu',
        items: C.menuPage.itemsLabel[lang],
      },
      categories: {
        savory: C.menuCategories[0]?.label[lang] || '',
        sweet: C.menuCategories[1]?.label[lang] || '',
        drinks: C.menuCategories[2]?.label[lang] || '',
      },
      lang: lang.toUpperCase(),
    };
  }

  return result;
}

export const translations = buildTranslations();

// Stage çevirileri
export const stageTranslations = C.process.stages;

// Menü öğe çevirilerini site-content.json'dan oluştur
function buildMenuTranslations() {
  const result = {};
  for (const lang of (C.languages || ['tr', 'en'])) {
    result[lang] = {};
    for (const cat of Object.values(C.menuItems)) {
      for (const item of cat) {
        result[lang][item.id] = {
          name: typeof item.name === 'string' ? item.name : (item.name[lang] || item.name.tr || ''),
          desc: typeof item.description === 'string' ? item.description : (item.description[lang] || item.description.tr || ''),
        };
      }
    }
  }
  return result;
}

export const menuTranslations = buildMenuTranslations();
