//Вызов в контексте массива

"use strict";

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); //this укажет на объект (массив), в котором находится
