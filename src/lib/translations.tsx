import React, { createContext, useEffect, useState } from "react";

export const defaultLocale = "pt";
export const locales = ["en", "en-pirate", "pt"];
export const LanguageContext = createContext<any>([]);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem("lang") || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
