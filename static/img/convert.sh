#!/bin/bash

for i in *.png; do
    printf "Resize $i\n"
    convert "$i" -resize 700x300 "$i"
done
