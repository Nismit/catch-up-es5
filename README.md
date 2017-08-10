# Catch-up ECMAScript5(ES5)
My knowledge of JavaScript has not updated from ECMAScript3, so I tried to code which picked up ES5 features with tiny sample code.

## Table of Contents

- [Usage](#usage)
- [Basic](#basic)
- [Object](https://github.com/Nismit/catch-up-es5/tree/master/public_html/01-object)
- [Array](https://github.com/Nismit/catch-up-es5/tree/master/public_html/02-array)
- [Date](https://github.com/Nismit/catch-up-es5/tree/master/public_html/03-date)
- [JSON](https://github.com/Nismit/catch-up-es5/tree/master/public_html/04-json)

## Test Environment

- Macbook Pro "15 (Mid-2014)
- Docker version 17.06.0-ce, build 02c1d87
- Node (v8.2.1)

## <a name="usage"> Usage
If you installed Docker, you can check ES5 easy.

```
git clone
cd catch-up-es5
docker-compose build
docker-compose run -rm node bash
cd 01-object
node 01-getter-setter.js
```

## <a name="basic"> Basic features of ES5

### strict mode
if you put `use strict` before any statement, it invokes strict mode for whole script.
```javascript
'use strict';

var str = 'it is strict mode now';
```

Also, you can set strict mode for each functions.
```javascript
var func = function() {
  'use strict';
  var str = 'Hello world';
  ...
}
```

### trailing commas
JavaScript ignores trailing commas in arrays and objects

```javascript
var array = [1, 2, 3, 4,];
array.length; // -> 4

// sparse
var arr = [1, 2, 3, 4,,,];
arr.length; // -> 6

var obj = {
  id: 123,
  name: 'nismit',
};
```
