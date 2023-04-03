//Класс расширяет объект?

"use strict";

class Rabbit extends Object {
    constructor(name) {
        super(); // вызываем super конструктор
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty("name"));
