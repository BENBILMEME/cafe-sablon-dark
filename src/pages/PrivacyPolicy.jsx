import { motion } from 'framer-motion';
import { sectionHeaderReveal, dramaticReveal } from '../lib/animations';
import siteContent from '../config/site-content.json';

export default function PrivacyPolicy() {
  const B = siteContent.business;
  return (
    <div className="bg-[#0f1411] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={sectionHeaderReveal} initial="hidden" animate="visible" className="mb-16">
          <span className="font-sans text-[11px] font-semibold text-[#D4A853] tracking-[0.3em] uppercase">{B.name}</span>
          <h1 className="font-serif text-display text-[#e8e4db] mt-3 mb-4">Gizlilik Politikası</h1>
          <p className="font-sans text-sm text-[#7d8c7f]">Son güncelleme: Haziran 2026</p>
        </motion.div>
        <div className="space-y-10 text-[#b0bab2] font-sans leading-relaxed">
          {[
            { title: '1. Toplanan Bilgiler', text: 'Rezervasyon ve iletişim formlarımız aracılığıyla ad, soyad, telefon numarası, e-posta adresi ve rezervasyon tercihleriniz gibi kişisel bilgileri toplayabiliriz. Bu bilgiler yalnızca hizmetlerimizi sunmak amacıyla toplanır.' },
            { title: '2. Bilgilerin Kullanımı', text: 'Toplanan kişisel veriler; rezervasyon onayı, müşteri hizmetleri, sipariş takibi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır. Verileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz veya satılmaz.' },
            { title: '3. Veri Güvenliği', text: 'Kişisel verileriniz, yetkisiz erişim, değiştirme, ifşa veya imhaya karşı korunmak üzere endüstri standardı güvenlik önlemleriyle korunmaktadır. Tüm veri iletimleri SSL/TLS şifreleme ile gerçekleştirilir.' },
            { title: '4. Çerezler (Cookies)', text: 'Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla oturum çerezleri ve tercih çerezleri kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.' },
            { title: '5. Üçüncü Taraf Hizmetleri', text: 'Sitemiz, Google Maps (konum gösterimi) ve Google Fonts (tipografi) gibi üçüncü taraf hizmetlerini kullanmaktadır. Bu hizmetlerin kendi gizlilik politikaları geçerlidir.' },
            { title: '6. Haklarınız', text: 'KVKK kapsamında; kişisel verilerinize erişme, düzeltme, silme, işlenmesini kısıtlama ve veri taşınabilirliği talep etme haklarına sahipsiniz. Talepleriniz için bizimle iletişime geçebilirsiniz.' },
            { title: '7. İletişim', text: `Gizlilik politikamızla ilgili sorularınız için: ${B.address} adresinden veya e-posta adresimizden bize ulaşabilirsiniz.` },
          ].map((section, i) => (
            <motion.div key={i} variants={dramaticReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-xl font-semibold text-[#e8e4db] mb-3">{section.title}</h2>
              <p className="font-sans text-sm text-[#9dac9f] leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
