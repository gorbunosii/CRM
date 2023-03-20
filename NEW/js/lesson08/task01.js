'use strict';

const a = 15;

const foo = x => {
  const b = [];
  for (let i = 0; i < x; i++) {
    b.push(x[i]);
  }
  const c = b.map(item => item = Math.floor(Math.random() * 101));
  return c;
};

console.log(foo(a));
