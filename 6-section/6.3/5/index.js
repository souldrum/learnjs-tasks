//Фильтрация с помощью функции

"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => (num) => num >= a && num <= b;

const inArray = (array) => (item) => array.includes(item);

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2
