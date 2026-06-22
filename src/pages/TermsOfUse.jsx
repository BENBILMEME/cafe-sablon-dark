import { motion } from 'framer-motion';
import { sectionHeaderReveal, dramaticReveal } from '../lib/animations';

export default function TermsOfUse() {
  return (
    <div className="bg-[#0f1411] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={sectionHeaderReveal} initial="hidden" animate="visible" className="mb-16">
          <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.3em] uppercase">Brekkie Breakfast Club</span>
          <h1 className="font-serif text-display text-[#e8e4db] mt-3 mb-4">Kullanım Koşulları</h1>
          <p className="font-sans text-sm text-[#7d8c7f]">Son güncelleme: 22 Haziran 2026</p>
        </motion.div>

        <div className="space-y-10 text-[#b0bab2] font-sans leading-relaxed">
          {[
            { title: '1. Hizmet Kapsamı', text: 'Bu web sitesi, Brekkie Breakfast Club ("Brekkie") tarafından işletilmektedir. Site üzerinden menü görüntüleme, konum bilgisi alma ve ilerleyen dönemde rezervasyon yapma hizmetleri sunulmaktadır.' },
            { title: '2. Fikri Mülkiyet', text: 'Bu sitede yer alan tüm içerik (metin, görsel, logo, tasarım, yazılım) Brekkie Breakfast Club\'ın fikri mülkiyetidir. Brekkie\'nin yazılı izni olmadan kopyalanamaz, dağıtılamaz veya kullanılamaz.' },
            { title: '3. Menü ve Fiyatlar', text: 'Sitemizde gösterilen menü öğeleri ve fiyatlar bilgilendirme amaçlıdır. Brekkie, önceden haber vermeksizin menü ve fiyatlarda değişiklik yapma hakkını saklı tutar. Güncel fiyatlar için mekânı ziyaret ediniz.' },
            { title: '4. Rezervasyon Politikası', text: 'Rezervasyonlar müsaitlik durumuna bağlıdır. Brekkie, öngörülemeyen durumlarda rezervasyonları iptal etme veya yeniden planlama hakkını saklı tutar. Brunch saatlerinde yoğunluk nedeniyle bekleme süresi olabilir.' },
            { title: '5. Kullanıcı Sorumlulukları', text: 'Site kullanıcıları, doğru ve güncel bilgi sağlamakla yükümlüdür. Site üzerinden yapılan sahte veya yanıltıcı işlemlerden kullanıcı sorumludur. Siteyi kötüye kullanım tespit edilirse yasal işlem başlatılabilir.' },
            { title: '6. Sorumluluk Sınırlaması', text: 'Brekkie, site kullanımından kaynaklanan doğrudan veya dolaylı zararlardan sorumlu tutulamaz. Site hizmetleri "olduğu gibi" sunulmakta olup, kesintisiz veya hatasız çalışacağına dair garanti verilmemektedir.' },
            { title: '7. Değişiklikler', text: 'Brekkie, bu kullanım koşullarını önceden haber vermeksizin güncelleme hakkını saklı tutar. Değişiklikler sitede yayınlandığı anda yürürlüğe girer. Kullanıcıların koşulları düzenli olarak gözden geçirmesi önerilir.' },
            { title: '8. Uygulanacak Hukuk', text: 'Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlık durumunda İstanbul (Anadolu) Mahkemeleri ve İcra Daireleri yetkilidir.' },
          ].map((section, i) => (
            <motion.div key={i} variants={dramaticReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-xl font-semibold text-[#e8e4db] mb-3">{section.title}</h2>
              <p className="text-sm text-[#9dac9f]">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
