//Ошибка создания экземпляра класса

"use strict";

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); //добавляем super конструктор
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name); // теперь ошибки нет!
