'use strict';


let tax = 0;
let money = Number(prompt(`Укажите Вашу заработную плату`, `50000`));


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
  alert(`Введите сумму цифрами!` )
}

console.log(tax)