const {JSDOM} = require('jsdom');

module.exports = function(html) {
	return new JSDOM(html);
};
