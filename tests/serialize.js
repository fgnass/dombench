var document;

module.exports = function(createDocument) {
	if (!document) {
		document = createDocument();
		var el = document.createElement('h1');
		el.appendChild(document.createTextNode('Hello world'));
		document.body.appendChild(el);
  }
  return document.innerHTML;
};
