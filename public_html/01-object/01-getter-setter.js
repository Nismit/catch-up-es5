'use strict';

var person = {
  firstName: '',
  lastName: '',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(name) {
    var temp = name.split(' ');
    this.firstName = temp[0];
    this.lastName = temp[1];
  }
};

person.firstName = 'Donald';
person.lastName = 'Trump';
person.fullName; // -> 'Donald Trump'

person.fullName = 'Barack Obama';
person.fullName; // -> 'Barack Obama'
