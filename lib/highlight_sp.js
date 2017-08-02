var highlight = function(doc) {
  this.doc = doc;
};

highlight.prototype.getTitle = function() {
  return this.doc.querySelector('h3.a-spacing-top-mini.a-color-base').innerText;
};

highlight.prototype.getAuthor = function() {
  return this.doc.querySelector('.a-size-small.a-color-secondary').innerText;
};

highlight.prototype.getHighlightTags = function() {
  return this.doc.querySelectorAll('#highlight');
};

highlight.prototype.getLocationTags = function() {
  return this.doc.querySelectorAll('#annotationHighlightHeader');
};

highlight.prototype.getMemoTags= function() {
  return this.doc.querySelectorAll('#note');
};

highlight.prototype.getHighlightLength = function() {
  return parseInt(this.doc.querySelector('#kp-notebook-highlights-count').innerText);
};

highlight.prototype.getAsin = function() {
  return document.querySelector("#kp-notebook-annotations-asin").value
};

module.exports = highlight;
