#!/bin/bash

for i in *.webp; do
    printf "Resize $i\n"
    convert "$i" -resize 700x300 "$i"
done
