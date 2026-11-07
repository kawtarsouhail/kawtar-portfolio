import type { Lang } from "@/i18n/dictionary";
import type { PipelineColor } from "@/lib/pipelineColors";

export type L<T = string> = Record<Lang, T>;

// Astuce d'écriture : ce qui est entre *étoiles* est surligné en couleur dans les titres.

export const about = {
  kicker: { fr: "Qui je suis", en: "Who I am" } as L,
  title: {
    fr: "Je fabrique des systèmes qui *travaillent* pendant que l’équipe réfléchit.",
    en: "I build systems that *do the work* while the team does the thinking.",
  } as L,
  intro: {
    fr: [
      "Ingénieure IA et automatisation, diplômée d’un Master en Ingénierie des Systèmes Intelligents. J’ai d’abord appris à construire des applications complètes : React, Laravel, Spring Boot, FastAPI.",
      "Aujourd’hui, mon terrain de jeu, c’est ce qu’on y branche : des LLM, de la recherche sémantique, des workflows n8n. Mon réflexe : repérer la tâche qu’on refait cent fois, et la confier à un pipeline.",
    ],
    en: [
      "AI and automation engineer with a Master’s in Intelligent Systems Engineering. I first learned to build complete applications: React, Laravel, Spring Boot, FastAPI.",
      "Today my playground is what you plug into them: LLMs, semantic search, n8n workflows. My reflex: spot the task people redo a hundred times, and hand it to a pipeline.",
    ],
  } as L<string[]>,
  beliefsTitle: { fr: "Trois idées que je défends", en: "Three ideas I stand by" } as L,
  beliefs: [
    {
      color: "retrieve" as PipelineColor,
      icon: "search" as const,
      title: { fr: "Une IA doit montrer d’où elle tient sa réponse", en: "An AI should show where its answer comes from" },
      text: {
        fr: "Mes agents répondent à partir de documents retrouvés (c’est le RAG), pas à partir d’un souvenir inventé.",
        en: "My agents answer from retrieved documents (that’s RAG), not from an invented memory.",
      },
    },
    {
      color: "action" as PipelineColor,
      icon: "human" as const,
      title: { fr: "L’humain garde la main", en: "Humans keep the wheel" },
      text: {
        fr: "Quand c’est urgent ou douteux, l’agent passe la main à une personne, directement sur Telegram.",
        en: "When it’s urgent or doubtful, the agent hands over to a person, right on Telegram.",
      },
    },
    {
      color: "ingest" as PipelineColor,
      icon: "zap" as const,
      title: { fr: "Un bon automatisme se fait oublier", en: "Good automation fades into the background" },
      text: {
        fr: "Il tourne seul, laisse une trace dans une base, et ne dérange personne pour rien.",
        en: "It runs on its own, leaves a trace in a database, and never bothers anyone for nothing.",
      },
    },
  ],
  stats: [
    { value: 3, label: { fr: "stages en entreprise", en: "company internships" } },
    { value: 4, label: { fr: "pipelines à explorer plus haut", en: "pipelines to explore above" } },
    { value: 2, label: { fr: "langues de travail", en: "working languages" } },
    { value: 1, label: { fr: "Master en systèmes intelligents", en: "Master’s in intelligent systems" } },
  ],
};

export const process = {
  kicker: { fr: "Ma méthode", en: "My method" } as L,
  title: {
    fr: "Comment une idée devient *un système qui tourne*.",
    en: "How an idea becomes *a system that runs*.",
  } as L,
  steps: [
    {
      color: "ingest" as PipelineColor,
      icon: "listen" as const,
      title: { fr: "Écouter", en: "Listen" },
      text: {
        fr: "Quel est le vrai problème, et qui le vit au quotidien ?",
        en: "What’s the real problem, and who lives with it every day?",
      },
    },
    {
      color: "retrieve" as PipelineColor,
      icon: "sketch" as const,
      title: { fr: "Dessiner", en: "Sketch" },
      text: {
        fr: "Je trace le pipeline sur le papier avant d’écrire une seule ligne.",
        en: "I draw the pipeline on paper before writing a single line.",
      },
    },
    {
      color: "llm" as PipelineColor,
      icon: "build" as const,
      title: { fr: "Construire", en: "Build" },
      text: {
        fr: "n8n, FastAPI, une base de données : chaque brique fait une seule chose.",
        en: "n8n, FastAPI, a database: each piece does one thing.",
      },
    },
    {
      color: "action" as PipelineColor,
      icon: "ai" as const,
      title: { fr: "Brancher l’IA", en: "Plug in AI" },
      text: {
        fr: "Un LLM, seulement là où il apporte vraiment quelque chose.",
        en: "An LLM, only where it truly adds something.",
      },
    },
    {
      color: "ingest" as PipelineColor,
      icon: "ship" as const,
      title: { fr: "Livrer", en: "Ship" },
      text: {
        fr: "Je déploie, je regarde les cas ratés, je corrige.",
        en: "I deploy, look at the failures, and fix them.",
      },
    },
  ],
};

export interface SkillGroup {
  color?: PipelineColor;
  title: L;
  hint: L;
  items: string[];
}

