@AGENTS.md

# Projet : POZ Consulting

Site vitrine de POZ Consulting (poz-consulting.fr) — Next.js App Router (TypeScript, Tailwind).

- **Ce projet n'est PAS Doolipaw.** Ne jamais confondre ni lancer le dev server de doolipaw-app quand on travaille ici.
- Emplacement : `C:\Users\mpozz\POZ\poz-consulting`
- Lancer le dev server : `npx next dev -p 3005` (port fixe **3005**, pas 3000 — 3000 est souvent déjà pris par doolipaw)
- Aperçu local : http://localhost:3005
- Si le serveur renvoie une 500 avec une erreur Turbopack du type « Every task must have a task type » ou « Could not find the module ... in the React Client Manifest » : le cache est corrompu, supprimer le dossier `.next` puis relancer.
- Pages : `src/app/page.tsx` (Accueil), `src/app/offres/page.tsx`, `src/app/a-propos/page.tsx`, `src/app/contact/page.tsx`
- Composants partagés : `src/components/` (Nav, Footer, PageShell, PillLink...)
- Style global : `src/app/globals.css`
- Le projet est versionné avec Git — committer les changements au fur et à mesure pour pouvoir revenir en arrière.
