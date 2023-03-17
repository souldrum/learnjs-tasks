// Куда будет произведена запись?

"use strict";

let animal = {
    eat() {
        this.full = true;
    },
};

let rabbit = {
    __proto__: animal,
};

rabbit.eat(); //запись будет произведена в rabbit
