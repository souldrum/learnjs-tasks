//Вывод каждую секунду

"use strict";

// setInterval
// const printNumbers = (from, to) => {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// };

// printNumbers(5, 10); //почти без задержек

// setTimeout;
const printNumbers = (from, to) => {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
};

printNumbers(5, 10); // с задержкой в секунду
