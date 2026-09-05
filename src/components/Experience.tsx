"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm text-accent"
      >
        04 / Parcours
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 font-display text-3xl text-text sm:text-4xl"
      >
        Expérience & formation.
      </motion.h2>

      <div className="relative border-l border-line pl-8">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title + item.date}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pb-12 last:pb-0"
          >
            <span
              className={`absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.type === "experience" ? "bg-accent" : "bg-muted"
              }`}
            />
            <p className="font-mono text-xs text-muted">{item.date}</p>
            <p className="mt-1 font-display text-lg text-text">{item.title}</p>
            <p className="font-body text-sm text-muted">{item.place}</p>
            {item.description && (
              <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
