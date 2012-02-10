var jsdom = require('jsdom');
var html5 = require('html5');

var opts = {parser: html5, features: {QuerySelector: true }};

module.exports = function(html) {
	return jsdom.jsdom(html, null, opts);
};
