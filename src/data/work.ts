import type { Lang } from "@/i18n/dictionary";
import type { PipelineColor } from "@/lib/pipelineColors";
import { projects } from "./projects";

export type Localized<T = string> = Record<Lang, T>;

export type IconKey =
  | "inbox"
  | "filter"
  | "search"
  | "sparkles"
  | "branch"
  | "bell"
  | "database"
  | "table"
  | "brain"
  | "server"
  | "monitor"
  | "mic"
  | "film";

export interface PipelineStep {
  id: string;
  color: PipelineColor;
  icon: IconKey;
  title: Localized; // court : il tient sous l'icône
  text: Localized;
  tech: string[];
  branches?: string[]; // chemins possibles (étape de décision)
}

export interface AIProject {
  id: string;
  title: Localized;
  category: Localized;
  tech: string[];
  github?: string;
  soon?: boolean; // pas encore sur GitHub : affiche « Bientôt sur GitHub »
  captions?: Localized[]; // une légende par image
  images?: string[]; // si vide, le mode « En images » n'apparaît pas
  story: {
    problem: Localized;
    cost: Localized;
    solution: Localized;
    result: Localized;
  };
  steps: PipelineStep[];
}

// Récupère les images/liens déjà présents dans projects.ts pour ne rien dupliquer.
const old = (n: string) => projects.find((p) => p.number === n);

