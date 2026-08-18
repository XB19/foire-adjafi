# La Foire Adjafi — site React

Reproduction fidèle et complète du site [lafoireadjafi.com](https://lafoireadjafi.com/) (contenu, couleurs, polices, images, toutes les pages) en React + Vite + Tailwind CSS, avec une API maison (Node/Express) branchée sur une base PostgreSQL locale.

## Démarrer (site public seul, sans base de données)

```bash
npm install
npm run dev
```

Le site fonctionne déjà avec son contenu de départ (`src/data/siteData.js`). Pour activer le
formulaire de contact et l'espace administrateur, il faut brancher la base de données ci-dessous.

## Connecter PostgreSQL

Le site (React, dans le navigateur) ne peut pas parler directement au protocole PostgreSQL — il lui
faut une petite API HTTP devant la base. C'est le rôle du dossier [`server/`](server), un serveur
Node/Express qui expose cette API et gère l'authentification de l'espace admin.

1. **Créez une base PostgreSQL** (en local, `createdb fadf` ou `CREATE DATABASE fadf;` dans `psql`).
2. **Configurez le serveur** : copiez `server/.env.example` en `server/.env` et renseignez vos
   identifiants (`PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`), ainsi qu'un
   `JWT_SECRET` (une longue chaîne aléatoire — sert à signer les sessions de connexion admin).
3. **Créez les tables** :
   ```bash
   psql -U postgres -d fadf -f server/schema.sql
   ```
   (ou collez le contenu de [server/schema.sql](server/schema.sql) dans votre client SQL préféré).
   Cela crée les 5 tables utilisées par le site : `admin_users`, `contact_messages`,
   `journal_posts`, `exposants`, `partners`.
4. **Installez les dépendances du serveur et créez votre compte administrateur** :
   ```bash
   npm install --prefix server
   npm run create-admin --prefix server -- admin@lafoireadjafi.com "un-mot-de-passe-solide"
   ```
5. **Configurez le site** : copiez `.env.example` en `.env` à la racine — la valeur par défaut
   (`VITE_API_URL=http://localhost:4000/api`) convient si vous lancez tout en local.
6. **Lancez tout** :
   ```bash
   npm run dev:all
   ```
   (ou séparément : `npm run server` pour l'API, `npm run dev` pour le site).

Connectez-vous ensuite sur `/admin/login` avec l'email et le mot de passe créés à l'étape 4.

## Espace administrateur

Accessible sur `/admin/login` une fois l'API et la base configurées (voir ci-dessus). Design
cohérent avec le site public (mêmes couleurs, même typographie) mais présenté comme un vrai tableau
de bord : sidebar de navigation, cartes de statistiques, tableaux et formulaires.

- **Tableau de bord** — vue d'ensemble (messages non lus, nombre d'articles, d'exposants, de
  partenaires).
- **Messages** — messages reçus via le formulaire de contact du site (marquer lu/non lu, supprimer).
- **Journal** — créer/modifier/supprimer les articles de la page « Média & Presse », avec un éditeur
  de contenu par blocs (paragraphe, sous-titre, liste à puces).
- **Exposants** — créer/modifier/supprimer les fiches de la page « Nos Exposants ».
- **Partenaires** — ajouter/retirer les logos affichés sur la page « Sponsorisez ».

L'authentification admin est un système maison (email + mot de passe, hashé avec bcrypt, session
signée en JWT — voir [server/routes/auth.js](server/routes/auth.js)), sans dépendance externe.

Le site public lit ce contenu via l'API (voir [src/hooks/usePublicList.js](src/hooks/usePublicList.js))
et le fusionne avec le contenu de départ : ce qui est ajouté depuis l'admin apparaît automatiquement
sur le site, en plus du contenu d'origine qui reste affiché tant que rien n'a été ajouté (aucune
page ne peut donc se retrouver vide).

## Lancer avec Docker

Le projet inclut un `Dockerfile` pour le site (build Vite + Nginx) et un pour l'API
(`server/Dockerfile`), orchestrés par `docker-compose.yml`.

```bash
PGPASSWORD=votre-mot-de-passe JWT_SECRET=une-longue-chaine-aleatoire docker compose up --build
```

Le site est alors servi sur [http://localhost:8080](http://localhost:8080) et l'API sur
[http://localhost:4000](http://localhost:4000). Le conteneur `api` se connecte à
`host.docker.internal`, c'est-à-dire **votre PostgreSQL local, en dehors de Docker** — assurez-vous
qu'il accepte les connexions entrantes (`postgresql.conf` → `listen_addresses`, `pg_hba.conf`).

Variables disponibles (toutes optionnelles sauf `PGPASSWORD` et `JWT_SECRET`) : `PGHOST`, `PGPORT`,
`PGUSER`, `PGDATABASE`, `CORS_ORIGIN`, `VITE_API_URL`.

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

**Site (React)**
- `src/components/` — composants partagés (Header, Footer, Hero, PageHero, EditionRecap, Countdown,
  Activities, Gallery, BlogCard, Contact, Counter...).
- `src/pages/` — une page par route publique, assemblée à partir des composants partagés.
- `src/data/siteData.js` — contenu de départ (menu, statistiques, activités, articles, réseaux
  sociaux), utilisé tant qu'aucun contenu équivalent n'a été ajouté depuis l'admin.
- `src/lib/apiClient.js` — petit client `fetch` vers l'API (gère le token de connexion admin).
- `src/hooks/usePublicList.js` — fusionne le contenu de l'API avec le contenu de départ.
- `src/admin/` — espace administrateur : `layouts/` (structure de la page), `pages/` (tableau de
  bord, messages, articles, exposants, partenaires), `context/AuthContext.jsx` (session admin),
  `components/RequireAuth.jsx` (protection des routes).
- `public/images/`, `public/images/site/`, `public/fonts/` — assets récupérés du site original
  (logos, photos de chaque édition, affiches, police "Mont").

**API (Node/Express)** — dossier [`server/`](server), projet npm indépendant
- `index.js` — point d'entrée, monte les routes.
- `db.js` — pool de connexion PostgreSQL (`pg`).
- `routes/auth.js` — connexion admin (bcrypt + JWT).
- `routes/messages.js` — messages de contact (insertion publique, lecture/gestion admin).
- `routes/crud.js` — fabrique de routes CRUD réutilisée pour `journal_posts`, `exposants`,
  `partners` (lecture publique, écriture protégée par token).
- `schema.sql` — tables à créer sur votre base.
- `scripts/create-admin.js` — crée ou met à jour un compte administrateur.

## À faire ensuite

Le site et l'espace administrateur sont complets et fonctionnels contre une vraie base PostgreSQL.
Pistes d'amélioration possibles : un vrai champ d'upload d'images (actuellement une URL), la gestion
de plusieurs rôles administrateurs, et l'ajout d'une page admin pour éditer les statistiques de la
page d'accueil (`heroStats`).
