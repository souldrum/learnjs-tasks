//Усечение строки

"use strict";

const truncate = (str, maxlength) =>
    str.length > maxlength ? `${str.slice(0, maxlength - 1)}…` : str;

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
