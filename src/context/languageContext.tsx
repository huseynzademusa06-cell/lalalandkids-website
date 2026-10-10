import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ru";
const LanguageContext = createContext<{ lang: Lang; toggle: () => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    try {
      const saved = localStorage.getItem("llk-lang");
      if (saved === "en" || saved === "ru") setLang(saved);
    } catch {}
  }, [lang]);

  const toggle = () => {
    const next = lang === "en" ? "ru" : "en";
    setLang(next);
    try {
      localStorage.setItem("llk-lang", next);
    } catch {}
  };

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext)!;
