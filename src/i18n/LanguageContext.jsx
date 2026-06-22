import { createContext, useContext, useState, useEffect } from 'react';
import { translations, menuTranslations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('brekkie-lang') || 'tr');

  useEffect(() => { localStorage.setItem('brekkie-lang', lang); }, [lang]);

  const toggleLang = () => setLang(l => l === 'tr' ? 'en' : 'tr');
  const t = translations[lang];
  const tm = menuTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tm }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
