'use strict';

const totalAmount = Number(prompt(`Введите сумму`, `40000`));
const totalProduct = Number(prompt(`Введите кол-во товаров`, `12`));
const discount = String(prompt(`Введите промокод`, `METHED`));

const calculate = (a = 0, b = 0, c = 0) => {

    let sum = a;

    if (b > 10) {
        b = a * 0.03;
    }
    if (b < 10) {
        b = 0;
    }

    let sumOne = sum - b;

    if (sumOne > 30000) {
        a = (sumOne - 30000) * 0.15;
    }
    if (sumOne < 30000) {
        a = 0;
    }

    let sumTwo = sumOne - a;

    if (c === `METHED`) {
        c = sumTwo * 0.1
    }

    if (c === `G3H2Z1` && sumTwo > 2000) {
        c = 500
    }
    if (c !== Number(c)) {
        alert('Неверно введен промокод')
        c = 0;
    }

    return  sumTwo - c;

}

console.log(calculate( totalAmount, totalProduct, discount))