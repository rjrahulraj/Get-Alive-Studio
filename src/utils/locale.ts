import { i18nConfig } from "@/config/i18n.config";

export function getLocalizedPath(locale: string, pathname: string): string {
  if (i18nConfig.locales.includes(locale as any)) {
    return `/${locale}${pathname}`;
  }
  return pathname;
}

export function extractLocaleFromPath(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  const potential = parts[0];
  return i18nConfig.locales.includes(potential as any) ? potential : null;
}

export function removeLocaleFromPath(pathname: string): string {
  const locale = extractLocaleFromPath(pathname);
  if (locale) {
    return pathname.slice(locale.length + 1);
  }
  return pathname;
}
