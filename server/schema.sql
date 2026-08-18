-- Foire Adjafi — schéma PostgreSQL (base locale)
-- À exécuter une fois sur votre base "fadf" :
--   psql -U postgres -d fadf -f server/schema.sql

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- Comptes administrateurs (espace /admin)
-- ---------------------------------------------------------------------
create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Messages reçus depuis le formulaire de contact du site public
-- ---------------------------------------------------------------------
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  message text,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Articles du journal (Média & Presse)
-- content est un tableau de blocs :
-- [{ "type": "p", "text": "..." }, { "type": "h3", "text": "..." }, { "type": "ul", "items": ["..."] }]
-- ---------------------------------------------------------------------
create table if not exists journal_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null default 'ADJAFI',
  date text,
  image text,
  excerpt text,
  content jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Exposants
-- ---------------------------------------------------------------------
create table if not exists exposants (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  image text,
  phone text,
  email text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Partenaires / sponsors (logos affichés sur la page Sponsorisez)
-- ---------------------------------------------------------------------
create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Après avoir exécuté ce fichier, créez votre compte administrateur avec :
--   npm run create-admin --prefix server -- admin@lafoireadjafi.com "un-mot-de-passe-solide"
-- ---------------------------------------------------------------------
