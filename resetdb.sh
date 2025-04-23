#!/bin/bash

docker exec -it -w "/app" "matchroom-web-1" bash -c 'php bin/console doctrine:database:drop --force'
docker exec -it -w "/app" "matchroom-web-1" bash -c 'php bin/console doctrine:database:create'