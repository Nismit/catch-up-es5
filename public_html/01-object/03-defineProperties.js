'use strict';

var obj = {};

Object.defineProperties(
  obj,
  {
    'value': {
      configurable: true,
      enumerable: true,
      value: 123,
      writable: true
    },
    'calc': {
      configurable: true,
      enumerable: true,
      get: function() { return this.value * 2; },
      set: function(val) { return this.value = val / 2; }
    },
    'likeConst': {
      configurable: false,
      enumerable: true,
      value: 'Can not re-assign the value',
      writable: false,
    }
  }
);

console.log('value:' + obj.value);
console.log('calc(getter):' + obj.calc);

obj.calc = 120;
console.log('calc(getter):' + obj.calc);

obj.likeConst = 'change value';
console.log('likeConst:' + obj.likeConst);
console.log(obj);
console.log('Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties');
