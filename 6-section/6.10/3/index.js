//Свойство функции после bind

"use strict";

function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася",
});

alert(bound.test); //undefined
