'use strict';

const a = 5;
const m = 20;
const n = 10;
const eo = `odd`;

const foo = (x, y, z, q) => {
  const b = [];
  for (let i = 0; i < x; i++) {
    b.push(x[i]);
  }
  let c = b.map(item => item = Math.floor(Math.random() * (z - y) + y));

  c = c.filter(item => {
    if (q === 'even') {
      return item % 2 === 0;
    } else if (q === 'odd') {
      return !(item % 2 === 0);
    // eslint-disable-next-line no-constant-condition
    } else if (q !== 'odd' || 'even') {
      return c;
    }
  });
  return c;
};

console.log(foo(a, m, n, eo));
