'use strict';

const foo = x => {
   return  x.split(``).reverse().join(``);
}

console.log(foo(`Привет мир`))