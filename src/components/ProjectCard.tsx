"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

function Mockup({ type }: { type: Project["mockup"] }) {
  if (type === "ai") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <defs>
          <radialGradient id="aiGlow" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#8C7CFB" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8C7CFB" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="#15161F" />
        <rect width="400" height="240" fill="url(#aiGlow)" />
        {[
          [80, 60], [200, 40], [320, 90], [140, 130], [260, 160], [60, 180], [340, 190],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5} fill="#8C7CFB" opacity={0.8} />
        ))}
        <path
          d="M80,60 L200,40 M200,40 L320,90 M200,40 L140,130 M140,130 L260,160 M140,130 L60,180 M260,160 L340,190"
          stroke="#8C7CFB"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "data") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <rect width="400" height="240" fill="#15161F" />
        {[40, 70, 45, 90, 60, 100, 75, 55, 85, 65].map((h, i) => (
          <rect
            key={i}
            x={20 + i * 36}
            y={210 - h}
            width="20"
            height={h}
            rx="3"
            fill={i % 3 === 0 ? "#E8B36A" : "#25273A"}
          />
        ))}
        <path
          d="M20,180 L56,150 L92,190 L128,120 L164,160 L200,90 L236,140 L272,110 L308,150 L344,100"
          fill="none"
          stroke="#8C7CFB"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <rect width="400" height="240" fill="#15161F" />
        {[60, 160, 260, 340].map((x, i) => (
          <g key={i}>
            <rect x={x - 28} y={104} width="56" height="32" rx="8" fill="#1B1D29" stroke="#25273A" />
          </g>
        ))}
        <path
          d="M88,120 L132,120 M188,120 L232,120 M288,120 L312,120"
          stroke="#8C7CFB"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#8C7CFB" />
          </marker>
        </defs>
      </svg>
    );
  }

  // web
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full">
      <rect width="400" height="240" fill="#15161F" />
      <rect x="20" y="20" width="360" height="200" rx="10" fill="#1B1D29" stroke="#25273A" />
      <circle cx="38" cy="36" r="3.5" fill="#F7768E" />
      <circle cx="50" cy="36" r="3.5" fill="#E8B36A" />
      <circle cx="62" cy="36" r="3.5" fill="#9ECE6A" />
      <rect x="40" y="60" width="140" height="10" rx="3" fill="#25273A" />
      <rect x="40" y="82" width="220" height="8" rx="3" fill="#25273A" />
      <rect x="40" y="100" width="180" height="8" rx="3" fill="#25273A" />
      <rect x="40" y="130" width="90" height="60" rx="8" fill="#8C7CFB" opacity="0.25" />
      <rect x="145" y="130" width="90" height="60" rx="8" fill="#25273A" />
      <rect x="250" y="130" width="90" height="60" rx="8" fill="#25273A" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const isFeature = project.layout === "feature" || project.layout === "wide";
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Unify `images` and `image` into a single ordered list.
  const imageList =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  // Carousel only runs while hovered, and only if there's more than one image.
  useEffect(() => {
    if (!isHovered || imageList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 2800);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, project.images, project.image]);

  // Reset to the first image once the hover ends.
  useEffect(() => {
    if (!isHovered) setCurrentImage(0);
  }, [isHovered]);

  return (
    <motion.a
      href={project.demo || project.github || "#"}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover="hover"
      initial="rest"
      variants={{ rest: { y: 0 }, hover: { y: -4 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative block overflow-hidden rounded-3xl border border-line bg-panel transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/20 ${
        isFeature ? "col-span-full" : ""
      }`}
    >
      <div
        className={`grid ${
          project.layout === "wide" ? "md:grid-cols-[1.1fr_1fr]" : "grid-cols-1"
        }`}
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative overflow-hidden ${
            isFeature ? "aspect-[16/8]" : "aspect-[16/10]"
          }`}
        >
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : imageList.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={imageList[currentImage]}
                alt={project.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          ) : (
            <Mockup type={project.mockup} />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

          {/* Discreet "view project" label */}
          <motion.span
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -6 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-ink/60 px-3 py-1 font-mono text-[10px] text-white backdrop-blur"
          >
            View project
          </motion.span>

          {/* Minimal indicators */}
          {imageList.length > 1 && (
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5"
            >
              {imageList.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(i);
                  }}
                  aria-label={`Image ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentImage ? "w-5 bg-white" : "w-1 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-xs text-muted">
              <span>{project.number}</span>
              <span className="h-px w-6 bg-line" />
              <span className="text-accent">{project.category}</span>
            </div>

            <motion.h3
              variants={{ rest: { x: 0 }, hover: { x: 6 } }}
              transition={{ duration: 0.3 }}
              className="font-display text-2xl text-text md:text-3xl"
            >
              {project.title}
            </motion.h3>

            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-accent/40 group-hover:text-text"
                >
                  {t}
                </span>
              ))}
            </div>

            <motion.div
              variants={{ rest: { x: 0 }, hover: { x: 4 } }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 text-muted"
            >
              <Github size={16} />
              <ArrowUpRight size={18} className="text-accent" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
