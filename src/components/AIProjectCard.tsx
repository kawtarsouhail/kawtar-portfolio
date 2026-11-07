"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  BrainCircuit,
  Database,
  Filter,
  GitBranch,
  Github,
  Film,
  Inbox,
  Mic,
  Monitor,
  Pause,
  Play,
  Search,
  Server,
  Sparkles,
  Table2,
  type LucideIcon,
} from "lucide-react";
import { usePrefs } from "./Providers";
import WorkflowShot from "./WorkflowShot";
import { colorUi } from "@/lib/pipelineColors";
import type { AIProject, IconKey } from "@/data/work";

const icons: Record<IconKey, LucideIcon> = {
  inbox: Inbox,
  filter: Filter,
  search: Search,
  sparkles: Sparkles,
  branch: GitBranch,
  bell: Bell,
  database: Database,
  table: Table2,
  brain: BrainCircuit,
  server: Server,
  monitor: Monitor,
  mic: Mic,
  film: Film,
};

type Mode = "quick" | "arch" | "demo";

export default function AIProjectCard({ project }: { project: AIProject }) {
  const { t, lang } = usePrefs();
  const p = t.projects;
  const images = project.images ?? [];
  const modes: Mode[] = images.length > 0 ? ["quick", "arch", "demo"] : ["quick", "arch"];

  const [mode, setMode] = useState<Mode>("quick");
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [img, setImg] = useState(0);

  const n = project.steps.length;
  const step = project.steps[active];
  const progress = n > 1 ? (active / (n - 1)) * 100 : 0;

  // Parcours automatique : lancé uniquement quand le visiteur clique sur « Lancer ».
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setActive((a) => Math.min(a + 1, n - 1)), 2300);
    return () => clearInterval(id);
  }, [playing, n]);

  useEffect(() => {
    if (playing && active >= n - 1) setPlaying(false);
  }, [active, playing, n]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (active >= n - 1) setActive(0);
    setPlaying(true);
  };

  const pickMode = (m: Mode) => {
    setMode(m);
    setPlaying(false);
  };

  const storyKeys = ["problem", "cost", "solution", "result"] as const;
  const panelId = `${project.id}-panel`;

  return (
    <article className="rounded-[2rem] border border-line bg-surface p-6 md:p-9">
      {/* En-tête : titre et choix du mode de lecture */}
      <header className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">{project.category[lang]}</p>
          <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-fg md:text-2xl">
            {project.title[lang]}
          </h3>
        </div>

        <div
          role="tablist"
          aria-label={p.modesLabel}
          className="flex w-fit shrink-0 items-center rounded-full border border-line bg-bg p-1 text-sm"
        >
          {modes.map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              aria-controls={panelId}
              onClick={() => pickMode(m)}
              className={`rounded-full px-4 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest ${
                mode === m ? "bg-ingest font-medium text-white dark:text-bg" : "text-muted hover:text-fg"
              }`}
            >
              {p.modes[m]}
            </button>
          ))}
        </div>
      </header>

      <div id={panelId} role="tabpanel" className="mt-8 min-h-[320px]">
        <AnimatePresence mode="wait">
          {/* ---------- Mode 1 : l'histoire en 4 temps ---------- */}
          {mode === "quick" && (
            <motion.ol
              key="quick"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              {storyKeys.map((k, i) => (
                <li key={k} className="relative flex gap-4 pb-7 last:pb-0">
                  {i < storyKeys.length - 1 && (
                    <span aria-hidden className="absolute left-4 top-9 h-[calc(100%-2.25rem)] w-px bg-line" />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-xs text-muted">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">{p.story[k]}</p>
                    <p
                      className={
                        k === "solution"
                          ? "mt-1.5 rounded-2xl border border-ingest/30 bg-ingest/10 p-3.5 text-[15px] leading-relaxed text-fg"
                          : "mt-1 text-[15px] leading-relaxed text-fg"
                      }
                    >
                      {project.story[k][lang]}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ol>
          )}

          {/* ---------- Mode 2 : le pipeline cliquable ---------- */}
          {mode === "arch" && (
            <motion.div
              key="arch"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex justify-end">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-fg transition-colors hover:border-ingest focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
                >
                  {playing ? <Pause size={14} /> : <Play size={14} />}
                  {playing ? p.pause : p.play}
                </button>
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="relative flex min-w-[560px]">
                  {/* La ligne qui se remplit jusqu'à l'étape choisie */}
                  <div
                    aria-hidden
                    className="absolute top-5 h-0.5 bg-line"
                    style={{ left: `${50 / n}%`, right: `${50 / n}%` }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-ingest via-retrieve to-action"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>

                  {project.steps.map((s, i) => {
                    const Icon = icons[s.icon];
                    const ui = colorUi[s.color];
                    const isActive = i === active;
                    const isDone = i < active;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActive(i);
                          setPlaying(false);
                        }}
                        aria-pressed={isActive}
                        aria-label={`${p.step} ${i + 1} ${p.of} ${n} : ${s.title[lang]}`}
                        className="relative flex flex-1 flex-col items-center gap-2 px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
                      >
                        <motion.span
                          initial={false}
                          animate={{ scale: isActive ? 1.15 : 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                            isActive
                              ? ui.fill
                              : isDone
                              ? `bg-surface ${ui.border} ${ui.text}`
                              : "border-line bg-surface text-muted hover:border-muted"
                          }`}
                        >
                          <Icon size={17} />
                        </motion.span>
                        <span
                          className={`text-center text-xs leading-tight ${
                            i <= active ? "font-medium text-fg" : "text-muted"
                          }`}
                        >
                          {s.title[lang]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Le détail de l'étape choisie */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${project.id}-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`mt-6 rounded-2xl border-l-4 bg-bg/60 p-5 md:p-6 ${colorUi[step.color].border}`}
                >
                  <p className="text-xs text-muted">
                    {p.step} {active + 1} {p.of} {n}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold text-fg">{step.title[lang]}</h4>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{step.text[lang]}</p>

                  {step.branches && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs text-muted">{p.branches}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.branches.map((b) => (
                          <span
                            key={b}
                            className={`rounded-full border-2 px-3 py-1 font-mono text-xs text-fg ${colorUi[step.color].border}`}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.tech.map((x) => (
                      <span
                        key={x}
                        className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-fg"
                      >
                        <span className={`h-2 w-2 rounded-full ${colorUi[step.color].dot}`} />
                        {x}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ---------- Mode 3 : les captures d'écran ---------- */}
          {mode === "demo" && images.length > 0 && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <WorkflowShot
                src={images[img]}
                alt={`${project.title[lang]} : ${p.screenshot} ${img + 1}`}
                caption={project.captions?.[img]?.[lang]}
              />
              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setImg(i)}
                      aria-label={`${p.screenshot} ${i + 1}`}
                      aria-pressed={i === img}
                      className={`h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        i === img ? "border-ingest" : "border-line opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pied de carte : technologies et code */}
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs text-muted">{p.stack}</span>
          {project.tech.map((x) => (
            <span key={x} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {x}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-fg transition-colors hover:border-ingest focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
          >
            <Github size={16} />
            {p.code}
          </a>
        )}
        {!project.github && project.soon && (
          <span className="rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">
            {p.soon}
          </span>
        )}
      </footer>
    </article>
  );
}
