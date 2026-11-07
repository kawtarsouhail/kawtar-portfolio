"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { usePrefs } from "./Providers";
import { Rich } from "./ui";
import { contact } from "@/data/content";

const EMAIL = "kawtarsouhail698@gmail.com";

export default function Contact() {
  const { lang } = usePrefs();
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  // Des taches de couleur qui flottent doucement derrière le texte
  const float = (d: number) =>
    reduce ? {} : { animate: { y: [0, -14, 0] }, transition: { duration: d, repeat: Infinity, ease: "easeInOut" as const } };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 text-center md:px-16 md:py-20">
        <motion.div aria-hidden {...float(6)} className="absolute -left-10 top-6 -z-10 h-44 w-44 rounded-full bg-ingest opacity-20 blur-3xl" />
        <motion.div aria-hidden {...float(7)} className="absolute -right-8 top-16 -z-10 h-40 w-40 rounded-full bg-action opacity-20 blur-3xl" />
        <motion.div aria-hidden {...float(8)} className="absolute bottom-0 left-1/3 -z-10 h-40 w-40 rounded-full bg-retrieve opacity-20 blur-3xl" />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-muted"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-retrieve" />
          {contact.kicker[lang]}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-4 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl"
        >
          <Rich text={contact.title[lang]} color="llm" />
        </motion.h2>

        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">{contact.text[lang]}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href={`mailto:${EMAIL}`}
            data-cursor-hover
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-full bg-ingest px-5 py-2.5 text-sm font-medium text-white dark:text-bg"
          >
            <Mail size={16} />
            {EMAIL}
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
          <button
            onClick={copy}
            data-cursor-hover
            className="flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2.5 text-sm text-fg transition-colors hover:border-ingest focus-visible:outline focus-visible:outline-2 focus-visible:outline-ingest"
          >
            {copied ? <Check size={15} className="text-retrieve" /> : <Copy size={15} />}
            {copied ? contact.copied[lang] : contact.copy[lang]}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-muted">
          <a href="https://www.linkedin.com/in/kawtar-souhail-44a969250/" className="flex items-center gap-1.5 hover:text-fg">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://github.com/kawtarsouhail" className="flex items-center gap-1.5 hover:text-fg">
            <Github size={14} /> GitHub
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {contact.location[lang]}
          </span>
        </div>
      </div>
    </section>
  );
}
