// Работа с прототипами

"use strict";

let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

alert(rabbit.jumps); // true

delete rabbit.jumps;

alert(rabbit.jumps); // null (берется у прототипа animal)

delete animal.jumps;

alert(rabbit.jumps); // undefined (свойства больше нет)
