'use strict';


let tax2 = 0;
let money2 = Number(prompt(`Укажите Вашу заработную плату`, `50000`));


if (50001 <= money2) {
    tax2 = (money2 - 50000) * 0.3;
} else if (50000 >= money2 && money2 >= 15001) {
    tax2 = (money2 - 15000) * 0.2;
} else if (money2 <= 15000) {
    tax2 = money2 * 0.13;
} else if (money2 !== Number(money2)) {
    alert(`Введите сумму цифрами!` )
}

console.log(tax2)