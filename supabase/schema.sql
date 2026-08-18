-- Foire Adjafi — schéma Supabase pour l'espace administrateur
-- À exécuter une fois dans l'éditeur SQL de votre projet Supabase
-- (Project → SQL Editor → New query → coller ce fichier → Run).

create extension if not exists "pgcrypto";

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

alter table contact_messages enable row level security;

create policy "Public can send a message"
  on contact_messages for insert
  to anon
  with check (true);

create policy "Admins can read messages"
  on contact_messages for select
  to authenticated
  using (true);

create policy "Admins can update messages"
  on contact_messages for update
  to authenticated
  using (true);

create policy "Admins can delete messages"
  on contact_messages for delete
  to authenticated
  using (true);

-- ---------------------------------------------------------------------
-- Articles du journal (Média & Presse)
-- content est un tableau de blocs : [{ "type": "p", "text": "..." }, { "type": "h3", "text": "..." }, { "type": "ul", "items": ["..."] }]
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

alter table journal_posts enable row level security;

create policy "Public can read articles"
  on journal_posts for select
  to anon
  using (true);

create policy "Admins can manage articles"
  on journal_posts for all
  to authenticated
  using (true)
  with check (true);

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

alter table exposants enable row level security;

create policy "Public can read exposants"
  on exposants for select
  to anon
  using (true);

create policy "Admins can manage exposants"
  on exposants for all
  to authenticated
  using (true)
  with check (true);

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

alter table partners enable row level security;

create policy "Public can read partners"
  on partners for select
  to anon
  using (true);

create policy "Admins can manage partners"
  on partners for all
  to authenticated
  using (true)
  with check (true);

-- ---------------------------------------------------------------------
-- Après avoir exécuté ce fichier : créez votre compte administrateur dans
-- Authentication → Users → Add user (Supabase Dashboard), avec l'email et
-- le mot de passe que vous utiliserez pour vous connecter sur /admin/login.
-- ---------------------------------------------------------------------
