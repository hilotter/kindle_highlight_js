(function(d) {
  "use strict";

  var HighlightFormatter = require('./highlightFormatter'),
      highlightFormatter = new HighlightFormatter();

  highlightFormatter.output({
    "with_location": true,
    "with_memo": true,
  });

  window.open(location.href, '_blank');
})(document);
