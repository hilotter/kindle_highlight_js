(function(d) {
  "use strict";

  var title = d.querySelector('.title').innerText,
      author = d.querySelector('.author').innerText,
      highlight_tags = d.querySelectorAll('.highlight'),
      len = parseInt(document.querySelector('.boldText').innerText),
      i = 0,
      highlight_html = [];

  highlight_html.push('<div class="book_info">');
  highlight_html.push('<span class="title">' + title + '</span><br />');
  highlight_html.push('<span class="author">' + author + '</span>');
  highlight_html.push('</div>');
  highlight_html.push('<div class="highlights">');
  for(; i < len; i++) {
    highlight_html.push('<hr />');
    highlight_html.push('<p>' + highlight_tags[i].innerText + '</p>');
  }
  highlight_html.push('</div>');
  document.title = title;
  document.body.innerHTML = highlight_html.join('');
})(document);
