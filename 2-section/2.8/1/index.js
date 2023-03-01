//Постфиксная и префиксная формы
//Чему будут равны переменные?

"use strict";

let a = 1; //
let b = 1; //
let c = ++a; //
let d = b++; //

console.log(a, b, c, d); //a = 2, b = 2, c = 2, d = 1
// ++a инкремент идет префиксом, поэтому возвращает сразу измененное значение
//b++ инкремент идет постфиксом поэтому сначала вернет значение до применения инкремента