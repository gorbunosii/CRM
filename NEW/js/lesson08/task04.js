'use strict';

const m = 1000;
const n = 2001;

const foo = (x, y) => {
  const b = [];
  for (let i = 0; i < (y - x); i++) {
    b.push(x[i]);
  }
  const c = b.map((item, index) => item = ((x - y) + y) + index);

  const l = c.filter(item => {
    if (item % 4 === 0 && (item % 100 !== 0 || item % 400 === 0)) {
      return item % 4 === 0;
    }
  });

  return l;
};
console.log(foo(m, n));
