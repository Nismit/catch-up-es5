'use strict';

var obj = {};
var newObj = Object.create(obj);

if(Object.getPrototypeOf(newObj) === obj) {
  console.log(true);
}

// -> true
