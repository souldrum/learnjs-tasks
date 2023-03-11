//Функция в if

"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); //Ошибка: Uncaught ReferenceError: sayHi is not defined
// sayHi находится внутри блока if, снаружи к ней нет доступа
