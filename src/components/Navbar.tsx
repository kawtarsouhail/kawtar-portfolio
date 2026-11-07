"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePrefs } from "./Providers";

const ids = ["about", "experience", "projects", "skills", "contact"] as const;

function LangSwitch() {
  const { lang, setLang, t } = usePrefs();
  return (
    <div
      role="group"
      aria-label={t.toggles.language}
      className="flex items-center rounded-full border border-line bg-surface p-0.5 text-xs font-medium"
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest ${
            lang === l ? "bg-ingest text-white dark:text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function ThemeSwitch() {
  const { toggleTheme, t } = usePrefs();
  return (
    <button
      onClick={toggleTheme}
      aria-label={`${t.toggles.toDark} / ${t.toggles.toLight}`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-ingest focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
    >
      {/* Les deux icônes existent ; CSS affiche la bonne selon le thème (pas de décalage au chargement) */}
      <Moon size={15} className="dark:hidden" />
      <Sun size={15} className="hidden dark:block" />
    </button>
  );
}

export default function Navbar() {
  const { t } = usePrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgb(var(--c-bg) / 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgb(var(--c-line))" : "1px solid transparent",
      }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <button onClick={() => scrollTo("hero")} className="font-display text-lg font-semibold tracking-tight text-fg">
          Kawtar Souhail
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {ids.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {t.nav[id]}
            </button>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-retrieve opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-retrieve" />
            </span>
            <span className="text-xs text-muted">{t.availability}</span>
          </div>
          <LangSwitch />
          <ThemeSwitch />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch />
          <ThemeSwitch />
          <button
            className="ml-1 text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.toggles.menu}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {ids.map((id, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(id)}
                  className="py-2 text-left text-base text-muted transition-colors hover:text-fg"
                >
                  {t.nav[id]}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
