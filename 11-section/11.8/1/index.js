// Переписать, используя async/await

"use strict";

const loadJson = async (url) => {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
};

loadJson("no-such-user.json").catch(alert);
