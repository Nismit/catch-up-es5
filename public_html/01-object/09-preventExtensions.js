'use strict';

var obj = {
  id: 12345,
  _name: 'nismit'
};

Object.preventExtensions(obj);

// obj.someFunc = function() {
//   console.log('Add some function');
// };
// -> TypeError: Cannot add property someFunc, object is not extensible

obj._name = 'linkin park';
// -> linkin park the property can change or delete.

if(Object.isExtensible(obj)) { // -> false
  console.log('obj is extensible.');
} else {
  console.log('obj is not extensible.');
}
