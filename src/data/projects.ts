export type ProjectLayout = "feature" | "split" | "wide";
export type ProjectMockup = "ai" | "web" | "data" | "automation";

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  layout: ProjectLayout;
  mockup: ProjectMockup;
  github?: string;
  demo?: string;
  image?: string; 
  images?:string[];
  video?: string; 
  // optional real screenshot, falls back to CSS mockup
}

export const projects: Project[] = [
  {
    number: "01",

    title: "AI Soft Sensor ",

    category: "AI & Data Science",

    description:
      "Soft sensor intelligent pour l'estimation en temps réel de la concentration en P₂O₅ dans le procédé industriel de production d'acide phosphorique.",

    tech: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "React"
    ],

    layout: "feature",

    mockup: "ai",

    github: "https://github.com/kawtarsouhail",

    images: [
          "/images/pr1.png",
          "/images/pr11.png",
          "/images/pr12.png",
          "/images/pr13.png",
          "/images/pr14.png",
          "/images/pr15.png",
          "/images/pr16.png",
        ]
  },



 {
    number: "02",
    title: "Application de Gestion des Ressources Humaines",
    category: "Web Development",
    description:
      "Application web permettant de gérer les employés, leurs informations et les principales opérations liées aux ressources humaines au sein d'une entreprise.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    layout: "split",
    mockup: "web",
    github: "https://github.com/kawtarsouhail",

     images: [
        "/images/pr41.jpeg",
        "/images/pr42.jpeg",
        "/images/pr43.jpeg",
        "/images/pr44.jpeg",
        "/images/pr45.jpeg",
        "/images/pr46.jpeg",
        "/images/pr47.jpeg",
        "/images/pr48.jpeg",

      ]
  },

  {
    number: "03",
    title: "POS Management System",
    category: "WEB",
    description:
      "Application web de point de vente permettant de gérer les produits, les ventes et les stocks, avec une interface dédiée au suivi des opérations commerciales.",
    tech: ["Angular", "Spring Boot", "PostgreSql"],
    layout: "split",
    mockup: "web",
    github: "https://github.com/kawtarsouhail",
    images: [
        "/images/pr31.png",
        "/images/pr32.png",
        "/images/pr33.png",
        "/images/pr34.png",
        "/images/pr35.png",
        "/images/pr36.png",
        "/images/pr37.png",
      ]
  },

    {
  number: "04",
  title: "Invoice Management",
  category: "WEB",
  description:"Application full-stack de gestion des factures et des méthodes de paiement au sein d'une entreprise.",
  tech: ["React", "Laravel", "MySQL"],
  layout: "feature",
  mockup: "web",
  github: "https://github.com/kawtarsouhail/kawtarsouhail-invoice-management-web-application",
    images: [
        "/images/pr21.png",
        "/images/pr22.png",
        "/images/pr23.png",
        "/images/pr24.png",
        "/images/pr25.png",
        "/images/pr26.png",
        "/images/pr27.png",
        "/images/pr28.png",
      ]
},

];
