//Перепишите с использованием функции-стрелки

"use strict";

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);