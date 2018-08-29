module.exports = function(createDocument) {
  const document = createDocument();
  const el = document.createElement('h1');
  el.appendChild(document.createTextNode('Hello world'));
  document.body.appendChild(el);
};
