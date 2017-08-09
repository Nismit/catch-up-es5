'use strict';

var obj = {
  id: 12345
};

obj.name = 'nismit';

Object.seal(obj);

// obj.anotherName = 'mitch'; //-> TypeError: Cannot add property anotherName, object is not extensible
// delete obj.name; // -> TypeError: Cannot delete property 'name' of #<Object>

obj.name = 'mitch'; // -> it works

if(Object.isSealed(obj)) {
  console.log('obj is sealed.');
}
