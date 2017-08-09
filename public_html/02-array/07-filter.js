'use strict';

var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter(function(val, idx, array) {
  return val > 3;
});
// -> [4, 5, 6];
