#!/usr/bin/env node --harmony_proxies --harmony_weakmaps

if (process.version != 'v0.5.10') {
	console.error("dom.js requires Node 0.5.10 - newer versions won't work.");
	process.exit(1);
}

if (typeof Proxy == 'undefined' || typeof WeakMap == 'undefined') {
	console.error("dom.js requires harmony features. Please run:\n" +
    "node --harmony_proxies --harmony_weakmaps");

   process.exit(1);
}

require('./vendor/domnode');
module.exports = function(html) {
	var parser = document.implementation.mozHTMLParser("");
	parser.parse(html, true);
  return parser.document();
};
