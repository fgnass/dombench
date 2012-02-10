var fs = require('fs');
var html = fs.readFileSync(__dirname + '/contacts.html', 'utf8');

module.exports = function(createDocument) {
  var document = createDocument(html);
  document.body.innerHTML = '<h1>Hello world</h1>';
};
