#!/bin/sh
FILES_TO_EMPTY="plf.js"
FILES_TO_RM="songs.json mkalbums.js deno.lock clean.sh README.* .gitignore"
for i in $FILES_TO_EMPTY; do
    echo >$i
done
for i in for i in $FILES_TO_RM; do
    rm -f $i
done
