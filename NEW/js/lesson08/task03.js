`use strict`

let a = 5;
let m = 20
let n = 10
let eo = `odd`;

const foo = (x, y, z, q) => {
    const b = []
    for (let i=0; i<x;i++) {
        b.push(x[i])
    }
    let c = b.map(item => {
        return item = Math.floor(Math.random() * (z - y ) + y)})

    c = c.filter(item => {
        if (q === 'even') {
            return  item % 2 === 0
        } else if (q === 'odd') {
            return !(item % 2 === 0)
        } else if (q !== 'odd' || 'even') {
            return c
        }
    })
     return c
};

console.log(foo(a, m, n, eo))