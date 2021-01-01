#!/usr/bin/env bash

# exit immediately if a command exits with a non-zero status
set -e

# get env variables
openapi_url=$(grep OPENAPI_URL .env.development | sed "s/OPENAPI_URL=//g")
openapi_username=$(grep OPENAPI_USERNAME .env.development | sed "s/OPENAPI_USERNAME=//g")
openapi_password=$(grep OPENAPI_PASSWORD .env.development | sed "s/OPENAPI_PASSWORD=//g")

# fetch json data
curl -u "${openapi_username}":"${openapi_password}" -s "${openapi_url}" | python3 -m json.tool >./swagger.json

# run codegen
openapi --input ./swagger.json --output ./src/api
