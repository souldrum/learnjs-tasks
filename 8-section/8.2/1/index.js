//Изменяем "prototype"

"use strict";

function Rabbit() {}
Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

//==================================

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit(); //добавили строку

// Rabbit.prototype = {};

// alert( rabbit.eats ); // true

//===================================

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false; //добавили строку

// alert( rabbit.eats ); //false

//===================================

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats; //добавили строку

// alert( rabbit.eats ); //true

//===================================

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats; //добавили строку

// alert( rabbit.eats ); //undefined
