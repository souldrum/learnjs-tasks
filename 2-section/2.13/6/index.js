//Повторять цикл, пока ввод неверен

"use strict";

let num;

do {
    num = prompt("Введите число, которое больше 100?", 0);
} while (num <= 100 && num);
