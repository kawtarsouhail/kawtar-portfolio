"use client";

import { motion } from "framer-motion";
import { usePrefs } from "./Providers";
import { SectionHead } from "./ui";
import { skills, type SkillGroup } from "@/data/content";
import { colorUi } from "@/lib/pipelineColors";

function Card({ g, wide = false }: { g: SkillGroup; wide?: boolean }) {
  const { lang } = usePrefs();
  const ui = g.color ? colorUi[g.color] : null;
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45 }}
      className={`group rounded-3xl border border-line bg-surface p-5 ${wide ? "sm:col-span-2 lg:col-span-4" : ""}`}
    >
      {/* La barre colorée s'étire au survol de la carte */}
      <span
        className={`block h-1 w-10 rounded-full transition-all duration-500 group-hover:w-24 ${ui ? ui.dot : "bg-fg"}`}
      />
      <h3 className="mt-4 font-display text-base font-semibold text-fg">{g.title[lang]}</h3>
      <p className="mt-1 text-sm text-muted">{g.hint[lang]}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {g.items.map((x) => (
          <span
            key={x}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-xs text-fg transition-transform duration-200 hover:-translate-y-0.5 hover:border-fg"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${ui ? ui.dot : "bg-muted"}`} />
            {x}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { lang } = usePrefs();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHead kicker={skills.kicker[lang]} title={skills.title[lang]} dot="llm" mark="action" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.groups.map((g) => (
          <Card key={g.title.en} g={g} />
        ))}
        <Card g={skills.base} wide />
      </motion.div>
    </section>
  );
}
