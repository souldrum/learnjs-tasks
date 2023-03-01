// Официальное название JS через проверки if/else
"use strict";

let userResponse = prompt(
    `Какое "официальное" название JavaScript?`,
    ""
).toLowerCase();

if (userResponse === "ecmascript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}
