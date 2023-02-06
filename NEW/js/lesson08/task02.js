`use strict`

let a = 5;
let m = 20
let n = 10

const foo = (x, y, z) => {
    const b = []
    for (let i=0; i<x;i++) {
        b.push(x[i])
    }
    let c = b.map(item => {
        return item = Math.floor(Math.random() * (z - y ) + y)})
    return c
};

console.log(foo(a, m, n));