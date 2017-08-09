'use strict';

var objA = {
  value: 'test',
  func: function() { return 'Hello, World ' + this.value; }
}

var objB = Object.create(objA);

// console.log(objA.func());
console.log(objB.func());

objA.value = 'objB value refered to objA value';

console.log(objA.func());
console.log(objB.func());

objB.value = 'this value is not influend objA';

console.log(objA.func());
console.log(objB.func());

var objC = Object.create(objA, {
  newValue: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'new value'
  },
  bar: {
    configurable: false,
    enumerable: true,
    get: function() { return 10; },
    set: function(value) { console.log('Setting `objC.bar` to', value); }
  }
});

console.log(objC);
console.log(objC.func());
