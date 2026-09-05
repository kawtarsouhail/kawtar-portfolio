"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm text-accent"
      >
        03 / Compétences
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 font-display text-3xl text-text sm:text-4xl"
      >
        Une stack pensée pour construire du produit, pas des maquettes.
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <Icon size={18} className="text-accent" />
                <p className="font-display text-lg text-text">{group.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