export const aiProjects: AIProject[] = [
  {
    id: "triage-rag",
    title: {
      fr: "Agent de triage du support client",
      en: "Customer support triage agent",
    },
    category: { fr: "Automatisation et RAG", en: "Automation and RAG" },
    tech: ["n8n", "FastAPI", "PostgreSQL", "pgvector", "Supabase", "Telegram"],
    github: "https://github.com/kawtarsouhail/support-agent-n8n-fastapi-rag",
    images: ["/images/triage-workflow.png"],
    captions: [
      {
        fr: "Le vrai workflow n8n, tout au vert : classification, recherche FAQ, puis trois sorties qui laissent chacune une trace dans PostgreSQL.",
        en: "The real n8n workflow, all green: classification, FAQ search, then three outputs that each leave a trace in PostgreSQL.",
      },
    ],
    story: {
      problem: {
        fr: "Le support répond cent fois à la même question… pendant qu’un message urgent dort tout en bas de la pile.",
        en: "Support answers the same question a hundred times, while one urgent message sleeps at the bottom of the pile.",
      },
      cost: {
        fr: "Des clients qui attendent, une équipe qui s’épuise, et l’important qui passe à travers.",
        en: "Customers waiting, a team burning out, and the important stuff slipping through.",
      },
      solution: {
        fr: "Un agent lit chaque message, flaire l’urgence, fouille la FAQ, puis répond seul ou sonne l’alarme sur Telegram.",
        en: "An agent reads every message, sniffs out urgency, digs through the FAQ, then answers alone or rings the alarm on Telegram.",
      },
      result: {
        fr: "Trois chemins possibles : réponse directe, escalade urgente, escalade hors FAQ. Chaque cas laisse une trace dans la table des tickets.",
        en: "Three possible paths: direct reply, urgent escalation, out-of-FAQ escalation. Every case leaves a trace in the tickets table.",
      },
    },
    steps: [
      {
        id: "intake",
        color: "ingest",
        icon: "inbox",
        title: { fr: "Réception", en: "Intake" },
        text: {
          fr: "Un webhook n8n reçoit le message du client et déclenche le workflow.",
          en: "An n8n webhook receives the customer’s message and starts the workflow.",
        },
        tech: ["n8n", "Webhook"],
      },
      {
        id: "triage",
        color: "ingest",
        icon: "filter",
        title: { fr: "Classification", en: "Triage" },
        text: {
          fr: "Le workflow détermine si le message est urgent, avant de décider de la suite.",
          en: "The workflow decides whether the message is urgent before choosing what happens next.",
        },
        tech: ["n8n", "IF"],
      },
      {
        id: "search",
        color: "retrieve",
        icon: "search",
        title: { fr: "Recherche FAQ", en: "FAQ search" },
        text: {
          fr: "Le message est transformé en vecteur (un embedding, c’est-à-dire une suite de nombres qui représente son sens), puis comparé aux passages de la FAQ stockés dans pgvector. Un service FastAPI expose cette recherche.",
          en: "The message is turned into a vector (an embedding: a list of numbers that represents its meaning), then compared with the FAQ passages stored in pgvector. A FastAPI service exposes this search.",
        },
        tech: ["FastAPI", "pgvector", "Supabase", "paraphrase-multilingual-MiniLM-L12-v2"],
      },
      {
        id: "draft",
        color: "llm",
        icon: "sparkles",
        title: { fr: "Rédaction", en: "Drafting" },
        text: {
          fr: "Un LLM rédige la réponse à partir des passages retrouvés dans la FAQ.",
          en: "An LLM drafts the reply from the passages retrieved from the FAQ.",
        },
        tech: ["LLM"],
      },
      {
        id: "decide",
        color: "action",
        icon: "branch",
        title: { fr: "Décision", en: "Decision" },
        text: {
          fr: "Le système choisit seul : répondre directement, escalader une urgence, ou escalader quand la FAQ ne couvre pas la question.",
          en: "The system chooses on its own: reply directly, escalate an urgent case, or escalate when the FAQ doesn’t cover the question.",
        },
        tech: ["n8n"],
        branches: ["reponse_directe", "escalade_urgence", "escalade_hors_faq"],
      },
      {
        id: "alert",
        color: "action",
        icon: "bell",
        title: { fr: "Alerte et suivi", en: "Alert and log" },
        text: {
          fr: "Une alerte Telegram prévient l’équipe quand c’est nécessaire, et chaque ticket est enregistré dans la base.",
          en: "A Telegram alert notifies the team when needed, and every ticket is stored in the database.",
        },
        tech: ["Telegram", "PostgreSQL"],
      },
    ],
  },
  {
    id: "video-pipeline",
    title: {
      fr: "Pipeline de vidéo éducative automatique",
      en: "Automatic educational video pipeline",
    },
    category: { fr: "Automatisation et IA générative", en: "Automation and generative AI" },
    tech: ["n8n", "FastAPI", "Groq", "edge-tts", "Pixabay", "FFmpeg"],
    github: "https://github.com/kawtarsouhail/ai-video-demo",
    images: ["/images/video-workflow.png"],
    captions: [
      {
        fr: "Le vrai workflow n8n : le sujet part chez Groq, un bout de JavaScript met la réponse en forme, puis le service FastAPI monte la vidéo.",
        en: "The real n8n workflow: the topic goes to Groq, a bit of JavaScript shapes the answer, then the FastAPI service builds the video.",
      },
    ],
    story: {
      problem: {
        fr: "Produire une vidéo pédagogique, c’est un script, une voix, des images, un montage. Chaque fois. À la main.",
        en: "An educational video means a script, a voice, visuals, an edit. Every time. By hand.",
      },
      cost: {
        fr: "Des heures par vidéo, donc presque aucune vidéo en plus.",
        en: "Hours per video, so hardly any extra videos.",
      },
      solution: {
        fr: "Un sujet entre, une vidéo sort : un LLM écrit les scènes, une voix arabe les raconte, des images les illustrent, FFmpeg assemble le tout.",
        en: "A topic goes in, a video comes out: an LLM writes the scenes, an Arabic voice narrates them, images illustrate them, FFmpeg stitches it all together.",
      },
      result: {
        fr: "Démo : « comment préparer le couscous marocain », en arabe, environ 50 secondes et 6 scènes, avec des outils gratuits.",
        en: "Demo: “how to prepare Moroccan couscous”, in Arabic, about 50 seconds and 6 scenes, built with free tools.",
      },
    },
    steps: [
      {
        id: "topic",
        color: "ingest",
        icon: "inbox",
        title: { fr: "Sujet", en: "Topic" },
        text: {
          fr: "Un seul sujet en entrée déclenche le workflow n8n.",
          en: "A single topic as input starts the n8n workflow.",
        },
        tech: ["n8n"],
      },
      {
        id: "script",
        color: "llm",
        icon: "sparkles",
        title: { fr: "Scénario", en: "Script" },
        text: {
          fr: "Un LLM découpe le sujet en 6 scènes : texte de la voix off et mots-clés pour les images.",
          en: "An LLM splits the topic into 6 scenes: voice-over text and keywords for the visuals.",
        },
        tech: ["Groq", "LLM"],
      },
      {
        id: "voice",
        color: "llm",
        icon: "mic",
        title: { fr: "Voix", en: "Voice" },
        text: {
          fr: "Chaque scène est lue en arabe par une synthèse vocale gratuite.",
          en: "Each scene is read aloud in Arabic by a free text-to-speech engine.",
        },
        tech: ["edge-tts"],
      },
      {
        id: "visuals",
        color: "retrieve",
        icon: "search",
        title: { fr: "Images", en: "Visuals" },
        text: {
          fr: "Les mots-clés de chaque scène servent à chercher des images sur Pixabay.",
          en: "Each scene’s keywords are used to search Pixabay for images.",
        },
        tech: ["Pixabay"],
      },
      {
        id: "render",
        color: "action",
        icon: "film",
        title: { fr: "Montage", en: "Render" },
        text: {
          fr: "Un service FastAPI assemble voix et images avec FFmpeg et produit le MP4 final.",
          en: "A FastAPI service combines voice and images with FFmpeg and outputs the final MP4.",
        },
        tech: ["FastAPI", "FFmpeg"],
      },
    ],
  },
  {
    id: "doc-agent",
    title: {
      fr: "Agent de traitement documentaire",
      en: "Document processing agent",
    },
    category: { fr: "Automatisation et LLM", en: "Automation and LLM" },
    tech: ["n8n", "FastAPI", "PostgreSQL", "LLM", "Telegram"],
    soon: true,
    story: {
      problem: {
        fr: "Factures PDF et bons de livraison arrivent par mail, et quelqu’un les recopie à la main dans un tableau.",
        en: "PDF invoices and delivery notes land in an inbox, and someone retypes them by hand into a spreadsheet.",
      },
      cost: {
        fr: "Du temps perdu, des fautes de frappe, et des chiffres qui n’arrivent jamais au bon endroit.",
        en: "Lost time, typos, and numbers that never reach the right place.",
      },
      solution: {
        fr: "Un agent lit le document, en sort un JSON propre, le fait valider par une API, et demande l’accord d’un humain sur Telegram avant d’enregistrer.",
        en: "An agent reads the document, pulls out clean JSON, has an API validate it, and asks a human to approve on Telegram before saving.",
      },
      result: {
        fr: "Chaque document devient une ligne fiable en base, avec un humain dans la boucle pour les cas douteux.",
        en: "Each document becomes a reliable database row, with a human in the loop for doubtful cases.",
      },
    },
    steps: [
      {
        id: "receive",
        color: "ingest",
        icon: "inbox",
        title: { fr: "Réception", en: "Intake" },
        text: {
          fr: "Les emails et leurs pièces jointes PDF déclenchent le workflow.",
          en: "Emails and their PDF attachments start the workflow.",
        },
        tech: ["n8n"],
      },
      {
        id: "extract",
        color: "llm",
        icon: "sparkles",
        title: { fr: "Extraction", en: "Extraction" },
        text: {
          fr: "Un LLM lit le texte du document et en extrait les champs utiles sous forme de JSON.",
          en: "An LLM reads the document text and extracts the useful fields as JSON.",
        },
        tech: ["LLM", "JSON"],
      },
      {
        id: "validate",
        color: "ingest",
        icon: "server",
        title: { fr: "Validation", en: "Validation" },
        text: {
          fr: "Une API FastAPI vérifie le JSON : champs obligatoires, formats, valeurs cohérentes.",
          en: "A FastAPI service checks the JSON: required fields, formats, consistent values.",
        },
        tech: ["FastAPI"],
      },
      {
        id: "approve",
        color: "action",
        icon: "bell",
        title: { fr: "Accord humain", en: "Human approval" },
        text: {
          fr: "Un humain valide ou refuse en un clic sur Telegram.",
          en: "A human approves or rejects in one tap on Telegram.",
        },
        tech: ["Telegram"],
      },
      {
        id: "store",
        color: "action",
        icon: "database",
        title: { fr: "Archivage", en: "Storage" },
        text: {
          fr: "Les données validées sont enregistrées dans la base.",
          en: "Validated data is saved to the database.",
        },
        tech: ["PostgreSQL"],
      },
    ],
  },
  {
    id: "soft-sensor",
    title: { fr: "AI Soft Sensor (OCP)", en: "AI Soft Sensor (OCP)" },
    category: { fr: "Machine learning industriel", en: "Industrial machine learning" },
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "React"],
    github: old("01")?.github,
    images: old("01")?.images,
    story: {
      problem: {
        fr: "En usine, certaines mesures clés, comme la concentration en P₂O₅ de l’acide phosphorique, ne se suivent pas en continu.",
        en: "In a plant, some key measurements, like the P₂O₅ concentration in phosphoric acid, can’t be followed continuously.",
      },
      cost: {
        fr: "Sans mesure en continu, difficile de réagir vite quand le procédé dérive.",
        en: "No continuous reading, no quick reaction when the process drifts.",
      },
      solution: {
        fr: "Un soft sensor : un modèle qui devine la concentration en temps réel à partir des autres mesures du procédé.",
        en: "A soft sensor: a model that infers the concentration in real time from the other process measurements.",
      },
      result: {
        fr: "Une application web qui affiche les prédictions, avec une API FastAPI et une interface React.",
        en: "A web app that displays the predictions, with a FastAPI API and a React interface.",
      },
    },
    steps: [
      {
        id: "data",
        color: "ingest",
        icon: "database",
        title: { fr: "Données", en: "Data" },
        text: {
          fr: "Les mesures historiques du procédé servent de base d’apprentissage.",
          en: "Historical process measurements form the training base.",
        },
        tech: ["Pandas", "NumPy"],
      },
      {
        id: "prep",
        color: "ingest",
        icon: "table",
        title: { fr: "Préparation", en: "Preparation" },
        text: {
          fr: "Les données sont nettoyées et organisées pour être utilisables par le modèle.",
          en: "The data is cleaned and organized so the model can use it.",
        },
        tech: ["Pandas", "NumPy"],
      },
      {
        id: "model",
        color: "llm",
        icon: "brain",
        title: { fr: "Modèle", en: "Model" },
        text: {
          fr: "Un modèle de machine learning est entraîné à estimer la concentration en P₂O₅.",
          en: "A machine learning model is trained to estimate the P₂O₅ concentration.",
        },
        tech: ["Scikit-learn"],
      },
      {
        id: "api",
        color: "action",
        icon: "server",
        title: { fr: "API", en: "API" },
        text: {
          fr: "Une API REST FastAPI expose les prédictions du modèle.",
          en: "A FastAPI REST API exposes the model’s predictions.",
        },
        tech: ["FastAPI", "REST"],
      },
      {
        id: "ui",
        color: "action",
        icon: "monitor",
        title: { fr: "Interface", en: "Interface" },
        text: {
          fr: "Une interface React visualise les prédictions.",
          en: "A React interface visualizes the predictions.",
        },
        tech: ["React"],
      },
    ],
  },
];
