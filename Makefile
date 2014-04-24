
build: overlay.css index.js template.html components
	@component build

components:
	@component install -v

clean:
	rm -fr build components

test: build
	open test/index.html

.PHONY: clean test
