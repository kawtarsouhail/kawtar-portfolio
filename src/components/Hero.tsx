"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { usePrefs } from "./Providers";
import PipelineDemo from "./PipelineDemo";

// Chaque mot-clé reprend la couleur de son rôle dans le pipeline.
const keywords = [
  { label: "RAG", dot: "bg-retrieve" },
  { label: "LLM", dot: "bg-llm" },
  { label: "n8n", dot: "bg-action" },
  { label: "FastAPI", dot: "bg-ingest" },
];

export default function Hero() {
  const { t } = usePrefs();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
      {/* Halos de couleur très doux : les quatre couleurs du pipeline */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-ingest opacity-20 blur-3xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-action opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-retrieve opacity-15 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-56 w-56 rounded-full bg-llm opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-fg sm:text-4xl lg:text-5xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {keywords.map((k) => (
              <li
                key={k.label}
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-fg"
              >
                <span className={`h-2 w-2 rounded-full ${k.dot}`} />
                {k.label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 rounded-full bg-ingest px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ingest dark:text-bg"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-line bg-surface px-6 py-3 text-sm text-fg transition-colors hover:border-ingest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ingest"
            >
              {t.hero.ctaContact}
            </button>
            <div className="ml-1 flex items-center gap-4">
              <a
                href="https://github.com/kawtarsouhail"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-fg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kawtar-souhail-44a969250/"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-fg"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex justify-center lg:justify-end"
        >
          <PipelineDemo />
        </motion.div>
      </div>
    </section>
  );
}
