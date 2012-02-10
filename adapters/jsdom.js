var jsdom = require('jsdom');

var opts = {features: {QuerySelector: true }};

module.exports = function(html) {
	return jsdom.jsdom(html, null, opts);
};
