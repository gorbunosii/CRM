'use strict';

const isPrime = x => {
    if (x === 1) return false;

    for (let i = x-1; i > 1; i--) {
        if (x%i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 0; i < 1000; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}