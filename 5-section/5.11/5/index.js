//Последнее число месяца?

"use strict";

const getLastDayOfMonth = (year, month) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
};

alert(getLastDayOfMonth(2022, 0));
alert(getLastDayOfMonth(2021, 1));
alert(getLastDayOfMonth(2022, 1));
