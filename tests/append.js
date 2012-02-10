module.exports = function(createDocument) {
  var document = createDocument();
  var el = document.createElement('h1');
  el.appendChild(document.createTextNode('Hello world'));
  document.body.appendChild(el);
};
