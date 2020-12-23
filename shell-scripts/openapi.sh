#!/bin/bash

# get env variables
OPENAPI_URL=$(grep OPENAPI_URL .env.development | sed "s/OPENAPI_URL=//g")
OPENAPI_USERNAME=$(grep OPENAPI_USERNAME .env.development | sed "s/OPENAPI_USERNAME=//g")
OPENAPI_PASSWORD=$(grep OPENAPI_PASSWORD .env.development | sed "s/OPENAPI_PASSWORD=//g")

# fetch json data
curl -u "${OPENAPI_USERNAME}":"${OPENAPI_PASSWORD}" -s "${OPENAPI_URL}" | python3 -m json.tool >./swagger.json

# run codegen
openapi --input ./swagger.json --output ./src/api
