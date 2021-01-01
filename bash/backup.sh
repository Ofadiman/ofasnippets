#!/usr/bin/env bash

set -e

backup_dirs=("/home/ofadiman/test1" "/home/ofadiman/test2")
backup_to="${HOME}/backup-$(date).zip"

for dir in "${backup_dirs[@]}"; do
  zip -r "${backup_to}" "${dir}"
done
