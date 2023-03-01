//Создайте объект с ключами из массива

"use strict";

const users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (array) => {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
};

const usersById = groupById(users);
console.log(usersById);
