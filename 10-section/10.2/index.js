// Наследование от SyntaxError

"use strict";

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // FormatError: ошибка форматирования at.....

alert(err instanceof FormatError); //true
alert(err instanceof SyntaxError); //true
