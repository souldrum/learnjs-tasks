//Исправляем сложение

"use strict";

//исправить код ниже, чтобы выдавал нужное число (3)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12

//решение

//prompt возвращает строку. Преобразовываем к числовому значению унарным плюсом
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b);
