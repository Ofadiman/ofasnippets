#!/usr/bin/env bash

set -e

typeorm="ts-node --require tsconfig-paths/register node_modules/typeorm/cli.js"

read -p "Migration action (type 1 for run, 2 for generate or 3 for create): " migration_action

if [[ ${migration_action} == 1 ]]; then
  eval "${typeorm} migration:run"

elif [[ ${migration_action} == 2 ]]; then
  read -p "Migration name: " migration_name
  eval "${typeorm} migration:generate -n ${migration_name} --pretty"

elif [[ ${migration_action} == 3 ]]; then
  read -p "Migration name: " migration_name
  eval "${typeorm} migration:create -n ${migration_name}"

else
  echo "Invalid migration action: \"${migration_action}\"!"
fi
