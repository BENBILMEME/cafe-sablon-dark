const fs=require('fs');
// Hero remaining
let h=fs.readFileSync('src/components/Hero/Hero.jsx','utf8');
h=h.replace('>72 Saat Fermente<','>{t.hero.badge}<');
h=h.replace('>Soğuk dinlendirme<','>{t.hero.badgeSub}<');
h=h.replace('>Keşfet<','>{t.hero.scroll}<');
h=h.replace('>Her gün 08:00 — 19:00<','>{t.hero.hours}<');
h=h.replace('>4.8 ★</strong> Google','>4.8 ★</strong> {t.hero.rating}');
fs.writeFileSync('src/components/Hero/Hero.jsx',h);
console.log('Hero done');

// MenuCard
let mc=fs.readFileSync('src/components/Menu/MenuCard.jsx','utf8');
if(!mc.includes('useLang')){mc=mc.replace("import { useRef, useCallback } from 'react';","import { useRef, useCallback } from 'react';\nimport { useLang } from '../../i18n/LanguageContext';");
mc=mc.replace('const cardRef = useRef(null);','const { tm } = useLang();\n  const cardRef = useRef(null);');
mc=mc.replace(/{item.name}/g,'{tm[item.id]?.name || item.name}');
mc=mc.replace(/{item.description}/g,'{tm[item.id]?.desc || item.description}');}
fs.writeFileSync('src/components/Menu/MenuCard.jsx',mc);
console.log('MenuCard done');

// QueueStatus
let q=fs.readFileSync('src/components/Queue/QueueStatus.jsx','utf8');
if(!q.includes('useLang')){q=q.replace("import { sectionHeaderReveal, dramaticReveal } from '../../lib/animations';","import { sectionHeaderReveal, dramaticReveal } from '../../lib/animations';\nimport { useLang } from '../../i18n/LanguageContext';");
q=q.replace('const [live, setLive] = useState(getLiveWait);','const { t } = useLang();\n  const L = t.queue;\n  const [live, setLive] = useState(getLiveWait);');}
q=q.replace(/>Moda Kültürü</g,'>{t.queue.title}<');
q=q.replace(/>Bizi Bulun</g,'>{t.queue.heading}<');
q=q.replace(/Moda Caddesi'nin kalbinde, denize 3 dakika. Sıcak kruvasan kokusu sizi bulacak./g,'{t.queue.desc}');
q=q.replace(/>Çalışma Saatleri</g,'>{L.hours}<');
q=q.replace(/>Açık</,'>{L.open}<');
q=q.replace(/>Kapalı</,'>{L.closed}<');
q=q.replace(/>dk bekleme</g,'>{L.wait}<');
q=q.replace(/Her gün \{OPEN_HOUR\}:\d+ — \{CLOSE_HOUR\}:\d+/g,'{t.queue.everyDay} {OPEN_HOUR}:00 — {CLOSE_HOUR}:00');
q=q.replace('Brunch için rezervasyon önerilir — genellikle sıra olur','{L.hoursNote}');
q=q.replace(/Yarın 09:00'da tekrar bekleriz!/g,'{t.queue.closedMsg}');
fs.writeFileSync('src/components/Queue/QueueStatus.jsx',q);
console.log('Queue done');

// Footer
let f=fs.readFileSync('src/components/Footer/Footer.jsx','utf8');
if(!f.includes('useLang')){f=f.replace("import { useState, useEffect } from 'react';","import { useState } from 'react';\nimport { useLang } from '../../i18n/LanguageContext';");
f=f.replace('const [year] = useState(() => new Date().getFullYear());','const { t } = useLang();\n  const [year] = useState(() => new Date().getFullYear());');}
f=f.replace(/Moda'nın kalbinde, 72 saatlik el emeği kruvasanlar ve butik kahve deneyimi. Her sabah, sıfırdan./g,'{t.footer.desc}');
f=f.replace(/>Gizlilik Politikası</g,'>{t.footer.privacy}<');
f=f.replace(/>Kullanım Koşulları</g,'>{t.footer.terms}<');
f=f.replace(/Tüm hakları saklıdır./g,'{t.footer.rights}');
f=f.replace(/Caferağa Mah. Moda Cad. No:42\/B, Kadıköy — İstanbul/g,'{t.footer.location}');
fs.writeFileSync('src/components/Footer/Footer.jsx',f);
console.log('Footer done');

console.log('ALL DONE');
