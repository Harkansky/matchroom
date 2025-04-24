#!/usr/bin/env bash
set -euo pipefail

# Remplace type: "json" par type: "jsonb" dans toutes les entités
find src/Entity -type f -name '*.php' \
  -exec sed -i 's/type:\s*"jsonb"/type: "json"/g' {} +

# Si tu utilises columnDefinition, ajuste aussi :
find src/Entity -type f -name '*.php' \
  -exec sed -i 's/columnDefinition: '\''jsonb'\''/columnDefinition: '\''json'\''/g' {} +

echo "✅ Tous les ORM\Column(type: 'jsonb') sont maintenant en type: 'json'."
