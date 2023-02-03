'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = x => {
    let cash = 0;
    let average = 0

    for (let i = 0; i < x.length ; i++) {
        average = Math.floor((cash += x[i]) / x.length);
    }
    return average;
}

console.log(getAverageValue(allCashbox))