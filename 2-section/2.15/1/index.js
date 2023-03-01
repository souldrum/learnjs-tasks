//Перепишите функцию, используя оператор '?' или '||'

"us1e strict";

function checkAge(age) {
    return age > 18 || confirm("Родители разрешили?");
}

checkAge(14);
