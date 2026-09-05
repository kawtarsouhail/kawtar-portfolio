"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm text-accent"
      >
        02 / Projets
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl font-display text-3xl text-text sm:text-4xl"
      >
        Des idées transformées en produits — du web classique à l&apos;IA appliquée.
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {/* 01 — full width feature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <ProjectCard project={projects[0]} />
        </motion.div>

        {/* 02 + 03 — two column */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[projects[1], projects[2]].map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        {/* 04 — full-width horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <ProjectCard project={projects[3]} />
        </motion.div>


      </div>
    </section>
  );
}
