'use strict';

let money = Number(prompt(`Укажите стоимость покупки в евро`, `1000`));

const calc = money => {
    return money * 1.2 * 73;
}

console.log(calc(money))