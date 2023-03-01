//Скопировать и отсортировать массив

"use strict";

const arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => arr.slice().sort();

const sorted = copySorted(arr);

alert(sorted);
alert(arr);
