const technologies = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PYTHON",
  "LARAVEL",
  "SPRING BOOT",
  "POSTGRESQL",
  "AI",
  "LLM",
  "DOCKER",
];

export default function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <div className="border-y border-line bg-panel py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {items.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-mono text-sm tracking-wider text-muted"
            >
              {t}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
