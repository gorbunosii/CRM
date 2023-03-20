'use strict';

const a = 5;
const m = 20;
const n = 10;

const foo = (x, y, z) => {
  const b = [];
  for (let i = 0; i < x; i++) {
    b.push(x[i]);
  }
  const c = b.map(item => item = Math.floor(Math.random() * (z - y) + y));
  return c;
};

console.log(foo(a, m, n));
