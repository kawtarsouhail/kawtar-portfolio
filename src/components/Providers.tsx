"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionary, type Dict, type Lang } from "@/i18n/dictionary";

type Theme = "light" | "dark";

interface PrefsContext {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const Ctx = createContext<PrefsContext | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("fr");

  // Au chargement : on lit ce que le script du <head> a déjà appliqué.
  useEffect(() => {
    const dt = document.documentElement.dataset.theme;
    if (dt === "dark" || dt === "light") setTheme(dt);
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  return (
    <Ctx.Provider value={{ theme, toggleTheme, lang, setLang, t: dictionary[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

// Hook à utiliser dans n'importe quel composant : const { t, lang } = usePrefs();
export function usePrefs() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePrefs doit être utilisé dans <Providers>");
  return ctx;
}
