//Деструктурирующее присваивание

"use strict";

const user = {
    name: "John",
    years: 30,
};

const { name, years: age, isAdmin = false } = user;

alert(name);
alert(age);
alert(isAdmin);
