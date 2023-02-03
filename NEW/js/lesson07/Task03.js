'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = x => {

    let a = [];
    let mr = `Mr`;

    for (let i = 0; i < x.length; i++) {
        a.push(mr + ` `+ x[i])
    }
    return a;
}

console.log(addPrefix(names))