'use strict';

var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
arr.lastIndexOf(1); // -> 6
arr.lastIndexOf(1, 3); // -> 0 from arr[3] to arr[8] find 1
arr.lastIndexOf(1, -4); // -> 0 from arr[5] to arr[0] find 1
