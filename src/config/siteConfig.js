/**
 * siteConfig.js — Merkezi yapılandırma modülü.
 * Tüm bileşenler veriyi buradan çeker. Hardcoded metin yok.
 *
 * Kullanım:
 *   import { getContent, getLocalized, PLACEHOLDER } from '../config/siteConfig';
 *   const { business, theme } = getContent();
 *   const label = getLocalized(business.name, lang); // { tr: "X", en: "Y" } → "X"
 */
import siteContent from './site-content.json';

/** Placeholder görsel yolu */
export const PLACEHOLDER = '/placeholder.svg';

/** site-content.json'un tamamını döndürür */
export function getContent() {
  return siteContent;
}

/**
 * Çok dilli bir alandan dile göre değer çeker.
 * @param {object|string} field — { tr: "Merhaba", en: "Hello" } veya düz string
 * @param {string} lang — "tr" veya "en"
 * @returns {string}
 */
export function getLocalized(field, lang = 'tr') {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.tr || field.en || '';
}

/**
 * Menü öğesini dile göre çevirir.
 * @param {object} item — siteContent.menuItems[category][index]
 * @param {string} lang — "tr" veya "en"
 * @returns {{ id, name, description, price, badge, image, dietary }}
 */
export function localizeMenuItem(item, lang = 'tr') {
  if (!item) return null;
  return {
    ...item,
    name: getLocalized(item.name, lang),
    description: getLocalized(item.description, lang),
  };
}

/**
 * Menü kategorilerini döndürür (dil çevirili).
 * @param {string} lang
 * @returns {Array<{id, label}>}
 */
export function getCategories(lang = 'tr') {
  return siteContent.menuCategories.map(cat => ({
    id: cat.id,
    label: getLocalized(cat.label, lang),
  }));
}

/**
 * Belirli bir dil için tüm menü öğelerini döndürür.
 * @param {string} categoryId — "savory" | "sweet" | "drinks"
 * @param {string} lang
 * @returns {Array}
 */
export function getMenuItems(categoryId, lang = 'tr') {
  const items = siteContent.menuItems[categoryId] || [];
  return items.map(item => localizeMenuItem(item, lang));
}

/**
 * Tema renklerini döndürür.
 */
export function getTheme() {
  return siteContent.theme;
}

/**
 * SEO meta verilerini döndürür (dil çevirili).
 */
export function getSEO(lang = 'tr') {
  const seo = siteContent.seo;
  return {
    title: getLocalized(seo.title, lang),
    description: getLocalized(seo.description, lang),
    ogImage: seo.ogImage,
    themeColor: seo.themeColor,
  };
}

export default siteContent;
