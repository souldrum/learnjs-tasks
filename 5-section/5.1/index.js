//Можно ли добавить свойство строке?

"use strict";

let str = "Привет";

str.test = 5;

alert(str.test); //Ошибка: Uncaught TypeError: Cannot create property 'test' on string 'Привет'
