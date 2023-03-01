//Оставить уникальные элементы массива

"use strict";

const strings = [
    "кришна",
    "кришна",
    "харе",
    "харе",
    "харе",
    "харе",
    "кришна",
    "кришна",
    ":-O",
];

const unique = (arr) => {
    const uniqueArr = [];

    for (let str of arr) {
        if (!uniqueArr.includes(str)) {
            uniqueArr.push(str);
        }
    }

    return uniqueArr;
};

alert(unique(strings));
