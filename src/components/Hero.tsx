"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles, Database, Wifi } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#1B1D29 1px, transparent 1px), linear-gradient(90deg, #1B1D29 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted">
              Disponible pour de nouvelles opportunités
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl leading-[1.05] text-text sm:text-6xl lg:text-7xl"
          >
            Salut, je suis
            <br />
            <span className="text-accent">Kawtar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md font-body text-lg text-muted"
          >
            Développeuse Full-Stack Junior. Je construis des produits web
            avec du code, de la donnée et de l&apos;IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Voir mes projets
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-line px-6 py-3 font-body text-sm text-text transition-colors hover:border-accent"
            >
              Me contacter
            </button>

            <div className="ml-2 flex items-center gap-4">
              <a
                href="https://github.com/kawtarsouhail"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-text"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kawtarsouhail"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-text"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: animated digital workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden h-[460px] lg:block"
        >
          {/* Browser window with mini dashboard */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-6 w-[380px] rounded-2xl border border-line bg-panel shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F7768E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#9ECE6A]" />
              <span className="ml-3 font-mono text-[11px] text-muted">
                kawtarsouhail.dev
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-end gap-1.5">
                {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: h }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                    className="w-5 rounded-sm bg-accentSoft"
                    style={{ backgroundColor: i === 5 ? "#8C7CFB" : undefined }}
                  />
                ))}
              </div>
              <div className="h-2 w-3/4 rounded-full bg-line" />
              <div className="h-2 w-1/2 rounded-full bg-line" />
            </div>
          </motion.div>

          {/* API status chip */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-4 top-0 flex items-center gap-2 rounded-xl border border-line bg-panel2 px-4 py-3 shadow-xl shadow-black/30"
          >
            <Wifi size={14} className="text-[#9ECE6A]" />
            <span className="font-mono text-xs text-text">API · 200 OK</span>
          </motion.div>

          {/* Database card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 right-0 flex items-center gap-3 rounded-xl border border-line bg-panel2 px-4 py-3 shadow-xl shadow-black/30"
          >
            <Database size={16} className="text-accent" />
            <div>
              <p className="font-mono text-xs text-text">PostgreSQL</p>
              <p className="font-mono text-[10px] text-muted">connecté</p>
            </div>
          </motion.div>

          {/* AI assistant bubble */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-0 left-8 w-64 rounded-2xl rounded-bl-sm border border-accent/30 bg-panel px-4 py-3 shadow-xl shadow-accent/10"
          >
            <div className="mb-1.5 flex items-center gap-1.5">
              <Sparkles size={13} className="text-accent" />
              <span className="font-mono text-[11px] text-accent">
                Assistant IA
              </span>
            </div>
            <p className="font-body text-xs leading-relaxed text-muted">
              Prêt à intégrer un modèle de prédiction à votre interface ?
            </p>
          </motion.div>

          {/* Floating tech tags */}
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 top-52 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-muted shadow-lg shadow-black/20"
          >
            TypeScript
          </motion.span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute left-52 bottom-40 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-muted shadow-lg shadow-black/20"
          >
            LangChain
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
