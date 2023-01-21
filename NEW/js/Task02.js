'use strict';

let string = String(prompt(`Укажите слово`, `ПРИВЕТ МИР`));

const change = meaning => {
    return meaning[0].toUpperCase() + meaning.toLowerCase().slice(1);
}

console.log(change(string))