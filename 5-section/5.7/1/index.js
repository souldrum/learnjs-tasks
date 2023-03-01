//Фильтрация уникальных элементов массива

"use strict";

const values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

const unique = (arr) => Array.from(new Set(arr));

alert(unique(values));
