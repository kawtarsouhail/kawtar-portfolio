"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-8 py-16 text-center md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(140,124,251,0.18), transparent 60%)",
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative font-display text-3xl leading-snug text-text sm:text-4xl md:text-5xl"
        >
          Une idée ?
          <br />
          Faisons-en quelque chose de réel.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-6 max-w-md font-body text-base text-muted"
        >
          Ouverte aux postes de développeuse junior full-stack ou IA/ML, au
          Maroc ou à distance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:kawtarsouhail698@gmail.com"
            data-cursor-hover
            className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            kawtarsouhail698@gmail.com
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-muted"
        >
          <a href="https://linkedin.com/in/kawtarsouhail" className="flex items-center gap-1.5 hover:text-text">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://github.com/kawtarsouhail" className="flex items-center gap-1.5 hover:text-text">
            <Github size={14} /> GitHub
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> Casablanca, Maroc
          </span>
        </motion.div>
      </div>
    </section>
  );
}
