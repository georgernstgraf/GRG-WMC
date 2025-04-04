angabe: angabedeps clean check
	zip -y -x Makefile reihe.png check.sh test.js lsg.js -r ~/Downloads/angabe.zip .

angabedeps: test-obfuscated.js PLF.pdf

devdeps: lsg.js test.js

PLF.pdf: PLF.md
	false

test-obfuscated.js: ../LSG/test.js
	npx javascript-obfuscator '$^' -o $@

test.js: ../LSG/test.js
	ln -s  '$^' $@

lsg.js:
	ln -s ../LSG/lsg.js $@

clean:
	@rm -rf node_modules
	@rm -f package-lock.json
	@rm -f lsg.js
	@rm -rf tmp
	@rm -f test.js
	@rm -f ~/Downloads/angabe.zip

check:
	./check.sh

lsg: devdeps
	node --preserve-symlinks test-obfuscated.js lsg

devsg: devdeps
	node --preserve-symlinks --inspect test.js lsg"

devplf: devdeps
	node --preserve-symlinks --inspect test.js

plf: devdeps
	npm start


