//Переписать if в тернарный оператор

"use strict";
let a = 1;
let b = 2;

let result = a + b < 4 ? "Мало" : "Много"; //мало
alert(result);

a = 5;
b = 10;
result = a + b < 4 ? "Мало" : "Много"; //много

alert(result);
