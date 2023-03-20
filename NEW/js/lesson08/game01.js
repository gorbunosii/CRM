'use strict';

const randomNum = Math.floor(Math.random() * 100);

const isNum = (num) => !isNaN(parseFloat(num)) && isFinite(num);

const guessNumber = () => {
  let userNum = prompt('Введите число');
  if (isNum(userNum)) {
    userNum = +userNum;

    if (userNum > randomNum) {
      alert('Меньше!');
    } else if (userNum < randomNum) {
      alert('Больше!');
    } else if (userNum === randomNum) {
      alert('Правильно!');
      return userNum;
    }
  } else {
    alert('Введи число!');
  }
  return guessNumber();
};

console.log(guessNumber());
