//Проверка на пустоту

"use strict";

const user = {};

function checkEmptyProp(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

checkEmptyProp(user);
console.log(checkEmptyProp(user));
