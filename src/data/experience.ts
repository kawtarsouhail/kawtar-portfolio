export interface TimelineItem {
  type: "education" | "experience";
  title: string;
  place: string;
  date: string;
  description?: string;
}

// Ordered most recent first.
export const timeline: TimelineItem[] = [
  {
    type: "education",
    title: "Master — Ingénierie des Systèmes Intelligents",
    place: "Université Ibn Tofaïl, Kénitra",
    date: "2024 — 2026",
  },
  {
    type: "experience",
    title: "PFE / Data Science — Développement Web",
    place: "OCP Group, Jorf Lasfar",
    date: "2026",
    description:
      "Application web de visualisation des prédictions d'un modèle de machine learning, API REST en FastAPI, interface en React.",
  },
  {
    type: "education",
    title: "Licence Professionnelle — Génie Informatique & Gouvernance Digitale",
    place: "École Supérieure de Technologie, Kénitra",
    date: "2023 — 2024",
  },
  {
    type: "experience",
    title: "Stagiaire Concepteur-Développeur Web",
    place: "Web Agency, Casablanca",
    date: "2024",
    description:
      "Application de gestion de factures — back-end Laravel, front-end React.",
  },
  {
    type: "experience",
    title: "Stagiaire Concepteur-Développeur Web",
    place: "Data24, Casablanca",
    date: "2023",
    description:
      "Application de gestion des produits et des opérations de caisse — Spring Boot et Angular.",
  },
  {
    type: "education",
    title: "DUT — Génie Informatique",
    place: "École Supérieure de Technologie, Béni Mellal",
    date: "2021 — 2023",
  },
];
