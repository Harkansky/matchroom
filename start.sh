#!/bin/bash

# Vérifie si le .env.dev existe, le crée sinon
if [ ! -f ./.env.dev ] ; then
    echo "Configurer le username de la BDD PostgreSQL"
    read DB_USER

    echo "Configurer le mot de passe de la BDD PostgreSQL"
    read DB_PASSWORD

    echo "Configurer le port d'ouverture de la BDD PostgreSQL"
    read DB_PORT

    echo "Configurer le port d'ouverture de l'application web"
    read WEB_PORT

    cp ./.env.dev.dist ./.env.dev
    sed -i 's/DB_USER=/DB_USER='"$DB_USER"'/g' ./.env.dev
    sed -i 's/DB_PASSWORD=/DB_PASSWORD='"$DB_PASSWORD"'/g' ./.env.dev
    sed -i 's/DB_PORT=/DB_PORT='"$DB_PORT"'/g' ./.env.dev
    sed -i 's/WEB_PORT=/WEB_PORT='"$WEB_PORT"'/g' ./.env.dev

    echo "Fichier .env.dev créé"
fi

# Charge les variables d'environnement
set -a
. .env.dev
set +a

# Lance les containers
docker compose -f ./compose.yaml up -d --remove-orphans