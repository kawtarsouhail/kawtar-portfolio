"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Database, Search, Sparkles, Zap } from "lucide-react";
import { usePrefs } from "./Providers";

// Une couleur par étape du pipeline. Les classes sont écrites en entier
// pour que Tailwind les détecte au moment de la compilation.
const stageUi = [
  {
    icon: Database,
    fill: "bg-ingest border-ingest text-white dark:text-[#14102A]",
    done: "border-ingest text-ingest",
    bar: "border-ingest",
    dot: "bg-ingest",
  },
  {
    icon: Search,
    fill: "bg-retrieve border-retrieve text-[#1B1535]",
    done: "border-retrieve text-retrieve",
    bar: "border-retrieve",
    dot: "bg-retrieve",
  },
  {
    icon: Sparkles,
    fill: "bg-llm border-llm text-[#1B1535]",
    done: "border-llm text-llm",
    bar: "border-llm",
    dot: "bg-llm",
  },
  {
    icon: Zap,
    fill: "bg-action border-action text-[#1B1535]",
    done: "border-action text-action",
    bar: "border-action",
    dot: "bg-action",
  },
] as const;

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3 },
};

export default function PipelineDemo() {
  const { t, lang } = usePrefs();
  const d = t.hero.demo;
  const reduced = useReducedMotion();

  // step 0 = le message s'écrit ; 1 à 4 = les quatre étapes du pipeline
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(0);

  // Quand la langue change, on recommence l'animation depuis le début.
  useEffect(() => {
    setStep(0);
    setTyped(0);
  }, [lang]);

  useEffect(() => {
    if (reduced) return;
    let id: ReturnType<typeof setTimeout>;
    if (step === 0) {
      if (typed < d.question.length) {
        id = setTimeout(() => setTyped(typed + 1), 38);
      } else {
        id = setTimeout(() => setStep(1), 600);
      }
    } else if (step < 4) {
      id = setTimeout(() => setStep(step + 1), 1700);
    } else {
      id = setTimeout(() => {
        setStep(0);
        setTyped(0);
      }, 4500);
    }
    return () => clearTimeout(id);
  }, [step, typed, d.question.length, reduced]);

  // Si le visiteur a désactivé les animations : on montre l'état final, fixe.
  const shownStep = reduced ? 4 : step;
  const shownTyped = reduced ? d.question.length : typed;
  const progress = shownStep <= 1 ? 0 : ((shownStep - 1) / 3) * 100;

  return (
    <div
      role="img"
      aria-label={d.aria}
      className="w-full max-w-md rounded-3xl border border-line bg-surface p-5 shadow-xl shadow-ingest/10 sm:p-6"
    >
      {/* Le message du client */}
      <div className="flex min-h-[76px] justify-end">
        <div className="max-w-[92%] rounded-2xl rounded-br-sm bg-surface2 px-4 py-3 text-sm leading-relaxed text-fg">
          {d.question.slice(0, shownTyped)}
          {shownStep === 0 && shownTyped < d.question.length && (
            <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-fg" />
          )}
        </div>
      </div>

      {/* Les quatre étapes */}
      <div className="relative mt-5 grid grid-cols-4 gap-2">
        <div className="absolute left-[12.5%] right-[12.5%] top-5 h-0.5 bg-line">
          <motion.div
            className="h-full bg-gradient-to-r from-ingest via-retrieve to-action"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        {stageUi.map((s, i) => {
          const Icon = s.icon;
          const active = shownStep === i + 1;
          const done = shownStep > i + 1;
          return (
            <div key={i} className="relative flex flex-col items-center gap-2">
              <motion.div
                initial={false}
                animate={{ scale: active ? 1.12 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  active ? s.fill : done ? `bg-surface ${s.done}` : "border-line bg-surface text-muted"
                }`}
              >
                <Icon size={17} />
              </motion.div>
              <span className={`text-xs font-medium ${active || done ? "text-fg" : "text-muted"}`}>
                {d.stages[i].name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Ce que le système fait à l'étape en cours */}
      <div className="mt-5 min-h-[136px] rounded-2xl border border-line bg-bg/60 p-4">
        <AnimatePresence mode="wait">
          <motion.div key={shownStep} {...fade} className="space-y-2.5 text-sm">
            {shownStep === 0 && <p className="text-muted">{d.waiting}</p>}

            {shownStep === 1 && (
              <p className="flex items-center gap-2 text-fg">
                <span className="h-2 w-2 rounded-full bg-ingest" />
                {d.stages[0].detail}
              </p>
            )}

            {shownStep === 2 && (
              <>
                <p className="text-xs text-muted">{d.stages[1].detail}</p>
                {d.chunks.map((c, i) => (
                  <motion.p
                    key={c}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.25 }}
                    className="rounded-lg border-l-4 border-retrieve bg-surface px-3 py-2 text-fg"
                  >
                    {c}
                  </motion.p>
                ))}
              </>
            )}

            {shownStep >= 3 && (
              <>
                <p className="text-xs text-muted">{d.stages[2].detail}</p>
                <p className="rounded-lg border-l-4 border-llm bg-surface px-3 py-2 leading-relaxed text-fg">
                  {d.answer}
                </p>
                {shownStep === 4 && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-center gap-2 text-xs font-medium text-fg"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-action text-[#1B1535]">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {d.stages[3].detail}
                  </motion.p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-4 text-center text-xs text-muted">{d.note}</p>
    </div>
  );
}
