'use strict';

const array = [
  {name: `Kate`,
    age: 35,
    gender: `woman`},

  {name: `John`,
    age: 25,
    gender: `man`},

  {name: `Steve`,
    age: 21,
    gender: `man`},

  {name: `Oleg`,
    age: 55,
    gender: `man`},
];

const table = document.querySelector(`table`);

const createRow = (x) => {
  const tr = document.createElement(`tr`);

  const td1 = document.createElement(`td`);

  td1.textContent = x.name;
  tr.appendChild(td1);

  const td2 = document.createElement(`td`);

  td2.textContent = x.age;
  tr.appendChild(td2);

  const td3 = document.createElement(`td`);

  td3.textContent = x.gender;
  tr.appendChild(td3);

  table.appendChild(tr);
};

const renderGoods = (x) => x.map((elem) => createRow(elem));

renderGoods(array);
