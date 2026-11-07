"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { colorUi, type PipelineColor } from "@/lib/pipelineColors";

// Un mot entre *étoiles* est surligné au feutre : la barre se dessine quand il apparaît à l'écran.
export function Mark({ children, color = "llm" }: { children: ReactNode; color?: PipelineColor }) {
  return (
    <span className="relative inline-block">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className={`absolute inset-x-[-0.12em] bottom-[0.06em] -z-10 h-[0.45em] origin-left rounded-sm opacity-60 dark:opacity-40 ${colorUi[color].dot}`}
      />
      {children}
    </span>
  );
}

export function Rich({ text, color = "llm" }: { text: string; color?: PipelineColor }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <Mark key={i} color={color}>
            {part}
          </Mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Étiquette colorée + titre : le même en-tête pour toutes les sections.
export function SectionHead({
  kicker,
  title,
  dot = "ingest",
  mark = "llm",
}: {
  kicker: string;
  title: string;
  dot?: PipelineColor;
  mark?: PipelineColor;
}) {
  return (
    <div className="isolate">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
      >
        <span className={`h-2 w-2 rounded-full ${colorUi[dot].dot}`} />
        {kicker}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl"
      >
        <Rich text={title} color={mark} />
      </motion.h2>
    </div>
  );
}

// Un chiffre qui monte jusqu'à sa valeur quand il devient visible.
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setV(to);
      return;
    }
    const c = animate(0, to, { duration: 1.1, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{v}</span>;
}
