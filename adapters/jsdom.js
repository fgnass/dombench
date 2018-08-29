const {JSDOM} = require('jsdom');

const opts = {features: {QuerySelector: true }};

module.exports = function(html) {
	return new JSDOM(html, opts).window.document;
};
