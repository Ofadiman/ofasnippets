#!/usr/bin/env bash

# Basic `if` statement.
if which docker; then
  echo "works"
fi

# Execute the command and check if the operation was successful.
which docker
if [[ $? -eq 1 ]]; then
  echo "docker is not installed"
elif [[ $? -eq 661 ]]; then
  echo "Something went very wrong 😳"
else
  echo "docker is installed"
fi
