//Вычислить сумму чисел до данного

"use strict";

//1
const sumTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

alert(sumTo(100));

//2
const sumTo2 = (n) => (n === 1 ? 1 : n + sumTo(n - 1));

alert(sumTo2(100));

//3
const sumTo3 = (n) => (n * (n + 1)) / 2;

alert(sumTo3(100));

//Самый быстрый вариант — 3, самый медленный — рекурсивный (2)
//при вызове sumTo2(100000) будет ошибка, так как превышен максимальный размер стека
