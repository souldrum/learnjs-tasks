//Вычислить факториал

"use strict";

const factorial = (n) => (n ? n * factorial(n - 1) : 1);

alert(factorial(5));
