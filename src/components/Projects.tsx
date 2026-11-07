"use client";

import { usePrefs } from "./Providers";
import AIProjectCard from "./AIProjectCard";
import { aiProjects } from "@/data/work";
import { colorUi, type PipelineColor } from "@/lib/pipelineColors";

const legendOrder: PipelineColor[] = ["ingest", "retrieve", "llm", "action"];

export default function Projects() {
  const { t } = usePrefs();
  const p = t.projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <h2 className="max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
        {p.title}
      </h2>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{p.subtitle}</p>

      {/* La légende explique ce que veulent dire les couleurs */}
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <span className="text-muted">{p.legendTitle}</span>
        {legendOrder.map((c) => (
          <span key={c} className="flex items-center gap-2 text-fg">
            <span className={`h-2.5 w-2.5 rounded-full ${colorUi[c].dot}`} />
            {p.legend[c]}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        {aiProjects.map((project) => (
          <AIProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}
