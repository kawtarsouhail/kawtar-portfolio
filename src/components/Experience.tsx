"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { usePrefs } from "./Providers";
import { SectionHead } from "./ui";
import { experience } from "@/data/content";
import { colorUi } from "@/lib/pipelineColors";

export default function Experience() {
  const { lang } = usePrefs();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <SectionHead kicker={experience.kicker[lang]} title={experience.title[lang]} dot="ingest" mark="llm" />

      <div className="mt-6 flex gap-4 text-xs text-muted">
        {(["experience", "education"] as const).map((k) => (
          <span key={k} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${k === "experience" ? colorUi.action.dot : colorUi.ingest.dot}`} />
            {experience.legend[k][lang]}
          </span>
        ))}
      </div>

      <ol ref={ref} className="relative mt-10 grid gap-10 md:grid-cols-2 md:gap-y-12">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-line md:left-1/2"
        >
          <motion.div
            className="h-full origin-top bg-gradient-to-b from-ingest via-retrieve to-action"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        {experience.items.map((item, i) => {
          const isWork = item.type === "experience";
          const ui = isWork ? colorUi.action : colorUi.ingest;
          const Icon = isWork ? Briefcase : GraduationCap;
          const left = i % 2 === 0;
          return (
            <motion.li
              key={item.title.en + item.date}
              initial={{ opacity: 0, x: left ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className={`relative pl-12 ${
                left ? "md:col-start-1 md:pl-0 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
              }`}
            >
              <span
                className={`absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 ring-4 ring-bg ${ui.fill} ${
                  left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0"
                }`}
              >
                <Icon size={14} />
              </span>
              <p className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px] text-fg ${ui.border}`}>
                {item.date}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-fg">{item.title[lang]}</h3>
              <p className="text-sm text-muted">{item.place}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description[lang]}</p>
              )}
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
