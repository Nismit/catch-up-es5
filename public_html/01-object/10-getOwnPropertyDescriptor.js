'use strict';

var obj = {
  id: 12345,
  name: 'nismit'
};

var description = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(description);
// {
//   value: 'nismit',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

var bar = Object.create(obj, {
  from: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 'Japan'
  }
});

var anotherDescription = Object.getOwnPropertyDescriptor(bar, 'from');
console.log(anotherDescription);
// {
//   value: 'Japan',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
