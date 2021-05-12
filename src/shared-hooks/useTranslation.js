import { useContext } from "react";
import { LanguageContext, defaultLocale } from "../lib/translations";
import { Languages } from "../lib/lang";

export function useTranslation() {
  const [locale] = useContext(LanguageContext);

  function t(key) {
    if (!Languages[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return Languages[locale][key] || Languages[defaultLocale][key] || "";
  }

  return { t, locale };
}
