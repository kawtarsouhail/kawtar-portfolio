"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "Comprendre le problème et le besoin réel." },
  { number: "02", title: "Design", description: "Penser l'UX et l'architecture avant le code." },
  { number: "03", title: "Build", description: "Frontend, backend et base de données." },
  { number: "04", title: "Intelligent", description: "Intégrer l'IA quand elle apporte une vraie valeur." },
  { number: "05", title: "Ship", description: "Déployer, observer, itérer." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm text-accent"
      >
        Comment je travaille
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 font-display text-3xl text-text sm:text-4xl"
      >
        De l&apos;idée au produit livré.
      </motion.h2>

      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" />
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-ink font-mono text-xs text-accent">
              {step.number}
            </div>
            <p className="font-display text-lg text-text">{step.title}</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
