# La Foire Adjafi — site React

Reproduction fidèle et complète du site [lafoireadjafi.com](https://lafoireadjafi.com/) (contenu, couleurs, polices, images, toutes les pages) en React + Vite + Tailwind CSS, prête à être connectée à Supabase.

## Démarrer

```bash
npm install
npm run dev
```

## Connecter Supabase

1. Copiez `.env.example` en `.env`.
2. Renseignez `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` (Project Settings → API dans Supabase).
3. Le client est déjà configuré dans [src/lib/supabaseClient.js](src/lib/supabaseClient.js) :

```js
import { supabase } from "./lib/supabaseClient";
```

Le formulaire de [src/pages/ContactPage.jsx](src/pages/ContactPage.jsx) écrit déjà dans une table
`contact_messages` (colonnes `name`, `phone`, `message`) — créez cette table dans Supabase pour
qu'il fonctionne, ou adaptez le code à votre propre schéma.

## Lancer avec Docker

Le projet inclut un `Dockerfile` (build Vite + Nginx) et un `docker-compose.yml`.

```bash
docker compose up --build
```

Le site est alors servi sur [http://localhost:8080](http://localhost:8080).

Pour connecter Supabase, les variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` doivent être
fournies **au moment du build** (Vite les intègre dans le bundle, elles ne peuvent pas être changées
à l'exécution du conteneur) :

```bash
VITE_SUPABASE_URL=https://xxxx.supabase.co VITE_SUPABASE_ANON_KEY=xxxx docker compose up --build
```

Ou directement avec `docker build` :

```bash
docker build \
  --build-arg VITE_SUPABASE_URL=https://xxxx.supabase.co \
  --build-arg VITE_SUPABASE_ANON_KEY=xxxx \
  -t foire-adjafi .

docker run -p 8080:80 foire-adjafi
```

## Pages incluses

Toutes les pages du site d'origine ont été reproduites :

- `/` — Accueil
- `/a-propos` — Notre histoire
- `/adjafi-14` — Adjafi 14 (édition en cours, avec compte à rebours)
- `/adjafi-13`, `/adjafi-12`, `/adjafi-11`, `/adjafi-10` — Éditions précédentes (Revivre)
- `/adjafi-1-a-9` — Frise chronologique des 9 premières éditions
- `/exposez` — Devenir exposant (types de stands)
- `/sponsorisez` — Devenir sponsor (avantages, partenaires)
- `/nos-exposants` — Annuaire des exposants
- `/journal` — Liste des articles (avec filtre par catégorie)
- `/journal/:slug` — 7 articles complets
- `/science-en-vac` — Page dédiée à l'activité Sciences en Vac
- `/contact` — Formulaire de contact + coordonnées

## Structure

- `src/components/` — composants partagés (Header, Footer, Hero, PageHero, EditionRecap, Countdown,
  Activities, Gallery, BlogCard, Contact, Counter...).
- `src/pages/` — une page par route, assemblée à partir des composants partagés.
- `src/data/siteData.js` — tout le contenu texte (menu, statistiques, activités, articles de blog,
  réseaux sociaux) centralisé pour être facile à éditer ou à remplacer par des données Supabase.
- `public/images/`, `public/images/site/`, `public/fonts/` — assets récupérés du site original
  (logos, photos de chaque édition, affiches, police "Mont").

## À faire ensuite

Le site est visuellement et structurellement complet. Les prochaines étapes naturelles côté
Supabase : brancher le formulaire de contact sur une vraie table, gérer les articles du journal et
la liste des exposants depuis la base plutôt que depuis `siteData.js`, et ajouter l'authentification
si un espace d'administration est prévu.
