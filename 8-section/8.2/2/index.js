//Создать новый объект с помощью уже существующего

"use strict";

function User(name) {
    this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name);
