#!/usr/bin/env bash

<< read_user_input_to_variable
read -p "Enter your name: " my_name

my_name_up=${my_name^^}

echo "Your name in upper-case is: $my_name_up"
read_user_input_to_variable

read -p "Enter your name: "

echo "$REPLY"
