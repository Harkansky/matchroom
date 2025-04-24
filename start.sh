#!/usr/bin/env bash
set -euo pipefail

# ── 1) Génération de backend/.env.dev si absent
if [ ! -f backend/.env.dev ] ; then
  echo "== Configuration de la base de données PostgreSQL =="
  read -p "  • DB_USER : " DB_USER
  read -p "  • DB_PASSWORD : " DB_PASSWORD
  read -p "  • DB_PORT : " DB_PORT
  read -p "  • WEB_PORT (Symfony) : " WEB_PORT

  cp backend/.env.dev.dist backend/.env.dev
  sed -i "s|^DB_USER=.*|DB_USER=${DB_USER}|"       backend/.env.dev
  sed -i "s|^DB_PASSWORD=.*|DB_PASSWORD=${DB_PASSWORD}|" backend/.env.dev
  sed -i "s|^DB_PORT=.*|DB_PORT=${DB_PORT}|"       backend/.env.dev
  sed -i "s|^WEB_PORT=.*|WEB_PORT=${WEB_PORT}|"     backend/.env.dev

  echo "✔︎ backend/.env.dev créé"
fi

# ── 2) Chargement des variables d'environnement
set -a
. backend/.env.dev
set +a

# ── 3) Lancement des services Docker (db, backend, frontend-old, nginx)
docker compose -f compose.yml up -d --build --remove-orphans

echo -e "\n✅ Containers démarrés :"
echo "  • Symfony API → http://localhost:${WEB_PORT}"
echo "  • React Dev  → http://localhost:3000"
echo "  • Nginx (prod) → http://localhost:8080"

# ── 4) (Optionnel) Suivi des logs React / Symfony
echo -e "\nSuivi des logs (CTRL+C pour sortir) :"
echo "  • Symfony : docker compose logs -f backend"
echo "  • React   : docker compose logs -f frontend"
