# A benchmark tool for DOM implememtations in Node.js


## TL;DR

 * dom.js is about 1.75x faster than jsdom
 * domino is ~2.2x faster than dom.js and ~3.9x faster than jsdom

## Running the tests

	$node benchmark
	Run DOM benchmarks.

	Options:
	  --impl, -i  which DOM implementation to use [jsdom|domino|domjs]
	  --num, -n   how often to run each test
	  --grep, -g  only run tests matching this pattern
	  --debug     output the result of the first test run
	  --help, -?  display this help message


## jsdom

	$node benchmark -i jsdom
	Node v0.5.10: Running each test 1500 time(s) backed by jsdom.
	append: 875ms
	empty: 559ms
	parse: 2710ms
	serialize: 62ms
	weld: 10239ms
	--------------
	total: 14452ms

## dom.js

	$node --harmony_proxies --harmony_weakmaps benchmark -i domjs
	Node v0.5.10: Running each test 1500 time(s) backed by domjs.
	append: 569ms
	empty: 463ms
	parse: 2161ms
	serialize: 71ms
	weld: 4947ms
	--------------
	total: 8223ms

## domino

	$node benchmark -i domino
	Node v0.5.10: Running each test 1500 time(s) backed by domino.
	append: 160ms
	empty: 108ms
	parse: 1071ms
	serialize: 19ms
	weld: 2302ms
	--------------
	total: 3669ms
