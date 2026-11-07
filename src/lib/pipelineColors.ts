export type PipelineColor = "ingest" | "retrieve" | "llm" | "action";

// Classes écrites en entier pour que Tailwind les détecte à la compilation.
export const colorUi: Record<
  PipelineColor,
  { dot: string; text: string; border: string; fill: string }
> = {
  ingest: {
    dot: "bg-ingest",
    text: "text-ingest",
    border: "border-ingest",
    fill: "bg-ingest border-ingest text-white dark:text-[#14102A]",
  },
  retrieve: {
    dot: "bg-retrieve",
    text: "text-retrieve",
    border: "border-retrieve",
    fill: "bg-retrieve border-retrieve text-[#1B1535]",
  },
  llm: {
    dot: "bg-llm",
    text: "text-llm",
    border: "border-llm",
    fill: "bg-llm border-llm text-[#1B1535]",
  },
  action: {
    dot: "bg-action",
    text: "text-action",
    border: "border-action",
    fill: "bg-action border-action text-[#1B1535]",
  },
};
