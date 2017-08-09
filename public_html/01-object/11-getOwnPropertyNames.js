'use strict';

var obj = Object.create({}, {
  id: {
    configurable: true,
    enumerable: false,
    writable: true,
    value: 12345
  },
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'nismit'
  },
  action: {
    enumerable: true,
    value: function() { console.log('execute action'); }
  }
});

Object.getOwnPropertyNames(obj); // -> [ 'id', 'name', 'action' ]
Object.keys(obj); // -> [ 'name', 'action' ]
