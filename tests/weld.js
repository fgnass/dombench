const fs = require('fs');
const {weld} = require('weld');

const html = fs.readFileSync(__dirname + '/contacts.html', 'utf8');
const data = [
  { name: 'hij1nx',  title : 'code slayer' },
  { name: 'tmpvar', title : 'code pimp' },
  { name: 'fgnass', title : 'dom hacker' }
];

module.exports = function(createDocument) {
  const document = createDocument(html);
  const li = document.getElementsByTagName('li').item(0);
  weld(li, data);
  return document.innerHTML;
};
