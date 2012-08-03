
test/out.js: index.js overlay.css
	component build package.json test/out

clean:
	rm -f test/out.{js,css}

.PHONY: clean