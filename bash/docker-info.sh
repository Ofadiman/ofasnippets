#!/usr/bin/env bash

# exit immediately if a command exits with a non-zero status
set -e

docker_status=$(systemctl status docker | awk '/Active/ { print $3 }' | tr -d "()")
docker_version=$(docker -v | awk '/version/ { print  $3 }' | tr -d ",")

echo The Docker Status is: "${docker_status}"
echo The Docker version is: "${docker_version}"
