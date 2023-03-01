// Получить средний возраст

"use strict";

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const arr = [vasya, petya, masha];

const getAverageAge = (users) =>
    users.reduce((prev, user) => prev + user.age, 0) / users.length;

alert(getAverageAge(arr));
