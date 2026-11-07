"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { usePrefs } from "./Providers";

// Une capture d'écran dans une « fenêtre », sur un fond pointillé comme le canevas n8n.
// Un clic l'agrandit en plein écran (Échap pour fermer).
export default function WorkflowShot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const { lang } = usePrefs();
  const [open, setOpen] = useState(false);
  const zoom = lang === "fr" ? "Agrandir la capture" : "Enlarge screenshot";
  const close = lang === "fr" ? "Fermer" : "Close";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-action" />
          <span className="h-2.5 w-2.5 rounded-full bg-llm" />
          <span className="h-2.5 w-2.5 rounded-full bg-retrieve" />
          <span className="ml-3 font-mono text-[11px] text-muted">n8n</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label={zoom}
          className="group relative block w-full cursor-zoom-in text-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }}
        >
          <img src={src} alt={alt} className="mx-auto max-h-[460px] w-full object-contain p-3" />
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-[11px] text-fg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={12} />
            {zoom}
          </span>
        </button>
      </div>
      {caption && <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{caption}</figcaption>}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={close}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg text-fg"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[94vw] rounded-xl bg-white object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}
