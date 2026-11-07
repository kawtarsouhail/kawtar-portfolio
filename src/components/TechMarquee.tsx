"use client";

import { motion, useReducedMotion } from "framer-motion";
import { colorUi, type PipelineColor } from "@/lib/pipelineColors";

// Chaque techno reprend la couleur de son rôle dans les pipelines.
const rowA: [string, PipelineColor][] = [
  ["n8n", "action"], ["RAG", "retrieve"], ["LLM", "llm"], ["FastAPI", "action"], ["pgvector", "retrieve"], ["Python", "llm"],
];
const rowB: [string, PipelineColor][] = [
  ["PostgreSQL", "ingest"], ["Embeddings", "retrieve"], ["Docker", "action"], ["Telegram", "action"], ["Next.js", "ingest"], ["Groq", "llm"],
];

function Row({ items, reverse = false }: { items: [string, PipelineColor][]; reverse?: boolean }) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <motion.div
        className="flex w-max gap-10"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {doubled.map(([label, c], i) => (
          <span key={i} className="flex items-center gap-2.5 font-mono text-sm tracking-wider text-muted">
            <span className={`h-2 w-2 rounded-full ${colorUi[c].dot}`} />
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div aria-hidden className="space-y-3 border-y border-line bg-surface py-5">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </div>
  );
}
