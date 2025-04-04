#!/bin/bash
errors=()
# test.js not existent
if [ -e test.js ]; then
    errors+=("test.js exists")
fi
# lsg.js is a symlink (wurde ausgebaut)
# if ! [ -L lsg.js ]; then
#     errors+='lsg.js is not a symlink'
# fi
if ! [ -f test-obfuscated.js ]; then
    errors+='test-obfuscated does not exist'
fi
if [ -f test.js ]; then
    errors+='test.js exists'
fi
for i in "${errors[@]}"; do
    echo "$i"
done
if [ ${#errors[@]} -eq 0 ]; then
    echo "No Errors"
else
    exit 1
fi
