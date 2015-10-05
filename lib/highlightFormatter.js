var highlightFormatter = function() {
  var util = require('./util'),
      Highlight = require('./highlight');

  util.defineInnerTextForFirefox();

  this.highlight = new Highlight(document);
  this.highlight_html = [];
};

highlightFormatter.prototype.output = function(option) {
  if (option == null) {
    option = {};
  }
  this.outputBookInfo();
  this.outputHighlightInfo(option);
  this.outputExecute();
};

highlightFormatter.prototype.outputExecute = function() {
  document.title = this.highlight.getTitle();
  document.body.innerHTML = this.highlight_html.join('');
};

highlightFormatter.prototype.outputBookInfo = function() {
  this.highlight_html.push('<div class="book_info">');
  this.highlight_html.push('<span class="title">' + this.highlight.getTitle() + '</span><br />');
  this.highlight_html.push('<span class="author">' + this.highlight.getAuthor() + '</span>');
  this.highlight_html.push('</div>');
};

highlightFormatter.prototype.outputHighlightInfoBase = function(callback) {
  this.highlight_html.push('<div class="highlights">');
  callback();
  this.highlight_html.push('</div>');
};

highlightFormatter.prototype.outputHighlightInfo = function(option) {
  var that = this;
  this.outputHighlightInfoBase(function() {
    var i = 0,
        len = that.highlight.getHighlightLength();
    for(; i < len; i++) {
      that.highlight_html.push('<hr />');
      that.highlight_html.push('<p>' + that.highlight.getHighlightTags()[i].innerText + '</p>');
      if (option.with_location === true) {
        var locationTag = that.highlight.getLocationTags()[i];
        that.highlight_html.push('<p><a href="' + locationTag.href + '">' + locationTag.innerText + '</a></p>');
      }
      if (option.with_memo === true) {
        var memo = that.highlight.getMemoTags()[i].innerText
        if (memo != '') {
          that.highlight_html.push('<p>Note: ' + memo + '</p>');
        }
      }
    }
  });
};

module.exports = highlightFormatter;
