/**
 * Brekkie Breakfast Club — GERÇEK Menü (Google Maps'ten)
 * Moda, Kadıköy — Caferağa Mah. Moda Cad. No:42/B
 * Fotoğraflar: public/images/ (Google Maps'ten indirildi)
 */
export const menuCategories = [
  { id: 'savory', label: 'Tuzlular' },
  { id: 'sweet', label: 'Tatlılar' },
  { id: 'drinks', label: 'İçecekler' },
];

export const menuItems = {
  savory: [
    {
      id: 'english-breakfast',
      name: 'English Breakfast',
      description: 'Yumurta, sosis, bacon, mantar, domates, fasulye, kızarmış ekmek',
      price: '₺320',
      badge: 'Hearty',
      image: 'https://images.pexels.com/photos/15352990/pexels-photo-15352990.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'danish-boat',
      name: 'Danish Boat',
      description: 'Danimarka hamurundan tekne, orman meyveleri, badem, pudra şekeri',
      price: '₺195',
      badge: 'Special',
      image: 'https://images.pexels.com/photos/13546335/pexels-photo-13546335.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'croissant-sandwich',
      name: 'Croissant Sandwich',
      description: '72 saatlik kruvasan arası özel sandviç, taze malzemeler',
      price: '₺210',
      badge: 'Favorite',
      image: 'https://images.pexels.com/photos/8765341/pexels-photo-8765341.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'fresh',
      name: 'Fresh Bowl',
      description: 'Mevsim meyveleri, granola, yoğurt, bal',
      price: '₺185',
      badge: 'Healthy',
      image: 'https://images.pexels.com/photos/4099231/pexels-photo-4099231.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  sweet: [
    {
      id: 'pistachio-croissant',
      name: 'Pistachio Croissant',
      description: 'Antep fıstığı kremalı kruvasan, beyaz çikolata parçaları',
      price: '₺175',
      badge: 'Legendary',
      image: 'https://images.pexels.com/photos/34695382/pexels-photo-34695382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'nutella-ganache',
      name: 'Nutella Ganache',
      description: 'Nutella ve bitter çikolata ganajlı kruvasan, pudra şekeri',
      price: '₺165',
      badge: 'Popular',
      image: 'https://images.pexels.com/photos/35894633/pexels-photo-35894633.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'blueberry-lemon',
      name: 'Blueberry Lemon',
      description: 'Yaban mersinli ve limonlu kruvasan, taze meyve sosu',
      price: '₺155',
      badge: 'New',
      image: 'https://images.pexels.com/photos/11720712/pexels-photo-11720712.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  drinks: [
    {
      id: 'filtre-kahve',
      name: 'Filter Coffee',
      description: 'Özel kavrum çekirdek, V60 demleme',
      price: '₺65',
      badge: null,
      image: 'https://images.pexels.com/photos/29507972/pexels-photo-29507972.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'americano',
      name: 'Americano',
      description: 'Double shot espresso, sıcak su — yoğun aromalı',
      price: '₺80',
      badge: null,
      image: 'https://images.pexels.com/photos/6253942/pexels-photo-6253942.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Espresso, buharla ısıtılmış süt, yoğun süt köpüğü',
      price: '₺95',
      badge: null,
      image: 'https://images.pexels.com/photos/37034126/pexels-photo-37034126.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
};
