//Сумма свойств объекта

"use strict";

const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

const sumSalaries = (salaries) => {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
};

alert(sumSalaries(salaries));
