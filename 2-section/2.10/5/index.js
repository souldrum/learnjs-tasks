// if/else с несколькими операторами "?"
"use strict";

let login = "Сотрудник";

let message =
    login == "Сотрудник"
        ? "Привет"
        : login == "Директор"
        ? "Здравствуйте"
        : login == ""
        ? "Нет логина"
        : "";

alert(message);
