'use strict';

var arr = [1, 2, 3, 4, 5, 6];
var mapArr = arr.map(function(val, idx, array) {
  return val * 2;
});
// -> [2, 4, 6, 8, 10, 12];
