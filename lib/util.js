var util = {
  defineInnerTextForFirefox: function() {
    var temp = document.createElement("div");
    if (temp.innerText == undefined) {
      Object.defineProperty(HTMLElement.prototype, "innerText", {
        get: function()  { return this.textContent },
        set: function(v) { this.textContent = v; }
      });
    }
  }
};
module.exports = util;
