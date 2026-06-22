import { motion } from 'framer-motion';
import { sectionHeaderReveal } from '../../lib/animations';

const sections = [
  {
    title: 'Service Options',
    items: ['Outdoor seating', 'No-contact delivery', 'Takeaway', 'Pickup', 'Dine-in'],
  },
  {
    title: 'Highlights',
    items: ['Great coffee', 'Great dessert', 'Great tea selection'],
  },
  {
    title: 'Popular For',
    items: ['Breakfast', 'Solo dining'],
  },
  {
    title: 'Offerings',
    items: ['Alcohol', 'Cocktails', 'Coffee', 'Quick bite', 'Vegetarian options'],
  },
  {
    title: 'Dining Options',
    items: ['Breakfast', 'Brunch', 'Lunch', 'Dessert', 'Table service'],
  },
  {
    title: 'Amenities',
    items: ['Toilet', 'Wi-Fi', 'Free Wi-Fi'],
  },
  {
    title: 'Atmosphere',
    items: ['Casual', 'Cosy', 'Trendy', 'Upmarket'],
  },
  {
    title: 'Crowd',
    items: ['Family friendly', 'Groups', 'Tourists', 'University students'],
  },
  {
    title: 'Planning',
    items: ['Brunch reservations recommended', 'Accepts reservations', 'Usually a wait'],
  },
  {
    title: 'Payments',
    items: ['Credit cards', 'Debit cards', 'NFC mobile payments'],
  },
  {
    title: 'Children',
    items: ['Children için uygun', 'High chairs'],
  },
  {
    title: 'Parking',
    items: ['Free street parking', 'Difficult to find space'],
  },
  {
    title: 'Pets',
    items: ['Dogs allowed inside', 'Dogs allowed outside'],
  },
  {
    title: 'Accessibility',
    items: ['Wheelchair-accessible entrance', 'Wheelchair-accessible seating', 'Wheelchair-accessible toilet'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding bg-[#121714]" aria-labelledby="about-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div variants={sectionHeaderReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12 md:mb-16">
          <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.25em] uppercase">About Brekkie</span>
          <h2 id="about-heading" className="font-serif text-display text-[#e8e4db] mt-3 mb-4">About</h2>
          <p className="font-sans text-[#9dac9f] max-w-lg mx-auto">
            Cool boho-chic venue serving savory &amp; sweet breakfast &amp; brunch dishes, plus great coffee
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0f1411] border border-white/[0.04] rounded-2xl p-6
                         hover:border-[#D4A853]/15 transition-all duration-500"
            >
              <h3 className="font-serif text-lg font-semibold text-[#e8e4db] mb-3">{sec.title}</h3>
              <ul className="space-y-1.5">
                {sec.items.map((item) => (
                  <li key={item} className="font-sans text-sm text-[#9dac9f] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4A853]/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
