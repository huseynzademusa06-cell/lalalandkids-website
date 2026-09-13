import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "ru";
const LanguageContext = createContext<{ lang: Lang; toggle: () => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => {
    setLang((l) => (l === "en" ? "ru" : "en"));
  };

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext)!;
