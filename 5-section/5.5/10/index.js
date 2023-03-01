//Перемешайте массив

"use strict";

const arr = [1, 2, 3];

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

shuffle(arr);
alert(arr);