export const skills = {
  kicker: { fr: "Mon atelier", en: "My workshop" } as L,
  title: {
    fr: "Une boîte à outils *rangée par rôle*.",
    en: "A toolbox *sorted by role*.",
  } as L,
  groups: [
    {
      color: "ingest",
      title: { fr: "Données", en: "Data" },
      hint: { fr: "Là où tout est rangé et préparé.", en: "Where everything is stored and prepared." },
      items: ["PostgreSQL", "MySQL", "SQL", "Pandas", "NumPy"],
    },
    {
      color: "retrieve",
      title: { fr: "Recherche", en: "Retrieval" },
      hint: { fr: "Retrouver le bon passage, pas juste un mot-clé.", en: "Find the right passage, not just a keyword." },
      items: ["RAG", "Embeddings", "pgvector", "Supabase"],
    },
    {
      color: "llm",
      title: { fr: "Modèles et IA", en: "Models and AI" },
      hint: { fr: "Comprendre, rédiger, prédire.", en: "Understand, write, predict." },
      items: ["Python", "LLM APIs", "Groq", "Scikit-learn", "TensorFlow", "LangChain"],
    },
    {
      color: "action",
      title: { fr: "Action", en: "Action" },
      hint: { fr: "Faire arriver les choses toutes seules.", en: "Make things happen on their own." },
      items: ["n8n", "FastAPI", "REST APIs", "Webhooks", "Telegram", "Docker", "Git"],
    },
  ] as SkillGroup[],
  base: {
    title: { fr: "Le socle full-stack", en: "The full-stack base" },
    hint: {
      fr: "Donner un visage et une API à tout ça.",
      en: "Giving all of this a face and an API.",
    },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Laravel", "Spring Boot"],
  } as SkillGroup,
};

export interface TimelineItem {
  type: "education" | "experience";
  title: L;
  place: string;
  date: string;
  description?: L;
}

export const experience = {
  kicker: { fr: "Parcours", en: "Journey" } as L,
  title: {
    fr: "Le chemin jusqu’ici, *étape par étape*.",
    en: "The road so far, *step by step*.",
  } as L,
  legend: {
    experience: { fr: "Expérience", en: "Work" } as L,
    education: { fr: "Formation", en: "Study" } as L,
  },
  // Du plus récent au plus ancien.
  items: [
    {
      type: "education",
      title: { fr: "Master en Ingénierie des Systèmes Intelligents", en: "Master’s in Intelligent Systems Engineering" },
      place: "Université Ibn Tofaïl, Kénitra",
      date: "2024 — 2026",
    },
    {
      type: "experience",
      title: { fr: "PFE : Data Science et développement web", en: "Final-year project: data science and web development" },
      place: "OCP Group, Jorf Lasfar",
      date: "2026",
      description: {
        fr: "Une application web qui affiche les prédictions d’un modèle de machine learning : API REST FastAPI, interface React.",
        en: "A web app that displays the predictions of a machine learning model: FastAPI REST API, React interface.",
      },
    },
    {
      type: "education",
      title: {
        fr: "Licence professionnelle en Génie Informatique et Gouvernance Digitale",
        en: "Professional Bachelor’s in Computer Engineering and Digital Governance",
      },
      place: "École Supérieure de Technologie, Kénitra",
      date: "2023 — 2024",
    },
    {
      type: "experience",
      title: { fr: "Stagiaire concepteur-développeur web", en: "Web designer-developer intern" },
      place: "Web Agency, Casablanca",
      date: "2024",
      description: {
        fr: "Une application de gestion de factures : back-end Laravel, front-end React.",
        en: "An invoice management app: Laravel back end, React front end.",
      },
    },
    {
      type: "experience",
      title: { fr: "Stagiaire concepteur-développeur web", en: "Web designer-developer intern" },
      place: "Data24, Casablanca",
      date: "2023",
      description: {
        fr: "Une application de gestion des produits et des opérations de caisse : Spring Boot et Angular.",
        en: "An app to manage products and cash-register operations: Spring Boot and Angular.",
      },
    },
    {
      type: "education",
      title: { fr: "DUT en Génie Informatique", en: "DUT in Computer Engineering" },
      place: "École Supérieure de Technologie, Béni Mellal",
      date: "2021 — 2023",
    },
  ] as TimelineItem[],
};

export const contact = {
  kicker: { fr: "Parlons-en", en: "Let’s talk" } as L,
  title: {
    fr: "Une tâche répétitive ? *Donnons-lui un pipeline.*",
    en: "A repetitive task? *Let’s give it a pipeline.*",
  } as L,
  text: {
    fr: "Ouverte aux postes d’AI Automation Engineer, d’ingénieure IA ou de développeuse junior full-stack, au Maroc ou à distance.",
    en: "Open to AI Automation Engineer, AI engineer or junior full-stack developer roles, in Morocco or remote.",
  } as L,
  copy: { fr: "Copier l’adresse", en: "Copy address" } as L,
  copied: { fr: "Copié !", en: "Copied!" } as L,
  location: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" } as L,
};

export const footer = {
  made: { fr: "Fait avec Next.js, Tailwind et framer-motion", en: "Made with Next.js, Tailwind and framer-motion" } as L,
  location: contact.location,
};
