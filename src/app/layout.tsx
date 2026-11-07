import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawtar Souhail — AI & Automation Engineer",
  description:
    "Portfolio de Kawtar Souhail — automatisation, RAG et LLM. / Portfolio of Kawtar Souhail — automation, RAG and LLM.",
  openGraph: {
    title: "Kawtar Souhail — AI & Automation Engineer",
    type: "website",
  },
};

// Ce petit script s'exécute AVANT l'affichage de la page : il applique le
// thème enregistré (ou celui du système) pour éviter un flash de la mauvaise couleur.
const initScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;var l=localStorage.getItem('lang');if(l){document.documentElement.lang=l}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-bg font-body text-fg antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
