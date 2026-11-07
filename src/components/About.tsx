"use client";

import { motion } from "framer-motion";
import { FileSearch, UserCheck, Zap, type LucideIcon } from "lucide-react";
import { usePrefs } from "./Providers";
import { CountUp, SectionHead } from "./ui";
import { about } from "@/data/content";
import { colorUi, type PipelineColor } from "@/lib/pipelineColors";

const icons: Record<(typeof about.beliefs)[number]["icon"], LucideIcon> = {
  search: FileSearch,
  human: UserCheck,
  zap: Zap,
};
const statColors: PipelineColor[] = ["ingest", "retrieve", "action", "llm"];

export default function About() {
  const { lang } = usePrefs();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHead kicker={about.kicker[lang]} title={about.title[lang]} dot="action" mark="llm" />

      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-10">
        {about.intro[lang].map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="max-w-md text-[15px] leading-relaxed text-muted"
          >
            {p}
          </motion.p>
        ))}
      </div>

      <p className="mt-14 font-mono text-xs uppercase tracking-wider text-muted">{about.beliefsTitle[lang]}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {about.beliefs.map((b, i) => {
          const Icon = icons[b.icon];
          const ui = colorUi[b.color];
          return (
            <motion.div
              key={b.color + i}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, rotate: i % 2 ? 0.8 : -0.8 }}
              transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.08 }}
              className={`rounded-3xl border border-line border-t-4 bg-surface p-5 ${ui.border}`}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${ui.fill}`}>
                <Icon size={16} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-fg">{b.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text[lang]}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {about.stats.map((s, i) => (
          <div key={i} className="rounded-2xl border border-line bg-surface px-4 py-4">
            <p className={`font-display text-3xl font-semibold ${colorUi[statColors[i]].text}`}>
              <CountUp to={s.value} />
            </p>
            <p className="mt-1 text-xs leading-snug text-muted">{s.label[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
