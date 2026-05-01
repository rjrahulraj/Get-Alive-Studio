import { useCallback } from 'react';

type Locale = 'en' | 'es' | 'pt' | 'hi' | 'id' | 'tr' | 'ar';

const translations: Record<Locale, Record<string, any>> = {} as Record<Locale, Record<string, any>>;

const loadTranslations = async () => {
  const locales: Locale[] = ['en', 'es', 'pt', 'hi', 'id', 'tr', 'ar'];
  const namespaces = ['common', 'nav', 'hero', 'services', 'contact', 'footer'];

  for (const locale of locales) {
    translations[locale] = {};
    for (const namespace of namespaces) {
      try {
        const module = await import(`@/locales/${locale}/${namespace}.json`);
        translations[locale][namespace] = module.default;
      } catch (error) {
        console.warn(`Failed to load translation: ${locale}/${namespace}`);
      }
    }
  }
};

export const useTranslation = (locale: Locale, namespace: string = 'common') => {
  const t = useCallback(
    (key: string, defaultValue: string = key) => {
      const keys = key.split('.');
      let value = translations[locale]?.[namespace];

      for (const k of keys) {
        value = value?.[k];
      }

      return value || defaultValue;
    },
    [locale, namespace]
  );

  return { t };
};

export { loadTranslations, type Locale };
