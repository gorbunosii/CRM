'use strict';


let tax = 0;
const money = Number(prompt(`Какую сумму Вы хотели бы снять`, `0`));

if (50001 <= money) {
  tax = money * 0.3;
}

if (50000 >= money && money >= 15001) {
  tax = money * 0.2;
}

if (money <= 15000) {
  tax = money * 0.13;
}

if (money !== Number(money)) {
  alert(`Введите сумму цифрами!`);
}

console.log(tax);
