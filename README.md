# La Foire Adjafi — site React

Reproduction fidèle et complète du site [lafoireadjafi.com](https://lafoireadjafi.com/) (contenu, couleurs, polices, images, toutes les pages) en React + Vite + Tailwind CSS, prête à être connectée à Supabase.

## Démarrer

```bash
npm install
npm run dev
```

## Connecter Supabase

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Copiez `.env.example` en `.env` et renseignez `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`
   (Project Settings → API dans Supabase).
3. Ouvrez l'éditeur SQL du projet (SQL Editor → New query), collez le contenu de
   [supabase/schema.sql](supabase/schema.sql) et exécutez-le. Cela crée les 4 tables utilisées par
   le site et l'espace administrateur (`contact_messages`, `journal_posts`, `exposants`, `partners`)
   avec les policies RLS adaptées (lecture publique, écriture réservée aux comptes connectés).
4. Créez votre compte administrateur : Authentication → Users → Add user, avec l'email et le mot de
   passe que vous utiliserez pour vous connecter sur `/admin/login`.

Le client Supabase est déjà configuré dans [src/lib/supabaseClient.js](src/lib/supabaseClient.js).

## Espace administrateur

Accessible sur `/admin/login` une fois Supabase configuré (voir ci-dessus). Design cohérent avec le
site public (mêmes couleurs, même typographie) mais présenté comme un vrai tableau de bord :
sidebar de navigation, cartes de statistiques, tableaux et formulaires.

- **Tableau de bord** — vue d'ensemble (messages non lus, nombre d'articles, d'exposants, de
  partenaires).
- **Messages** — messages reçus via le formulaire de contact du site (marquer lu/non lu, supprimer).
- **Journal** — créer/modifier/supprimer les articles de la page « Média & Presse », avec un éditeur
  de contenu par blocs (paragraphe, sous-titre, liste à puces).
- **Exposants** — créer/modifier/supprimer les fiches de la page « Nos Exposants ».
- **Partenaires** — ajouter/retirer les logos affichés sur la page « Sponsorisez ».

Le site public lit désormais ce contenu directement dans Supabase (voir
[src/hooks/usePublicList.js](src/hooks/usePublicList.js)) : ce qui est ajouté depuis l'admin
apparaît automatiquement sur le site, en plus du contenu d'origine qui reste affiché tant que rien
n'a été ajouté (aucune page ne peut donc se retrouver vide).

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
- `/journal/:slug` — Articles complets
- `/nos-exposants/:slug` — Fiche détaillée d'un exposant géré depuis l'admin
- `/contact` — Formulaire de contact + coordonnées
- `/admin/login`, `/admin/*` — Espace administrateur (voir plus haut)

## Structure

- `src/components/` — composants partagés (Header, Footer, Hero, PageHero, EditionRecap, Countdown,
  Activities, Gallery, BlogCard, Contact, Counter...).
- `src/pages/` — une page par route publique, assemblée à partir des composants partagés.
- `src/data/siteData.js` — contenu de départ (menu, statistiques, activités, articles, réseaux
  sociaux), utilisé tant qu'aucun contenu équivalent n'a été ajouté depuis l'admin.
- `src/hooks/usePublicList.js` — fusionne le contenu géré dans Supabase avec le contenu de départ.
- `src/admin/` — espace administrateur : `layouts/` (structure de la page), `pages/` (tableau de
  bord, messages, articles, exposants, partenaires), `context/AuthContext.jsx` (session Supabase),
  `components/RequireAuth.jsx` (protection des routes).
- `supabase/schema.sql` — tables et policies à exécuter dans Supabase.
- `public/images/`, `public/images/site/`, `public/fonts/` — assets récupérés du site original
  (logos, photos de chaque édition, affiches, police "Mont").

## À faire ensuite

Le site et l'espace administrateur sont complets et fonctionnels. Pistes d'amélioration possibles :
un vrai champ d'upload d'images (actuellement une URL, à faire pointer vers Supabase Storage), la
gestion des rôles si plusieurs administrateurs doivent avoir des droits différents, et l'ajout d'une
page admin pour éditer les statistiques de la page d'accueil (`heroStats`).
