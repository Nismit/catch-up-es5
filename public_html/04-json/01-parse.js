'use strict';

var data = '{ "id": 12345, "name": "nismit" }';
var obj = JSON.parse(data);
// -> obj === Object
// -> { id: 12345, name: 'nismit' }
