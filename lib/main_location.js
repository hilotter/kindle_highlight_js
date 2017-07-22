(function(d) {
  "use strict";

  var HighlightFormatter = require('./highlightFormatter'),
      highlightFormatter = new HighlightFormatter();

  highlightFormatter.output({
    "with_location": true,
    "with_memo": true,
  });
})(document);
