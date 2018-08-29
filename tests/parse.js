const fs = require('fs');
const html = fs.readFileSync(__dirname + '/contacts.html', 'utf8');

module.exports = function(createDocument) {
  const document = createDocument(html);
  document.body.innerHTML = '<h1>Hello world</h1>';
};
