var jsdom = require('jsdom');

module.exports = function(html) {
	return jsdom.jsdom(html);
};
