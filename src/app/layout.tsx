import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawtar Souhail — Junior Full-Stack Developer & AI",
  description:
    "Portfolio of Kawtar Souhail, Junior Full-Stack Developer building modern web applications and AI-powered experiences.",
  openGraph: {
    title: "Kawtar Souhail — Junior Full-Stack Developer & AI",
    description:
      "Portfolio of Kawtar Souhail, Junior Full-Stack Developer building modern web applications and AI-powered experiences.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} font-body cursor-enabled bg-ink text-text antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
