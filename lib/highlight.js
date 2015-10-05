var highlight = function(doc) {
  this.doc = doc;
};

highlight.prototype.getTitle = function() {
  return this.doc.querySelector('.title').innerText;
};

highlight.prototype.getAuthor = function() {
  return this.doc.querySelector('.author').innerText;
};

highlight.prototype.getHighlightTags = function() {
  return this.doc.querySelectorAll('.highlight');
};

highlight.prototype.getLocationTags = function() {
  return this.doc.querySelectorAll('.k4pcReadMore');
};

highlight.prototype.getMemoTags= function() {
  return this.doc.querySelectorAll('.noteContent');
};

highlight.prototype.getHighlightLength = function() {
  return parseInt(this.doc.querySelector('.boldText').innerText);
};

module.exports = highlight;
