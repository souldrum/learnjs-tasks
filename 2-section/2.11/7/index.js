// Вопрос об if

"use strict";

if (-1 || 0) alert("first"); //выполнится! В скобках получим -1
if (-1 && 0) alert("second"); //не выполнится, в скобках получим 0
if (null || (-1 && 1)) alert("third"); // выполнится, в скобках получим 1