import { useParams } from 'react-router-dom';
import { translations, menuTranslations, stageTranslations } from './translations';

// URL'den dili oku: /tr veya /en
export function usePageLang() {
  const { lang } = useParams();
  const l = lang === 'en' ? 'en' : 'tr';
  return {
    lang: l,
    t: translations[l],
    tm: menuTranslations[l],
    ts: stageTranslations[l].map(s => ({ ...s, id: s.number, description: s.desc })),
  };
}
