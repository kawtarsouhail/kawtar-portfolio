"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "projets construits" },
  { value: "3", label: "stages effectués" },
  { value: "5", label: "stacks techniques" },
  { value: "IA", label: "& automatisation" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-mono text-sm text-accent"
      >
        01 / À propos
      </motion.p>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl leading-snug text-text sm:text-4xl md:text-5xl"
        >
          Je construis des choses qui vivent entre l&apos;ingénierie logicielle
          et l&apos;intelligence artificielle.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-base leading-relaxed text-muted"
        >
          Diplômée d&apos;un Master en Ingénierie des Systèmes Intelligents,
          j&apos;ai conçu des applications avec React, Laravel, Spring Boot,
          Angular et FastAPI — de l&apos;interface jusqu&apos;aux API et aux
          bases de données. Aujourd&apos;hui, je m&apos;intéresse surtout à
          intégrer des fonctionnalités d&apos;IA et d&apos;automatisation dans
          des applications que des gens utilisent vraiment.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent/40"
          >
            <p className="font-display text-3xl text-text">{s.value}</p>
            <p className="mt-1 font-body text-sm text-muted">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
