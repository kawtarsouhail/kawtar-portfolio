# Kawtar Souhail — Portfolio v2

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre https://kawtar-portfolio-ten.vercel.app/

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



## Notes

- Le curseur personnalisé (`CustomCursor.tsx`) ne s'active que sur les
  écrans avec un pointeur précis (souris) — désactivé automatiquement sur
  mobile/tactile.
- Les animations utilisent `whileInView` de Framer Motion avec `once: true`
  pour ne jouer qu'une fois par section, sans surcharge de performance.
