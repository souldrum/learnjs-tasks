//Проверка на спам

"use strict";

const checkSpam = (str) => {
    let formatStr = str.toLowerCase();

    return formatStr.includes("viagra") || formatStr.includes("xxx");
};

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
