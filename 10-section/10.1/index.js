//Finally или просто код?

"use strict";

const f = () => {
    try {
        alert("начало");
    } catch (e) {
        alert(e);
    } finally {
        alert("Очистили рабочее пространство");
    }
};

f();
