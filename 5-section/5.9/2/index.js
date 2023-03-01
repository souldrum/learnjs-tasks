//Подсчёт количества свойств объекта

"use strict";

const user = {
    name: "John",
    age: 30,
};

const count = (obj) => Object.keys(obj).length;

alert(count(user));
