//Числа Фибоначчи

"use strict";

const fib = (n) => {
    let a = 1; //Первое число Фибоначчи всегда === 1
    let b = 1; //Второе число Фибоначчи всегда === 1
    for (let i = 3; i <= n; i++) {
        // Поэтому i начинается с 3-х
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

alert(fib(3));
alert(fib(7));
alert(fib(77));
