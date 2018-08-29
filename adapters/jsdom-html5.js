const {JSDOM} = require('jsdom');
const html5 = require('html5');

const opts = {parser: html5, features: {QuerySelector: true }};

module.exports = function(html) {
	return new JSDOM(html, opts).window.document;
};
