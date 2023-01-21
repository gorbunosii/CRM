'use strict';

/*Вторая задача*/

const rain = Math.round(Math.random());

if (rain === 1) {
    alert(`Пошёл дождь. Возьмите зонт!`)
} else if (rain === 0) {
    alert(`Дождя нет!`)
}

/*Третья задача*/

const markMath = Number(prompt(`Введите кол-во баллов по математике:`, `85`));
const markRuss = Number(prompt(`Введите кол-во баллов по русскому языку:`, `75`));
const markInfo = Number(prompt(`Введите кол-во баллов по информатике:`, `95`));

if (markMath + markRuss + markInfo >= 265) {
    alert(`Поздравляю, вы поступили на бюджет!`)
}  if (markMath + markRuss + markInfo <= 265) {
    alert(`К сожалению, вы не поступили на бюджет`)
}

/*Четвёртая задача*/

const ATM = Number(prompt(`Какую сумму Вы хотели бы снять`, `0`));

if (ATM >= 100) {
    alert(`Банкомат, сможет выдать вам ${ATM} рублей`)
}  if (ATM <= 100) {
    alert(`Банкомат, не сможет выдать вам ${ATM} рублей, так как минимальная купюра в банкомате 100 рублей`)
}  if (ATM !== Number(ATM)) {
    alert('Вы некорректные ввели данные')
}

console.log(`Банкомат выдает ${ATM}`)
