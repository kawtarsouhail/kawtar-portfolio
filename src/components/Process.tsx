"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Compass, Hammer, MessageCircle, Rocket, Sparkles, type LucideIcon } from "lucide-react";
import { usePrefs } from "./Providers";
import { SectionHead } from "./ui";
import { process } from "@/data/content";
import { colorUi } from "@/lib/pipelineColors";

const icons: Record<(typeof process.steps)[number]["icon"], LucideIcon> = {
  listen: MessageCircle,
  sketch: Compass,
  build: Hammer,
  ai: Sparkles,
  ship: Rocket,
};

export default function Process() {
  const { lang } = usePrefs();
  const ref = useRef<HTMLOListElement>(null);
  // La ligne se remplit au fur et à mesure qu'on fait défiler la page.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const gradX = "bg-gradient-to-r from-ingest via-retrieve to-action";
  const gradY = "bg-gradient-to-b from-ingest via-retrieve to-action";

  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHead kicker={process.kicker[lang]} title={process.title[lang]} dot="retrieve" mark="retrieve" />

      <ol ref={ref} className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-4">
        <div aria-hidden className="absolute bottom-5 left-5 top-5 w-0.5 -translate-x-1/2 bg-line md:hidden">
          <motion.div className={`h-full origin-top ${gradY}`} style={{ scaleY: scrollYProgress }} />
        </div>
        <div aria-hidden className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 -translate-y-1/2 bg-line md:block">
          <motion.div className={`h-full origin-left ${gradX}`} style={{ scaleX: scrollYProgress }} />
        </div>

        {process.steps.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <li key={i} className="relative flex gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 260, damping: 15, delay: i * 0.08 }}
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ring-4 ring-bg ${colorUi[s.color].fill}`}
              >
                <Icon size={17} />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              >
                <p className="font-mono text-[11px] text-muted">0{i + 1}</p>
                <h3 className="font-display text-base font-semibold text-fg">{s.title[lang]}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text[lang]}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
