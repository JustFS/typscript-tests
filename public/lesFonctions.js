"use strict";
// void = return rien de spécial
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
// return de number
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
