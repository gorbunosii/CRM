'use strict';

const allStudents = [`Сидоров`,`Попов`,`Кузнецов`,`Иванов`,`Петров`,`Соколов`,`Смирнов`];
const failedStudents = [`Сидоров`,`Смирнов`,`Попов`];

const filter = (x, y) => {
    let newArr = [x]
    for(let i = 0; i < x.length ; i++) {
        for (let j = 0; j < y.length ; j++) {
            if (x[i] === y[j]) {
                x.splice([i], 1)
            }
        }
    }
    return newArr
}

console.log(filter(allStudents, failedStudents))