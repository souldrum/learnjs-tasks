//Использование "this" в литерале объекта

"use strict";

function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

alert(user.ref.name); //ошибка: Uncaught TypeError: Cannot read properties of undefined (reading 'name')
