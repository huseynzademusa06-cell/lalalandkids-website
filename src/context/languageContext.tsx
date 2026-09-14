import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ru";
const LanguageContext = createContext<{ lang: Lang; toggle: () => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("llk-lang") as Lang) || "en";
  });

  useEffect(() => {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("llk-lang", lang);
    } catch {}
  }, [lang]);

  const toggle = () => {
    setLang((l) => (l === "en" ? "ru" : "en"));
  };

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext)!;
