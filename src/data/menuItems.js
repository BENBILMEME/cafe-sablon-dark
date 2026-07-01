/**
 * Menü verileri — site-content.json'dan beslenir.
 * Yeni işletme için site-content.json > menuItems alanını güncelleyin.
 */
import siteContent from '../config/site-content.json';

export const menuCategories = siteContent.menuCategories.map(cat => ({
  id: cat.id,
  label: cat.label.tr,
}));

export const menuItems = siteContent.menuItems;
