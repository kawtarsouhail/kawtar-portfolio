# Kawtar Souhail — Portfolio v2

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

Pour la version de production :

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    page.tsx        -> assemble toutes les sections
    layout.tsx       -> polices, métadonnées SEO
    globals.css
  components/
    Navbar, Hero, TechMarquee, About, Projects, ProjectCard,
    Process, Experience, Contact, Footer, CustomCursor
  data/
    projects.ts, skills.ts, experience.ts   -> contenu séparé de l'UI
```

## À remplacer avant mise en ligne

- **Liens GitHub des projets** : dans `src/data/projects.ts`, chaque projet
  pointe pour l'instant vers `https://github.com/kawtarsouhail` — remplace
  par le lien du repo réel de chaque projet (`github` et, si tu en as un,
  `demo`).
- **Screenshots des projets** : les projets utilisent des visuels générés en
  CSS/SVG (`ProjectCard.tsx` → `Mockup`) en l'absence de captures réelles.
  Pour utiliser une vraie image, ajoute-la dans `public/images/` puis
  renseigne le champ `image: "/images/ton-fichier.jpg"` sur le projet
  correspondant dans `src/data/projects.ts`.
- **Téléphone** : je ne l'ai pas remis dans cette version (le brief demandait
  email / LinkedIn / GitHub / localisation) — dis-moi si tu veux que je le
  rajoute dans `Contact.tsx`.
- **Métadonnées Open Graph** : pense à ajouter une image `opengraph-image`
  dans `src/app/` si tu veux un aperçu visuel sur LinkedIn/Twitter.

## Notes

- Le curseur personnalisé (`CustomCursor.tsx`) ne s'active que sur les
  écrans avec un pointeur précis (souris) — désactivé automatiquement sur
  mobile/tactile.
- Les animations utilisent `whileInView` de Framer Motion avec `once: true`
  pour ne jouer qu'une fois par section, sans surcharge de performance.
