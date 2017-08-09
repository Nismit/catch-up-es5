'use strict';

var arr = [4, 6, 1, 5, 8, 7];
var mapArr = arr.reduceRight(function(prevVal, currVal, currIdx, array) {
  console.log('Previous Value:' + prevVal);
  console.log('Current Value:' + currVal);
  console.log('Current Index:' + currIdx);
  console.log('------');
  return currVal;
});
// execute Right to left in the array
