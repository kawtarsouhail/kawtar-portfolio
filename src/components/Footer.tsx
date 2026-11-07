"use client";

import { usePrefs } from "./Providers";
import { footer } from "@/data/content";

export default function Footer() {
  const { lang } = usePrefs();
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-muted md:flex-row">
        <span>© 2026 Kawtar Souhail</span>
        <span>{footer.made[lang]}</span>
        <span>{footer.location[lang]}</span>
      </div>
    </footer>
  );
}
