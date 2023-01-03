'use strict';

const productName = prompt(`Наименование товара`, `Навигационная система Soundmax`);
const productAmount = Number(prompt(`Количество товара`, `1`));
const productGroup = prompt(`Категория товара`, `Техника для дома`);
const productPrice = Number(prompt(`Цена товара`, `500`));


console.log(typeof productName);
console.log(productName);

if (productAmount === Number(productAmount)) {
    console.log(typeof productAmount);
    console.log(productAmount);
} else {
    alert('Вы некорректные ввели `Количество товара`')
}

console.log(typeof productGroup);
console.log(productGroup);

if (productPrice === Number(productPrice)) {
    console.log(typeof productPrice);
    console.log(`$` +  productPrice);
} else {
    alert('Вы некорректные ввели `Цена товара`')
}


const str = String( `На складе ` + productAmount + ` единицы товара ` + productName + ` на сумму ` + `$` +productPrice + ` вечно зеленных`);

console.log(str)
