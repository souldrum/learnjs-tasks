//Сортировать по полю

"use strict";

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];

const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1; //квадратные скобки потому, что свойство приходит динамически

users.sort(byField("name"));
users.forEach((user) => alert(user.name)); // Ann, John, Pete

users.sort(byField("age"));
users.forEach((user) => alert(user.name)); // Pete, Ann, John
