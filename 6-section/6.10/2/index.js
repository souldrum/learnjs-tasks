//Повторный bind

"use strict";

function f() {
    alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
//Выведет: Вася
