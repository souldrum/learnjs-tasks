//Переведите текст вида border-left-width в borderLeftWidth

"use strict";

const camelize = (str) => {
    const arrFromString = str.split("-");
    const formatArrayItem = arrFromString.map((word, i) =>
        i === 0 ? word : word[0].toUpperCase() + word.slice(1)
    );
    const resultWord = formatArrayItem.join("");
    return resultWord;
};

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
