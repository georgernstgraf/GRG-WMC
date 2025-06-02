#!/bin/sh
FILES_TO_EMPTY="plf.js"
FILES_TO_RM="songs.json mkalbums.js deno.lock clean.sh README.* .gitignore"
for i in plf.js; do
    echo >$i
done
echo "Now copy this folder and GIT RESET --HARD # git reset --hard"
