var domino = require('domino');

module.exports = function(html) {
  return domino.createDocument(html);
};
