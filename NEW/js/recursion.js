'use strict';

const arr = [10, 5, 11];

const foo = x => {
  x.push(Math.floor(Math.random() * 11));
  const sum = x.reduce((a, b) => a + b);

  if (sum > 50) {
    return x;
  } else {
    return foo(x);
  }
};

console.log(foo(arr));

// Задания на this

const rectangle = {
  set width(x) {
    if (Number.isInteger(x)) {
      this.a = x;
    }
  },
  set height(y) {
    if (Number.isInteger(y)) {
      this.b = y;
    }
  },
  get square() {
    const str1 = String(this.a * this.b + `см`);
    return str1;
  },
  get perimeter() {
    const str2 = String(2 * (this.a + this.b) + `см`);
    return str2;
  },
  a: 5,
  b: 5,
};
rectangle.width = 11;
rectangle.height = 22;
console.log(rectangle.square);
console.log(rectangle.perimeter);
