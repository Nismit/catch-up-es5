'use strict';

var arr = [1, 2, 3, 4, 5, 6];
var vaild = arr.some(function(val, idx, array) {
  return val % 2; // -> matched arr[0] and then return;
});
// -> true
