'use strict';

var arr = [1, 2, 3, 4, 5, 6];
var vaild = arr.every(function(val, idx, array) {
  return val % 2; // -> arr[1] != 1 and then return false
});
// -> false

var everyArr = [5, 10, 6, 12];
var matched = everyArr.every(function(val, idx, array) {
  return val >= 5;
});
// -> true
