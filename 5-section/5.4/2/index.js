//Операции с массивами

"use strict";

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

const meddleIndex = Math.floor((styles.length - 1) / 2);

styles[meddleIndex] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");

alert(styles);
