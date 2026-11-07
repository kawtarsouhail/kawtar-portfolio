export type Lang = "fr" | "en";

export interface Stage {
  name: string;
  detail: string;
}

export interface Dict {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  availability: string;
  toggles: {
    toLight: string;
    toDark: string;
    language: string;
    menu: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    demo: {
      aria: string;
      note: string;
      question: string;
      waiting: string;
      stages: [Stage, Stage, Stage, Stage];
      chunks: [string, string];
      answer: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    legendTitle: string;
    legend: { ingest: string; retrieve: string; llm: string; action: string };
    modesLabel: string;
    modes: { quick: string; arch: string; demo: string };
    story: { problem: string; cost: string; solution: string; result: string };
    play: string;
    pause: string;
    step: string;
    of: string;
    branches: string;
    stack: string;
    code: string;
    screenshot: string;
    soon: string;
  };
}

// Toutes les phrases du site vivent ici, une version par langue.
export const dictionary: Record<Lang, Dict> = {
  fr: {
    nav: {
      about: "À propos",
      experience: "Parcours",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    availability: "Disponible",
    toggles: {
      toLight: "Passer au thème clair",
      toDark: "Passer au thème sombre",
      language: "Langue",
      menu: "Menu",
    },
    hero: {
      title: "Je transforme les tâches répétitives en workflows qui tournent seuls.",
      subtitle:
        "Ingénieure IA et automatisation. Je construis des systèmes RAG et LLM qui font gagner du temps à une équipe, au lieu de l’épuiser.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
      demo: {
        aria:
          "Animation : un message client est lu, une réponse est cherchée dans la FAQ, rédigée par un LLM, puis envoyée automatiquement.",
        note: "Illustration du fonctionnement de mon agent de triage",
        question: "Bonjour, je n’arrive pas à réinitialiser mon mot de passe.",
        waiting: "En attente d’un message…",
        stages: [
          { name: "Ingestion", detail: "Lecture et classement du message" },
          { name: "Recherche", detail: "Passages trouvés dans la FAQ" },
          { name: "LLM", detail: "Rédaction de la réponse" },
          { name: "Action", detail: "Réponse envoyée, ticket enregistré" },
        ],
        chunks: ["FAQ : réinitialiser son mot de passe", "FAQ : délai de l’email de réinitialisation"],
        answer: "Cliquez sur « Mot de passe oublié », puis suivez le lien reçu par email.",
      },
    },
    projects: {
      title: "Un problème, un système qui s’en occupe.",
      subtitle:
        "Chaque projet naît d’une galère bien réelle. Lisez l’histoire, ouvrez le capot, ou regardez-le tourner.",
      legendTitle: "Couleurs du pipeline",
      legend: { ingest: "Données", retrieve: "Recherche", llm: "Modèle et IA", action: "Action" },
      modesLabel: "Façon de lire le projet",
      modes: { quick: "En 30 secondes", arch: "Architecture", demo: "En images" },
      story: {
        problem: "Le problème",
        cost: "Ce que ça coûte",
        solution: "La solution",
        result: "Le résultat",
      },
      play: "Lancer le parcours",
      pause: "Pause",
      step: "Étape",
      of: "sur",
      branches: "Chemins possibles",
      stack: "Technologies",
      code: "Voir le code",
      screenshot: "Capture",
      soon: "Bientôt sur GitHub",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    availability: "Available",
    toggles: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      language: "Language",
      menu: "Menu",
    },
    hero: {
      title: "I turn repetitive work into workflows that run on their own.",
      subtitle:
        "AI and automation engineer. I build RAG and LLM systems that save a team time instead of wearing it out.",
      ctaProjects: "See my projects",
      ctaContact: "Get in touch",
      demo: {
        aria:
          "Animation: a customer message is read, an answer is looked up in the FAQ, drafted by an LLM, then sent automatically.",
        note: "Illustration of how my triage agent works",
        question: "Hi, I can’t reset my password.",
        waiting: "Waiting for a message…",
        stages: [
          { name: "Ingestion", detail: "Reading and classifying the message" },
          { name: "Retrieval", detail: "Passages found in the FAQ" },
          { name: "LLM", detail: "Drafting the reply" },
          { name: "Action", detail: "Reply sent, ticket logged" },
        ],
        chunks: ["FAQ: resetting your password", "FAQ: how long the reset email takes"],
        answer: "Click “Forgot password”, then follow the link sent to your email.",
      },
    },
    projects: {
      title: "One problem, one system that handles it.",
      subtitle:
        "Every project starts from a very real headache. Read the story, open the hood, or watch it run.",
      legendTitle: "Pipeline colors",
      legend: { ingest: "Data", retrieve: "Retrieval", llm: "Model and AI", action: "Action" },
      modesLabel: "How to read the project",
      modes: { quick: "In 30 seconds", arch: "Architecture", demo: "Screenshots" },
      story: {
        problem: "The problem",
        cost: "What it costs",
        solution: "The solution",
        result: "The result",
      },
      play: "Play walkthrough",
      pause: "Pause",
      step: "Step",
      of: "of",
      branches: "Possible paths",
      stack: "Stack",
      code: "View the code",
      screenshot: "Screenshot",
      soon: "Coming soon on GitHub",
    },
  },
};
