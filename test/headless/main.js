!function(r){function o(t,e){if("function"==typeof e){var n=o(t);return e.apply(void 0,"string"==typeof t[0]?[n]:n),void 0}if("string"==typeof t){var $=r[t];if($.hasOwnProperty("__module"))return $.__module.exports;var i,u={};return $.__module=i={exports:u},$.call(void 0,o,i,u),i.exports}for(var n=[],f=0;f<t.length;f++)n.push(o(t[f]));return n}o("0")}({
"0":function(require,module,exports) {
window.__global = require("1")({
    name: "Mario"
});
},"1":function(require,module,exports) {
module.exports = function(data) {
    data = data || {};
    var p = [];
    p.push("My name is ", data.name, "!");
    return p.join("");
};
}});