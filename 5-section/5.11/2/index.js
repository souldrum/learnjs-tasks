//Покажите день недели

"use strict";

const date = new Date(2014, 0, 3);

const getWeekDay = (date) => {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return days[date.getDay()];
};

alert(getWeekDay(date));
