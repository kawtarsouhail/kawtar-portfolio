import type { Config } from "tailwindcss";

// Les couleurs lisent des variables CSS (voir globals.css) :
// c'est ce qui permet de changer de thème sans toucher aux composants.
const v = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  // Le variant "dark:" s'active quand <html data-theme="dark">
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // --- Nouveaux noms (palette "pipeline") ---
        bg: v("bg"),
        surface: v("surface"),
        surface2: v("surface2"),
        fg: v("fg"),
        line: v("line"),
        muted: v("muted"),
        ingest: v("ingest"), // bleu : ingestion / données
        retrieve: v("retrieve"), // menthe : recherche / RAG
        llm: v("llm"), // soleil : LLM
        action: v("action"), // fuchsia : automatisation / action

        // --- Alias de l'ancien code (pour que les composants non
        // encore refaits continuent de s'afficher pendant la migration) ---
        ink: v("bg"),
        text: v("fg"),
        panel: v("surface"),
        panel2: v("surface2"),
        accent: v("ingest"),
        accentSoft: v("surface2"),
        amber: v("llm"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
