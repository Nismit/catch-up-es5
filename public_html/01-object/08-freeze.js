'use strict';

var obj = {
  id: 12345,
  _name: 'nismit',
  get getName() { return this._name; },
  set setName(val) { this._name = val; }
};

Object.freeze(obj);

console.log(obj.getName);

// obj.anotherName = 'mitch'; // -> TypeError: Cannot add property anotherName, object is not extensible
// obj.setName = 'linkin park'; // -> TypeError: Cannot assign to read only property '_name' of object '#<Object>'

if(Object.isFrozen(obj)) {
  console.log('obj is frozen.');
}
