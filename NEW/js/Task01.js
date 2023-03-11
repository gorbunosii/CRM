'use strict';

const money = Number(prompt(`Укажите стоимость покупки в евро`, `1000`));

const calc = money => money * 1.2 * 73;

console.log(calc(money));
