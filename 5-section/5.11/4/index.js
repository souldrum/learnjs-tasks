//Какой день месяца был много дней назад?

"use strict";

const date = new Date(2019, 0, 2);

const getDateAgo = (date, days) => {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
};

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));
