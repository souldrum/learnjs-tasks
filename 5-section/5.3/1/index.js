//Сделать первый символ заглавным

"use strict";

const ucFirst = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
};

alert(ucFirst("вася"));
