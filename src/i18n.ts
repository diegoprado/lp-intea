import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
import ptCommon from '@locales/pt/common.json';
import enCommon from '@locales/en/common.json';

// interface Resources {
//   [language: string]: {
//     [namespace: string]: unknown;
//   };
// }

const resources: Resource = {
  pt: { common: ptCommon },
  en: { common: enCommon },
};

export const LANGUAGE_COOKIE = 'intea_language';

export const getCurrentLanguage = (): string => {
  const savedLanguage = Cookies.get(LANGUAGE_COOKIE);

  if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.split('-')[0];

  return ['pt', 'en'].includes(browserLanguage) ? browserLanguage : 'pt';
};

export const saveLanguagePreference = (language: string): void => {
  Cookies.set(LANGUAGE_COOKIE, language, { expires: 365 });
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'customDetector',
  lookup() {
    return getCurrentLanguage();
  },
  cacheUserLanguage(lng: string) {
    saveLanguagePreference(lng);
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged',
    },
    resources,
    defaultNS: 'common',
    detection: {
      order: ['customDetector', 'navigator'],
      lookupCookie: LANGUAGE_COOKIE,
      caches: ['cookie'],
    },
  });

export default i18n;
