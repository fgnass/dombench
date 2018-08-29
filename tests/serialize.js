let document;

module.exports = function(createDocument) {
	if (!document) {
		document = createDocument();
		const el = document.createElement('h1');
		el.appendChild(document.createTextNode('Hello world'));
		document.body.appendChild(el);
  }
  return document.innerHTML;
};
