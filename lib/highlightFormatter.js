var highlightFormatter = function() {
  var util = require('./util'),
      Highlight,
      ua = navigator.userAgent;

  if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    Highlight = require('./highlight_sp');
  } else {
    Highlight = require('./highlight');
  }

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
  document.body.removeAttribute('class');
  document.body.style.fontFamily = 'arial,sans-serif';
  document.body.style.fontSize = '.75em';
  document.body.style.color = '#333';
  document.body.style.lineHeight = '1.5em';

  document.body.innerHTML = this.highlight_html.join('');
};

highlightFormatter.prototype.outputBookInfo = function() {
  this.highlight_html.push('<div class="book_info">');
  this.highlight_html.push('<span class="title">' + this.highlight.getTitle() + '</span><br />');
  this.highlight_html.push('<span class="author">by ' + this.highlight.getAuthor() + '</span>');
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
        var locationNo = locationTag.innerText.match(/\d+(,?)(\d+)?/)[0].replace(/,/, '');
        that.highlight_html.push('<p><a href="kindle://book?action=open&asin=' + that.highlight.getAsin() + '&location=' + locationNo + '">Read more at location ' + locationNo + '</a></p>');
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
