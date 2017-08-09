'use strict';

var obj = {
  'key1': 'value1',
  'key2': 'value2',
  'key3': 'value3'
};

var keys = Object.keys(obj);
// -> ['key1', 'key2', 'key3']


var foo = Object.create({}, {
  _name: {
    writable: true,
    value: ''
  },
  name: {
    get: function() { return this._name; },
    set: function(val) { this._name = val; }
  },
  func: {
    enumerable: true,
    value: function() { console.log('Hello, World!'); }
  }
});

var keys2 = Object.keys(foo);
console.log(keys2);
// -> ['func']

var bar = Object.create(foo, {
  someKey: {
    enumerable: true,
    value: 'test'
  },
  hiddenKey: {
    enumerable: false,
    value: 'hidden key'
  }
});

var keys3 = Object.keys(bar);
console.log(keys3);
// -> [ 'someKey' ]
