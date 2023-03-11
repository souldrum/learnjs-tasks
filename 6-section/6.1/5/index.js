//Вывод односвязного списка в обратном порядке

"use strict";

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

const getReversPrintList = (list) => {
    if (list.next) {
        getReversPrintList(list.next);
    }

    alert(list.value);
};

getReversPrintList(list);
