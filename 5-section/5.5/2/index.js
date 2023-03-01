//Фильтрация по диапазону

"use strict";

const arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    return arr.filter((item) => a <= item && item <= b);
};

let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);
