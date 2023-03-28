'use strict';

(() => {
  const FINGURES_RUS = [`камень`, `ножницы`, `бумага`];

  const getRandomIntInclusive = (min = 1, max = 3) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const player = prompt(`камень, ножницы, бумага`);
      const isString = (x) => {
        if (!(x === FINGURES_RUS[0] ||
           x === FINGURES_RUS[1] || x === FINGURES_RUS[2])) {
          alert(`Введите камень, ножницы или бумагу`);
          return start();
        }
      };
      isString(player);
      const computerChoice = (x) => {
        x = getRandomIntInclusive();
        if (x === 1) {
          return FINGURES_RUS[0];
        }
        if (x === 2) {
          return FINGURES_RUS[1];
        }
        if (x === 3) {
          return FINGURES_RUS[2];
        }
      };
      const computer = computerChoice();

      if (player === 'камень' && computer === 'ножницы') {
        result.player++;
        alert(`Компьютер: ножницы
          Вы: камень
          Вы выйграли!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'ножницы' && computer === 'камень') {
        result.computer++;
        alert(`Компьютер: камень
          Вы: ножницы
          Компьютер выйграл!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'камень' && computer === 'камень') {
        alert(`Компьютер: камень
Вы: камень
Ничья!`);
      }
      if (player === 'камень' && computer === 'бумага') {
        result.computer++;
        alert(`Компьютер: бумага
          Вы: камень
          Компьютер выйграл!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'бумага' && computer === 'камень') {
        result.player++;
        alert(`Компьютер: камень
          Вы: бумага
          Вы выйграли!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'бумага' && computer === 'бумага') {
        alert(`Компьютер: бумага
Вы: бумага
Ничья!`);
      }
      if (player === 'бумага' && computer === 'ножницы') {
        result.computer++;
        alert(`Компьютер: ножницы
          Вы: бумага
          Компьютер выйграл!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'ножницы' && computer === 'бумага') {
        result.player++;
        alert(`Компьютер: бумага
          Вы: ножницы
          Вы выйграли!`);
        console.log(`Игрок :`, result.player);
        console.log(`Компьютер :`, result.computer);
      } else if (player === 'ножницы' && computer === 'ножницы') {
        alert(`Компьютер: ножницы
Вы: ножницы
Ничья!`);
      }
      const question = confirm(`Хотите поиграть ещё?`);
      if (question === true) {
        return start();
      }
      if (question === false) {
        const question2 = confirm(`Вы точно хотите покинуть игру?`);

        if (question2 === false) {
          return start();
        }
        if (question2 === true) {
          return alert(`Результат:
          Игрок: ${result.player}
          Компьютер: ${result.computer}`);
        }
      }
    };
  };
  window.startGame = game;
})();
