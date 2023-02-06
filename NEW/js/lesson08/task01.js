`use strict`

let a = 15;

const foo = x => {
    const b = []
    for (let i=0; i<x;i++) {
        b.push(x[i])
    }
    let c = b.map(item => {
        return item = Math.floor(Math.random() * 101)})
    return c
};

console.log(foo(a));
