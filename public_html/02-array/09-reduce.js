'use strict';

var arr = [4, 6, 1, 5, 8, 7];
var mapArr = arr.reduce(function(prevVal, currVal, currIdx, array) {
  console.log('Previous Value:' + prevVal);
  console.log('Current Value:' + currVal);
  console.log('Current Index:' + currIdx);
  console.log('------');
  return currVal;
});
// execute left to right in the array
