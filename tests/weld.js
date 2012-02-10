var fs = require('fs');
var weld = require('weld');

var html = fs.readFileSync(__dirname + '/contacts.html', 'utf8');
var data = [
  { name: 'hij1nx',  title : 'code slayer' },
  { name: 'tmpvar', title : 'code pimp' },
  { name: 'fgnass', title : 'dom hacker' }
];

module.exports = function(createDocument) {
  var document = createDocument(html);
  var li = document.getElementsByTagName('li').item(0);
  weld.weld(li, data);
  return document.innerHTML;
};
